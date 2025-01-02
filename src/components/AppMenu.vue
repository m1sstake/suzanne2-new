<template>
  <header class="app-menu__wrapper">
    <div class="app-menu__logo">
      {{ $t('name') }}
    </div>

    <div
      class="app-menu__square cursor-pointer"
      @click="$router.push('/')"
    ></div>

    <div class="app-menu__items-wrapper">
      <router-link
        v-for="(item, i) in menuItems"
        :key="i"
        class="app-menu__item"
        :to="item.to"
      >
        {{ item.name }}
      </router-link>
    </div>
  </header>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();
const menuItems = computed(() => [
  { name: 'main', to: '/' },
  { name: t('menu.aboutMe'), to: '/#about' },
  { name: t('menu.myCV') },
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
}

.app-menu__square {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 50%;
  background-color: var(--color-text);
}

.app-menu__logo {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
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
    color: var(--color-accent-red);
  }
}
</style>
