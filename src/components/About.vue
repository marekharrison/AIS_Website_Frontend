<template>
    <h1>Testing #4</h1>

    <div class="container">
        <h2>Programming Languages</h2>
        <div class="wrapper" v-for="x in proglangs">
            <img v-bind:src="x.url" />
            <h4>{{ x.name }}</h4>
        </div>
    </div>

    <div class="container">
        <h2>Frameworks</h2>
        <div class="wrapper" v-for="x in frameworks">
            <img v-bind:src="x.url" />
            <h4>{{ x.name }}</h4>
        </div>
    </div>

    <div class="container">
        <h2>Technologies</h2>
        <div class="wrapper" v-for="x in technologies">
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

    import spring_icon from '@/assets/Icons/spring.png'
    import django_icon from '@/assets/Icons/django.png'
    import laravel_icon from '@/assets/Icons/laravel.png'
    import vue_icon from '@/assets/Icons/VueJS.png'

    import aws_icon from '@/assets/Icons/AWS.png'
    import azure_icon from '@/assets/Icons/Azure.png'
    import docean_icon from '@/assets/Icons/DigitalOcean.png'
    import docker_icon from '@/assets/Icons/Docker.png'
    import nginx_icon from '@/assets/Icons/Nginx.png'
    import mysql_icon from '@/assets/Icons/mysql.png'
    import sqlite_icon from '@/assets/Icons/SQLite.png'
    import git_icon from '@/assets/Icons/git.png'

    const proglangs = reactive([
        {name: 'Java', url: jv_icon},
        {name: 'Python', url: py_icon},
        {name: 'PHP', url: php_icon},
        {name: 'JavaScript', url: js_icon},
        {name: 'HTML', url: html_icon},
        {name: 'CSS', url: css_icon},
        {name: 'SQL', url: sql_icon},
    ])

    const frameworks = reactive([
        {name: 'Spring', url: spring_icon},
        {name: 'Django', url: django_icon},
        {name: 'Laravel', url: laravel_icon},
        {name: 'VueJS', url: vue_icon},
    ])

    const technologies = reactive([
        {name: 'AWS', url: aws_icon},
        {name: 'Azure', url: azure_icon},
        {name: 'DigitalOcean', url: docean_icon},
        {name: 'Docker', url: docker_icon},
        {name: 'Nginx', url: nginx_icon},
        {name: 'MySQL', url: mysql_icon},
        {name: 'SQLite', url: sqlite_icon},
        {name: 'Git', url: git_icon},
    ])
</script>

<style scoped>
    .container{
        border-top: thin solid black;
        margin: 20px;
    }

    .wrapper {
        display: inline-block;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 10px 10px;
    }

    img{
        width: 100px;
        height: auto;
    }
</style>