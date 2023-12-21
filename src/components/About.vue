<template>
    <h1>Testing #4</h1>

    <div class="container">
        <div class="wrapper" v-for="x in proglangs">
            <img v-bind:src="x.url" />
            <h4>{{ x.name }}</h4>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    
    import jv_icon from '@/assets/Icons/java.png'
    import py_icon from '@/assets/Icons/python.png'
    import php_icon from '@/assets/Icons/php.png'
    import js_icon from '@/assets/Icons/javascript.png'
    import html_icon from '@/assets/Icons/html.png'
    import css_icon from '@/assets/Icons/css.png'
    import sql_icon from '@/assets/Icons/sql.png'

    const proglangs = reactive([
        {name: 'Java', url: jv_icon},
        {name: 'Python', url: py_icon},
        {name: 'PHP', url: php_icon},
        {name: 'JavaScript', url: js_icon},
        {name: 'HTML', url: html_icon},
        {name: 'CSS', url: css_icon},
        {name: 'SQL', url: sql_icon},
    ])
</script>

<style scoped>
    .container{
        border-top: thin solid black;
    }

    .wrapper {
        display: inline-block;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }

    img{
        width: 100px;
        height: auto;
    }
</style>