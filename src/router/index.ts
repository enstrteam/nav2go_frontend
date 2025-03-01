import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Activities from '../views/Activities.vue';
import Favorites from '../views/Favorites.vue'; 
import ActivityDetails from '../views/ActivityDetails.vue';
import Bookings from '../views/Bookings.vue';
import BookingPage from '../views/BookingPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/activities', name: 'Activities', component: Activities },
  { path: '/activity/:id', name: 'ActivityDetails', component: ActivityDetails, props: true },
  { path: '/favorites', name: 'Favorites', component: Favorites }, 
  { path: '/bookings', name: 'Bookings', component: Bookings },
  { path: '/bookings/:id', name: 'Bookings', component: Bookings },
  { path: '/booking', name: 'BookingPage', component: BookingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;