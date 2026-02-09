<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('savedMessages.roleLabel')"
    >
      <template #title>
        <span v-html="$t('savedMessages.title')"></span>
      </template>

      <template #about>
        <span v-html="$t('savedMessages.about')"></span>
      </template>

      <template #role>
        <span v-html="$t('savedMessages.role')"></span>
      </template>

      <template #time>
        <span v-html="$t('savedMessages.time')"></span>
      </template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__split-images project__xxxl-margin"
    >
      <div class="project__split-image">
        <img src="@/assets/images/saved-messages/intro/intro-pic-1.png" />
      </div>
      <div class="project__split-image">
        <img src="@/assets/images/saved-messages/intro/intro-pic-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__image project__md-margin"
    >
      <img src="@/assets/images/saved-messages/intro/intro-pic-3.png" />
    </div>

    <div
      v-motion-fade
      class="project__image project__md-margin"
    >
      <img src="@/assets/images/saved-messages/intro/intro-pic-4.png" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.problem.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('savedMessages.problem.p1')"></p>

      <p v-html="$t('savedMessages.problem.p2')"></p>

      <p
        class="project__bold-text !text-accent-red"
        v-html="$t('savedMessages.problem.bold')"
      ></p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.hypothesis.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <ul class="project__list">
        <li
          v-for="(item, i) in $tm('savedMessages.hypothesis.items')"
          :key="i"
        >
          <span v-html="$rt(item)"></span>
        </li>
      </ul>

      <p v-html="$t('savedMessages.hypothesis.description')"></p>
    </div>

    <div
      v-motion-fade
      class="saved__interviews max-w-[832px] mt-xl"
    >
      <img src="@/assets/images/saved-messages/interview/interview-1.gif" />
      <img src="@/assets/images/saved-messages/interview/interview-2.gif" />
      <img src="@/assets/images/saved-messages/interview/interview-3.gif" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.insights.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p
        class="font-normal"
        v-html="$t('savedMessages.insights.p1')"
      ></p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-md"
    >
      <img
        src="@/assets/images/saved-messages/interviews.jpg"
        class="cursor-zoom-in"
        @click="showImg(0, 'interview')"
      />
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        <span
          class="font-semibold"
          v-html="$t('savedMessages.insights.bold')"
        ></span>
        <span v-html="$t('savedMessages.insights.description')"></span>
      </p>

      <ul class="project__list">
        <li
          v-for="(item, i) in $tm('savedMessages.insights.items')"
          :key="i"
        >
          <span v-html="$rt(item)"></span>
        </li>
      </ul>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.competitors.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('savedMessages.competitors.text')"></p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.cjm.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__image h-[605px] mt-xl"
    >
      <img
        src="@/assets/images/saved-messages/cjm.jpg"
        class="cursor-zoom-in"
        @click="showImg(0, 'cjm')"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.userFlow.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('savedMessages.userFlow.text')"></p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-xl"
    >
      <img
        src="@/assets/images/saved-messages/user-flow.png"
        class="cursor-zoom-in"
        @click="showImg(0, 'flow')"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.usability.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('savedMessages.usability.p1')"></p>

      <p v-html="$t('savedMessages.usability.p2')"></p>
    </div>

    <div
      v-motion-fade
      class="project__image w-[700px] h-[389px] mt-xl"
    >
      <img src="@/assets/images/saved-messages/user-testing.png" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('savedMessages.ui.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('savedMessages.ui.text')"></p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/saved-messages/design/design-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/saved-messages/design/design-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__image mt-md"
    >
      <img src="@/assets/images/saved-messages/design/design-3.png" />
    </div>

    <div
      v-motion-fade
      class="project__image h-[547px] mt-md"
    >
      <img src="@/assets/images/saved-messages/design/design-4.png" />
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="galleryImages"
      :index="indexRef"
      @hide="onHide"
    />

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
import interviewImageMax from '@/assets/images/saved-messages/interviews.jpg';
import cjmImageMax from '@/assets/images/saved-messages/cjm.jpg';
import userFlowImageMax from '@/assets/images/saved-messages/user-flow.png';
import { ref, computed } from 'vue';

const visibleRef = ref(false);
const indexRef = ref(0);

const galleryMode = ref(null);

const interviewImages = computed(() => [interviewImageMax]);

const cjmImages = computed(() => [cjmImageMax]);

const userFlowImages = computed(() => [userFlowImageMax]);

const galleryImages = computed(() => {
  return {
    interview: interviewImages.value,
    cjm: cjmImages.value,
    flow: userFlowImages.value,
  }[galleryMode.value];
});

const showImg = (index, mode) => {
  indexRef.value = index;
  galleryMode.value = mode;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>
<style>
.saved__interviews {
  display: flex;

  img {
    width: 35%;
    height: 302px;
  }
}
</style>
