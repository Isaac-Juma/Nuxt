<script setup lang="ts">
  /**
   * Import my form ui
   */
  import CreateGoals from '../Tailwindcss_Ui_Design/forms/CreateGoals.vue';
  
  // Import the goalController from the composables
  import BaseButton from '../Tailwindcss_Ui_Design/BaseButton.vue';
  import type { DailyGoal } from '#imports';
  import { useDailyGoals } from '~/composables/goals/DailyGoals';
  

  // Destructure our handleGoal method from our GoalsController handler
  // const { handleGoal, userGoals, } = GoalsController();
  const { goalsList, goalCompleted, addGoal, userPoints } = useDailyGoals();
  const { goalsApi } = useWpApi();
  const newTitle = ref<String>('');
  const newContent = ref<String>('');
  const currentIndex = ref<number>(0)

  const currentGoal = computed( () => {
    return goalsList.value[currentIndex.value] || null
  })

  // Handle Goal upon achivement and failed 
  const GoalHandler = (isSuccessful: boolean) => {
    goalCompleted(currentIndex.value, isSuccessful)
    currentIndex.value++
  }

  // Handle submiting Goals...
  const handleSubmit = async () => {
    // error checking and validation
    if (!newTitle.value.trim()) return

    try {
      // 3. Strictly type user-written object
      const newGoal: DailyGoal = {
        id: Date.now().toString(),
        title: newTitle.value.trim(),
        description: newContent.value.trim(),
        completed: false
      }
      // addGoal method from useDailyGoals
      addGoal(newGoal)

      // call my api to consume the created goal
      const response = await goalsApi(newGoal)
      console.log('Goal saved to server:', response?.data.title)
      
      // Clear input boxes after submiting the data needed
      newContent.value = ''
      newTitle.value = ''
    } catch (error) {
      console.error('Error creating goal:', error)
      // Optionally show error to user
    }
  }
</script>

<template>
  <h2 class="text-xl font-bold mb-4 align-center">Create Goal</h2>
  <CreateGoals>
    <h1>Points: {{ userPoints }}</h1>
    <div v-if="currentGoal">
      <h3>Title: {{ currentGoal?.title }}</h3>
      <p>Goal: {{ currentGoal?.description  }}</p>
      <BaseButton @click="GoalHandler(true)"> Done✅ </BaseButton>
      <button class="fail-btn m-2 p-2 bg-red-400 text-center rounded-2" @click="GoalHandler(false)">Fail ❌</button>
    </div>
  </CreateGoals>

  <div class="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md h-100 w-100">

    <h1>Points: {{ userPoints }}</h1>
    <div v-if="currentGoal">
      <h3>Title: {{ currentGoal?.title }}</h3>
      <p>Goal: {{ currentGoal?.description  }}</p>
      <BaseButton @click="GoalHandler(true)"> Done✅ </BaseButton>
      <button class="fail-btn m-2 p-2 bg-red-400 text-center rounded-2" @click="GoalHandler(false)">Fail ❌</button>
    </div>

    <form @submit.prevent="handleSubmit()" class="">
      <input v-model="newTitle" type="text" name="title" placeholder="Title" class="align-items-center">
      <input v-model="newContent" type="text" name="content" placeholder="Content" class="">
      <button type="submit" class="bg-blue-400 m-4 p-4 ">add Goal</button>
    </form>

    <p>Results:</p>
    <ul>
      <li v-for="goal in goalsList" :key="goal.id">
        <span :style="{ textDecoration: goal.completed ? 'line-through' : 'none' }" class="bg-green-400 m-2 p-2 ">
          {{ goal.title }} - {{ goal.description }}
        </span>
      </li>
    </ul>
    
  </div>
</template>
