<template>
  <div
    class="activity-card"
    @mousedown="startSwipe"
    @touchstart="startSwipe"
    @mousemove="moveSwipe"
    @touchmove="moveSwipe"
    @mouseup="endSwipe"
    @touchend="endSwipe"
    :style="cardStyle"
  >
    <ImageSlider :images="activity.images">
      <FavoriteButton :activity="activity" />
    </ImageSlider>
    <h3 class="title">{{ activity.title }}</h3>
    <div class="details">
      <div class="rating" v-if="activity.rating">
        <span class="rating-box">{{ activity.rating }}</span>
      </div>
      <div class="age-limit" v-if="activity.ageLimit">
        <span class="age-box">{{ activity.ageLimit }}</span>
      </div>
      <div class="address">{{ activity.address }}</div>
    </div>
    <p class="distance">{{ activity.distance }}</p>
    <div class="buttons">
      <Button
        text="Подробнее"
        customClass="more-details"
        :onClick="
          () =>
            router.push({
              name: 'ActivityDetails',
              params: { id: activity.id },
            })
        "
      />

      <Button text="Забронировать" customClass="book-now" :onClick="() => router.push({ name: 'BookingPage' })"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import ImageSlider from "@/components/ImageSlider.vue";
import Button from "@/components/Button.vue";
import FavoriteButton from "./FavoriteButton.vue";

const router = useRouter();

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});

const activity = computed(() => props.activity);

const emit = defineEmits(["swipe", "drag"]);

const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0); // Добавляем для отслеживания вертикальной координаты
const currentX = ref(0);

const cardStyle = computed(() => {
  const translateX = currentX.value;
  const rotateDeg = (currentX.value / 100) * 10;
  return {
    transform: `translateX(${translateX}px) rotate(${rotateDeg}deg)`,
    transition: isDragging.value ? "none" : "transform 0.5s ease-out",
  };
});

function startSwipe(event) {
  isDragging.value = true;
  startX.value = event.type.includes("touch")
    ? event.touches[0].clientX
    : event.clientX;
  startY.value = event.type.includes("touch") // Сохраняем начальную Y
    ? event.touches[0].clientY
    : event.clientY;
}

function moveSwipe(event) {
  if (!isDragging.value) return;

  const x = event.type.includes("touch")
    ? event.touches[0].clientX
    : event.clientX;
  const y = event.type.includes("touch") // Получаем текущую Y
    ? event.touches[0].clientY
    : event.clientY;

  const deltaX = x - startX.value; // Горизонтальное перемещение
  const deltaY = y - startY.value; // Вертикальное перемещение

  // Если вертикальное перемещение больше горизонтального и превышает порог
  if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 10) {
    isDragging.value = false; // Прекращаем свайп карточки
    currentX.value = 0; // Сбрасываем позицию
    emit("drag", 0);
    return; // Позволяем браузеру обработать прокрутку
  }

  // Если горизонтальное перемещение превышает порог, предотвращаем прокрутку
  if (Math.abs(deltaX) > 10) {
    event.preventDefault();
  }

  currentX.value = deltaX;
  emit("drag", currentX.value);
}

function endSwipe() {
  if (!isDragging.value) return;
  isDragging.value = false;

  const threshold = 150;
  if (Math.abs(currentX.value) > threshold) {
    const direction = currentX.value > 0 ? "right" : "left";
    currentX.value = direction === "right" ? 500 : -500;
    setTimeout(() => {
      emitSwipe(direction);
      currentX.value = 0;
      emit("drag", 0);
    }, 500);
  } else {
    setTimeout(() => {
      currentX.value = 0;
      emit("drag", 0);
    }, 10);
  }
}

function emitSwipe(direction) {
  emit("swipe", { direction, card: activity.value });
}
</script>

<style scoped>
.activity-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  user-select: none;
  touch-action: none;
}

.title {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
  text-align: left;
}

.details {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  text-align: left;
}

.rating-box,
.age-box {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  color: white;
}

.rating-box {
  background-color: #14ae5c;
}

.age-box {
  background-color: #ffa629;
}

.address {
  font-size: 12px;
  color: #666;
  text-align: left;
}

.distance {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  text-align: left;
}

.buttons {
  display: flex;
  gap: 10px;
}

.more-details {
  background-color: #e6e6e6;
  color: #333;
}

.more-details:hover {
  background-color: #d1d1d1;
}

.book-now {
  background-color: #9747ff;
  color: white;
}

.book-now:hover {
  background-color: #7a3cbf;
}
</style>
