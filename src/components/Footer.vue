<template>
  <footer class="footer">
    <div class="footer__inner">
      <div
        class="footer-person"
        @click="$router.push('/')"
      >
        <div class="footer-person__img">
          <img
            src="@/assets/images/footer-picture.png"
            alt="Syuzanna"
          />
        </div>

        <div class="footer-person__wrapper">
          <div class="footer-person__title">{{ $t('name') }}</div>

          <div class="footer-person__subtitle">{{ $t('footer.subtitle') }}</div>
        </div>
      </div>

      <div class="footer-menu">
        <!--        <template-->
        <!--          v-for="(item, i) in menuItems"-->
        <!--          :key="i"-->
        <!--        >-->
        <!--          -->
        <!--        </template>-->
        <component
          :is="item.to ? 'router-link' : 'a'"
          v-for="(item, i) in menuItems"
          :key="i"
          class="footer-menu__item"
          :to="item.to"
          :href="item.link"
          :target="item.to ? '_self' : '_blank'"
        >
          {{ item.name }}
        </component>
      </div>

      <div class="footer-copyright">
        <IconEyes class="footer-copyright__image" />

        <div class="footer-copyright__text">{{ $t('footer.copyright') }}</div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import IconEyes from '@/assets/icons/IconEyes.svg';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import cvPDF from '@/assets/files/cv.pdf';

const { t } = useI18n();
const menuItems = computed(() => [
  { name: t('menu.main'), to: '/' },
  { name: t('menu.myCV'), link: cvPDF },
  { name: t('menu.aboutMe'), to: '/#about' },
  { name: t('menu.contact'), to: '/#contacts' },
]);
</script>

<style>
.footer {
  background-color: var(--color-white);
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xxl) 80px;
  color: var(--color-text);
  box-sizing: border-box;
}

.footer-person {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.footer-person__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-sm);
}

.footer-person__img {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: var(--color-border-grey);
}

.footer-person__title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}

.footer-person__subtitle {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.footer-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: var(--space-xl);
}

.footer-copyright {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-sm);
}

.footer-copyright__image {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.footer-menu__item {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--color-links-blue);
  }
}
</style>
