<template>
    <div>
      <BackButton @click="router.back()"/>
      <h1>Страница бронирования</h1>
      <p>Страница находится в разработке.</p>
    </div>
  </template>
  
  <script setup>
  import { useWebAppBackButton, BackButton } from "vue-tg";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const { showBackButton }  = useWebAppBackButton();
  showBackButton()
  </script>
  
  <style scoped>
  
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 18px;
    color: #555;
  }
  </style>