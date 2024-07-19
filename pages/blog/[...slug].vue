    <script setup lang="ts">    
    import type { BlogPost } from "~/types";
    const route = useRoute()
    const actualPath = route.path.replace(/\/$/, '');
    const { data: post, error } = await useAsyncData<BlogPost>(`hello`, () =>
        queryContent<BlogPost>(actualPath).findOne()
    );
    </script>
<template>
    <main>
    <NuxtLink to="/blog">&lt; Back</NuxtLink>
    <div v-if="post">
      <h1>
        {{ post.title }}
      </h1>
      <p>{{ post.short_description }}</p>
    </div>
    <hr>
    <!-- or post.body -->
    <ContentDoc />
  </main>
</template>
