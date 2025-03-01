<template>
  <button
    class="category-button"
    :class="{ 'selected': selected }"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false, 
  },
});

const emit = defineEmits(['click']);

function handleClick() {
  emit('click', props.label);
}


/* Styles */
const buttonActiveColor ='#e4ccff'


</script>

<style scoped>


.category-button {
  background-color: #e6e6e6; 
  color: #333;
  border: none;
  border-radius: 35px; 
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  width: 100px; 
  height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (hover: hover) {
  .category-button:hover {
    background-color: v-bind(buttonActiveColor); 
  }
}

.category-button:active {
  background-color: v-bind(buttonActiveColor); 
}

.category-button.selected {
  background-color: v-bind(buttonActiveColor); 
}
</style>