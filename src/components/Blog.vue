<template>
    <h1>Testing #2</h1>
    <div class="blogpost">
        <div v-for="x in posts" v-bind:key="x.id" >
            <h3>{{ x.title.rendered }}</h3>
            <p>{{ x.date_gmt }} by AIS Tech</p>
            <div v-html="x.content.rendered"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const posts = ref([])

    onMounted(() => {
        
        async function loadPosts(){
            
            let url = 'http://localhost/mysite/wp-json/wp/v2/posts'
            const response = await fetch(url)
            const data = await response.json()
            posts.value = data
        }

        loadPosts()

    })
</script>

<style scoped>

</style>