<template>
  <div class="max-w-4xl mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Blogs</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-white rounded-lg shadow p-6 flex flex-col items-center"
      >
        <img
          :src="blog.image"
          alt="Blog Image"
          class="w-20 h-20 mb-4 rounded-full object-cover"
        />
        <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
        <p class="text-gray-600 mb-2">{{ blog.summary }}</p>
        <span class="text-xs text-gray-400">{{ blog.date }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Blog {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
}

const blogs = ref<Blog[]>([
  {
    id: 1,
    title: 'Getting Started with Vue',
    summary: 'A quick introduction to Vue.js and its ecosystem.',
    image: '/src/assets/vue.svg',
    date: '2025-09-01',
  },
  {
    id: 2,
    title: 'TypeScript in Vue',
    summary: 'How to use TypeScript effectively in Vue projects.',
    image: '/vite.svg',
    date: '2025-09-05',
  },
  {
    id: 3,
    title: 'Building with Vite',
    summary: 'Speed up your development workflow using Vite.',
    image: '/vite.svg',
    date: '2025-09-07',
  },
  {
    id: 4,
    title: 'Deploying Vue Apps',
    summary: 'Best practices for deploying Vue applications.',
    image: '/src/assets/vue.svg',
    date: '2025-09-09',
  },
]);
</script>

<style scoped>
/* Tailwind CSS is used for styling, no scoped styles needed */
</style>
