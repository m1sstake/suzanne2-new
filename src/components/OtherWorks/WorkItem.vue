<template>
  <router-link
    :to="{ name: props.routeName }"
    class="work-item"
  >
    <div class="work-item__poster">
      <img
        v-if="props.poster"
        class="h-[221px] w-full"
        :src="props.poster"
        :alt="props.title"
      />
    </div>
    <div class="work-item__title">{{ props.title }}</div>

    <div class="work-item__bottom-wrap">
      <div class="work-item__description">Open this project</div>
      <RightArrow class="work-item__icon" />
    </div>
  </router-link>
</template>
<script setup>
import RightArrow from '@/assets/icons/RightArrow.svg';
const props = defineProps({
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  routeName: {
    type: String,
  },
});
</script>
<style>
.work-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-white);
  padding: 21px 22px;
  height: 393px;
  cursor: pointer;
}

.work-item__poster {
  max-height: 221px;
  width: 100%;
  background-color: var(--color-border-grey);
  border-radius: var(--border-radius-sm);
}

.work-item__title {
  color: var(--color-text);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-top: var(--space-sm);
}

.work-item__bottom-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
}

.work-item__description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}
</style>
