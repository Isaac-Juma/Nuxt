<script setup lang="ts">
// use the data that's been fetched in the wpapi plugin
const { wppost } = useWpApi();
// const { data: posts, pending, error } = await useWpApi
const { data: posts, pending, error } = wppost();
</script>

<template>

  <div class="headerBox flex bg-blue-200 justify-between items-center 
    md:justify-between md:items-center 
    lg:justify-between lg:items-center 

  ">
    <div class="logo">
      <img
        src="../assets/logo.jpg"
        alt="Logo"
        class="my-logo w-16 h-16 m-4 rounded-full cursor-pointer 
          md:w-24 md:h-24
          lg:w-32 lg:h-32
        "
      />
    </div>
      <span class="text-lg font-bold">Solo Leveling</span>
      <Navigation />
  </div>
</template>
