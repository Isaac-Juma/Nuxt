<script setup>
/**
 * 1. Import my UI designs
 * 2. Import Data 
 */
import CreateGoals from '~/components/goals/createGoals.vue';
import DailyQuest from '~/components/Tailwindcss_Ui_Design/DailyQuest.vue';

// 1. Fetch our beautifully cleaned data structure
const { data: posts, pending, error} = useWpApi();

// definePageMeta({layout: 'default'})

</script>

<template>
  <DailyQuest>
    <h1>Solo Leveling Portal ⚔️</h1>
    

  </DailyQuest>
  <div class="container">
    <!-- Posts Grid -->
    <div class="posts-grid">
      <template v-if="posts && posts.length > 0">
        <article v-for="post in posts" :key="post?.id" class="post-card">
          <div v-if="post" class="card-inner">
            
            <!-- 🎨 RENDER THE CLEAN IMAGE URL DIRECTLY -->
            <div v-if="post.image" class="image-wrapper">
              <img :src="post.image" alt="Post Avatar" class="post-image" loading="lazy" />
            </div>

            <div class="card-content">

              <h2 v-html="post.title?.rendered"></h2>
              <ClientOnly>
                <div v-html="post.excerpt?.rendered" class="excerpt"></div>
              </ClientOnly>
            
              <NuxtLink :to="`/posts/${post?.id}`" class="read-btn">
                Enter Dungeon ➔
              </NuxtLink>
            </div>
          </div>
        </article>
      </template>

      <p v-else-if="!pending">No posts found in the armory backend.</p>
    </div>

    <!-- 🕒 Loading State -->
    <div v-if="pending" class="loading-box">
      <div class="spinner"></div>
      <p>Loading floors... ⚡</p>
    </div>
  </div>
</template>

<style scoped>
.li {margin: 40px; padding: 40px;}
.container { max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; }
.posts-grid { display: flex; flex-direction: column; gap: 24px; margin-bottom: 30px; }
.card-inner { display: flex; gap: 20px; width: 100%; }
.post-card { padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc; }
@media (max-width: 600px) { .card-inner { flex-direction: column; } }

/* Image Frame Dimensions */
.image-wrapper {
  flex-shrink: 0;
  width: 200px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #e2e8f0;
}
.post-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.post-card:hover .post-image { transform: scale(1.05); }

.card-content { flex: 1; }
.read-btn { display: inline-block; margin-top: 12px; color: #3498db; text-decoration: none; font-weight: bold; }
.loading-box { display: flex; flex-direction: column; align-items: center; padding: 20px; }
.spinner { width: 30px; height: 30px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>
