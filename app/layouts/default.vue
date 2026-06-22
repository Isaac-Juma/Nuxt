<script setup>

</script>

<template>
    <!--PAGE Header-->
    <div class="base-house">
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