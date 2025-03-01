<template>
    <button
      class="footer-button"
      :class="{ 'inactive': inactive }"
      :disabled="inactive"
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
    inactive: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#28a745',
    },
    textColor: {
        type: String,
        default: "#FFFFFF",
    },
    hoverColor: {
      type: String,
      default: '#7a3cbf',
    },
  });
  
  const emit = defineEmits(['click']);
  
  function handleClick() {
    if (!props.inactive) {
      emit('click');
    }
  }
  </script>
  
  <style scoped>
button {
    box-sizing: border-box;
}

  .footer-button {
    width: 100%;
    height: 45px;
    background-color: v-bind(color);
    color: v-bind(textColor);
    border: none;
    border-radius: 20px;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .footer-button:hover {
    background-color: v-bind(hoverColor);
  }
  
  .footer-button.inactive {
    background-color: transparent;
    border: 2px dashed #ccc;
    color: #000000;
    cursor: not-allowed;
  }
  </style>