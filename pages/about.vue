<template>
    <div>
        <h2>About</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Perferendis numquam possimus facere magnam soluta dicta,
              aliquid commodi a maiores porro magni, sit alias fugiat
               unde fugit, laudantium debitis quis consectetur.
            </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Rem reprehenderit, veniam magnam tempora maiores ea enim.
              Asperiores ex voluptatibus expedita a porro! Dolor,
               dolores tenetur. Aliquid maxime incidunt magni aut!
            </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin-bottom: 20px 0;
    }
</style>