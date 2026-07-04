<script setup lang="ts">

</script>

<template>
    <nav class="Menu-nav grid
        sm:grid-cols-1 m-4 p-4 rounded-lg bg-slate-400
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
        "
        id="navMenu" 
        name="navMenu
    "> 
        <slot />
    </nav>
</template>