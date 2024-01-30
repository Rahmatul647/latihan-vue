<template>
    <div>
<header>
            <nav>
                <NuxtLink to="/products">Rahma Jaya</NuxtLink>
                
            </nav>
        </header>

        <!-- output  the page content -->
        <div>
            <slot />
        </div>

        <footer>
            <ul>
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