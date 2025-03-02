import { createRouter, createWebHistory,type RouteRecordRaw, type RouterScrollBehavior } from 'vue-router';
import Home from '../views/Home.vue';
import Activities from '../views/Activities.vue';
import Favorites from '../views/Favorites.vue'; 
import ActivityDetails from '../views/ActivityDetails.vue';
import Bookings from '../views/Bookings.vue';
import BookingPage from '../views/BookingPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home, props: true },
  { path: '/activities', name: 'Activities', component: Activities, props: true },
  { path: '/activity/:id', name: 'ActivityDetails', component: ActivityDetails, props: true },
  { path: '/favorites', name: 'Favorites', component: Favorites, props: true }, 
  { path: '/bookings', name: 'Bookings', component: Bookings, props: true },
  { path: '/bookings/:id', name: 'Bookings', component: Bookings, props: true },
  { path: '/booking', name: 'BookingPage', component: BookingPage, props: true },
];

const scrollBehavior: RouterScrollBehavior = (_to, _from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
    return { 
      top: 0,
    };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});

export default router;