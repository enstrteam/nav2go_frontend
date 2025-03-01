<template>
    <button :class="['custom-button', customClass]" @click="handleClick">
      <slot>{{ text }}</slot>
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    text: {
      type: String,
      default: "Кнопка",
    },
    customClass: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  });
  
  function handleClick() {
    props.onClick();
  }
  </script>
  
  <style scoped>
  .custom-button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #9747ff;
    color: white;
  }
  
  </style>