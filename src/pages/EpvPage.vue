<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      :role="$t('epv.roleLabel')"
    >
      <template #title>{{ $t('epv.title') }}</template>
      <template #about>{{ $t('epv.about') }}</template>
      <template #role>{{ $t('epv.role') }}</template>
      <template #time>{{ $t('epv.time') }}</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/epv/intro_1.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      {{ $t('epv.hmw.title') }}
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>{{ $t('epv.hmw.p1') }}</p>

      <div class="project__bold-title">
        {{ $t('epv.hmw.subtitle') }}
      </div>

      <p v-html="$t('epv.hmw.p2')"></p>
      <p v-html="$t('epv.hmw.p3')"></p>
    </div>

    <div class="project__image project__xxxl-margin">
      <img
        src="@/assets/images/epv/intro_2.png"
        alt="intro-1"
      />
    </div>

    <div class="project__subtitle">
      {{ $t('epv.concept.title') }}
    </div>

    <div class="project__text">
      <div class="project__bold-title">
        {{ $t('epv.concept.discuss') }}
      </div>

      <p>{{ $t('epv.concept.discuss_p1') }}</p>
      <p>{{ $t('epv.concept.discuss_p2') }}</p>

      <div class="project__bold-title">
        {{ $t('epv.concept.calendar') }}
      </div>

      <p>{{ $t('epv.concept.calendar_p1') }}</p>
      <p>{{ $t('epv.concept.calendar_p2') }}</p>
    </div>

    <div class="project__image project__xxxl-margin">
      <img
        src="@/assets/images/epv/intro_3.png"
        alt="intro-1"
      />
    </div>

    <div class="project__subtitle">
      {{ $t('epv.concept.title') }}
    </div>

    <div class="project__text">
      <div class="project__bold-title">
        {{ $t('epv.concept.sport') }}
      </div>

      <p v-html="$t('epv.concept.sport_p1')"></p>
      <p v-html="$t('epv.concept.sport_p2')"></p>

      <div class="project__bold-title mt-lg">
        {{ $t('epv.concept.fashionable') }}
      </div>

      <p v-html="$t('epv.concept.fashionable_p1')"></p>
      <p v-html="$t('epv.concept.fashionable_p2')"></p>
    </div>

    <div class="project__image project__xxxl-margin">
      <img
        src="@/assets/images/epv/intro_4.png"
        alt="intro-1"
      />
    </div>

    <div class="project__subtitle">
      {{ $t('epv.result.title') }}
    </div>

    <div class="project__text">
      <p v-html="$t('epv.result.p1')"></p>
    </div>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="js">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
