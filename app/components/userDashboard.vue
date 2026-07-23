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
  import CompletedGoals from './Tailwindcss_Ui_Design/forms/CompletedGoals.vue';
  import { useGoalsStore } from '~/stores/goalsData.js'

  // logic for inserting data to thiS components
  const { goalsList, userPoints, archivedGoals } = useDailyGoals();
  const { userRewards } = useDailyReward();
  const goals = useGoalsStore();

  const isClicked = ref(false);
  const isOpen = ref(false);
  const isAchieved = ref(false);

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
      
      <UserGoals class="user-Goals-box" @click="isClicked = !isClicked">
        <span>Goals: {{ goalsList.length }}</span>
        <div class="myGoals" v-if="isClicked">
          <!--Only show when clicked-->
          <ul v-for="goal in goalsList" :key="goal.id">
            <li class="m-2 p-2 bg-gray-200 rounded-lg">GOAL : {{ goal.title }}</li>
            <p class="m-1 p-2 bg-gray-100 rounded-lg">WHY : {{ goal.description }}</p>
          </ul>
        </div>
      </UserGoals>

      <Rewards class="col-span-1 md:col-span-1 lg:col-span-1"
        @click="isOpen = !isOpen"
      >
        <span class="">Rewards: {{ userRewards.length }} </span> 
        <div class="flex flex-row gap-4 justify-center items-center w-full font-semibold text-gray-800">
          <!-- Arrow shifts down when open -->
          <span :class="{ 'rotate-180': isOpen }" class="text-center transition-transform duration-300 text-xl">▼</span>
        </div>
        
        <div v-if="isOpen"
          class="flex justify-center items-center w-full"
          name="rewards-box"
        >
          <ul class="space-y-4">
            <li v-for="reward in userRewards" :key="reward.id"
              class="bg-gray-200 text-center rounded-lg p-2">
              {{ reward.title }}
            </li>
          </ul>
        </div>
      </Rewards>
    </div>

    <CompletedGoals
      class="col-span-1 md:col-span-1 lg:col-span-1" @click="isAchieved = !isAchieved"
    >
      <span>Achieved Goals : {{ archivedGoals.length }}</span>
      <h1>{{  }}</h1>
      <div v-if="isAchieved">
        <ul v-for="achieved in archivedGoals" :key="achieved.id">
          <li class="bg-green-200 m-4 p-4 rounded-lg">{{ achieved.title }}</li>
        </ul>
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