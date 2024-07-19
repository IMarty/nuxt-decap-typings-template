<script setup lang="ts">
import BlogPostCard from "~/components/BlogPostCard.vue";
import type { BlogPost } from "~/types";
  const { data: postsArray } = await useAsyncData<BlogPost[]>('posts', () => {
    return queryContent<BlogPost>('/blog').find()
  })
</script>

<template>
    <main>
      <h1>The Blog</h1>
      <hr>
      <ul v-if="postsArray">
        <li v-for="postLoop of postsArray":key="postLoop.slug">
          <BlogPostCard  :blog-prop="postLoop" />
        </li>
      </ul>
    </main>
  </template>
  