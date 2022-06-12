<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />

  <main>
    <div class="main mt-20 md:mt-0">
      <RouterView />
    </div>
  </main>

  <TheFooter />
</template>

<style lang="stylus">
body.view-mobile-menu
  height: 100vh
  overflow: hidden;

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease;

.fade-enter-from, .fade-leave-to
  opacity: 0;
</style>