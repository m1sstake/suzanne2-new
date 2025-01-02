<template>
  <div class="start__intro">
    <img
      src="@/assets/images/photo.png"
      :alt="$t('name')"
      class="start__photo"
    />

    <div class="start__stats">
      <div class="start__stat">
        <span class="start__stat-title">3.5 years</span>
        <span class="start__stat-value">experience</span>
      </div>
      <div>
        <div class="start__stat">
          <span class="start__stat-title">Georgia</span>
          <span class="start__stat-value">currently based</span>
        </div>
      </div>
      <div>
        <div class="start__stat">
          <span class="start__stat-title">3</span>
          <span class="start__stat-value w-100">
            product companies <br />
            I’ve worked with
          </span>
        </div>
      </div>
    </div>

    <div class="start__info">
      <IconLogo class="start__logo" />

      <div class="start__info-title">Hi, I’m Susan, a Product Designer</div>

      <div class="start__info-description">
        <p>
          I'm 26 years old, based in Tbilisi, Georgia. I've worked <br />
          on russian and international digital products, and currently, <br />
          I'm a product designer at the Berlin ed-tech startup Heylama. <br />
        </p>

        <p>
          For me, design is all about creating smart, sustainable solutions
          <br />
          that make the world a more comfortable and visually appealing <br />
          place to live in.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconLogo from '@/assets/icons/logo.svg';
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
  gap: var(--space-lg);
  min-width: 139px;
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
  margin-bottom: var(--space-xl);
}

.start__info-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);

  p {
    margin-bottom: var(--space-xl);
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.start__logo {
  position: absolute;
  right: 0;
  margin-right: var(--space-xxl);
  top: 0;
}
</style>
