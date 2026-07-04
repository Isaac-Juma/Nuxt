<script setup>

</script>

<template>
    <!--PAGE Header-->
    <div class="base-house 
        bg-blue-100 
        mid:bg-blue-500
        lg:bg-blue-700
        xl:bg-blue-900
    ">
        <Header />
        <Navigation />

        <!--Main Content Area-->
        <main class="main_page">
            <slot />
        </main>

        <!--Aside Panel-->
        <SidePanel />

        <!--PAGE Footer-->
        <FooterPage />
    </div>
</template>