<script setup>
definePageMeta({layout: 'default'})
</script>

<template>
  <div class="footerPage bg-gray-900 place-items-center">
    <h1>For More visit call us on : 07</h1>

    <P>{{ posts?.length || 0 }} posts available</P>

    <li v-for="post in posts" :key="post?.id">
      <NuxtLink :to="`/posts/${post?.id}`">
        {{ post?.title?.rendered }}
      </NuxtLink>
    </li>
  </div>
</template>