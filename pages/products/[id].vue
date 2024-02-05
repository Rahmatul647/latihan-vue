<template>
    <div>
        <Head>
            <Title>LORD RAHMA | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>

        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' + id

    //fetch the products
    const{ data: product } = await useFetch(url, {key: id})

    if(!product.value){
        throw createError({statusCode: 404, statusMessage : 'Product not found'})
    }
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>