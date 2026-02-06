<template>
  <div class="start__intro">
    <img
      src="@/assets/images/main-avatar.png"
      :alt="$t('name')"
      class="start__photo"
    />

    <div class="start__stats">
      <div class="start__stat">
        <span class="start__stat-title">{{
          $t('intro.stats.experience')
        }}</span>
        <span class="start__stat-value">{{
          $t('intro.stats.experienceLabel')
        }}</span>
      </div>
      <div>
        <div class="start__stat">
          <span class="start__stat-title">{{
            $t('intro.stats.location')
          }}</span>
          <span class="start__stat-value">{{
            $t('intro.stats.locationLabel')
          }}</span>
        </div>
      </div>
      <div>
        <div class="start__stat">
          <span class="start__stat-title">{{
            $t('intro.stats.companies')
          }}</span>
          <span
            class="start__stat-value w-100"
            v-html="$t('intro.stats.companiesLabel')"
          ></span>
        </div>
      </div>
    </div>

    <div class="start__info">
      <IconFlower class="start__logo" />

      <div
        class="start__info-title"
        v-html="$t('intro.title')"
      ></div>

      <div class="start__info-description">
        <p v-html="$t('intro.description.p1')"></p>

        <p v-html="$t('intro.description.p2')"></p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconFlower from '@/assets/icons/main-page/IconFlower.svg';
</script>
<style>
.start__intro {
  display: flex;
  gap: var(--space-xl);
  position: relative;
}

.start__stats {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 28px;
  min-width: 139px;
  position: relative;
}

.start__stat {
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  gap: var(--space-xs);
}

.start__stat-title {
  font-size: 32px;
  font-weight: 500;
  line-height: 32px;
}

.start__stat-value {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);
}

.start__info {
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.start__info-title {
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: var(--space-lg);
}

.start__info-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);

  p {
    white-space: nowrap;
    margin-bottom: var(--space-md);
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.start__logo {
  position: absolute;
  right: -120px;
  margin-right: var(--space-xxl);
  top: -20px;
}

.start__photo {
  width: 352px;
  height: 386px;
}
</style>
