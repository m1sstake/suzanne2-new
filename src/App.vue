<template>
  <div class="wrapper">
    <AppMenu />
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue';
import Footer from '@/components/Footer.vue';
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
