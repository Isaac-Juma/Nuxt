<script setup>
import { useAsyncData, useRoute } from '#app'

// 1. Look at the web browser address bar to see what ID number was clicked
const route = useRoute()
const postId = route.params.id

// 2. Fetch the specific data from our internal server API route
const { data: post, pending, error } = await useAsyncData(
  `post-detail-${postId}`, 
  () => $fetch(`/api/wordpress/${postId}`), 
  {
    lazy: false // Waits for the data to arrive cleanly before flipping the page
  }
)
</script>

<template>
  <div class="dungeon-container">
    <!-- Back Navigation Arrow -->
    <NuxtLink to="/" class="back-link">
      <span>←</span> Leave Dungeon (Exit to Main Gate)
    </NuxtLink>

    <!-- 🕒 1. LOADING SCREEN: Shows up while looking into the chamber -->
    <div v-if="pending" class="loading-screen">
      <div class="spinner"></div>
      <p>Decoding dungeon logs... 🔍</p>
    </div>

    <!-- 🛑 2. ERROR SCREEN: Shows up if the ID does not exist -->
    <div v-else-if="error || !post" class="error-screen">
      <h2>⚠️ Floor Expired</h2>
      <p>This specific boss room has already been cleared or does not exist.</p>
      <NuxtLink to="/" class="error-btn">Return to Safety</NuxtLink>
    </div>

    <!-- ⚔️ 3. THE REVEAL: Shows up when the data is loaded -->
    <article v-else class="post-layout">
      
      <!-- Giant Featured Banner Graphic -->
      <div v-if="post.image" class="banner-wrapper">
        <img :src="post.image" alt="Boss Banner" class="banner-image" />
      </div>

      <!-- Main Headline Block -->
      <header class="post-header">
        <h1 v-html="post.title?.rendered" class="main-title"></h1>
        <div class="badge-row">
          <span class="rank-badge">S-RANK</span>
          <span class="id-badge">ROOM ID: #{{ post.id }}</span>
        </div>
      </header>

      <!-- Main Body Content Text Box -->
      <hr class="divider" />
      
      <ClientOnly>
        <!-- Renders the full article HTML structure from WordPress cleanly -->
        <div v-html="post.content?.rendered" class="content-body"></div>
      </ClientOnly>

    </article>
  </div>
</template>

<style scoped>
/* Main Content Boundaries */
.dungeon-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

/* Back Link Action Button */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #7f8c8d;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
  transition: color 0.2s ease;
}
.back-link:hover {
  color: #3498db;
}

/* Giant Banner Canvas Frame */
.banner-wrapper {
  width: 100%;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  background-color: #e2e8f0;
}
.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Typography Hierarchy Setup */
.main-title {
  font-size: 38px;
  line-height: 1.2;
  color: #1a252f;
  margin: 0 0 15px 0;
  font-weight: 800;
}

/* Badge Layout Formatting */
.badge-row {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}
.rank-badge {
  background-color: #e74c3c;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 1px;
}
.id-badge {
  background-color: #ecf0f1;
  color: #7f8c8d;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
}

.divider {
  border: 0;
  height: 1px;
  background-color: #e2e8f0;
  margin: 25px 0;
}

/* 🎨 THE MAGIC CSS RULE: Deep maps styles straight onto raw incoming WordPress tags */
.content-body :deep(p) {
  font-size: 18px;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 24px;
}
.content-body :deep(h2) {
  font-size: 26px;
  color: #2c3e50;
  margin: 40px 0 16px 0;
  font-weight: 700;
}
.content-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
}

/* Spinning Indicator Assembly */
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
}
.spinner {
  width: 45px;
  height: 45px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #e74c3c;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* Error Handling Elements */
.error-screen { text-align: center; padding: 60px 20px; background: #fff5f5; border-radius: 12px; border: 1px solid #fed7d7; }
.error-screen h2 { color: #c53030; margin-bottom: 10px; }
.error-btn { display: inline-block; margin-top: 20px; background: #c53030; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; }
</style>
