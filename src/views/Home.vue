<template>
  <div>
    <header class="header">
      <h1 class="title">Nav2Go</h1>
      <h2 class="subtitle">Алтай</h2>
      <p class="description">
        <span v-if="user">Привет! {{ user.firstname }}</span>
        <p>
          Выбирай впечатления <br>и создавай уникальные воспоминания
        </p>
      </p>
    </header>

    <div class="categories">
      <CategoryButton
        v-for="category in categories"
        :key="category"
        :label="category"
        :selected="isSelected(category)"
        @click="toggleCategory(category)"
      />
    </div>

    <footer class="footer-buttons">
      <FooterButton
        label="Сбросить фильтры"
        color="#E6E6E6"
        textColor="#000000"
        hoverColor="#E3E3E3"
        :inactive="selectedCategories.length === 0"
        @click="resetFilters"
      />
      <FooterButton
        label="К ленте событий"
        color="#9747FF"
        hoverColor="#7a3cbf"
        @click="goToActivities"
      />
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useWebApp } from "vue-tg";
import CategoryButton from '@/components/CategoryButton.vue';
import FooterButton from '@/components/FooterButton.vue';
import { useCategoriesStore } from '@/store/categories';

const { initDataUnsafe } = useWebApp();

const categoriesStore = useCategoriesStore();

const categories = computed(() => categoriesStore.categories);

const selectedCategories = computed(() => categoriesStore.selectedCategories);

const user = initDataUnsafe.user || {id: 1234, firstname: "Гость"}; 

function isSelected(category) {
  return selectedCategories.value.includes(category);
}

function toggleCategory(category) {
  if (isSelected(category)) {
    categoriesStore.removeCategory(category); 
  } else {
    categoriesStore.addCategory(category); 
  }
  console.log("Selected categories:", selectedCategories.value);
}

function resetFilters() {
  categoriesStore.clearSelectedCategories(); 
}

const router = useRouter();
function goToActivities() {
  router.push({
    name: 'Activities',
    query: { categories: selectedCategories.value.join(',') }, 
  });
}
</script>

<style scoped>
.header {
  margin-bottom: 30px;
  text-align: center;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
}

.subtitle {
  font-size: 18px;
  color: #555;
}

.description {
  font-size: 16px;
  color: #555;
}

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  justify-content: center;
  padding-bottom: 30px;
  margin-bottom: auto;
}

.footer-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}
</style>