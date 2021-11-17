// 路由
import VueRouter from 'vue-router'

// 组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

// 路由
const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router