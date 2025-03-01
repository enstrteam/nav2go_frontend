<script setup>
import { computed } from "vue";
import { Heart } from "lucide-vue-next";
import { useFavoritesStore } from "@/store/favorites";

const favoritesStore = useFavoritesStore();

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});

const isFavorite = computed(() =>
  favoritesStore.favoriteActivities.some((item) => item.id === props.activity.id)
);

function toggleFavorite() {
  if (isFavorite.value) {
    favoritesStore.removeFavorite(props.activity.id);
    console.log("remove", props.activity.id);
  } else {
    favoritesStore.addFavorite(props.activity);
    console.log("add", props.activity.id);
  }
}
</script>

<template>
  <button class="favorite-button" @click.stop="toggleFavorite">
    <Heart v-if="isFavorite" :size="24" fill="red" />
    <Heart v-else :size="24" fill="white" />
  </button>
</template>

<style scoped>
.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}
</style>