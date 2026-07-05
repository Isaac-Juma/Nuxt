<script setup>
  /**
   * 1. Import My dashboard component
   * 2. Import My layout design
  */
  definePageMeta({layout: 'test'})

  import UserDashboard from '~/components/userDashboard.vue';
  import { useRouter } from 'vue-router';
  
  const route = useRouter();

</script>

<template>
  <span @click="route.back()">back</span>

  <div class="flex flex-col ">
    <span class="flex justify-center rounded-xl m-2 p-2 text-bold">Dashboard</span>

    <!--User Dashboard-->
    <UserDashboard />
  </div>
</template>