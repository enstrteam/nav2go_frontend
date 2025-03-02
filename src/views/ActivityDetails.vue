<template>
  <div>
    <BackButton @click="router.back()"/>
    <ActivityHeader :activity="activity" />
    <div v-if="activity" class="activity-details">
      <ImageSlider :images="activity.images">
        <FavoriteButton :activity="activity" />
      </ImageSlider>

      <div class="activity-info">
        <h1 class="title">{{ activity.title }}</h1>

        <ul class="info-list">
          <li v-if="activity.category">
            <strong>Категория:</strong> {{ activity.category }}
          </li>
          <li v-if="activity.difficulty">
            <strong>Сложность:</strong> {{ activity.difficulty }}
          </li>
          <li v-if="activity.duration">
            <strong>Длительность:</strong> {{ activity.duration }}
          </li>
          <li v-if="activity.ageLimit">
            <strong>Возрастное ограничение:</strong> {{ activity.ageLimit }}
          </li>
          <li v-if="activity.price">
            <strong>Цена:</strong> от {{ activity.price }}
          </li>
        </ul>

        <p class="description">{{ activity.fullDescription }}</p>

        <p class="address">
          <span class="address-text">{{ activity.address }}</span>
        </p>

        <p class="distance">{{ activity.distance }}</p>
      </div>

      <MapBox v-if="activity.coordinates" :coordinates="activity.coordinates" />

      <div class="buttons">
        <Button text="Мне только спросить" customClass="ask-button" />

        <Button text="Забронировать" customClass="book-now" :onClick="() => router.push({ name: 'BookingPage' })"/>
      </div>

      <ReviewsBlock
        v-if="activity.reviews"
        :reviews="activity.reviews"
        :averageRating="averageRating"
      />
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useWebAppBackButton, BackButton } from "vue-tg";
import { useRoute, useRouter } from "vue-router";
import { useActivitiesStore } from "@/store/activities";
import ImageSlider from "@/components/ImageSlider.vue";
import MapBox from "@/components/MapBox.vue";
import ReviewsBlock from "@/components/ReviewsBlock.vue";
import ActivityHeader from "../components/ActivityHeader.vue";
import Button from "../components/Button.vue";
import FavoriteButton from "../components/FavoriteButton.vue";

const { showBackButton }  = useWebAppBackButton();
showBackButton()

const route = useRoute();
const router = useRouter();
const activitiesStore = useActivitiesStore();

const activity = ref(null);
onMounted(() => {
  const activityId = parseInt(route.params.id);
  activity.value = activitiesStore.activities.find(
    (item) => item.id === activityId
  );
});

const averageRating = computed(() => {
  if (!activity.value?.reviews || activity.value.reviews.length === 0) return 0;
  const totalRating = activity.value.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return (totalRating / activity.value.reviews.length).toFixed(1);
});
</script>

<style scoped>

.activity-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: Arial, sans-serif;
  position: relative;
}

.activity-info {
  padding: 20px 0 0 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  text-align: left;
}

.share-button {
  background-color: #9747ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.share-button:hover {
  background-color: #7a3cbf;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.info-list {
  margin-left: 20px;
  list-style: disc;
  padding: 0;
  margin-bottom: 20px;
}

.info-list li {
  margin-bottom: 5px;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
}

.address-text {
  color: #9747ff;
}

.distance {
  color: #555;
}

.buttons {
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.ask-button {
  background-color: #e6e6e6;
  color: #333;
}

.ask-button:hover {
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
