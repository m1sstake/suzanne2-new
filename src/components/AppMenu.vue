<template>
  <header class="app-menu__wrapper">
    <div
      class="app-menu__logo"
      @click="$router.push('/')"
    >
      {{ $t('name') }}
    </div>

    <IconEyes
      class="app-menu__square cursor-pointer"
      @click="$router.push('/')"
    />

    <div class="app-menu__items-wrapper">
      <component
        :is="item.to ? 'router-link' : 'a'"
        v-for="(item, i) in menuItems"
        :key="i"
        class="app-menu__item"
        :to="item.to"
        :href="item.link"
        :target="item.to ? '_self' : '_blank'"
      >
        {{ item.name }}
      </component>
    </div>
  </header>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import IconEyes from '@/assets/icons/IconEyes.svg';
import cvPDF from '@/assets/files/cv.pdf';

const { t } = useI18n();
const menuItems = computed(() => [
  { name: 'main', to: '/' },
  { name: t('menu.myCV'), link: cvPDF },
  { name: t('menu.aboutMe'), to: '/#about' },
  { name: t('menu.contact'), to: '/#contacts' },
]);
</script>
<style>
.app-menu__wrapper {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

.app-menu__square {
  position: absolute;
  width: 52px;
  height: 52px;
  left: 50%;
  top: 16%;
}

.app-menu__logo {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  cursor: pointer;
}

.app-menu__items-wrapper {
  display: flex;
  gap: 32px;
}

.app-menu__items-wrapper .app-menu__item {
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
