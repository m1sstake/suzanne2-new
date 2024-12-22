<template>
  <div class="page__wrapper">
    <ProjectIntro role="Graphic Designer, Illustartor">
      <template #title
        >Graphic Design <br />
        Projects
      </template>

      <template #about>
        Various projects I worked on as a designer and illustrator. Many of them
        were freelance or personal projects created to practice composition,
        forms, shapes, and color.
      </template>

      <template #time> March 2023 - Now</template>
    </ProjectIntro>

    <div class="project__subtitle">Blendo – Perfume Festival</div>

    <div class="project__text">
      Blendo Perfume Festival is an event for fragrance enthusiasts and those
      seeking personalized scents that reflect their unique story and style. The
      event targets men and women aged 25-50, with middle to high income, who
      are willing to invest in niche fragrances. The brand's goal is to inspire
      exploration and discovery.
    </div>

    <div class="project__image mt-xl"></div>

    <div class="project__split-images my-md">
      <div class="project__split-image"></div>
      <div class="project__split-image"></div>
    </div>

    <div class="project__image"></div>

    <div class="project__subtitle">RAW – Concept Beauty Salon</div>

    <div class="project__text">
      <p>
        A conceptual beauty salon located in the city forest, "Raw" emphasizes
        the natural essence of human beauty. Warm, nature-inspired visuals and
        organic, imperfect illustration forms convey the salon's core values:
        empathy, authenticity, and freedom. The message: "You are naturally
        beautiful." <br />
        The visual identity is centered around a strand of human hair, freshly
        cut by a stylist.
      </p>
    </div>

    <div class="project__image mt-xl"></div>
    <div class="project__split-images my-md">
      <div class="project__split-image"></div>
      <div class="project__split-image"></div>
    </div>
    <div class="project__image"></div>
    <div class="project__split-images my-md">
      <div class="project__split-image"></div>
      <div class="project__split-image"></div>
    </div>

    <div class="project__subtitle">“Zdorovie na Ura” Pharmacy Branding</div>

    <div class="project__text">
      A Moscow-based pharmacy chain aimed at creating a light, modern, and
      approachable brand for a middle-aged and senior audiences. The branding
      stands out with a fresh turquoise color, breaking away from the typical
      green used by most Russian pharmacies, and features simple, friendly
      visuals designed to resonate with the target audience.
    </div>

    <div class="project__image mt-xl"></div>
    <div class="project__split-images my-md">
      <div class="project__split-image"></div>
      <div class="project__split-image"></div>
    </div>
    <div class="project__image"></div>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
