<template>
  <div class="categories-wrapper">
    <header class="header">
      <h1 class="title">Nav2Go</h1>
      <h2 class="subtitle">Алтай</h2>
      <p class="description">
        <span v-if="user.id">Привет! {{user.username}} </span>
          Выбирай впечатления <br>и создавай уникальные воспоминания
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

    <Modal :show="showModal" @close="closeModal">
      <div class="tutorial-content">
        <p class="modal-text">
          Смахни карточку влево, если приключение не по душе, <br>
          или вправо — если готов отправиться в это путешествие!
        </p>
        <Button class="modal-button" @click="closeModal">Понял!</Button>
      </div>
    </Modal>

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
        @click="handleActivitiesClick()"
      />
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useWebApp } from "vue-tg";
import CategoryButton from '@/components/CategoryButton.vue';
import FooterButton from '@/components/FooterButton.vue';
import Button from '@/components/Button.vue';
import Modal from '@/components/Modal.vue';
import { useCategoriesStore } from '@/store/categories';

const router = useRouter();

const { initDataUnsafe } = useWebApp();

const categoriesStore = useCategoriesStore();

const categories = computed(() => categoriesStore.categories);

const selectedCategories = computed(() => categoriesStore.selectedCategories);


const user = initDataUnsafe.user || {}; 

const showModal = ref(false);
const isFirstClick = ref(sessionStorage.getItem('isFirstClick') !== 'false');

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

function handleActivitiesClick() {
  if (isFirstClick.value) {
    showModal.value = true;
    isFirstClick.value = false;
    sessionStorage.setItem('isFirstClick', 'false');
  } else {
    goToActivities();
  }
}

function closeModal() {
  showModal.value = false;
  goToActivities();
}

function goToActivities() {
  router.push({
    name: 'Activities',
    query: { categories: selectedCategories.value.join(',') }, 
  });
}
</script>

<style scoped>
.categories-wrapper {
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

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

/* Стили для содержимого конкретного модального окна */
.tutorial-content {
  text-align: center;
  padding: 20px;
}

.modal-text {
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.5;
}

.modal-button {
  background: #9747FF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.modal-button:hover {
  background: #7a3cbf;
}

</style>