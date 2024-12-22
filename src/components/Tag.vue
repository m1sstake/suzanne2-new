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
  border-radius: 4px;
  border: 0.5px solid var(--color-border-grey);
  padding: var(--space-xs, 4px) var(--space-sm, 8px);
  text-align: left;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  display: inline-block;
}
</style>
