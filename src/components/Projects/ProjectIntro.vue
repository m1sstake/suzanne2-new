<template>
  <div class="project-intro">
    <div class="project-intro__title"><slot name="title" /></div>
    <div class="project-intro__info">
      <div class="project-intro__about">
        <div class="project-intro__about-title">{{ $t('projectIntro.about') }}</div>
        <div class="project-intro__about-description">
          <slot name="about" />
        </div>
      </div>
      <div class="project-intro__role">
        <div class="project-intro__role-title">{{ $t('projectIntro.role') }}</div>
        <div class="project-intro__role-txt">{{ props.role }}</div>
        <div
          v-if="$slots.role"
          class="project-intro__about-description"
        >
          <slot name="role" />
        </div>
        <div class="project-intro__about-time">
          <slot name="time" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  role: {
    type: String,
    required: true,
  },
});
</script>
<style>
.project-intro {
  display: flex;
  align-items: flex-start;
}

.project-intro__title {
  color: var(--color-accent-red);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  width: 100%;
}

.project-intro__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.project-intro__about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.project-intro__about-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
}

.project-intro__about-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);
}

.project-intro__role {
  margin-top: var(--space-xl);
  gap: var(--space-md);
  display: flex;
  flex-direction: column;
}

.project-intro__role-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.project-intro__role-txt {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.project-intro__about-time {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);
}
</style>
