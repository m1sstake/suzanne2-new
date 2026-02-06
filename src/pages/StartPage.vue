<template>
  <div class="page__wrapper">
    <IntroBlock v-motion-fade />

    <div class="start__projects">
      <ProjectPreview
        v-for="(project, i) in projects"
        :key="i"
        v-motion-fade
        :title="project.name"
        :description="project.description"
        :date="project.date"
        :tags="project.tags"
        :image="project.image"
        @click="goToProject(project)"
      />
    </div>

    <CardsBlock v-motion-fade />

    <SocialBlock
      id="contacts"
      v-motion-fade
    />

    <div
      v-motion-fade
      class="start__footer-title"
    >
      {{ $t('startPage.footerTitle') }}
    </div>
  </div>
</template>
<script setup lang="js">
import ProjectPreview from '@/components/StartPage/ProjectPreview.vue';
import IntroBlock from '@/components/StartPage/IntroBlock.vue';
import CardsBlock from '@/components/StartPage/CardsBlock.vue';
import SocialBlock from '@/components/StartPage/SocialBlock.vue';

import HeylamaCover from '@/assets/images/projects-covers/heylama-cover.png';
import GidHubCover from '@/assets/images/projects-covers/gid-hub-cover.png';
import EpvCover from '@/assets/images/projects-covers/corporate-app-cover.png';
import SavedCover from '@/assets/images/projects-covers/saved-messages-cover.png';

// import HseCover from '@/assets/images/projects-covers/hse-cover.png';

// import GraphicCover from '@/assets/images/projects-covers/graphic-cover.jpg';

import { useRouter } from 'vue-router';
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';

const { tm, rt, t } = useI18n();

const projects = computed(() => [
  {
    name: t('startPage.projects.gidhub.name'),
    description: t('startPage.projects.gidhub.description'),
    date: t('startPage.projects.gidhub.date'),
    tags: tm('startPage.projects.gidhub.tags').map((tag) => rt(tag)),
    image: GidHubCover,
    routeName: 'GidHubPage',
  },
  {
    name: t('startPage.projects.epv.name'),
    description: t('startPage.projects.epv.description'),
    date: t('startPage.projects.epv.date'),
    tags: tm('startPage.projects.epv.tags').map((tag) => rt(tag)),
    image: EpvCover,
    routeName: 'EpvPage',
  },
  {
    name: t('startPage.projects.heylama.name'),
    description: t('startPage.projects.heylama.description'),
    date: t('startPage.projects.heylama.date'),
    tags: tm('startPage.projects.heylama.tags').map((tag) => rt(tag)),
    image: HeylamaCover,
    routeName: 'HeylamaPage',
  },
  {
    name: t('startPage.projects.savedMessages.name'),
    description: t('startPage.projects.savedMessages.description'),
    date: t('startPage.projects.savedMessages.date'),
    tags: tm('startPage.projects.savedMessages.tags').map((tag) => rt(tag)),
    image: SavedCover,
    routeName: 'SavedMessagesPage',
  },
  // {
  //   name: t('startPage.projects.hse.name'),
  //   description: t('startPage.projects.hse.description'),
  //   date: t('startPage.projects.hse.date'),
  //   tags: tm('startPage.projects.hse.tags').map((tag) => rt(tag)),
  //   image: HseCover,
  //   routeName: 'HsePage',
  // },
  // {
  //   name: t('startPage.projects.graphic.name'),
  //   description: t('startPage.projects.graphic.description'),
  //   date: t('startPage.projects.graphic.date'),
  //   tags: tm('startPage.projects.graphic.tags').map((tag) => rt(tag)),
  //   image: GraphicCover,
  //   routeName: 'GraphicDesignPage',
  // },
]);

const router = useRouter();

function goToProject(project) {
  router.push({ name: project.routeName });
}
</script>
<style>
.start__projects {
  margin-top: var(--space-xxxl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl);
}

.start__footer-title {
  margin-top: var(--space-xxxl);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
}
</style>
