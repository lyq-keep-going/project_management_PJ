// 路由
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// 组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import PersonalCenter from '../pages/PersonalCenter.vue'
import Home from '../pages/Home.vue'

import Course from '../pages/Courses.vue'

// 路由
const routes = [
    { path: '/', component: Home, meta: { isLogin: false } },
    { path: '/login', component: Login, meta: { isLogin: false } },
    { path: '/register', component: Register, meta: { isLogin: false } },
    { path: '/personalCenter', component: PersonalCenter, meta: { isLogin: true } },
    { path: '/course', component: Course }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
    created: function () {
        if (!this.$route.matched.length) {
            this.$router.push("/");
        }
        let getFlag = localStorage.getItem("flag");
        let getToken = localStorage.getItem("token");
        if ((getToken === null || getFlag !== "isLogin") && this.$route.path != '/login') {
            this.$router.push("/login");
        }
    },
})

export default router