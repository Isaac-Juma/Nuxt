// app/composables/goals/dailygoals.ts
import type {  DailyGoal, Reward } from '~~/types/goal';
import { useDailyGoals } from './DailyGoals';

// Create....
const { goalsList, userPoints } = useDailyGoals();
const countRewards = ref(0)
const userRewards = ref<Reward[]>([])

export const  useDailyReward = () => {

    // allow user to add there own favorite  rewards to keep them going 
    const addReward  = (reward: Reward) => {
        userRewards.value.push(reward)
    }

    // Only give the rewards when a certain achievement has been reached
    const giveReward = () => {
        /**
         * 1. What will decide if a user deserves a reward
         * 2. How will the system know it's time to release the rewards that the user added
         */


    }
    // retrun them  for use and destructure
    return { addReward, giveReward, userRewards }
}