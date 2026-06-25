// shared/types/goals.ts

// DailyGoal ...
export interface DailyGoal {
  id: string
  title: string
  description: string
  completed: boolean
}

/**
 * UserRewards upon achieving their Goals
*/
export interface Reward {
  id: string
  title: string
  describe: string
  achieved: boolean
}
