<template>
  <div class="rating-summary">
    <div class="average-rating">{{ averageRating }}</div>
    <div class="review-count">{{ reviews.length }} {{ getReviewWord(reviews.length) }}</div>
  </div>
  <div class="reviews-block">
    <div class="reviews-list">
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <div class="review-header">
          <div class="stars">
            <span
              v-for="star in 5"
              :key="star"
              :class="getStarClass(star, review.rating)"
            >
              ★
            </span>
          </div>
          <div class="user-info">
            <span class="user-name">{{ review.user }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
        </div>
        <p class="review-comment">{{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
  averageRating: {
    type: String,
    required: true,
  },
});

function getStarClass(star, rating) {
  return star <= rating ? "filled" : "empty";
}

function getReviewWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
      return "отзыв";
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
      return "отзыва";
    } else {
      return "отзывов";
    }
  }

</script>

<style scoped>
.reviews-block {
  background-color: #fff3d0;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  margin-bottom: 20px;
}

.rating-summary {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.average-rating {
  background-color: #14ae5c;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.review-count {
  color: #14ae5c;
}

.review-item {
  margin-bottom: 20px;
}

.review-item:last-child {
  margin-bottom: 0;
}

.review-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.stars {
  color: gold;
}

.stars .empty {
  color: #ccc;
}

.user-info {
  display: flex;
  gap: 5px;
  font-size: 0.9rem;
  color: #666;
}

.review-comment {
  font-size: 14px;
  color: #333;
}
</style>
