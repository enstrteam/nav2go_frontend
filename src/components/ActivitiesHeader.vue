<template>
  <header class="header">
    <div class="left-section">
      <a href="#" class="nav-link inactive" v-if="favoriteActivities.length === 0">Избранное</a>
      <a href="#" class="nav-link" v-else @click.prevent="goToFavorites"
        >Избранное
        <span v-show="favoriteActivities.length > 0">({{ favoriteActivities.length }})</span>
      </a>
      <a href="#" class="nav-link inactive" v-if="!hasBookings">Мои поездки</a>
      <a href="#" class="nav-link" v-else @click.prevent="goToTrips"
        >Мои поездки</a
      >
    </div>
    <div class="right-section">
      <button class="filters" @click="goToHome">
        Фильтры
        <span v-show="selectedCategories.length > 0"
          >({{ selectedCategories.length }})</span
        >
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useFavoritesStore } from "@/store/favorites";
import { useCategoriesStore } from "@/store/categories";

const router = useRouter();

const props = defineProps({
  hasBookings: {
    type: Boolean,
    default: false,
  },
});

const favoritesStore = useFavoritesStore();
const categoriesStore = useCategoriesStore();

const favoriteActivities = computed(() => favoritesStore.favoriteActivities);
const selectedCategories = computed(() => categoriesStore.selectedCategories);


function goToFavorites() {
  router.push({ name: "Favorites" });
}

function goToTrips() {
  router.push({ name: "Trips" });
}

function goToHome() {
  router.push({ name: "Home" });
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
}

.left-section {
  display: flex;
  gap: 20px;
}

.right-section {
  display: flex;
}

.nav-link {
  text-decoration: none;
  font-size: 14px;
  color: #9747ff;
  cursor: pointer;
}

.nav-link.inactive {
  color: #e6e6e6;
  cursor: not-allowed;
}

.filters {
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: #9747ff;
  cursor: pointer;
}
</style>
