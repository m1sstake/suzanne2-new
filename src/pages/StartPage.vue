<template>
  <div class="page__wrapper">
    <IntroBlock />

    <div class="start__projects">
      <ProjectPreview
        v-for="(project, i) in projects"
        :key="i"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="100"
        :duration="1200"
        :title="project.name"
        :description="project.description"
        :date="project.date"
        :tags="project.tags"
        :image="project.image"
        @click="goToProject(project)"
      />
    </div>

    <CardsBlock
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="100"
      :duration="500"
    />

    <SocialBlock
      id="contacts"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="100"
      :duration="500"
    />

    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :delay="100"
      :duration="500"
      class="start__footer-title"
    >
      Looking forward to hearing from you!
    </div>
  </div>
</template>
<script setup lang="ts">
import ProjectPreview from '@/components/StartPage/ProjectPreview.vue';
import IntroBlock from '@/components/StartPage/IntroBlock.vue';
import CardsBlock from '@/components/StartPage/CardsBlock.vue';
import SocialBlock from '@/components/StartPage/SocialBlock.vue';

import HeylamaCover from '@/assets/images/projects-covers/heylama-cover.jpg';
import HseCover from '@/assets/images/projects-covers/hse-cover.png';

import SavedCover from '@/assets/images/projects-covers/saved-cover.jpg';
import GraphicCover from '@/assets/images/projects-covers/graphic-cover.jpg';

import { useRouter } from 'vue-router';

const projects = [
  {
    name: 'Heylama AI Language School',
    description:
      'A mobile app from the Berlin startup Heylama that helps users learn foreign languages with AI.',
    date: '2023 – 2025',
    tags: [
      'product design from scratch',
      'wireframing and sketching',
      'AI image generation',
      'brainstorming',
      'user flow and scenarious',
      'design system',
    ],
    image: HeylamaCover,
    routeName: 'HeylamaPage',
  },
  {
    name: 'Saved Messages',
    description:
      'An educational tool for advanced language learners to read original news and articles, save useful words and phrases, and export them.',
    date: '2022',
    tags: [
      'UX research',
      'wireframing and prototyping ',
      'user flow and scenarious',
      'website architecture',
      'UX/UI design',
    ],
    image: SavedCover,
    routeName: 'SavedMessagesPage',
  },
  {
    name: 'UX Solutions for HSE Lyceum',
    description: 'Improvement of website interfaces, usability enhancement.',
    date: '2021',
    tags: [
      'UX design',
      'project maintenance',
      'wireframing and sketching',
      'brainstorming',
      'user flow and scenarious',
    ],
    image: HseCover,
    routeName: 'HsePage',
  },
  {
    name: 'Graphic Design Projects',
    description:
      'Various projects I worked on as a designer <br/> and illustrator.',
    date: '2023 – 2024',
    tags: [
      'visual identities and brand guidelines',
      'logos, packaging, marketing materials',
      'consistent brand messaging',
      'brand vision and values',
      'brainstorming',
    ],
    image: GraphicCover,
    routeName: 'GraphicDesignPage',
  },
];

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
