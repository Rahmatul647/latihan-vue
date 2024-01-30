<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Minus,explicabo beatae. Facilis fuga temporibus obcaecati est voluptate officiis?
           Expedita debitis atque nostrum ea nulla recusandae accusamus molestias sunt id maiores.
        </p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>