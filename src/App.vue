<template>
    <header>
        <div class="header-top">
            <div class="logo">
                <img src="./assets/AIS_LOGO.png" alt="Company Logo" />
            </div>
        </div>

        <div class="header-bottom">
            <nav>
                <router-link to="/home">HOME</router-link> |
                <router-link to="/blog">BLOG</router-link> |
                <router-link to="/projects">PROJECTS</router-link> |
                <router-link to="/about">ABOUT</router-link> |
                <router-link to="/contact">CONTACT</router-link> |
                <router-link to="/links">LINKS</router-link>
            </nav>
        </div>
    </header>

    <div class="articles">
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>
    header{
        background-color: #375BDC;
        width: 100%;
        outline-style: solid;
        outline-width: 5px;
        outline-color: #375BDC;
    }

    header .header-top{
        text-align: center;
        height: 15vh;
    }

    header .header-top .logo img{
        width: 200px;
        height: auto;
    }

    header .header-bottom{
        text-align: center;
        margin-top: 20px;
    }

    header .header-bottom nav{
        color: #ffffff;
        padding: 10px;
    }

    header .header-bottom nav a{
        color: #ffffff;
    }

    header .header-bottom nav a:hover{
        color: wheat;
    }

    .articles{
        text-align: center;
    }
</style>
