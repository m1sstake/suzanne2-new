<template>
  <div class="page__wrapper">
    <ProjectIntro
      v-motion-fade
      role="Product Designer"
    >
      <template #title>
        UX Solutions <br />
        for HSE Lyceum
      </template>

      <template #about>
        In this Higher School of Economics project, I designed user interfaces
        as part of a large design system. My tasks often included adding new
        sections, pages, or features, which needed thoughtful analysis before
        starting the design.
      </template>

      <template #role>
        Improved website interfaces, designed interactions for new website
        sections, created design solutions to enhance usability
      </template>

      <template #time>June 2021 - January 2022</template>
    </ProjectIntro>

    <video
      v-motion-fade
      src="@/assets/images/hse/2359-1.mp4"
      class="border-r-md mt-xxxl"
      controls
      autoplay
      loop
    ></video>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      Example task
    </div>

    <div
      v-motion-fade
      class="project__text"
    >
      <div class="project__bold-title">Name and Roles</div>

      <p>
        Presentation of Teacher’s Feedback for a Student. User is any Staff
        Member.
      </p>

      <div class="project__bold-title mt-xl">User Story</div>

      <p>
        <span class="font-bold">As a</span> staff member,<br />
        <span class="font-bold"> I want to </span> provide feedback on any
        student,<br />
        <span class="font-bold">so that</span> mentors can review it to support
        their students.
      </p>
      <p>
        Mentors see a student’s feedback as a top summary and a
        reverse-chronological feed. <br />
        Any staff member can add feedback for any student.
      </p>

      <div class="project__bold-title mt-xl">Elements to include</div>

      <ul class="project__list">
        <li><span>An indicator showing if an feedback is new.</span></li>
        <li><span>An indicator for important feedback</span></li>
        <li>
          <span> The full text, plus edit, delete options </span>
        </li>
        <li>
          <span>
            Previews of attached files with download links, if any are available
          </span>
        </li>
        <li>
          <span>
            An input field allowing the curator to add private notes
          </span>
        </li>
        <li>
          <span>
            The status changes from "New" to "Viewed" once the page is accessed
          </span>
        </li>
      </ul>
    </div>

    <div
      v-motion-fade
      class="project__subtitle"
    >
      My approach
    </div>

    <div
      v-motion-fade
      class="project__text w-[65%]"
    >
      <p>
        I focused on understanding the needs of curators and staff, organizing
        information in a clear hierarchy—with quick actions in the top section
        and detailed insights in a chronological feed—and ensuring intuitive
        interactions, such as clear indicators and easy-to-edit entries. I also
        added features like private notes for curators to support
        personalization. My goal was to make the workflow as smooth and
        accessible as possible, ensuring I don’t break the patterns users got
        used to.
      </p>
    </div>

    <video
      v-motion-fade
      src="@/assets/images/hse/2359-2.mp4"
      class="border-r-md mt-xl"
      controls
      autoplay
      loop
    ></video>

    <OtherWorks class="mt-xxxxl" />
  </div>
</template>
<script setup lang="ts">
import ProjectIntro from '@/components/Projects/ProjectIntro.vue';
import OtherWorks from '@/components/OtherWorks/OtherWorks.vue';
</script>
