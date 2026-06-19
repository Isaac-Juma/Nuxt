<script setup>
import UserGoals from './Tailwindcss_Ui_Design/UserGoals.vue';
import UserPoints from './Tailwindcss_Ui_Design/UserPoints.vue';
import DailyQuest from './Tailwindcss_Ui_Design/DailyQuest.vue';
import Rewards from './Tailwindcss_Ui_Design/Rewards.vue';

definePageMeta({layout: 'default'})
const { data: posts, pending, error } = await useAsyncData('wp-posts-clean-stream', () => $fetch('/api/wordpress/posts'),
  { 
    lazy: false,
    default: () => [] 
  } 
)

</script>

<template>
  <div class="footerPage bg-gray-900 place-items-center">

    <h1>Footer Page</h1>
    <P>{{ posts?.length || 0 }} posts available</P>

    <li v-for="post in posts" :key="post?.id">
      <NuxtLink :to="`/posts/${post?.id}`">
        {{ post?.title?.rendered }}
      </NuxtLink>
    </li>

    
    <UserGoals>
      User Dashboard
    </UserGoals>

    <span class="text-white">User Profile</span>
    <div class="flex">
      <UserGoals class="flex flex-1">
        My Quest {{  }}
      </UserGoals>

      <UserPoints class="flex flex-1">
        Points{{  }}
      </UserPoints>
        
      <DailyQuest class="flex-1">
        Daily Quest {{  }}
      </DailyQuest>

      <Rewards class="flex-1">
        Rewards: {{  }} <br>
        This are the Gifts you received for your achivements you are free Watch anime for the next 2 hrs 
      </Rewards>
    </div>

  </div>
</template>