/**
 * Import our Goal Type Obj
 * 
*/
import { DailyGoal } from "~~/shared/types/goal";
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

  //  POST to DB this Goals and Save it there
  async createGoals (data: DailyGoal) {
    // use NUXT Runtimeconfig
    const config = useRuntimeConfig();

    // POST the data to the DB
    const postGoals: DailyGoal = await $fetch(`${config.wpApiUrl}/wp-json/myPlugin/v1/goals`, {
      timeout: 5000,
      method: 'post',
      body: data
    });
    console.log('Data From Clients', postGoals)
    return postGoals
  }
}