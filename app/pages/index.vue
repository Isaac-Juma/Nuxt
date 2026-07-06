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
    <div class="banner w-full justify-center place-items-center">
  
      <NuxtImg src="/mtv.jpg"
      alt="Solo Leveling Portal" 
      class="w-full h-[60dvh] overflow-hidden object-cover shadow-md mt-4 m-2
      md:w-full md:h-[60dvh] object-cover md:shadow-md md:mt-4 md:m-2
      lg:w-full lg:h-[80dvh] object-cover lg:shadow-md lg:mt-4" lg:m-2
      />
      
      <div class="flex flex-col justify-center place-items-center text-black m-2 p-2">
        <h2 class="text-2xl font-bold text-center m-2 p-2">Level Up And Master Your Daily Routines</h2>
        <p>This is a self improvement platform.</p>
        <p>The Solo Leveling Portal helps you turn any addiction into a strength that pushes you forward </p>
        <p>With the power of community and personalized coaching, you can transform your life.</p>
        <NuxtImg src="/man.jpg" 
          alt="Solo Leveling " 
          class="w-full h-[40dvh] shadow-md m-2
          md:w-full md:h-[50dvh] object-cover md:shadow-md md:m-2
          lg:w-full lg:h-[70dvh] object-cover lg:shadow-md md:m-2"
        />
      </div>

      <article class="flex flex-col justify-center place-items-center text-bold border-gray-500 p-2 m-2 shadow-md">
        <h3 class="text-lg font-semibold mb-2">Turn Your Struggles To Strength</h3>
        <p>This platform is designed to help you manage your daily Habits that change into your personal system </p>
        <NuxtImg src="/stairs.jpg"
        alt="Motive"
        class="w-full h-[40dvh] object-cover shadow-md m-2
        md:w-full md:h-[60-dvh] object-cover 
        lg:w-full lg:h-[80dvh] object-cover"
        />
        <p class="">For anything to change you need to take full responsibilities for your actions and commit to the process.</p>
        <p>We give you the tools and support you need to succeed, But you must be willing to put in the effort.</p>
      </article>
    </div>
  </LandingPage>
</template>
