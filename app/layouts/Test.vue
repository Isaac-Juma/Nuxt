<template>
    <div class="test">
        <h1 class="test">My Test will be in this file </h1>
        <aside>Aside Layout</aside>
        <main>

            <slot />

        </main>
    </div>
</template>

<style scoped>
div {
    background: rgb(144, 170, 241);
    text-align: center;
    color: rgb(0, 0, 0);
}
</style>