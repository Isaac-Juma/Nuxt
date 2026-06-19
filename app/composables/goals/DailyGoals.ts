// What do i want to do with user Goals
// step 1. create a function for goal management with our logic

// app/composables/goals/dailygoals.ts
import type { DailyGoal, Reward } from '~~/shared/types/goal'


export const useDailyGoals = () => {
  /**
   * User Dashboard and Their OWN 
   * 1 List of Goals
   * 2 Points 
   */
  const goalsList = ref<DailyGoal[]>([])
  const userPoints = ref<number>(0)
  const position = ref<number>(0)
  const userRewards = ref<Reward[]>([])

  // Marks the compeled Goals and skips the failed ones
  const goalCompleted = (index: number, isComplete: boolean) => {
    if(goalsList.value[index]) {
      goalsList.value[index].completed = isComplete

      // hook here if goal is completed add points 
      if(goalsList.value[index].completed === true){
        userPoints.value++
        if(userPoints.value % 3){
          position.value++
        }
        // Add my API call here to store completed goals only 
      }
    }
  }
  // allow user to add new Goal to their Goals List
  const addGoal = (newGoal: DailyGoal) => {
    goalsList.value.push(newGoal)
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
  return { goalsList, goalCompleted, addGoal, editGoal, deleteGoal, deleteGoals, userPoints }
}





// How will We know what Goals the user completed and which are pending and failed one's


// To know which Goal the user completed on a daily basis 


// If the User marked the Goal as completed push the update to the DB


// 