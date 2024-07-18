<script setup>
  
useHead({
  title: 'Home',
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ]
});

</script>
<template>
  <main>
    <h1>Welcome!</h1>
    <hr>
    <section>
      <p>This template demonstrates the creation of a static site using:</p>
      <ul>
        <li>Nuxt 3</li>
        <li>Tailwind CSS</li>
        <li>Decap CMS (formerly Netlify)</li>
      </ul>
    </section>
    <section>
      <h2>The Blog</h2>
      <p>The blog is the core of this site. <NuxtLink to="/blog" class="underline text-indigo-300">Click here -></NuxtLink></p>
    </section>
  </main>
</template>