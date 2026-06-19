<script setup>

import CreateGoals from '~/components/goals/createGoals.vue';
import RewardGifts from '~/components/goals/rewardGifts.vue';




</script>

<template>
    <!--PAGE Header-->
    <div class="base-house">
        <Header />
        <Navigation />

        <!--Sidebar-->
        <!-- <CreateGoals /> -->
        

        <!--Main Content Area-->
        <main class="main_page">
            <slot />
        </main>

        <!--Aside Panel-->
        <SidePanel />

        <!--PAGE Footer-->
        <FooterPage />
    </div>
</template>

<style scoped>
</style>