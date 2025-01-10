<template>
  <MobileBlock v-if="isMobile" />
  <template v-else>
    <div class="wrapper">
      <AppMenu />
      <router-view></router-view>
    </div>
    <Footer />
  </template>
</template>
<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue';
import Footer from '@/components/Footer.vue';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import MobileBlock from '@/components/MobileBlock.vue';

const { width } = useWindowSize();

const isMobile = computed(() => width.value < 1280);
</script>
<style>
body {
  width: 100%;
  min-height: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-helvetica);
  box-sizing: border-box;
}
.wrapper {
  height: 100%;
  min-height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
}
</style>
