<template>
  <div>
    <BackButton @click="router.back()" />
    <ActivitiesHeader :hasBookings="hasBookings" />
    <main class="activities">
      <TransitionGroup name="activity-list" tag="div" class="activity-list">
        <ActivityCard
          v-for="activity in visibleActivities"
          :key="activity.id"
          :activity="activity"
          @swipe="handleSwipe(activity.id, $event)"
        />
      </TransitionGroup>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"; 
import { useWebAppBackButton, BackButton } from "vue-tg";
import { useActivitiesStore } from "@/store/activities";
import { useCategoriesStore } from "@/store/categories";
import { useBookingsStore } from "@/store/bookings";
import ActivitiesHeader from "@/components/ActivitiesHeader.vue";
import ActivityCard from "@/components/ActivityCard.vue";
import router from "../router";

const { showBackButton } = useWebAppBackButton();

showBackButton();

const activitiesStore = useActivitiesStore();
const categoriesStore = useCategoriesStore();
const bookingsStore = useBookingsStore();

const activities = computed(() => activitiesStore.activities);
const selectedCategories = computed(() => categoriesStore.selectedCategories);
const bookedActivities = computed(() => bookingsStore.bookedActivities);

const hasBookings = computed(() => {
  if (bookedActivities.value.length === 0) return false;
  const activityIds = bookedActivities.value.map((activity) => activity.activityId);
  return activities.value.some((activity) => activityIds.includes(activity.id));
});

const filteredActivities = computed(() => {
  if (selectedCategories.value.length === 0) {
    return activities.value;
  }
  return activities.value.filter((activity) =>
    selectedCategories.value.includes(activity.category)
  );
});

const visibleActivities = ref(filteredActivities.value);

function removeVisibleActivity(id) {
  visibleActivities.value.splice(
    visibleActivities.value.findIndex((activity) => activity.id === id),
    1
  );
}

function handleSwipe(id, swipeData) {
  const { direction, card } = swipeData;
  removeVisibleActivity(id);
  console.log(swipeData);

  if (direction === "right") {
    activitiesStore.addLikedActivity(card);
  } else if (direction === "left") {
    activitiesStore.addDislikedActivity(card);
  }
}
</script>

<style scoped>
.activities {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.activity-list-enter-from {
  opacity: 0;
}

.activity-list-enter-to {
  opacity: 1;
}

.activity-list-enter-active,
.activity-list-leave-active,
.activity-list-move {
  transition: all 0.5s ease;
}

.activity-list-leave-active {
  position: absolute;
  /* width: 100%;  */
}

.activity-list-leave-from {
  opacity: 1;
}

.activity-list-leave-to {
  opacity: 0;
}
</style>