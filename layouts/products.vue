<template>
    <div>
<header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">LORD RAHMA</NuxtLink>
                
            </nav>
        </header>B

        <!-- output  the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><Nuxtlink to="/">Home</Nuxtlink></li>
                <li><Nuxtlink to="/about">About</Nuxtlink></li>
                <li><Nuxtlink to="/products">Products</Nuxtlink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>