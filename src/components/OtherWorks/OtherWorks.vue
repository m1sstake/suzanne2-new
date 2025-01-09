<template>
  <div class="other-works">
    <div class="other-works__title">Other works</div>

    <div class="other-works__body">
      <WorkItem
        v-for="(work, i) in visibleProjects"
        v-bind="work"
        :key="i"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import WorkItem from '@/components/OtherWorks/WorkItem.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import SavedCover from '@/assets/images/other-works/saved-messages-min.png';
import GraphicCover from '@/assets/images/other-works/graphic-min.png';
import HseCover from '@/assets/images/other-works/hse-min.png';
import HeylamaCover from '@/assets/images/other-works/heylama-min.png';

const works = [
  {
    title: 'Saved Messages',
    routeName: 'SavedMessagesPage',
    poster: SavedCover,
  },
  {
    title: 'Graphic Design Projects',
    routeName: 'GraphicDesignPage',
    poster: GraphicCover,
  },
  {
    title: 'UX Solutions For HSE Lyceum',
    routeName: 'HsePage',
    poster: HseCover,
  },
  { title: 'Heylama', routeName: 'HeylamaPage', poster: HeylamaCover },
];

const visibleProjects = ref([]);

const route = useRoute();

const pageIdxes = {
  ['SavedMessagesPage']: 0,
  ['GraphicDesignPage']: 1,
  ['HsePage']: 2,
  ['HeylamaPage']: 3,
};

const pageMode = computed(() => pageIdxes[route.name]);

onMounted(() => {
  const idxes = Object.values(pageIdxes);

  const pageIdx = idxes.indexOf(pageMode.value);

  idxes.splice(pageIdx, 1);

  idxes.splice(Math.floor(Math.random() * idxes.length), 0);

  visibleProjects.value = idxes.map((idx) => works[idx]);
});
</script>
<style>
.other-works {
  width: 100%;
}
.other-works__title {
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;
}

.other-works__body {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 100%;
  margin-top: var(--space-xl);
}
</style>
