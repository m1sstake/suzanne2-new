<template>
  <div class="project-preview">
    <div class="project-preview__poster">
      <img
        v-if="props.image"
        :src="props.image"
        :alt="props.title"
      />
    </div>
    <div class="project-preview__info">
      <div class="project-preview__info-wrap">
        <div class="project-preview__title">{{ props.title }}</div>
        <div class="project-preview__description">
          <span v-html="props.description"></span>
        </div>
        <div class="project-preview__date">{{ props.date }}</div>
      </div>

      <div class="project-preview__tags">
        <span class="project-preview__tag-label"> i was responsible for </span>

        <div class="project__tags-list">
          <Tag
            v-for="(tag, i) in props.tags"
            :key="i"
            class="project__tag"
            :tag="tag"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Tag from '@/components/Tag.vue';

const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  image: String,
  date: String,
});
</script>

<style>
.project-preview {
  display: flex;
  gap: var(--space-xl);
  cursor: pointer;
}

.project-preview__poster {
  min-width: 716px;
  height: 528px;
  background-color: var(--color-border-grey);
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project-preview__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-preview__title {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.project-preview__info-wrap {
  display: flex;
  justify-content: flex-start;
  gap: var(--space-sm);
  flex-direction: column;
}

.project-preview__description,
.project-preview__date {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.project-preview__description {
  color: var(--color-text-gray);
  width: 95%;
}

.project-preview__tag-label {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.project-preview__tags {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.project__tags-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

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
