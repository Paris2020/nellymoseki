<script setup>
import { useIndexStore } from "../store/index";

const store = useIndexStore();

const openModal = () => {
  store.updateModalVisibility(true);
};
</script>

<template>
  <header class="header">
    <div class="wrapper hero-grid">
      <div>
        <div class="hero-copy">
          <span class="line1">Building</span>
          <span class="line2">digital</span>
          <span class="line3">products & brands.</span>
        </div>
        <div class="hero-note">
          Founder of Moseki Web Agency. Front-end dev, brand builder, based in
          Johannesburg — I make the internet feel a little more handmade.
        </div>
        <div class="hero-tags">
          <span class="sticker">CSS3</span>
          <span class="sticker">HTML</span>
          <span class="sticker">JavaScript</span>
          <span class="sticker">TypeScript</span>
          <span class="sticker">Vue</span>
          <span class="sticker">React</span>
          <span class="sticker">Drupal</span>
        </div>

        <div class="cta-row">
          <!--<a href="mailto:info@nellymoseki.co.za" class="btn-scrappy"
            >Get in touch →</a
          > -->
          <a href="#" class="btn-scrappy" @click="openModal">▶ Watch me!</a>
          <span class="hand-note">let's make something!</span>
        </div>
      </div>
      <div class="polaroid">
        <div class="washi"></div>
        <img src="/images/profile.jpg" alt="Photo by @siede.lee" />
        <div class="cap">that's me ✌</div>
      </div>
    </div>
  </header>
</template>
