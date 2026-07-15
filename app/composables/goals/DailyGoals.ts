// What do i want to do with user Goals
// step 1. create a function for goal management with our logic

// app/composables/goals/dailygoals.ts
import type { DailyGoal, Reward } from '~~/types/goal';

const goalsList = ref<DailyGoal[]>([]);
const userPoints = ref<number>(0);
const userRewards = ref<Reward[]>([]);

const archivedGoals = computed( () =>
  goalsList.value.filter( el => el.completed === true)
);

export const useDailyGoals = () => {
  /**
   * User Dashboard and Their OWN 
   * 1 List of Goals
   * 2 Points 
   */
  // Marks the compeled Goals and skips the failed ones
  const goalCompleted = async ( index: number , isComplete: boolean) => {
    if (!goalsList.value[index]) return
    if(goalsList.value[index]) {
      goalsList.value[index].completed = isComplete

      // hook here if goal is completed add points 
      if(goalsList.value[index].completed === true){
        userPoints.value++
        // Add my API call here to store completed goals only 
      }
    }
    // API call from the server
     await useWpApi()
  
  }
  // add new Goal to user Goals List
  const addGoal = async (newGoal: DailyGoal) => {
    if(!newGoal.title.trim()) {
      throw new Error('Goal can not be empty')
    }

    //Call our API to store our new Goal data obj
    try {
      //...
      await useWpApi().goalsApi(newGoal);

      // after our API has succeded is when we should Save to UI for the user
      goalsList.value.push(newGoal)

      // return a success message
      return {
        success: true, message: 'Submited'
      }
    }
    catch (err) {
      console.error('Failed to fetch:', err)
      return {success: false, message: 'failed to post goals' }
    }
    finally {
      console.log('Done')
    }
  }

  // allow user to edit their Goals according to their needs
  const editGoal = (editgoal: DailyGoal) => {

  }
  
  // allow user to delete specific goal
  const deleteGoal = (id: DailyGoal) => {
  }
  // allow user to delete many Goals at once
  const deleteGoals = (ids: DailyGoal) => {

  }

  return { goalsList, archivedGoals, goalCompleted, addGoal, editGoal, deleteGoal, deleteGoals, userPoints }
}