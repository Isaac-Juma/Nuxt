<script setup>
import NavMenu from './Tailwindcss_Ui_Design/menus/NavMenu.vue';

const isMenuOpen = ref(false);
const navLinks = ref([
    { name: 'Home', path: '/', label: 'Home' },
    { name: 'About', path: '/about', label: 'About Us' },
    { name: 'Contact', path: '/contact', label: 'Contact Us' },
    { name: 'Services', path: '/services', label: 'Services' },
    { name: 'Login', path: '/login', label: 'Login' },
    { name: 'Profile', path: '/profile', label: 'Profile' }
]);
</script>

// This will be the slot content for the NavMenu component. add navigation links 
// or any other content i want to display within the navigation menu here. 
<template>
    <NavMenu>
        <NuxtImg @click="isMenuOpen = !isMenuOpen"
            src="/menu.gif"
            alt="Menu"
            class="nav-menu-icon cursor-pointer relative z-50 block focus:outline-none w-16 h-16 md:hidden lg:hidden"
        />

        <ul :class="[isMenuOpen ? 'flex bg-blue-300 m-4 p-4 rounded-xl w-full h-auto' : 'hidden md:flex lg:flex',
            'fixed inset-0 z-40 flex-col items-center justify-center gap-4 backdrop-blur-sm duration-300 ease-in-out',
            'md:static md:inset-auto md:z-auto md:w-auto md:h-auto md:flex md:flex-row md:justify-between md:items-center md:backdrop-blur-none',
            'lg:static lg:inset-auto lg:z-auto lg:w-auto lg:h-auto lg:flex lg:justify-between lg:items-center lg:backdrop-blur-none']
        ">
            <li v-for="link in navLinks" :key="link.name">
                <NuxtLink :to="link.path" @click="isMenuOpen = false" class="nav-link m-2 p-4">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </NavMenu>
</template>