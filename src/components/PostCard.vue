<script setup>
import { defineProps } from 'vue'

defineProps(['post', 'index'])
</script>

<template>
  <article class="rounded shadow-md overflow-hidden">
    <header>
      <div class="aspect-video bg-gray-e6 relative">
        <div>
          <img class="w-full" src="https://picsum.photos/400/225?random=1" alt="">
        </div>
        <div class="absolute top-2.5 left-2.5 bg-trensstore-main h-5 flex items-center justify-between px-2 text-3xs rounded-sm leading-none font-bold">{{ post.category }}</div>
      </div>
    </header>
    <div class="p-5 flex flex-col">
      <div class="flex-grow flex flex-col">
        <div class="flex-grow basis-14">
          <h1 class="text-lg font-bold leading-6">{{ post.title }}</h1>
        </div>
        <div class="text-xs text-gray-b9 line-clamp-3">
          <p>{{ post.content }}</p>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-x-2.5">
            <div class="w-7 h-7 rounded-full overflow-hidden bg-gray-c4">
              <img src="https://picsum.photos/56/56?random=1" alt="">
            </div>
            <div class="text-2xs font-bold">{{ post.site.name }}</div>
          </div>
          <div class="text-gray-c4 text-2xs font-bold">{{ post.published_at }}</div>
        </div>
      </div>
    </div>
  </article>
</template>