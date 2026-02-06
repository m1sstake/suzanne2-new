<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('gidHub.roleLabel')"
    >
      <template #title>{{ $t('gidHub.title') }}</template>
      <template #about>{{ $t('gidHub.about') }}</template>
      <template #role>{{ $t('gidHub.role') }}</template>
      <template #time>{{ $t('gidHub.time') }}</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/gid-hub/intro_1.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('gidHub.approach.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text gid-hub__text-gap"
    >
      <p>{{ $t('gidHub.approach.p1') }}</p>
      <p>{{ $t('gidHub.approach.p2') }}</p>
      <p>{{ $t('gidHub.approach.p3') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/gid-hub/intro_2.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('gidHub.difficulties.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text gid-hub__text-gap"
    >
      <p>{{ $t('gidHub.difficulties.p1') }}</p>
      <p>{{ $t('gidHub.difficulties.p2') }}</p>
      <p>{{ $t('gidHub.difficulties.p3') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/gid-hub/intro_3.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('gidHub.results.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text gid-hub__text-gap"
    >
      <p>{{ $t('gidHub.results.p1') }}</p>
      <p>{{ $t('gidHub.results.p2') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__split-images project__xxxl-margin"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/gid-hub/intro_4.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/gid-hub/intro_5.png" />
      </div>
    </div>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="js">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
<style>
.gid-hub__text-gap {
  gap: var(--space-md);
}
</style>
