<template>
  <div class="container">
    <ActivitiesHeader :hasBookings="hasBookings" />

    <main class="activities">
      <TransitionGroup name="activity-list" tag="div" class="activity-list">
        <ActivityCard
          v-for="activity in favoriteActivities"
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
import { useFavoritesStore } from "@/store/favorites";
import ActivitiesHeader from "@/components/ActivitiesHeader.vue";
import ActivityCard from "@/components/ActivityCard.vue";

const favoritesStore = useFavoritesStore();

const favoriteActivities = computed(() => favoritesStore.favoriteActivities);

const hasBookings = ref(false);

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0;
  font-family: Arial, sans-serif;
}

.activities {
  padding: 0px 20px;
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
  transition: all 0.5s;
}

.activity-list-leave-active {
  position: absolute;
}

.activity-list-leave-from {
  opacity: 1;
}

.activity-list-leave-to {
  opacity: 0;
}
</style>