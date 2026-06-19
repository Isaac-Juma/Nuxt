<template>
    <h1>About Page</h1>
    <p>Name: {{ store.user }}</p>

    <img
    src="~/assets/igris.jpg"
    alt="Discover Nuxt"
    width="300"
    height="200"
    >
</template>

<script setup>
    definePageMeta({layout: 'test'})
    
    const store = useUserStore()
</script>

<style scoped>

</style>