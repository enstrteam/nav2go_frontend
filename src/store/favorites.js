import { ref } from "vue";
import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", () => {
  const favoriteActivities = ref([]);

  function addFavorite(activity) {
    if (!favoriteActivities.value.some((item) => item.id === activity.id)) {
      favoriteActivities.value.push(activity);
    }
  }

  function removeFavorite(id) {
    favoriteActivities.value = favoriteActivities.value.filter(
      (item) => item.id !== id
    );
  }

  return { favoriteActivities, addFavorite, removeFavorite };
});