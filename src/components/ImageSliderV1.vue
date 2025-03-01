<template>
  <div
    class="slider"
    @touchstart="startSwipe"
    @touchmove="moveSwipe"
    @touchend="endSwipe"
  >
    <button class="nav-button prev" @click="prevSlide">
      &#10094;
    </button>

    <img
      :src="currentImage || 'https://via.placeholder.com/400x200'"
      alt="Activity Image"
      class="slider-image"
    />

    <button class="nav-button next" @click="nextSlide">
      &#10095;
    </button>

    <button class="favorite-button" @click="toggleFavorite">
      <Heart v-if="isFavorite" :size="24" fill="red" />
      <Heart v-else :size="24" fill="white" />
    </button>

    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="changeSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Heart } from "lucide-vue-next";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const startX = ref(0); 
const endX = ref(0); 

const currentImage = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images[currentIndex.value];
  }
  return null; 
});

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.images.length - 1;
  }
}

function nextSlide() {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function changeSlide(index) {
  currentIndex.value = index;
}

function startSwipe(event) {
  startX.value = event.touches[0].clientX;
}

function moveSwipe(event) {
  endX.value = event.touches[0].clientX;
}

function endSwipe() {
  const swipeThreshold = 50; 
  if (startX.value - endX.value > swipeThreshold) {
    nextSlide(); 
  } else if (endX.value - startX.value > swipeThreshold) {
    prevSlide(); 
  }
}

const isFavorite = ref(false);
function toggleFavorite() {
  isFavorite.value = !isFavorite.value;
}
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  touch-action: pan-y; 
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.5;
}

.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}

.nav-button:hover {
  opacity: 1;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding-top: 1px;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  z-index: 2;
}

.indicator {
  width: 8px;
  height: 8px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}
</style>