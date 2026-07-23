// import { defineStore } from 'pinia';
// import type { DailyGoal} from '~~/types/goal';

export const useGoalsStore = defineStore('Goal', {

  state: () => ({
    title:'',
    desc: '',
    achieved: false,
    starting: '',
    deadline: ''
  }),

  actions: {
    setGoals(goal:DailyGoal) {
      this.title = goal.title
      this.desc = goal.description
      this.achieved = goal.completed
      this.starting = goal.start
      this.deadline = goal.deadline
    }
  }

})