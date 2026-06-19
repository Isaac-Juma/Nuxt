// User Goals Will Be Created here from this file
// Import our Goal Type
import { DailyGoal } from "~~/shared/types/goal"

import { defineEventHandler, readBody, createError } from "h3"

export default defineEventHandler(async (event) => {

    // 1. Read incoming request from the Client
    const goals: DailyGoal = await readBody(event)
    console.log('Data:',goals)

    // 2. Add security layers later with other intents

    // 3. Post the Goals Data to the Database
    try {
        const request = await goalsController.createGoals(goals)
        // return a successfull notification
        console.log(goals)
        return {
            successful: true,
            message: 'Thank you for Joining the league of legends',
            data: request
        }
    }
    catch(error) {
        createError({status: 500, message: 'Failed to create Goals'})
    };
})