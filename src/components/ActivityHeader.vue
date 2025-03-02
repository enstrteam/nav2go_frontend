<template>
    <header class="header">
      <div class="left-section">
      </div>
      <div class="right-section">
        <button class="share">
          Поделиться
        </button>
      </div>
    </header>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  
  
  const router = useRouter();
  
  
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
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
  
  .share {
    background-color: transparent;
    border: none;
    font-size: 14px;
    color: #9747ff;
    cursor: pointer;
  }
  </style>