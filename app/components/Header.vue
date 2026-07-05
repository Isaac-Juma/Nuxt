<script setup lang="ts">
// use the data that's been fetched in the wpapi plugin
const { wppost } = useWpApi();
// const { data: posts, pending, error } = await useWpApi
const { data: posts, pending, error } = wppost();
</script>

<template>

  <div class="headerBox flex justify-between items-center
    bg-slate-400 rounded-lg
    md:bg-blue-500
  ">
    <div class="logo">
      <img
        src="../assets/igris.jpg"
        alt="Logo"
        class="my-logo w-16 h-16"
      />
    </div>
      <span class="text-lg font-bold">Level-Up</span>
      <Navigation />
  </div>
</template>
