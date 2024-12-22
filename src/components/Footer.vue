<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer-person">
        <div class="footer-person__img"></div>

        <div class="footer-person__wrapper">
          <div class="footer-person__title">Suzanna Sharanova</div>

          <div class="footer-person__subtitle">Product Designer</div>
        </div>
      </div>

      <div class="footer-menu">
        <div class="footer-menu__item">works</div>
        <div class="footer-menu__item">about me</div>
        <div class="footer-menu__item">my cv</div>
        <div class="footer-menu__item">contact</div>
      </div>

      <div class="footer-copyright">
        <div class="footer-copyright__image"></div>

        <div class="footer-copyright__text">2025</div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>

<style>
.footer {
  background-color: var(--color-white);
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xxl) 80px;
  color: var(--color-text);
  box-sizing: border-box;
}

.footer-person {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.footer-person__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-sm);
}

.footer-person__img {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: var(--color-border-grey);
}

.footer-person__title {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}

.footer-person__subtitle {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.footer-menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: var(--space-xl);
}

.footer-copyright {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-sm);
}

.footer-copyright__image {
  width: 40px;
  height: 40px;
  background-color: var(--color-border-grey);
  border-radius: 100%;
}

.footer-menu__item {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--color-accent-red);
  }
}
</style>
