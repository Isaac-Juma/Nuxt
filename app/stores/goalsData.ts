import { defineStore } from 'pinia';

export const useGoalsStore = defineStore('GoalsData', () => {

    //Goal state
    const goal = ref('');
    const completed = ref(false);

    //Goal Action
    function updateGoalStatus(status: boolean){
        completed.value = status
    }

    // return for reuse 
    return { goal, completed, updateGoalStatus }
});