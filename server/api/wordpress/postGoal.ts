// User Goals Will Be Created here from this file
// Import our Goal Type
import type { DailyGoal, Reward, Journal } from "~~/types/goal"
import { defineEventHandler, readBody, createError } from "h3"

export default defineEventHandler(async (event) => {

    // 1. Read incoming request from the Client
    const goal: DailyGoal = await readBody(event)

    // 2. Add security layers later with other intents
    
    // 3. Post the Goals Data to the Database
    try {
        const request = await goalsController.createGoals(goal)

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