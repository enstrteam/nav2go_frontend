<template>
      <BackButton @click="router.back()"/>
      <ActivitiesHeader :hasBookings="true" />
      <main class="activities">
        <TransitionGroup name="activity-list" tag="div" class="activity-list">
          <ActivityCard
            v-for="activity in bookedActivities"
            :key="activity.id"
            :activity="activity"
            @swipe="handleSwipe(activity.id, $event)"
          />
        </TransitionGroup>
      </main>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useWebAppBackButton, BackButton } from "vue-tg";
  import { useBookingsStore } from "@/store/bookings";
  import ActivitiesHeader from "@/components/ActivitiesHeader.vue";
  import ActivityCard from "@/components/ActivityCard.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  
  const  { showBackButton }  = useWebAppBackButton();
  
  showBackButton()
  
  const bookingsStore = useBookingsStore();
  
  const bookedActivities = computed(() => bookingsStore.bookedActivities);
  
  function handleSwipe(id, swipeData) {
    const { direction, card } = swipeData;
  
    if (direction === "right") {
      console.log("Добавлено в понравившиеся:", card);
    } else if (direction === "left") {
      console.log("Добавлено в непонравившиеся:", card);
    }
  
    bookingsStore.removeBooking(id);
  }
  </script>
  
  <style scoped>
  
  
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