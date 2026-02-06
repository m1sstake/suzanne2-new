<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('savedMessages.roleLabel')"
    >
      <template #title>{{ $t('savedMessages.title') }}</template>

      <template #about>
        <span v-html="$t('savedMessages.about')"></span>
      </template>

      <template #role>
        {{ $t('savedMessages.role') }}
      </template>

      <template #time>{{ $t('savedMessages.time') }}</template>
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
      {{ $t('savedMessages.problem.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        While studying languages, I realized
        <span class="text-accent-red">
          there wasn’t a single website for reading news and articles from
          various foreign sources;
        </span>
        each had to be searched separately. Additionally, notes with key
        vocabulary had to be stored elsewhere.
      </p>

      <p>
        After discussing this with other learners, I discovered many faced the
        same challenge. My conversation partners often spent considerable time
        searching for original articles.
      </p>

      <p class="project__bold-text !text-accent-red">
        That was reasonable to create a website featuring curated articles and
        news from different countries.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('savedMessages.hypothesis.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <ul class="project__list">
        <li><span>Language learners have a study plan.</span></li>
        <li><span>Most aim for a high level of proficiency.</span></li>
        <li>
          <span
            >Those taking classes don’t rely solely on their teacher’s
            materials; they also seek out their own resources.
          </span>
        </li>
        <li>
          <span>
            Respondents frequently look for audio and video sources to aid their
            studies.
          </span>
        </li>
        <li>
          <span>
            Learners seeking vocabulary beyond the B2 level often turn to news
            sources.
          </span>
        </li>
      </ul>

      <p>
        8 respondents, young people under 30 from Russia who studied languages
        when there were many online resources available. Their language
        proficiency is B2 or higher, and 60-70% work in fields unrelated to
        English. They are active internet users.
      </p>
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
      {{ $t('savedMessages.insights.title') }}
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
        {{ $t('savedMessages.insights.description') }}
      </p>

      <ul class="project__list">
        <li
          v-for="(item, i) in $tm('savedMessages.insights.items')"
          :key="i"
        >
          {{ $rt(item) }}
        </li>
      </ul>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('savedMessages.competitors.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('savedMessages.competitors.text') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('savedMessages.cjm.title') }}
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
      {{ $t('savedMessages.userFlow.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('savedMessages.userFlow.text') }}</p>
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
      {{ $t('savedMessages.usability.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('savedMessages.usability.p1') }}</p>

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
      {{ $t('savedMessages.ui.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('savedMessages.ui.text') }}</p>
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
