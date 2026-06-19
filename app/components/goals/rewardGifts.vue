<script setup lang="ts">
    // definePageMeta({layout: 'default'})

    import { useDailyReward } from '~/composables/goals/DailyRewards';
    import type { Reward } from '~~/shared/types/goal'
    const { addReward, giveReward, userRewards } = useDailyReward();
    const title = ref<string>('');
    const describe = ref<string>('')
    const achieved = ref(false)

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
        addReward(newReward)
        giveReward()

        // clean for next use
        title.value = ''
        describe.value = ''
    }
</script>

<template>
    <h4>Rewards</h4>
    <div class="reward-box gap-4 border-4" >
        <div v-for="reward in userRewards" :key="reward.id" class="reward-box bg-blue-700 rounded">
            <ol>
                <li class="text-white text-xl underline">
                    {{ reward.title }}
                </li>
            </ol>
        </div>

        <form @submit.prevent="handleReward" class="flex flex-col gap-4 p-4 ">
            <label for="addReward" class="addReward ">Reward</label>
            <input v-model="title" type="text" name="addReward" placeholder="Add Your Reward" class="m-2 p-2 rounded-l">
            <button type="submit" class="add-Reward-btn bg-orange-400 m-2 p-2 rounded-xl">Add-Reward</button>
        </form>
    </div>
</template>