<script setup lang="ts">
/**
 * 1. Import my form ui designs
 * 2. Import my Logic for handling goal creation
 */

 // UI layouts for Forms
import GoalsForm from '../Tailwindcss_Ui_Design/forms/GoalsForm.vue';
import BaseButton from '../Tailwindcss_Ui_Design/BaseButton.vue';
import FormInput from '../Tailwindcss_Ui_Design/forms/FormInput.vue';

// inserting data to user components
import { useDailyGoals } from '~/composables/goals/DailyGoals';

// our system { Goal } object type
import type { DailyGoal } from '~~/shared/types/goal.ts'

const { addGoal } = useDailyGoals();

const newGoal =ref<DailyGoal>({
  id: Date.now().toString(),
  title: '',
  description: '',
  completed: false
});

const goalHandler = () => {
  // 1. Save the goal to our goalsList
  console.log('Plain Data:', JSON.parse(JSON.stringify(newGoal.value)))
  console.log('Data', newGoal.value)
  addGoal({...newGoal.value})

  // 2. Clear the form fro next use
  newGoal.value = {
    id: Date.now().toString(),
    title: '',
    description: '',
    completed: false
  }
}

</script>

<!--My GoalForm-->
<template>
  <GoalsForm @form-submit="goalHandler">
    <span>Create Goal</span>
    
    <FormInput v-model="newGoal.title" type="text" placeholder="Your Goal Name">Goal Name</FormInput>
    <FormInput v-model="newGoal.description" type="text" placeholder="Goal Description">Goal Description</FormInput>
    <BaseButton type="submit" class="rounded-xl">goal</BaseButton>
  </GoalsForm>
</template>
