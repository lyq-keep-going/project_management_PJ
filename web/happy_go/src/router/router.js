// 路由
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// 组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import PersonalCenter from '../pages/PersonalCenter.vue'
import Home from '../pages/Home.vue'

// 路由
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/personalCenter', component: PersonalCenter }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

export default router