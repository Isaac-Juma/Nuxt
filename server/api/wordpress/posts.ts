// Server/api/wordpress/posts.ts
import { createError, defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {

  // my request 
  const query = getQuery(event)
  const pageNumber = Number(query.page ) || 1

  try {
    // 1. Fetch raw posts from WordPress
    const response = await goalsController.getPage(pageNumber)

    return response

  
  } 
  catch (error: any) {
    throw createError({
      statusCode: error.response?.status || 502,
      statusMessage: 'Failed to map custom fields from backend.',
    })
  }
});
