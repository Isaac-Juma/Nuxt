<script setup>

</script>

<template>
    <!--PAGE Header-->
    <div class="base-house 
        bg-blue-100 grid grid-cols-1 gap-4
        mid:grid-cols-2 bg-blue-500 gap-4
        lg:grid-cols-3 bg-blue-700
        xl:grid-cols-4 bg-blue-900
    ">
        <Header  />

        <!--Main Content Area-->
        <main class="main_page m-2 p-2 rounded-xl
            md:col-span-2 
            lg:col-span-2 
            xl:col-span-3"
            id="main_content"
            name="main_content"
        >
            <slot />
        </main>

        <!--Aside Panel-->
        <SidePanel />

        <!--PAGE Footer-->
        <FooterPage />
    </div>
</template>