<script setup>

</script>

<template>
    <!--PAGE Header-->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen 

    ">
        <header class="headerBox col-span-1 
            justify-between items-center
            md:col-span-2 
            lg:col-span-3
        ">
            <Header />
        </header>

        <!--Main Content Area-->
        <main class="main_page col-span-1
            md:col-span-2
            lg:col-span-3
        "
            id=""
            name=""
        >
            <slot />
        </main>

        <!--Aside Panel-->
        <aside class="side_panel col-span-1
            md:col-span-2
            lg:col-span-3
        ">
            <slot name="aside" />
            <SidePanel />
        </aside>

        <!--PAGE Footer-->
        <footer class="footerBox col-span-1
            md:col-span-2
            lg:col-span-3   
        ">
            <slot name="footer" />
            <FooterPage />
        </footer>
    </div>
</template>