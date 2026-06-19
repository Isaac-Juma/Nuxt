// This file will be responsible for getting user goals 

import { defineEventHandler, getQuery, createError } from "h3";

// build my function
export default defineEventHandler(async (event) => {

    // 1. what do I want to quary 
    const quary = getQuery(event);
    const pageNum = Number(quary.page) || 1;

    // 2. fetch the data 
    try {
        const getGoal = goalsController.getPage(pageNum)
        console.log(pageNum)
        return getGoal
    }
    catch(error){
        throw createError({
            status: 500,
            message: 'Failed to get Goals'
        })
    }

})