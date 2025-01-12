<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      role="Product Designer"
    >
      <template #title>Saved Messages </template>

      <template #about>
        Saved Messages is an educational tool for intermediate and advanced
        language learners to read original news and articles, save useful words
        and phrases, and export them. A pet project. <br />
        <br />
        Thanks to this project, I was hired by the Heylama app (also in my
        portfolio). It’s no surprise that this new project is similar in both
        color scheme and ed-tech focus.
      </template>

      <template #role>
        UX research (in-depth interviews, competitor analysis, CJM, user flow,
        usability testing), wireframing, prototyping, site architecture, design.
      </template>

      <template #time> March 2022 - June 2022</template>
    </ProjectIntro>

    <div
      v-motion-fade
      class="project__split-images project__xxxl-margin"
    >
      <div class="project__split-image">
        <img src="@/assets/images/saved-messages/intro/intro-pic-1.png" />
      </div>
      <div class="project__split-image">
        <img src="@/assets/images/saved-messages/intro/intro-pic-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__image project__md-margin"
    >
      <img src="@/assets/images/saved-messages/intro/intro-pic-3.png" />
    </div>

    <div
      v-motion-fade
      class="project__image project__md-margin"
    >
      <img src="@/assets/images/saved-messages/intro/intro-pic-4.png" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Problem and goals
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        While studying languages, I realized
        <span class="text-accent-red">
          there wasn’t a single website for reading news and articles from
          various foreign sources;
        </span>
        each had to be searched separately. Additionally, notes with key
        vocabulary had to be stored elsewhere.
      </p>

      <p>
        After discussing this with other learners, I discovered many faced the
        same challenge. My conversation partners often spent considerable time
        searching for original articles.
      </p>

      <p class="project__bold-text !text-accent-red">
        That was reasonable to create a website featuring curated articles and
        news from different countries.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Hypothesis and interviews
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <ul class="project__list">
        <li><span>Language learners have a study plan.</span></li>
        <li><span>Most aim for a high level of proficiency.</span></li>
        <li>
          <span
            >Those taking classes don’t rely solely on their teacher’s
            materials; they also seek out their own resources.
          </span>
        </li>
        <li>
          <span>
            Respondents frequently look for audio and video sources to aid their
            studies.
          </span>
        </li>
        <li>
          <span>
            Learners seeking vocabulary beyond the B2 level often turn to news
            sources.
          </span>
        </li>
      </ul>

      <p>
        8 respondents, young people under 30 from Russia who studied languages
        when there were many online resources available. Their language
        proficiency is B2 or higher, and 60-70% work in fields unrelated to
        English. They are active internet users.
      </p>
    </div>

    <div
      v-motion-fade
      class="saved__interviews max-w-[832px] mt-xl"
    >
      <img src="@/assets/images/saved-messages/interview/interview-1.gif" />
      <img src="@/assets/images/saved-messages/interview/interview-2.gif" />
      <img src="@/assets/images/saved-messages/interview/interview-3.gif" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Interview insights
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p class="font-normal">
        I collected all the insights in Notion, labeling them green if the
        answer <br />
        supported the hypothesis and red if it disproved the hypothesis.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-md"
    >
      <img
        src="@/assets/images/saved-messages/interviews.jpg"
        class="cursor-zoom-in"
        @click="showImg(0, 'interview')"
      />
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        <span class="font-semibold">
          At the end of the table, I outlined user challenges in advanced
          language learning and solutions for them.
        </span>
        This will help with competitor analysis and refining my product.
      </p>

      <ul class="project__list">
        <li>
          Both students and teachers use news articles for learning; however,
          not everyone finds news engaging, with many preferring articles.
        </li>
        <li>
          News is typically accessed at higher language levels (B1-B2 and
          above).
        </li>
        <li>
          Respondents tend to watch rather than read the news, while teachers
          usually provide news in text format.
        </li>
        <li>
          Many high-level English learners aspire to move abroad and use English
          in everyday life, often requiring language certifications.
        </li>
        <li>
          Half of the respondents use their phones for learning, while the other
          half use computers or laptops.
        </li>
      </ul>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Competitors research
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        From the interviews, I identified user pain points my service will
        address: finding relevant vocabulary and improving reading, listening,
        and vocabulary skills for various goals, including exams—all on one
        platform. I then analyzed competing services, their strengths, and their
        weaknesses in tackling these issues.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Customer Journey Map and Future Positioning
    </div>

    <div
      v-motion-fade
      class="project__image h-[605px] mt-xl"
    >
      <img
        src="@/assets/images/saved-messages/cjm.jpg"
        class="cursor-zoom-in"
        @click="showImg(0, 'cjm')"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      User flow, Prototyping
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        The main content on Saved Messages includes articles, news, and
        podcasts. On the content page, users can highlight any words or phrases
        and save them as notes on the site. They can then edit these notes,
        create lists, and print them.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__image mt-xl"
    >
      <img
        src="@/assets/images/saved-messages/user-flow.png"
        class="cursor-zoom-in"
        @click="showImg(0, 'flow')"
      />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Usability-testing
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        Once the clickable prototype was ready, I conducted 8 usability testing
        sessions with potential users. I assigned them various tasks and
        observed how easily they could complete them.
      </p>

      <p>
        After the testing, I reviewed and categorized feedback, noting usability
        issues. <br />
        I ranked problems by impact on user experience, implemented changes and
        <br />
        conducted a short follow-up testing. I also documented a few insights
        for future <br />
        design decisions.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__image w-[700px] h-[389px] mt-xl"
    >
      <img src="@/assets/images/saved-messages/user-testing.png" />
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      UI Design
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <p>
        I saw media content—news, articles, videos, podcasts—as a constant
        stream of "messages," fragments of knowledge shaping our view of the
        world. This inspired a design that combines elements of messaging apps
        with typographic nods to traditional print media for added credibility.
      </p>
    </div>

    <div
      v-motion-fade
      class="project__split-images mt-xl w-full"
    >
      <div class="project__image w-full h-full">
        <img src="@/assets/images/saved-messages/design/design-1.png" />
      </div>
      <div class="project__image w-full h-full">
        <img src="@/assets/images/saved-messages/design/design-2.png" />
      </div>
    </div>

    <div
      v-motion-fade
      class="project__image mt-md"
    >
      <img src="@/assets/images/saved-messages/design/design-3.png" />
    </div>

    <div
      v-motion-fade
      class="project__image h-[547px] mt-md"
    >
      <img src="@/assets/images/saved-messages/design/design-4.png" />
    </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="galleryImages"
      :index="indexRef"
      @hide="onHide"
    />

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
import interviewImageMax from '@/assets/images/saved-messages/interviews.jpg';
import cjmImageMax from '@/assets/images/saved-messages/cjm.jpg';
import userFlowImageMax from '@/assets/images/saved-messages/user-flow.png';
import { ref, computed } from 'vue';

const visibleRef = ref(false);
const indexRef = ref(0);

const galleryMode = ref(null);

const interviewImages = computed(() => [interviewImageMax]);

const cjmImages = computed(() => [cjmImageMax]);

const userFlowImages = computed(() => [userFlowImageMax]);

const galleryImages = computed(() => {
  return {
    interview: interviewImages.value,
    cjm: cjmImages.value,
    flow: userFlowImages.value,
  }[galleryMode.value];
});

const showImg = (index, mode) => {
  indexRef.value = index;
  galleryMode.value = mode;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>
<style>
.saved__interviews {
  display: flex;

  img {
    width: 35%;
    height: 302px;
  }
}
</style>
