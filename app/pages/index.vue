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
    <div class="banner w-full h-auto justify-center place-items-center">
      <img src="../assets/mtv.jpg" 
      alt="Solo Leveling Portal" 
      class="w-full h-auto shadow-md mt-4"
      />
      
      <p>This is a self improvement platform that helps you turn your struggles into strengths.</p>
      
      <article class="mt-4 border-t-8  border-gray-300 bg-blue-300 p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2"></h3>
        <p>Use any addiction you have to change your current systems to improve your life </p>
        <img src="../assets/man.jpg" 
          alt="Solo Leveling Portal" 
          class="w-fit h-auto shadow-md mt-4"
        />
        <p>The Solo Leveling Portal helps you turn any addiction into a strength that pushes you forward </p>
        <p>With the power of community and personalized coaching, you can transform your life.</p>
        <p>Important: </br> This platform is designed to help you manage your daily Habits that change into your personal system <br>
          But for anything to happen, you need to take full responsibility for your actions and commit to the process.<br>
          We give you the tools and support you need to succeed, But you must be willing to put in the effort.
        </p>
      </article>
    </div>
  </LandingPage>
</template>
