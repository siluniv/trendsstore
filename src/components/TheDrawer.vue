<template>
  <div class="drawer md:hidden bg-black text-white" v-anchor-click>
    <div class="w-full px-5">
      <div class="h-20 flex items-center justify-between">
        <div class="logo">
          <router-link to="/"><img class="block" alt="Trends store logo" src="../assets/images/trendsstore-logo-light.png"></router-link>
        </div>
        <button class="flex items-center" @click="drawerClose"><XIcon class="w-12 h-12" /></button>
      </div>

      <div class="px-5 pt-[3.75rem]">
        <ul class="font-bold">
          <li v-for="menu in props.navigation" v-bind:key="menu" class="mb-12">
            <div v-if="menu.single" class="text-[1.75rem] mb-6">
              <router-link :to="menu.link" class="uppercase">{{ menu.title }}</router-link>
            </div>
            <div v-else-if="menu.multiple">
              <div class="text-[1.75rem] uppercase mb-6">{{ menu.title }}</div>
              <div v-for="item in menu.submenu" v-bind:key="item" class="text-lg opacity-50 mb-4">
                <router-link :to="{ path: item.link }" class="flex items-start" v-html="item.title"></router-link>
              </div>
            </div>
          </li>
        </ul>

        <div class="form overflow-hidden py-1 px-5 mt-[5.625rem]">
          <form action="/search" method="get" class="flex justify-between items-center">
            <input ref="searchInput" class="search-text py-2" type="text" placeholder="검색" />
            <button class="ml-2" type="submit"><SearchIcon class="h-5 w-5 text-bluedot-blue"/></button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { XIcon } from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const props = defineProps({
  navigation: Object
})

const emit = defineEmits(['drawer'])

function drawerClose () {
  emit('drawer')
}

const vAnchorClick = {
  mounted: (el) => {
    el.anchorClick = function (event) {
      if (event.target.tagName === 'A' || event.target.closest('.logo')) {
        drawerClose()
      }
    }

    el.addEventListener('click', el.anchorClick)
  },
  unmounted: (el) => {
    el.removeEventListener('click', el.anchorClick)
  }
}
</script>

<style lang="stylus">
.drawer
  position: fixed
  top: 0
  left: 0;
  width: 100%
  height: 100vh
  z-index: 1

  .superscript
    line-height: 2.1

  .form
    background: #fff
    border: 0.5px solid #e6e6e6
    border-radius: 0.5rem
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1)

  .search-text
      flex-grow: 1
      color: black
      &:focus
        outline: 2px solid transparent
        outline-offset: 2px

</style>
