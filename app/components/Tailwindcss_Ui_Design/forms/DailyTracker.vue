<script setup>
/**
 * Import my logic for creating a goal
 */
import { useDailyGoals } from '~/composables/goals/DailyGoals';
const { goalsList, goalCompleted, addGoal, editGoal, deleteGoal, deleteGoals, userPoints } = useDailyGoals();

</script>

<template>
    <div class="Daily-Tracker-Box grid  bg-slate-50 border">
        <span>Daily Tracker</span>
    </div>
</template>