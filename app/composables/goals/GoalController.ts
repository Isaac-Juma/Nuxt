/**
 * API Talks with this composable will be used to handle all API calls related to goals, such as 
 * creating, fetching, updating, and deleting goals.
 * It will also manage the loading state and any errors that may occur during these operation
 * 
 * @returns 
 * import our Goal type Obj
*/
import type { DailyGoal } from "~~/types/goal";

export const GoalController = () => {
  /**
   * 
  */
  const isloading = ref(false);
  const error = ref<string | null>(null);
  const goalsList = ref<DailyGoal[]>([])
  
  /**
   * 
   * @param goal 
   */
  async function createGoal(goal: DailyGoal) {
    /**
     * 
     */

    try {
      isloading.value = true
      error.value = null

      /**
       * Simulate an API call to create the goal
       */
      const response = await $fetch('/api/wordpress/postGoal', {
        method: 'post',
        headers: {Headers: 'samples'},
        body: goal
      })
      
      /**
       * change them to default after submitting data
       */
      isloading.value = false
    } 
    catch (err) {
      /**
       * rethrow the error after handling it
       */
      isloading.value = false;
      error.value  || err ;
      console.error('Error creating goal:', err);
      throw err;
    }
  };

  /**
   * Fetch user Goals from the server
   * Get and Display the list of Goals for the User
   *  
  */
  async function fetchGoals (goal : DailyGoal) {
    isloading.value = true;
    error.value = null;

    // Fetche the Goals List from the Server
    try {
      const response = await $fetch<DailyGoal[]>('/api/wordpress/getGoal', {
        method: 'GET',
        headers: {},
      });
  
      goalsList.value = response
    }
    catch (err: any) {
      error.value = err.message || 'Error fetching goals'
      console.error('Error fetching goals:', err)
    } 
    finally {
      isloading.value = false
    }
  };

  /**
   * Update Goals
   */
  async function updateGoal (goal : DailyGoal) {

  }

  /**
   * Deletee Goals
   */
  async function deleteGoal (goal : DailyGoal) {

  }

  // return my handlers for destructuring them later
  return {
    fetchGoals,
    createGoal,
    updateGoal,
    deleteGoal,
    isloading,
    error,
    goalsList
  };

}