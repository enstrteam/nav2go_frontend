import { ref } from "vue";
import { defineStore } from "pinia";

export const useBookingsStore = defineStore("bookings", () => {
  const bookedActivities = ref([]);

  function addBooking(activity) {
    if (!bookedActivities.value.some((item) => item.id === activity.id)) {
      bookedActivities.value.push(activity);
    }
    console.log("Booked activities:", bookedActivities.value);
  }
  function removeBooking(id) {
    bookedActivities.value = bookedActivities.value.filter(
      (item) => item.id !== id
    );
    console.log("Booked activities after removal:", bookedActivities.value);
  }
  return { bookedActivities, addBooking, removeBooking };
});
