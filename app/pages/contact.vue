<template>
    <h1>Contact Page</h1>
    <p>Name:{{ store.user }}</p>
</template>

<script setup>

    definePageMeta({layout: 'test'})
    
    const store = useUserStore()

</script>