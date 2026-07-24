<script setup>
import Icon from "../components/global/Icon.vue";
</script>

<template>
  <nav class="navigation">
    <div class="wrapper">
      <div class="nav-name">Nelly Moseki</div>

      <div class="menu desktop">
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="mailto:info@nellymoseki.co.za">Contact</a></li>
        </ul>
      </div>

      <div class="menu mobile">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nelly-moseki-11a93170/"
              target="_blank"
              ><icon name="linkedIn"></icon
            ></a>
          </li>
          <li>
            <a href="https://github.com/Paris2020/" target="_blank"
              ><icon name="github"></icon
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com/paris2020_/" target="_blank"
              ><icon name="instagram"></icon
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
