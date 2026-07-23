// shared/types/goals.ts

// DailyGoal ...
export interface DailyGoal {
  id: string
  title: string
  description: string
  completed: boolean
  start: string
  deadline: string
}

/**
 * TextArea
 */
export interface Journal {
  id: string
  date: string
  title: string
  desc: string
  journal: boolean
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
