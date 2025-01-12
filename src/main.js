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
  .use(MotionPlugin, {
    directives: {
      fade: {
        initial: { opacity: 0, y: 100, delay: 100, transition: { delay: 100 } },
        visibleOnce: { opacity: 1, y: 0, transition: { duration: 1200 } },
      },
    },
  })
  .use(i18n);

app.mount('#app');
