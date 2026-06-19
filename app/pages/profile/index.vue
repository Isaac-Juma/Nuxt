<script setup>
import RewardGifts from '~/components/goals/rewardGifts.vue';
import createGoals from '~/components/goals/createGoals.vue';

    definePageMeta({layout: 'test'})

</script>

<template>
    <div class="bg-blue-500">
        <h1 class="bg-orange-400">User Profile</h1>
        <h2 class="bg-green-400">USER DASHBOARD</h2>

        <RewardGifts />
        <createGoals />
    </div>
</template>