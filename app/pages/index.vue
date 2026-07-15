<script setup>
/**
 * 1. Import my UI designs
 * 2. Import Data 
 */
import LandingPage from '~/components/Tailwindcss_Ui_Design/Sitelayouts/LandingPage.vue';

definePageMeta({layout: 'default'})
</script>

<template>
  <LandingPage>
    <div class="w-full h-[90dvh] bg-[url(/landing.jpg)] bg-cover bg-center bg-no-repeat flex flex-col"
      alt="landingpage"
    >
      <h1 class="text-3xl text-black text-bold mt-16 m-4 p-4 text-center">
        Level-up to your highest potential
      </h1>
      <h2 class="text-center "> A private system designed to unlock your highest potential, one daily quest at a time.</h2>

      <p class="text-2xl text-black mt-8 m-4 p-4">Your Journey. Your System. No Audience Required.</p>

      <NuxtLink 
        to="/profile" 
        class="bg-blue-600 w-fit  hover:bg-blue-700 text-white font-medium py-2 px-4 
        rounded-lg inline-block text-center m-4 p-4"
      >
        Let's Get Started
      </NuxtLink>
    </div>
  </LandingPage>
</template>
