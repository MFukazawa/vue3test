import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Posts from './pages/Posts.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/posts", component: Posts },
  ]
})