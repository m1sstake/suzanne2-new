<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      role="Designer"
    >
      <template #title>Heylama AI </template>

      <template #about>
        Heylama AI is a mobile app from the Berlin startup Heylama that helps
        users learn foreign languages using AI. Heylama Pro is an app designed
        for language schools in Europe and the U.S., assisting students in
        reinforcing the language skills they acquire in class through
        interaction with AI. Made on React Native.
      </template>

      <template #role>
        Led UX/UI design for Heylama's Consumer and Business apps, from concept
        to launch on the App Store and Google Play. Maintained design system.
        Conducted UX researches. Actively participated in brainstorming sessions
        during the creation of new features. In the first five months, focused
        on app testing. All communication was conducted in English.
      </template>

      <template #time> March 2023 - January 2025</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__image project__xxxl-margin"
    >
      <img
        src="@/assets/images/heylama/intro-1.png"
        alt="intro-1"
      />
    </div>

    <div
      v-motion-fade
      class="project__split-images project__md-margin"
    >
      <div class="project__split-image">
        <img
          src="@/assets/images/heylama/intro-2.png"
          alt="intro-1"
        />
      </div>
      <div class="project__split-image">
        <img
          src="@/assets/images/heylama/intro-3.png"
          alt="intro-1"
        />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Project Overview
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        Heylama AI is an innovative language learning app designed to help users
        enhance their linguistic skills through personalized and interactive
        AI-driven methods.
      </p>

      <p>
        With features such as real-time conversation practice, instant grammar
        feedback, vocabulary building, role-play creation and progress tracking,
        Heylama AI offers a dynamic, engaging, and efficient way to learn new
        languages.
      </p>

      <span class="project__bold-text">
        I joined Heylama as the sole product designer during <br />
        the pivotal phase of launching.
      </span>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      My responsibilities
    </div>

    <div
      v-motion-fade
      class="heylama__tags"
    >
      <Tag
        v-for="(tag, i) in tags"
        :key="i"
        :tag="tag"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Personalization <br />
      and Self-Directed Learning
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">Process</div>

      <p>
        During researches we found that
        <span class="heylama__text-red">
          users want more control over their learning
        </span>
        , preferring to influence tasks and the overall process. To meet this
        need, we created tools for building custom role-play lessons and
        vocabulary cards. This needed to be designed alongside with ready-made
        courses and smart vocabulary suggestions during chats.
        <span class="heylama__text-red">
          Our goal was to balance ready-made and self-made content, without
          leaving users fully on their own.</span
        >
      </p>

      <div class="project__bold-title mt-xl">What we’ve done</div>

      <p>
        Conversational practice with AI, personalized vocabulary suggestions
        during chat, creator tools; integrated spaced repetition system to
        memorize vocabulary. Users can now create their own role-play lessons
        and vocabulary that matter most to them, making each session feel more
        personal and helpful.
      </p>
    </div>

    <div
      v-motion-fade
      class="heylama__images mt-xl h-[1084px]"
    >
      <div class="project__image h-full">
        <img
          src="@/assets/images/heylama/personalization-1.png"
          alt="personalization-1"
        />
      </div>
      <div class="flex flex-col box-border gap-md w-full">
        <div class="project__image h-[534px]">
          <img
            src="@/assets/images/heylama/personalization-2.png"
            alt="personalization-1"
          />
        </div>
        <div class="project__image h-[534px]">
          <img
            src="@/assets/images/heylama/personalization-3.png"
            alt="personalization-1"
          />
        </div>
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Memory and Retention
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">Process</div>

      <p>
        To improve long-term memory retention, we applied a spaced repetition
        technique. I worked closely with the product and engineering teams to
        integrate these methods into Heylama’s learning flow. My design focused
        on strategically scheduling review sessions and blending topics to
        create a natural, engaging learning experience. I ensured that reviews
        were seamlessly injected into conversation practice, so users could
        reinforce vocabulary and concepts as they progressed.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/memory-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/memory-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Real-Time Feedback and Suggestions
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">Process</div>

      <p>
        I integrated the design of a real-time vocabulary suggestions and
        grammar feedback into Heylama’s AI chat to help users correct errors
        instantly and get personalized vocabulary tailored to the conversation.
        The challenge was designing a seamless, non-intrusive system that
        encouraged learning without interrupting the flow and user’s focus.
        After a few iterations, we received excellent feedback that
        significantly increased download rates.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/real-time-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/heylama/real-time-2.png" />
      </div>
    </div>

    <!--    <div class="project__subtitle">Creative assets</div>-->

    <!--    <div class="project__text">-->
    <!--      <p>-->
    <!--        Since I was the sole designer on the team, I sometimes took on the role-->
    <!--        of a graphic designer and created images for App Store – slides and-->
    <!--        events. I manually edited AI generated images in Procreate to add the-->
    <!--        necessary text or elements. Our product went through significant changes-->
    <!--        from the beginning, and I believe I created around a hundred AI-->
    <!--        illustrations during this time.-->
    <!--      </p>-->
    <!--    </div>-->

    <!--    <div class="project__image mt-lg"></div>-->

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import Tag from '@/components/Tag.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';

const tags = [
  'Conceptualization and Planning',
  'Maintaining a Design System',
  'UX and UI consistency across the app',
  'Wireframes, prototypes, and high-fidelity mockups -> intuitive user interfaces',
  'Brainstorming sessions',
  'Collaboration with the product SEO, testers, and developers',
  'User interviews and usability testing',
  'Business English',
  'Consistently delivering my work on time',
  'Continuous Improvement',
];
</script>
<style>
.heylama__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  width: 90%;
}

.heylama__text-red {
  color: var(--color-accent-red);
}

.heylama__images {
  display: flex;
  gap: var(--space-md);
}

.heylama__spl-img {
  height: calc(100% - 8px);
}
</style>
