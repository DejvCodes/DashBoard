import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutUsPage.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/DashBoardPage.vue'),
    },
    // Redirect any unmatched routes to home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ],
})

export default router
