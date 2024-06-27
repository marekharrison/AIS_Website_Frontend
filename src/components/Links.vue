<template>
    <h1>Testing #6</h1>

    <div class="container" v-for="x in linkages">

        <div class="wrapper">

            <a v-bind:href="x.url">
                <img v-bind:src="x.pic" />
                <h4>{{ x.name }}</h4>
            </a>

        </div>
    </div>
</template>

<script setup>
    import { reactive } from "vue";

    import github_icon from '@/assets/Icons/GitHub.png'

    const linkages = reactive([
        { name: 'Github', url: "https://github.com/marekharrison", pic: github_icon },
    ])
</script>

<style scoped>
    .container {
        margin: 20px;
        display: inline-block;
    }

    .wrapper {
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 10px 10px;
    }

    img {
        width: 200px;
        height: auto;
    }
</style>