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



    
// const Navlinks = ref([
//     {name: 'Home', path: '/'}
// ])

</script>

// This will be the slot content for the NavMenu component. add navigation links 
// or any other content i want to display within the navigation menu here. 
<template>
    <NavMenu>
        <img @click="isMenuOpen = !isMenuOpen"
            src="../assets/menu.gif"
            alt="Logo"
            class="my-logo 
                w-16 h-16 rounded-full
                md:block flex 
                lg:block flex
            "
        />
        <ul :class="[isMenuOpen ? 'flex' : 'hidden',
            'Menu-nav flex',
            'flex-col gap-4',
            'md:flex md:flex-row md:gap-4',
            'lg:flex lg:flex-row lg:gap-4'
        ]">
            <li v-for="link in navLinks" :key="link.name">
                <NuxtLink :to="link.path" class="nav-link">
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>

    </NavMenu>
</template>