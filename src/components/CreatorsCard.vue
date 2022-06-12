<script setup>
import { defineProps } from 'vue'

defineProps(['creator', 'index'])
</script>

<template>
  <div class="creator bg-black text-white rounded-xl p-5 flex gap-x-5 min-h-[170px]">
    <div class="basis-16 flex-shrink-0">
      <div class="w-16 aspect-square rounded-full overflow-hidden bg-gray-c4">
        <img :src="creator.profile_image" :alt="creator.name + '의 프로필 이미지'">
      </div>
    </div>
    <div class="flex-grow">
      <div>
        <div class="text-lsm font-bold">{{ creator.name }}</div>
        <div class="text-2xs font-bold mt-1 text-trensstore-main">{{ creator.intro }}</div>
      </div>
      <div class="text-xs tracking-tight mt-2 line-clamp-5 text-white/70">
        <p>{{ creator.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
.creator
  margin: 0 auto
  width: auto
  @media (min-width: 390px)
    width: auto
  @media (min-width: 768px)
    width: 345px
  @media (min-width: 1040px)
    width: 100%

  .title
    line-height: 1.3
    @media (min-width: 390px) and (max-width: 767px)
      font-size: 0.9375rem
      -webkit-line-clamp: 2;
  .price
    @media (min-width: 390px) and (max-width: 767px)
      font-size: 0.5rem
      margin-top: 0.5rem
  .price-item
    margin-top: 0.5rem
    @media (min-width: 390px) and (max-width: 767px)
      margin-top: 0.125rem
</style>
