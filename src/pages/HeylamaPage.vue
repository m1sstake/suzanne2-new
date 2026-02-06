<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('heylama.roleLabel')"
    >
      <template #title>{{ $t('heylama.title') }}</template>

      <template #about>
        {{ $t('heylama.about') }}
      </template>

      <template #role>
        {{ $t('heylama.role') }}
      </template>

      <template #time>{{ $t('heylama.time') }}</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/heylama/intro-1.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__split-images project__md-margin"
    >
      <div class="project__split-image">
        <img
          src="@/assets/images/heylama/intro-2.png"
          alt="intro-1"
        />
      </div>
      <div class="project__split-image">
        <img
          src="@/assets/images/heylama/intro-3.png"
          alt="intro-1"
        />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('heylama.overview.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('heylama.overview.p1') }}</p>

      <p>{{ $t('heylama.overview.p2') }}</p>

      <span
        class="project__bold-text"
        v-html="$t('heylama.overview.bold')"
      ></span>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('heylama.responsibilities.title') }}
    </div>

    <div
      v-motion-fade
      class="heylama__tags"
    >
      <Tag
        v-for="(tag, i) in tags"
        :key="i"
        :tag="tag"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      <span v-html="$t('heylama.personalization.title')"></span>
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">
        {{ $t('heylama.personalization.process.title') }}
      </div>

      <p v-html="$t('heylama.personalization.process.text')"></p>

      <div class="project__bold-title mt-xl">
        {{ $t('heylama.personalization.done.title') }}
      </div>

      <p>{{ $t('heylama.personalization.done.text') }}</p>
    </div>

    <div
      v-motion-fade
      class="heylama__images mt-xl h-[1084px]"
    >
      <div class="project__image h-full">
        <img
          src="@/assets/images/heylama/personalization-1.png"
          alt="personalization-1"
        />
      </div>
      <div class="flex flex-col box-border gap-md w-full">
        <div class="project__image h-[534px]">
          <img
            src="@/assets/images/heylama/personalization-2.png"
            alt="personalization-1"
          />
        </div>
        <div class="project__image h-[534px]">
          <img
            src="@/assets/images/heylama/personalization-3.png"
            alt="personalization-1"
          />
        </div>
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('heylama.memory.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">
        {{ $t('heylama.memory.process.title') }}
      </div>

      <p>{{ $t('heylama.memory.process.text') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/memory-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/memory-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('heylama.realTime.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">
        {{ $t('heylama.realTime.process.title') }}
      </div>

      <p>{{ $t('heylama.realTime.process.text') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/real-time-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/real-time-2.png" />
      </div>
    </div>

    <!--    <div class="project__subtitle">Creative assets</div>-->

    <!--    <div class="project__text">-->
    <!--      <p>-->
    <!--        Since I was the sole designer on the team, I sometimes took on the role-->
    <!--        of a graphic designer and created images for App Store – slides and-->
    <!--        events. I manually edited AI generated images in Procreate to add the-->
    <!--        necessary text or elements. Our product went through significant changes-->
    <!--        from the beginning, and I believe I created around a hundred AI-->
    <!--        illustrations during this time.-->
    <!--      </p>-->
    <!--    </div>-->

    <!--    <div class="project__image mt-lg"></div>-->

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="js">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import Tag from '@/components/Tag.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { tm, rt } = useI18n();

const tags = computed(() =>
  tm('heylama.responsibilities.tags').map((tag) => rt(tag)),
);
</script>
<style>
.heylama__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  width: 90%;
}

.heylama__text-red {
  color: var(--color-accent-red);
}

.heylama__images {
  display: flex;
  gap: var(--space-md);
}

.heylama__spl-img {
  height: calc(100% - 8px);
}
</style>
