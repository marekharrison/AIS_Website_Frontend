import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Links from './components/Links.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/blog', component: Blog },
        { path: '/projects', component: Projects },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/links', component: Links },
        { path: '/', redirect: '/home' }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
