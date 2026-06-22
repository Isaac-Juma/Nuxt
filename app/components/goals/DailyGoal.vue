<script setup lang="ts">
import { useDailyGoals } from '~/composables/goals/DailyGoals';

const { goalCompleted, goalsList } = useDailyGoals();

function markasDone(index: number) {
    goalCompleted(index, true)
}
</script>

<template>
    <h1 class="flex justify-center text-lg font-bold mb-3">Daily Quest</h1>
    
  <div class="p-4 bg-blue-300 rounded-2xl shadow-sm">
    <!-- Empty Fallback State -->
    <p v-if="goalsList.length === 0" class="text-sm text-gray-400 italic">No quests available today ?.</p>

    <!-- FIXED: Added the mandatory v-for loop wrapper here -->
    <div 
      v-for="(goal, index) in goalsList" 
      :key="goal.id" 
      class="dailyGoal flex flex- justify-between items-center p-2 border-b last:border-0"
    >
      <!-- Display the active goal text from the array -->
      <span :class="{ 'line-through text-gray-400': goal.completed }" class="text-sm font-medium">
        {{ goal.title }}
      </span>

      <!-- Only show button if the goal is not already completed -->
      <button 
        v-if="!goal.completed"
        @click="markasDone(index)"
        class="bg-emerald-500 text-white p-2 m-2 rounded text-sm px-3 hover:bg-emerald-600 transition"
      >   
        Mark Done
      </button>

      <span v-else class="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-lg">
        ✓ Completed
      </span>
    </div>
  </div>
</template>
