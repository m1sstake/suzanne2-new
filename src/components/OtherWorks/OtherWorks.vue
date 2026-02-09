<template>
  <div
    v-motion-fade
    class="other-works"
  >
    <div class="other-works__title">{{ $t('otherWorks.title') }}</div>

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

// import GraphicCover from '@/assets/images/other-works/graphic-min.png';
// import HseCover from '@/assets/images/other-works/hse-min.png';
import HeylamaCover from '@/assets/images/projects-covers/heylama-cover.png';
import GidHubCover from '@/assets/images/projects-covers/gid-hub-cover.png';
import EpvCover from '@/assets/images/projects-covers/corporate-app-cover.png';
import SavedCover from '@/assets/images/projects-covers/saved-messages-cover.png';

const works = [
  {
    title: 'ГИД.Хаб',
    routeName: 'GidHubPage',
    poster: GidHubCover,
  },
  {
    title: 'Корпоративное приложение ГИД',
    routeName: 'EpvPage',
    poster: EpvCover,
  },
  {
    title: 'Saved Messages',
    routeName: 'SavedMessagesPage',
    poster: SavedCover,
  },
  { title: 'Heylama AI', routeName: 'HeylamaPage', poster: HeylamaCover },
];

const visibleProjects = ref([]);

const route = useRoute();

const pageIdxes = {
  ['SavedMessagesPage']: 2,
  ['GidHubPage']: 0,
  ['EpvPage']: 1,
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
