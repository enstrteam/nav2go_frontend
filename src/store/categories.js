import { ref } from "vue"
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {

    const categories = ref([
        "Спорт",
        "Романтика",
        "С детьми",
        "Экстрим",
        "Релакс",
        "Культура",
        "Духи Алтая",
        "Природа",
        "Развлечения",
        "Гиды",
        "Логистика",
        "Еда",
      ]);

    const selectedCategories = ref([]);

  function addCategory(category) {
    if (!selectedCategories.value.includes(category)) {
      selectedCategories.value.push(category);
    }
  }
  function removeCategory(category) {
    selectedCategories.value = selectedCategories.value.filter(
      (item) => item !== category
    );
  }

  function clearSelectedCategories() {
    selectedCategories.value = [];
  }

    return {
        categories,
        selectedCategories,
        addCategory,
        removeCategory,
        clearSelectedCategories
    }
})