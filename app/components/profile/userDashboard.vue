<script setup>
/**
 * 1.Import all my ui designs 
 * Also i Just love to do the import manually since they are on a subfoldedr
 * There is a way to make nuxt import it manually, config.nuxt is where to add  it
 * 
 * 2.Import my data from api calls 
 */
definePageMeta({layout: 'test'})
import { GoalManagement } from '~/composables/goals/DailyGoals';
import UserGoals from '../Tailwindcss_Ui_Design/UserGoals.vue';
import UserPoints from '../Tailwindcss_Ui_Design/UserPoints.vue';
import DailyQuest from '../Tailwindcss_Ui_Design/DailyQuest.vue';
import Rewards from '../Tailwindcss_Ui_Design/Rewards.vue';

const { data: posts, pending, error } = await useWpApi();
const { data: points, done } = GoalManagement();
const completed = ref(done)


</script>

<template>
    <div>
        <UserGoals>
            My Quest {{  }}
        </UserGoals>
        <!-- <h1>USER DASHBOARD</h1> -->
        <UserPoints>
            Points{{  }}
        </UserPoints>
        
        <DailyQuest>
            Daily Quest {{  }}
        </DailyQuest>

        <Rewards>
            Rewards: {{  }}
        </Rewards>

    </div>
</template>