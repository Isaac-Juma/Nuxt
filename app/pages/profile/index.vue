<script setup>
  /**
   * 1. Import My dashboard component
   * 2. Import My layout design
  */
  definePageMeta({layout: 'test'})

  import UserDashboard from '~/components/profile/userDashboard.vue';
  import UserProfile from '~/components/Tailwindcss_Ui_Design/userProfile/UserProfile.vue';

</script>

<template>
  <div class="flex flex-col ">
    <span class="flex justify-center rounded-xl m-2 p-2 text-bold">Dashboard</span>

    <!--User Profile 1st layer UI 2nd layer Components 3rd layer Data-->
    <UserProfile>
      My Profile
    </UserProfile>

    <!--Header Components-->
    <Header /> 
    
    <!--User Dashboard-->
    <UserDashboard />
  </div>
</template>