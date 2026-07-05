<script setup lang="ts">
    // definePageMeta({layout: 'default'})
    import { useDailyReward } from '~/composables/goals/DailyRewards';
    import type { Reward } from '~~/shared/types/goal';
    import BaseButton from '../Tailwindcss_Ui_Design/BaseButton.vue';

    const { addReward, userRewards } = useDailyReward();
    const title = ref<string>('');
    const describe = ref<string>('');
    const achieved = ref(false);
    const handleReward = () => {
        //check errors and validation
        if(!title.value.trim()) return

        // strictly type user writen obj
        const newReward: Reward = {
            id: Date.now().toString(),
            title: title.value.trim(),
            describe: describe.value.trim(),
            achieved: achieved.value
        }
        console.log('data: ', newReward)
        addReward(newReward)

        // clean for next use
        title.value = ''
        describe.value = ''
    };

</script>

<template>
    <div class="reward-box">
        <form @submit.prevent="handleReward" class="flex flex-col gap-2 p-2 m-2 ">
            <label for="addReward" class="addReward text-bold">Reward</label>
            <input v-model="title" type="text" name="addReward" placeholder="Add Your Reward" class="rounded-xl m-2 p-2">
            <BaseButton>Reward</BaseButton>
        </form>
    </div>
</template>