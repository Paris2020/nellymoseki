<script setup>
  import IconSymbols from "./components/global/IconSymbols.vue";
  import Navigation from "./components/Navigation.vue";
  import HeaderSection from "./components/Header.vue";
  import Projects from "./components/Projects.vue";
  import AboutSection from "./components/About.vue";
  import FooterSection from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <icon-symbols></icon-symbols>
    <navigation></navigation>
    <header-section></header-section>
    <projects></projects>
    <about-section></about-section>
    <footer-section></footer-section>
  </div>
</template>

<style lang="scss">
  @import 'scss/style'
</style>
