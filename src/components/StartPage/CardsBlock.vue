<template>
  <div
    id="about"
    class="cards"
  >
    <div class="cards__title">
      Why Working with Me <br />
      Feels Easy

      <StartArrow
        ref="svgEl"
        class="cards__icon"
      />
    </div>

    <div class="cards__body">
      <div class="cards__item">
        <IconHeart class="cards__item-icon" />

        <div class="cards__item-title">I'm Developer-Friendly</div>

        <div class="cards__item-description">
          I create Figma layouts that minimize questions from developers.
        </div>
      </div>
      <div class="cards__item">
        <IconBrain class="cards__item-icon" />

        <div class="cards__item-title">
          I'm Proactive <br />
          in the Ideation Process
        </div>

        <div class="cards__item-description">
          I offer creative ideas and always aiming <br />
          to improve the product.
        </div>
      </div>
      <div class="cards__item">
        <IconFinger class="cards__item-icon" />

        <div class="cards__item-title">I Don't Point Fingers</div>

        <div class="cards__item-description">
          If I make a mistake (happens to everyone),<br />
          I own up to it and work to fix it without blaming anybody.
        </div>
      </div>
      <div class="cards__item">
        <IconTicket class="cards__item-icon" />

        <div class="cards__item-title">I Create Well-Structured Tickets</div>

        <div class="cards__item-description">
          My tickets for design decisions are clear and easy to understand.
        </div>
      </div>
      <div class="cards__item">
        <IconQuestion class="h-[57px]" />

        <div class="cards__item-title">
          I Never Leave <br />
          Questions Unresolved
        </div>

        <div class="cards__item-description">
          Staying on the same page with colleagues is crucial.
        </div>
      </div>
      <div class="cards__item">
        <IconWatch class="cards__item-icon" />

        <div class="cards__item-title">I Deliver Work on Time</div>

        <div class="cards__item-description">
          I hate being late—whether it's for friends meetings or work deadlines.
        </div>
      </div>
    </div>

    <div class="cards__transform-wrap">
      <div class="cards__item cards__item-transform">
        <IconGirl />

        <div class="cards__item-title">I’m Just Nice</div>

        <div class="cards__item-description !text-white">
          I have a pretty good sense of humor <br />
          and am an easy-going person to talk to.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import StartArrow from '@/assets/icons/StartArrow.svg';
import IconHeart from '@/assets/icons/main-page/IconHeart.svg';
import IconBrain from '@/assets/icons/main-page/IconBrain.svg';
import IconFinger from '@/assets/icons/main-page/IconFinger.svg';
import IconTicket from '@/assets/icons/main-page/IconTicket.svg';
import IconQuestion from '@/assets/icons/main-page/IconQuestion.svg';
import IconWatch from '@/assets/icons/main-page/IconWatch.svg';
import IconGirl from '@/assets/icons/main-page/IconGirl.svg';

import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const svgEl = ref(null);

function animateArrow() {
  if (!svgEl.value) {
    return;
  }

  svgEl.value.$el.setAttribute('class', 'active cards__icon');
}

const { stop } = useIntersectionObserver(svgEl, ([entry]) => {
  if (entry.isIntersecting) {
    animateArrow();
    stop();
  }
});
</script>
<style>
.cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--space-xxxl);
}

.cards__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.cards__title {
  margin-bottom: var(--space-xxl);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;

  position: relative;
}

.cards__item-circle {
  background-color: var(--color-accent-red);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.cards__item {
  background-color: var(--color-white);
  border-radius: 4px;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  height: 240px;
  align-items: flex-start;
  box-sizing: border-box;
  justify-content: space-between;
}

.cards__item-title {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.cards__item-description {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-text-gray);
}

.cards__item-link {
  color: var(--color-links-blue);
}

.cards__transform-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}

.cards__item-transform {
  width: 364px;
  height: 205px;
  background-color: var(--color-accent-red);
  transform: rotate(-5.076deg);
  position: relative;
  top: 15px;
  left: 30px;
}

.cards__item-transform .cards__item-circle {
  background-color: var(--color-white);
}

.cards__transform-wrap .cards__item {
  color: var(--color-white);
}

.cards__icon {
  position: absolute;
  bottom: -90px;
  left: 300px;
}

/***************************************************
 * Generated by SVG Artista on 12/16/2024, 4:17:12 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

svg .svg-elem-1 {
  stroke-dashoffset: 563.322998046875px;
  stroke-dasharray: 563.322998046875px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
    0s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}
</style>
