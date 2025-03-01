<template>
  <div class="slider-wrapper">
    <slot></slot>
    <div
      class="slider"
      ref="sliderRef"
      @touchstart="startSwipe"
      @touchmove="moveSwipe"
      @touchend="endSwipe"
      @mousedown="startSwipe"
      @mousemove="moveSwipe"
      @mouseup="endSwipe"
      @mouseleave="endSwipe"
      @click="handleSliderClick"
    >
      <div class="image-container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image-wrapper"
        >
          <img
            :src="image"
            alt="Activity Image"
            class="slider-image"
            @dragstart.prevent
          />
        </div>
      </div>

      <div class="indicators" v-if="images.length > 1">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click.prevent="changeSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Heart } from "lucide-vue-next";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const sliderRef = ref(null);
const currentIndex = ref(0);
const isDragging = ref(false);

function updateCurrentIndex() {
  if (!sliderRef.value) return;
  const scrollPosition = sliderRef.value.scrollLeft;
  const slideWidth = sliderRef.value.offsetWidth;
  const newIndex = Math.round(scrollPosition / slideWidth);
  if (newIndex !== currentIndex.value) {
    currentIndex.value = newIndex;
  }
}

function changeSlide(index) {
  if (sliderRef.value && index >= 0 && index < props.images.length) {
    const slideWidth = sliderRef.value.offsetWidth;
    sliderRef.value.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  }
}

function handleSliderClick(event) {
  if (!sliderRef.value) return;

  if (event.target.closest(".favorite-button")) {
    return; 
  }

  const sliderWidth = sliderRef.value.offsetWidth;
  const clickX = event.clientX - sliderRef.value.getBoundingClientRect().left;

  if (clickX < sliderWidth / 2) {
    prevSlide();
  } else {
    nextSlide();
  }
}

function prevSlide() {
  if (sliderRef.value && currentIndex.value > 0) {
    const slideWidth = sliderRef.value.offsetWidth;
    sliderRef.value.scrollTo({
      left: (currentIndex.value - 1) * slideWidth,
      behavior: "smooth",
    });
  }
}

function nextSlide() {
  if (sliderRef.value && currentIndex.value < props.images.length - 1) {
    const slideWidth = sliderRef.value.offsetWidth;
    sliderRef.value.scrollTo({
      left: (currentIndex.value + 1) * slideWidth,
      behavior: "smooth",
    });
  }
}

function startSwipe(event) {
  isDragging.value = true;
}

function moveSwipe(event) {
  if (!isDragging.value) return;
}

function endSwipe() {
  if (!isDragging.value) return;
  isDragging.value = false;
  updateCurrentIndex();
}

onMounted(() => {
  if (sliderRef.value) {
    sliderRef.value.addEventListener("scroll", updateCurrentIndex);
  }
});

watch(() => props.images, () => {
  currentIndex.value = 0;
  if (sliderRef.value) {
    sliderRef.value.scrollTo({ left: 0, behavior: "smooth" });
  }
});
</script>

<style scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  user-select: none;
}

.slider {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.image-container {
  display: flex;
  height: 100%;
  width: fit-content;
}

.image-wrapper {
  flex: 0 0 100%;
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  scroll-snap-align: center;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>