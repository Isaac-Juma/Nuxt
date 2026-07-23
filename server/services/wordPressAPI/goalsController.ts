/**
 * Import our Goal Type Obj
 * 
*/
import { DailyGoal } from "~~/types/goal";

/** 
 * I'll be using oop on this local Server 
*/
export class GoalHandler {
  
}

export const goalsController = {
  // Fetch posts from wordpress
  async getPage(pageNumber: number | string) {
    const config = useRuntimeConfig();

    // 1. Fetch Data from WordPress. wp-json/wp/v2/posts
    const rawPosts: any = await $fetch(`${config.wpApiUrl}/wp-json/wp/v2/posts`, {
      timeout: 5000,
      query: {
        page: pageNumber,
        per_page: 4
      }
    })

    // 2. Map the data directly frontend keys
    return rawPosts.map((post: any) => {
      return {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        // 🎯 THE FIX: Read our newly generated custom field directly!
        image: post.featured_image_url || null 
      }
    })
  },

  // POST to DB this Goals and Save it
  async createGoals(data : DailyGoal) : Promise<DailyGoal | null> {
    // use NUXT Runtimeconfig
    const config = useRuntimeConfig();

    try {

      // POST the data to the DB
      const postGoals: DailyGoal = await $fetch(`${config.wpApiUrl}/wp-json/myplugin/v1/goals`, {
        timeout: 5000,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          title: data.title || 'no title ',
          description: data.description || 'none found',
          completed: data.completed ? 'true' : 'false',
        },
      });
      console.log('Data From Clients', postGoals)
      return data
    }
    catch(error: any){
      console.error('Failed to post to WP: ', error.message || error.data)
      return null
    }

  }
}