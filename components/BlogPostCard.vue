<!-- Can be moved into folders : https://nuxt.com/docs/guide/directory-structure/components#component-names -->

<script setup lang="ts">
import type { BlogPost } from "~/types";

const props = defineProps<{
    blogProp:BlogPost
}>()
</script>
<template>
    <h3>{{ blogProp.title }} {{ blogProp.created_at }}</h3>
    <NuxtLink :to="blogProp._path">Read more</NuxtLink>
</template>