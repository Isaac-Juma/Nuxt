<script setup>
/**
 * 1. Import my UI designs
 * 2. Import Data 
 */
import LandingPage from '~/components/Tailwindcss_Ui_Design/Sitelayouts/LandingPage.vue';
import DailyQuest from '~/components/Tailwindcss_Ui_Design/DailyQuest.vue';

definePageMeta({layout: 'default'})

</script>

<template>
  <LandingPage>
    <h1>Solo Leveling Portal ⚔️</h1>
    <p>This is a self improvement platform </p>
    <DailyQuest>
      <P>Landing Page Content</P>
      <p>Somethings also like Image and graphics will come here </p>
    </DailyQuest>
  </LandingPage>
</template>
