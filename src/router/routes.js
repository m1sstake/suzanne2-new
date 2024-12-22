export const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: () => import('@/pages/StartPage.vue'),
  },
  {
    path: '/heylama',
    name: 'HeylamaPage',
    component: () => import('@/pages/HeylamaPage.vue'),
  },
  {
    path: '/saved',
    name: 'SavedMessagesPage',
    component: () => import('@/pages/SavedMessages.vue'),
  },
  {
    path: '/hse',
    name: 'HsePage',
    component: () => import('@/pages/HsePage.vue'),
  },
  {
    path: '/graphic',
    name: 'GraphicDesignPage',
    component: () => import('@/pages/GraphicDesignPage.vue'),
  },
];
