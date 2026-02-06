<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('graphic.roleLabel')"
    >
      <template #title>
        <span v-html="$t('graphic.title')"></span>
      </template>

      <template #about>
        {{ $t('graphic.about') }}
      </template>

      <template #time>{{ $t('graphic.time') }}</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('graphic.blendo.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('graphic.blendo.text') }}</p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-xl"
    >
      <img src="@/assets/images/graphic/blendo/blendo-1.png" />
    </div>

    <div
      v-motion-fade
      class="project__split-images my-md"
    >
      <div class="project__split-image">
        <img src="@/assets/images/graphic/blendo/blendo-2.png" />
      </div>
      <div class="project__split-image">
        <img src="@/assets/images/graphic/blendo/blendo-3.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__image"
    >
      <img src="@/assets/images/graphic/blendo/blendo-4.png" />
    </div>

    <div
      v-motion-fade
      class="project__image mt-md"
    >
      <img src="@/assets/images/graphic/blendo/blendo-5.png" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('graphic.raw.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p v-html="$t('graphic.raw.text')"></p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-xl"
    >
      <img src="@/assets/images/graphic/raw/raw-1.png" />
    </div>
    <div
      v-motion-fade
      class="project__split-images my-md"
    >
      <div class="project__split-image">
        <img src="@/assets/images/graphic/raw/raw-2.png" />
      </div>
      <div class="project__split-image">
        <img src="@/assets/images/graphic/raw/raw-3.png" />
      </div>
    </div>
    <div
      v-motion-fade
      class="project__image"
    >
      <img src="@/assets/images/graphic/raw/raw-4.png" />
    </div>
    <div
      v-motion-fade
      class="project__split-images my-md"
    >
      <div class="project__split-image">
        <img src="@/assets/images/graphic/raw/raw-5.png" />
      </div>
      <div class="project__split-image">
        <img src="@/assets/images/graphic/raw/raw-6.png" />
      </div>
    </div>

    <!--    <div class="project__subtitle">“Zdorovie na Ura” Pharmacy Branding</div>-->

    <!--    <div class="project__text">-->
    <!--      A Moscow-based pharmacy chain aimed at creating a light, modern, and-->
    <!--      approachable brand for a middle-aged and senior audiences. The branding-->
    <!--      stands out with a fresh turquoise color, breaking away from the typical-->
    <!--      green used by most Russian pharmacies, and features simple, friendly-->
    <!--      visuals designed to resonate with the target audience.-->
    <!--    </div>-->

    <!--    <div class="project__image mt-xl"></div>-->
    <!--    <div class="project__split-images my-md">-->
    <!--      <div class="project__split-image"></div>-->
    <!--      <div class="project__split-image"></div>-->
    <!--    </div>-->
    <!--    <div class="project__image"></div>-->

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
