<template>
  <div class="mobile-block">
    <div class="mobile-block__header">Syuzanna Sharanova, UX/UI Designer</div>

    <div class="mobile-block__body">
      <IconEyes class="mobile-block__icon" />

      <div class="mobile-block__body-title">
        Mobile Version <br />
        in Progress
      </div>

      <div class="mobile-block__body-descr">
        Please use a desktop <br />
        for the best experience.
      </div>
    </div>
  </div>
</template>
<script setup>
import IconEyes from '@/assets/icons/IconEyes.svg';
</script>
<style>
.mobile-block {
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
  position: relative;
  height: 100%;
}

.mobile-block__header {
  display: flex;
  justify-content: center;
  color: var(--color-text-gray);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.mobile-block__icon {
  width: 52px;
  height: 52px;
}

.mobile-block__body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.mobile-block__body-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
}

.mobile-block__body-descr {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--color-text-gray);
  margin-top: var(--space-md);
}
</style>
