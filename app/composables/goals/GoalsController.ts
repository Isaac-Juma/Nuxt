/**
 * API Talks with this composable will be used to handle all API calls related to goals, such as 
 * creating, fetching, updating, and deleting goals.
 * It will also manage the loading state and any errors that may occur during these operation
 * 
 * @returns 
 * import our Goal type Obj
*/
import type { DailyGoal } from "~~/shared/types/goal";
import { useDailyGoals } from "./DailyGoals";
const {  } = useDailyGoals


export const GoalsController = () => {

  const isloading = ref(false);
  const error = ref<string | null>(null);
  const goalsList = ref<DailyGoal[]>([])
  
  async function handleGoal(goal: DailyGoal) {
    // ....
    try {
      isloading.value = true
      error.value = null

      // Simulate an API call to create a goal
      const response = await $fetch('/api/wordpress/postGoals', {
        method: 'post',
        headers: {Headers: 'samples'},
        body: goal
      })

      // await userGoals()
      

      //change them to default after submitting data
      isloading.value = false
    } 
    catch (err) {
      // ...Error if failed
      isloading.value = false;
      error.value  || err ;
      console.error('Error creating goal:', err);
      throw err; // rethrow the error after handling it
    }
  };

  // Get and Display the list of Goals for the User
  async function userGoals () {
    isloading.value = true;
    error.value = null;

    // Fetche the Goals List from the Server
    try {
      // const response = await $fetch<GoalItem[]>('/api/wordpress/index.posts', {
      //   method: 'GET',
      //   headers: {},
      // });
  
      // goalsList.value = response
    }
    catch (err: any) {
      error.value = err.message || 'Error fetching goals'
      console.error('Error fetching goals:', err)
    } 
    finally {
      isloading.value = false
    }
  };

  // return my handlers for destructuring them later
  return {
    isloading,
    error,
    handleGoal,
    userGoals,
    goalsList
  };

}