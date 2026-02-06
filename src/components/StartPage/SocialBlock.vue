<template>
  <div class="social">
    <div class="social__title">{{ $t('social.title') }}</div>

    <div class="social__body">
      <div
        class="social__cv"
        @click="linkToCV"
      >
        <div class="social__info-wrap">
          <div class="social__info-text">{{ $t('social.cv') }}</div>
          <IconExport class="social__info-img"></IconExport>
        </div>

        <img
          src="@/assets/images/mini-cv.jpg"
          alt="cv"
          class="social__img"
        />
      </div>
      <div class="social__info">
        <div
          class="social__info-item"
          @click="linkToEmail"
        >
          <div class="social__info-text">{{ $t('social.email') }}</div>
          <div class="social__info-wrap">
            <div class="social__info-text">
              {{ 's.su3anna@yandex.ru' }}
            </div>
            <IconExport class="social__info-img"></IconExport>
          </div>
        </div>
        <div
          class="social__info-item"
          @click="openLinkedinPage"
        >
          <div class="social__info-text">{{ $t('social.linkedin') }}</div>
          <div class="social__info-wrap">
            <div class="social__info-text">{{ $t('social.linkedinText') }}</div>
            <IconExport class="social__info-img"></IconExport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconExport from '@/assets/icons/IconExport.svg';
import cvPDF from '@/assets/files/cv.pdf';

function linkToEmail() {
  window.open('mailto:s.su3anna@yandex.ru', '_blank');
}

function openLinkedinPage() {
  window.open(
    'https://www.linkedin.com/in/suzanne-sharanova-b16563234/',
    '_blank',
  );
}

function linkToCV() {
  window.open(cvPDF, '_blank');
}
</script>
<style>
.social {
  margin-top: var(--space-xxxl);
  display: flex;
  width: 100%;
  flex-direction: column;
}

.social__body {
  width: 100%;
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.social__title {
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
}

.social__body {
  display: flex;
}

.social__info-item {
  display: flex;
  padding: var(--space-md);
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  background-color: var(--color-white);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--color-links-blue);
    transform: scale(1.015);
  }
}

.social__cv {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: var(--space-md);
  box-sizing: border-box;
  background-color: var(--color-white);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--color-links-blue);
    transform: scale(1.015);
  }
}

.social__img {
  max-height: 252px;
  width: 169px;
  background-color: var(--color-border-grey);
  border-radius: 4px;
}

.social__info-img {
  transform: translateY(1px);
  cursor: pointer;
}

.social__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.social__icon {
  position: absolute;
  right: 180px;
}

.social__info-wrap {
  display: flex;
  gap: var(--space-sm);
}
</style>
