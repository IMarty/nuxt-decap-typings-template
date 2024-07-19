<script setup lang="ts">
  import BlogPostCard from "~/components/BlogPostCard.vue";
import type { BlogPost } from "~/types";
  const { data: posts } = await useAsyncData<BlogPost[]>('posts', () => {
    return queryContent<BlogPost>('/blog').find()
  })
</script>
<template>
    <main>
      <h1>The Blog</h1>
      <hr>
      <ul v-if="posts">
        <li v-for="postLoop of posts":key="postLoop.slug">
          <BlogPostCard  :blog-prop="postLoop" />
        </li>
      </ul>
    </main>
  </template>
  