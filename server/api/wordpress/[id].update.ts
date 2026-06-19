// server/api/wordpress/[id].ts
import { createError, defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const postId = event.context.params?.id

  try {
    // Fetch the single post data from WordPress
    const post: any = await $fetch(`${config.wpApiUrl}/wp-json/wp/v2/posts/${postId}`, {
      timeout: 5000
    })

    // Return the clean streamlined object layout to your dynamic view page
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      // Maps your verified functions.php custom image key
      image: post.featured_image_url || null 
    }

  } catch (error: any) {
    throw createError({
      statusCode: error.response?.status || 404,
      statusMessage: 'This specific dungeon room does not exist.',
    })
  }
})
