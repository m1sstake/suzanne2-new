import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }
    window.scrollTo(0, 0);
  },
});
