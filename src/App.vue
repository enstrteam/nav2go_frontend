<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useWebAppViewport } from 'vue-tg';

const { disableVerticalSwipes } = useWebAppViewport();

disableVerticalSwipes();
  
</script>

<style scoped>

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 440px;
  min-height: 100vh;
  padding: 20px;
  padding-bottom: 34px;
  background-color: #FBFBFB;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

</style>