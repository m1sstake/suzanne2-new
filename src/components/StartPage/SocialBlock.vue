<template>
  <div class="social">
    <div class="social__title">So...</div>

    <div class="social__body">
      <div class="social__cv">
        <IconLogo class="social__icon" />
        <div class="social__block-txt">here’s my CV</div>

        <div class="social__img"></div>
      </div>
      <div class="social__info">
        <div class="social__info-item">
          <div class="social__info-text">email</div>
          <div class="social__info-text">sharanovasuzanna73@gmail.com</div>
          <div class="social__info-img"></div>
        </div>
        <div class="social__info-item">
          <div class="social__info-text">linkedin</div>
          <div class="social__info-text">open my linkedin profile</div>
          <div class="social__info-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconLogo from '@/assets/icons/logo.svg';
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
}

.social__img {
  height: 252px;
  width: 200px;
  background-color: var(--color-border-grey);
}

.social__info-img {
  width: 22px;
  height: 20px;
  background-color: var(--color-border-grey);
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
</style>
