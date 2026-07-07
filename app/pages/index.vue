<script setup>
/**
 * 1. Import my UI designs
 * 2. Import Data 
 */
import BaseButton from '~/components/Tailwindcss_Ui_Design/BaseButton.vue';
import LandingPage from '~/components/Tailwindcss_Ui_Design/Sitelayouts/LandingPage.vue';

definePageMeta({layout: 'default'})
</script>

<template>
  <LandingPage>
    <div class="w-full h-[90dvh] bg-[url(/landing.jpg)] bg-cover bg-center bg-no-repeat flex flex-col"
      alt="landingpage"
    >
      <h2 class="text-3xl text-black text-bold mt-16 m-4 p-4 text-center">
        Level-up to your highest potential
      </h2>

      <p class="text-2xl text-black mt-8 m-4 p-4">Build Your own
        <span class="bg-blue-200 text-black">Personal Level-Up System</span> 
      </p>

      <BaseButton class="mt-16 m-2 p-2">
        <span>Start For Free</span>
      </BaseButton>

    </div>
  </LandingPage>
</template>
