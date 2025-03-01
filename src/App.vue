<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue';

onMounted(() => {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.expand();
    tg.setupSwipeBehavior({ allow_vertical_swipe: false }); 
  }
});
</script>

<style>
</style>