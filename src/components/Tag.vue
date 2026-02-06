<template>
  <div class="project__tag">
    <div class="project__tag-inner">
      {{ props.tag }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
<style>
.project__tag-inner {
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-border-grey);
  border-radius: 32px;
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  display: inline-block;
}
</style>
