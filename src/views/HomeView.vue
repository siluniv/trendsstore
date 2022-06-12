<script setup>
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/solid";
import PostCard from "../components/PostCard.vue";
import CreatorsCard from "../components/CreatorsCard.vue";

import { Navigation, Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css';
import 'swiper/css/grid'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import newPosts from '../data/newPosts'
import pickPosts from '../data/newPosts'
import creators from '../data/creators'

const modules = [Navigation, Pagination, Grid]
const navigation = {
  enabled: true,
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
}
const pagination = {
  clickable: true,
  dynamicBullets: true,
  dynamicMainBullets: 1
}

const creatorsBreakpoints = {
  390: {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 3
    },
    navigation: {
      enabled: false
    }
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      enabled: false
    }
  },
  1040: {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      enabled: false
    }
  }
}
</script>

<template>
  <main>
    <div class="md:pt-8">
      <div class="md:container mx-auto">
        <div class="carousel">
          <Swiper
              class="swiper"
              :slides-per-view="1"
              :space-between="32"
              :modules="modules"
              :navigation="navigation"
            >
            <SwiperSlide class="slide" v-for="i in 8" v-bind:key="i">
              <div class="h-[375px] bg-gray-c4 overflow-hidden md:rounded-3xl">
                <img class="object-cover h-full" :src="'https://picsum.photos/1000/375?random='+i" alt="">
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button-prev"><chevron-left-icon class="h-10 mr-[3px]" /></div>
          <div class="swiper-button-next"><chevron-right-icon class="h-10 ml-[3px]" /></div>
        </div>
      </div>
    </div>
    
    <div class="container mx-auto">
      <div class="py-10 md:py-0 md:pt-15">
        <div>
          <div class="text-lg font-bold">NEW! 새로운 컨텐츠</div>
          <div class="text-lxs mt-1">지금 막 발행된 콘텐츠를 확인해보세요!</div>
        </div>

        <div class="hidden md:flex justify-end">
          <RouterLink to="/contents" class="flex items-center text-xs font-bold">더보기<ChevronRightIcon class="w-4 h-4" /></RouterLink>
        </div>

        <div class="mt-7 grid gap-y-8 md:grid-cols-2 md:gap-x-9 md:mt-2 lg:grid-cols-3">
          <PostCard v-for="(post, index) in newPosts" v-bind:key="post" :post="post" :index="index" />
        </div>
      </div>
    </div>

    <div class="border-t border-gray-e0 w-full md:hidden"></div>

    <div class="container mx-auto">
      <div class="py-10 md:py-0 md:pt-15">
        <div>
          <div class="text-lg font-bold">트렌즈스토어's pick!</div>
          <div class="text-lxs mt-1">트렌즈스토어가 엄선한 최고의 콘텐츠를 확인해보세요!</div>
        </div>
        
        <div class="hidden md:flex justify-end">
          <RouterLink to="/contents" class="flex items-center text-xs font-bold">더보기<ChevronRightIcon class="w-4 h-4" /></RouterLink>
        </div>

        <div class="mt-7 grid gap-y-8 md:grid-cols-2 md:gap-x-9 md:mt-2 lg:grid-cols-3">
          <PostCard v-for="(post, index) in pickPosts" v-bind:key="post" :post="post" :index="index" />
        </div>
      </div>
    </div>

    <div class="creators py-14 md:mt-20">
      <div class="container mx-auto">

        <div class="text-[1.375rem] font-bold">크리에이터 소개</div>
        <div class="carousel creators-carousel mt-6">
          <Swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="32"
            :modules="modules"
            :pagination="pagination"
            :breakpoints="creatorsBreakpoints"
          >
            <SwiperSlide class="slide" v-for="(creator, index) in creators" v-bind:key="creator">
              <div class="creator-wrapper">
                <CreatorsCard :creator="creator" :index="index" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="md:py-10 md:mb-10">
      <div class="md:container mx-auto">
        <div class="carousel carousel-circle">
          <Swiper
              class="swiper"
              :slides-per-view="1"
              :space-between="32"
              :modules="modules"
              :navigation="navigation"
            >
            <SwiperSlide class="slide" v-for="i in 8" v-bind:key="i">
              <div class="h-[250px] bg-gray-c4 overflow-hidden md:rounded-xl">
                <img class="object-cover h-full" :src="'https://picsum.photos/1000/250?random='+i" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button-prev"><chevron-left-icon class="h-10 mr-[3px]" /></div>
          <div class="swiper-button-next"><chevron-right-icon class="h-10 ml-[3px]" /></div>
        </div>
      </div>
    </div>

  </main>
</template>

<style lang="stylus">
.creators
  background: linear-gradient(180deg, #E1A0F9 0%, #FF8450 100%);

.carousel
  position: relative

  .swiper-button-prev, .swiper-button-next
    display: none
    width: 46px
    height: 46px
    overflow: hidden
    color: #ccc
    top: 50%

    &:after
      display: none

    @media (min-width: 1200px)
      display: flex
      align-items: center
      justify-content: center

  .swiper-button-prev
    left: -46px

  .swiper-button-next
    right: -46px

  .swiper-pagination
    position: relative
    padding-top: 2rem
    bottom: 0

  .swiper-pagination-bullet
    width: 7px;
    height: 7px;

  .swiper-pagination-bullet-active
    background-color: #fff;

  &.carousel-circle
    .swiper-button-prev, .swiper-button-next
      width: 32px
      height: 32px
      border-radius: 100%
      background-color: #ccc;
      color: #fff
      
    .swiper-button-prev
      left: -46px

    .swiper-button-next
      right: -46px

.creators-carousel
  .swiper-pagination
    @media (min-width: 390px) and (max-width: 767px)
      position: absolute;
  
  .creator-wrapper
    height: 100%

  .swiper
    @media (min-width: 390px) and (max-width: 767px)
      height: 600px

    .slide
      height: 170px
      @media (min-width: 390px) and (max-width: 767px)
        height: 170px
      @media (min-width: 768px)
        height: auto

</style>
