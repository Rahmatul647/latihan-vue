<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
                <div v-for="p in products" :key="p">
                    <ProductCard :product="p" />
                </div>

            <!-- <div :v-for="p in item">
                {{ p}}
            </div> -->
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    //fetch the products
    const {data: products} = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'LORD RAHMA',
        meta: [
            {name: 'description', content: 'LORD RAHMA'}
        ]
    })
</script>

<style scoped>

</style>