<script setup>
import NavMenu from './Tailwindcss_Ui_Design/menus/NavMenu.vue';

    
// const Navlinks = ref([
//     {name: 'Home', path: '/'}
// ])

</script>

// This will be the slot content for the NavMenu component. add navigation links 
// or any other content i want to display within the navigation menu here. 
<template>
    <NavMenu>
        <ul class="Menu-nav col-span-1  md:col-span-2 lg:col-span-3 xl:col-span-4">

        </ul>
        <li ><NuxtLink to='/'>Home</NuxtLink></li>
        <li ><NuxtLink to='/about'>About Us</NuxtLink></li>
        <li ><NuxtLink to='/contact'>Contact Us</NuxtLink></li>
        <li ><NuxtLink to='/services'>Services</NuxtLink></li>
        <li><NuxtLink to='/login'>Login</NuxtLink></li>
        <li><NuxtLink to='/profile'>profile</NuxtLink></li>
    </NavMenu>
</template>