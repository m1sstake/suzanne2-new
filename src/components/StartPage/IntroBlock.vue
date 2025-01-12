<template>
  <div class="start__intro">
    <img
      src="@/assets/images/main-avatar.png"
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
      <IconFlower class="start__logo" />

      <div class="start__info-title">Hi, I’m Susan, a UX/UI Designer</div>

      <div class="start__info-description">
        <p>
          Hi, I’m Susan, a 26-year-old UX/UI designer from Tbilisi, Georgia.
          <br />
          With experience in both international and Russian markets, I’ve worked
          <br />
          across startups and larger companies.
        </p>

        <p>
          I specialize in creating intuitive, high-impact designs that drive
          user <br />
          engagement and business growth. My process is data-driven, focused
          <br />
          on user research and testing to ensure the best outcomes. I adapt
          <br />
          quickly to challenges and deliver scalable solutions.
        </p>
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
