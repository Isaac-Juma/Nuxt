/**
 * This class handles all Goals operations
 */

import type { DailyGoal } from "~~/types/goal"

export class GoalHandler {
    readonly title: string
    readonly desc: string
    readonly isCompleted: boolean
    readonly startDate: string
    readonly deadlineDate: string

    
    

    /**Contructor */
    constructor( goal:DailyGoal) 
    {
        this.title = goal.title
        this.desc = goal.description
        this.isCompleted = goal.completed
        this.startDate = goal.start
        this.deadlineDate = goal.deadline
    }

    /**Save Method */
    public save(goal:DailyGoal) {
        if(goal)
        {
            goal.title.length > 0
        }  
        
    }
};
