<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('hse.roleLabel')"
    >
      <template #title>
        <span v-html="$t('hse.title')"></span>
      </template>

      <template #about>
        {{ $t('hse.about') }}
      </template>

      <template #role>
        {{ $t('hse.role') }}
      </template>

      <template #time>{{ $t('hse.time') }}</template>
    </ProjectIntro>

    <video
      v-motion-fade
      src="@/assets/images/hse/2359-1.mp4"
      class="border-r-md mt-xxxl"
      controls
      autoplay
      loop
    ></video>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('hse.example.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">
        {{ $t('hse.example.nameAndRoles.title') }}
      </div>

      <p>{{ $t('hse.example.nameAndRoles.text') }}</p>

      <div class="project__bold-title mt-xl">
        {{ $t('hse.example.userStory.title') }}
      </div>

      <p v-html="$t('hse.example.userStory.text')"></p>
      <p v-html="$t('hse.example.userStory.p2')"></p>

      <div class="project__bold-title mt-xl">
        {{ $t('hse.example.elements.title') }}
      </div>

      <ul class="project__list">
        <li
          v-for="(item, i) in $tm('hse.example.elements.items')"
          :key="i"
        >
          <span>{{ $rt(item) }}</span>
        </li>
      </ul>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('hse.approach.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text w-[65%]"
    >
      <p>{{ $t('hse.approach.text') }}</p>
    </div>

    <video
      v-motion-fade
      src="@/assets/images/hse/2359-2.mp4"
      class="border-r-md mt-xl"
      controls
      autoplay
      loop
    ></video>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
