<template>
  <div class="page__wrapper">
    <ProjectIntro role="Designer">
      <template #title>Saved Messages </template>

      <template #about>
        Heylama AI is a mobile app from the Berlin startup Heylama that helps
        users learn foreign languages using AI. Heylama Pro is an app designed
        for language schools in Europe and the U.S., assisting students in
        reinforcing the language skills they acquire in class through
        interaction with AI. Made on React Native. <br />
        Thanks to this project, I was hired to the Heylama app (also in the
        portfolio). It’s no surprise that this new project is similar in both
        color scheme and ed-tech direction.
      </template>

      <template #role>
        Led UX/UI design for Heylama's Consumer and Business apps, from concept
        to launch on the App Store and Google Play. Maintained design system.
        Conducted UX researches. Actively participated in brainstorming sessions
        during the creation of new features. In the first five months, focused
        on app testing. All communication was conducted in English.
      </template>

      <template #time> March 2023 - Now</template>
    </ProjectIntro>

    <div class="project__split-images project__xxxl-margin">
      <div class="project__split-image"></div>
      <div class="project__split-image"></div>
    </div>

    <div class="project__image project__md-margin"></div>

    <div class="project__subtitle">Problem and goals</div>

    <div class="project__text">
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

    <div class="project__subtitle">Hypothesis and interviews</div>

    <div class="project__text">
      <ul class="project__list">
        <li><span>Language learners have a study plan.</span></li>
        <li><span>Most aim for a high level of proficiency.</span></li>
        <li>
          <span>
            Those taking classes don’t rely solely on their teacher’s materials;
            they also seek out their own resources.
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

    <div class="project__image max-w-[832px] mt-xl"></div>

    <div class="project__subtitle">Interview insights</div>

    <div class="project__image"></div>

    <div class="project__text">
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

    <div class="project__subtitle">Competitors research</div>

    <div class="project__text">
      <p>
        From the interviews, I identified user pain points my service will
        address: finding relevant vocabulary and improving reading, listening,
        and vocabulary skills for various goals, including exams—all on one
        platform. I then analyzed competing services, their strengths, and their
        weaknesses in tackling these issues.
      </p>
    </div>

    <div class="project__subtitle">
      Customer Journey Map and Future Positioning
    </div>

    <div class="project__image mt-xl"></div>

    <div class="project__subtitle">User flow, Prototyping</div>

    <div class="project__text">
      <p>
        The main content on Saved Messages includes articles, news, and
        podcasts. On the content page, users can highlight any words or phrases
        and save them as notes on the site. They can then edit these notes,
        create lists, and print them.
      </p>
    </div>

    <div class="project__image mt-xl"></div>

    <div class="project__subtitle">Usability-testing</div>

    <div class="project__text">
      <p>
        Once the clickable prototype was ready, I conducted 8 usability testing
        sessions with potential users. I assigned them various tasks and
        observed how easily they could complete them.
      </p>
    </div>

    <div class="project__image mt-xl"></div>

    <div class="project__subtitle">UI Design</div>

    <div class="project__text">
      <p>
        I saw media content—news, articles, videos, podcasts—as a constant
        stream of "messages," fragments of knowledge shaping our view of the
        world. This inspired a design that combines elements of messaging apps
        with typographic nods to traditional print media for added credibility.
      </p>
    </div>

    <div class="project__image mt-xl"></div>

    <div class="project__split-images mt-xl w-full">
      <div class="project__image w-full h-full"></div>
      <div class="project__image w-full h-full"></div>
    </div>

    <div class="project__image mt-md"></div>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
<style></style>
