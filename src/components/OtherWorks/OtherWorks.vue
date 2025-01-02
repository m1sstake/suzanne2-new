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

const works = [
  { title: 'Saved Messages', routeName: 'SavedMessagesPage' },
  { title: 'Graphic Design Projects', routeName: 'GraphicDesignPage' },
  { title: 'UX Solutions For HSE Lyceum', routeName: 'HsePage' },
  { title: 'Heylama', routeName: 'HeylamaPage' },
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
