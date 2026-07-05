<script setup lang="ts">
/**
 * 1.Import all my ui designs 
 * Also i Just love to do the import manually since they are on a subfoldedr
 * There is a way to make nuxt import it manually, config.nuxt is where to add  it
 * 2.Import my data from api calls 
 */
  //UI LAYOUTS
  import UserGoals from '~/components/Tailwindcss_Ui_Design/UserGoals.vue';
  import UserPoints from '~/components/Tailwindcss_Ui_Design/UserPoints.vue';
  import DailyQuest from   '~/components/Tailwindcss_Ui_Design/DailyQuest.vue';
  import Rewards from '~/components/Tailwindcss_Ui_Design/Rewards.vue';

  // UI Components with their logic inside
  import CreateGoals from '~/components/goals/createGoals.vue';
  import DailyGoal from '../components/goals/DailyGoal.vue';
  import RewardGifts from '../components/goals/rewardGifts.vue';

  //Business logic
  import { useDailyGoals } from '~/composables/goals/DailyGoals';
  import { useDailyReward } from '~/composables/goals/DailyRewards.js';
  import CompletedGoals from './Tailwindcss_Ui_Design/forms/CompletedGoals.vue'

  // logic for inserting data to thiS components
  const { goalsList, userPoints, archivedGoals } = useDailyGoals();
  const { userRewards } = useDailyReward();

</script>

<template>

  <div class="user-dashboard min-w-0 max-w-full overflow-hidden overflow-y-auto
  m-2 p-2 border-4 rounded-2xl gap-4
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  items-start
  ">    
    <div class="user col-span-1 flex justify-between items-center w-full 
      md:col-span-1 
      lg:col-span-1
    ">
      <UserPoints class="">
        <div class="user-points-box">
          
          Points: {{ userPoints }}
        </div>
      </UserPoints>
      
      <UserGoals class="user-Goals-box">
        Goals: {{ goalsList.length }}
      </UserGoals>

      <Rewards>
        <span>My Rewards {{ userRewards.length }}</span>
        <p v-for="gift in userRewards" :key="gift.id">{{ gift.title }}</p>
      </Rewards>
    </div>

    <CompletedGoals class="col-span-1 md:col-span-1 lg:col-span-1">
      <div v-for="goal in archivedGoals" :key="goal.id">
        <li>{{ goal.title }}</li>
      </div>
    </CompletedGoals>
    
    <DailyQuest class="col-span-1 md:col-span-2 lg:col-span-3">

      <DailyGoal />

    </DailyQuest>


    <CreateGoals class="col-span-1 md:col-span-1 lg:col-span-1" />
        
    <!--
      Rewards UI in 1st layer.
      Rewards Gift Component together with its logic in 2nd layer
    -->
      <Rewards class="col-span-1 md:col-span-1 lg:col-span-1">
        <RewardGifts />
      </Rewards>
  </div>
</template>