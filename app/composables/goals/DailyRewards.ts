// app/composables/goals/dailygoals.ts
import type { DailyGoal, Reward } from '~~/types/goal';
import { useDailyGoals } from './DailyGoals';

// Create....
const { goalsList, userPoints } = useDailyGoals();
const userRewards = ref<Reward[]>([])

export const  useDailyReward = () => {

    // allow user to add there own favorite  rewards to keep them going 
    const addReward  = (reward: Reward) => {
        userRewards.value.push(reward)
    }

    // Only give the rewards when a certain achievement has been reached
    const giveReward = () => {
        // 1. what do determain if a user deserve a reward ?
        if(userPoints.value === 3){
            console.log('Yes')
        }
    }
    // retrun them  for use and destructure
    return { addReward, giveReward, userRewards }
}