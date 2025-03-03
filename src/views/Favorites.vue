<template>
  <div>
    <BackButton @click="router.back()" />
    <ActivitiesHeader :hasBookings="hasBookings" />
    <main v-if="favoriteActivities.length > 0" class="activities">
      <TransitionGroup name="activity-list" tag="div" class="activity-list">
        <ActivityCard
          v-for="activity in favoriteActivities"
          :key="activity.id"
          :activity="activity"
          @swipe="handleSwipe(activity.id, $event)"
        />
      </TransitionGroup>
    </main>
    <div v-else style="padding-top: 50px;">
      У вас нет избранных активностей
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useWebAppBackButton, BackButton } from "vue-tg";
import { useFavoritesStore } from "@/store/favorites";
import ActivitiesHeader from "@/components/ActivitiesHeader.vue";
import ActivityCard from "@/components/ActivityCard.vue";

const router = useRouter();

const { showBackButton } = useWebAppBackButton();
showBackButton();

const favoritesStore = useFavoritesStore();
const favoriteActivities = computed(() => favoritesStore.favoriteActivities);

const hasBookings = ref(false);

function handleSwipe(id, swipeData) {
  const { direction } = swipeData;
  if (direction === "left" || direction === "right") {
    favoritesStore.removeFavorite(id); 
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
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
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
  width: 100%; 
  max-width: 400px; 
}

.activity-list-leave-from {
  opacity: 1;
}

.activity-list-leave-to {
  opacity: 0;
}
</style>