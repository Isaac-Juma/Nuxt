<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>

      <!-- NuxtPage automatically watches for your configuration transitions -->
      <NuxtPage />
      
    </NuxtLayout>
  </div>
</template>

<style>
/* Reset basic spacing styles across your site */
body {
padding: 0;
margin: 0;
}

/* 🎬 THE FADE-DUNGEON ANIMATION RULES */
/* 'out-in' mode tells the old page to fade out completely before the new one spawns */
.fade-dungeon-enter-active,
.fade-dungeon-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

/* The starting point and endpoint configuration states */
.fade-dungeon-enter-from {
  opacity: 0;
  transform: translateY(10px); /* Subtle slide up effect as it appears */
}

.fade-dungeon-leave-to {
  opacity: 0;
  transform: translateY(-10px); /* Subtle slide up as it leaves */
}
</style>
