<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router";
import { MenuIcon } from "@heroicons/vue/outline"
import TheDrawer from "./TheDrawer.vue";

const isDrawerOpen = ref(false)

function drawerOpen () {
  isDrawerOpen.value = true
  document.body.classList.add('view-mobile-menu')
}

function drawerClose () {
  isDrawerOpen.value = false
  document.body.classList.remove('view-mobile-menu')
}

const navigation = ref({
  contents: {
    title: '콘텐츠',
    single: true,
    link: '/contents'
  },
  vod: {
    title: 'VOD',
    single: true,
    link: '/vod'
  },
  shop: {
    title: 'Shop',
    single: true,
    link: '/shop'
  }
})
</script>

<template>
  <header>
    <div class="header bg-black text-white fixed top-0 w-full z-10 shadow-md md:relative md:shadow-none">
      <div class="container mx-auto max-w-full lg:max-w-screen-lg">
        <nav class="gnb">
          <div class="h-20 flex items-center justify-between">

            <div class="flex items-center">
              <div class="logo mr-12">
                <RouterLink to="/"><img src="../assets/images/trendsstore-logo-light.png" alt="Trend store logo" /></RouterLink>
              </div>

              <TheDrawer @drawer="drawerClose" v-if="isDrawerOpen" :navigation="navigation" />

              <div class="hidden md:flex text-sm font-bold gap-x-10">
                <div class="flex">
                  <ul class="flex items-center gap-x-9">
                    <li v-for="menu in navigation" v-bind:key="menu">
                      <router-link v-if="menu.single" :to="menu.link" class="uppercase">{{ menu.title }}</router-link>
                      <!-- <DropdownMenu v-else-if="menu.multiple" :title="menu.title" :items="menu.submenu" /> -->
                    </li>
                  </ul>
                </div>

                <div class="flex items-center">
                  <!-- <TheSearch /> -->
                </div>
              </div>
            </div>

            <!-- Mobile -->
            <div class="md:hidden flex items-center">
              <button class="block" @click="drawerOpen"><MenuIcon class="w-9 h-9" /></button>
            </div>

          </div>
        </nav>
      </div>
    </div>
  </header>
</template>