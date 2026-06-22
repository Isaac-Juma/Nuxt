<script setup lang="ts">
// use the data that's been fetched in the wpapi plugin
const { wppost } = useWpApi();
// const { data: posts, pending, error } = await useWpApi
const { data: posts, pending, error } = wppost();



</script>
<template>
  <div class="header bg-slate-50 rounded-xl m-2 p-2">
    <h1 class="justify-center">Welcome to the homepage Header</h1>
    <p class="">This is the header component</p>
    <p v-if="pending">Loading posts...</p>
    <p v-else-if="error">Error loading posts: {{ error.message }}</p>
    <ul v-else>
      <!-- <P>{{ posts?.length || 0 }} posts available</P> -->
      <li v-for="post in posts" :key="post.id">Title: {{ post.title.rendered }} -{{ post.featured_image_url }}</li> 
    </ul>
  </div>
</template>
