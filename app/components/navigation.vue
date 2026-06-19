<script setup>
// const Navlinks = ref([
//     {name: 'Home', path: '/'}
// ])

</script>

<template>
    <nav class="flex flex-wrap justify-center items-center gap-3 p-4 bg-slate-50 rounded-xl shadow-sm">
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200 transition" to="/">HOME</NuxtLink>
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200 transition" to="/about">About Us</NuxtLink>
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200 transition" to="/contact">Contact Us</NuxtLink>
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200 transition" to="/services">Services</NuxtLink>
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200 transition" to="/login">Login</NuxtLink>
        <NuxtLink class="px-3 py-2 rounded-lg hover:bg-slate-200" to="/profile">profile</NuxtLink>
    </nav>
</template>

<style scoped>
</style>