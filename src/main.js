import { createApp } from 'vue';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';

import './assets/styles/index.css';
import 'unfonts.css';

import { router } from '@/router';
import { i18n } from '@/i18n';
import VueEasyLightbox from 'vue-easy-lightbox';

const app = createApp(App)
  .use(router)
  .use(VueEasyLightbox)
  .use(MotionPlugin)
  .use(i18n);

app.mount('#app');
