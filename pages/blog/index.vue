<script setup lang="ts">
  import { type BlogPost } from "~/types";
  const { data: posts } = await useAsyncData<BlogPost[]>('posts', () => {
    return queryContent<BlogPost>('/blog').find()
  })
</script>
<template>
    <main>
      <h1>The Blog</h1>
      <hr>
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </main>
  </template>
  