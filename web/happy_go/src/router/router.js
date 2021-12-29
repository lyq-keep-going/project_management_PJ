// 路由
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// 组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import PersonalCenter from '../pages/PersonalCenter.vue'
import Home from '../pages/Home.vue'
//import Course from '../components/Course.vue'

import CourseDetail from '../pages/CourseDetail.vue'
import SearchResult from '../pages/SearchResult.vue'
import SearchBar from '../components/SearchBar.vue'

// 路由
const routes = [
    {
        path: '/', component: Home, meta: { isLogin: false },
        children: [
            { path: '', component: SearchBar },
        ]
    },
    { path: '/login', component: Login, meta: { isLogin: false } },
    { path: '/register', component: Register, meta: { isLogin: false } },
    { path: '/personalCenter', component: PersonalCenter, meta: { isLogin: true } },
    { name: 'CourseDetail', path: '/CourseDetail/:id', component: CourseDetail },
    {
        name: 'SearchResult', path: '/SearchResult', component: SearchResult,
        children: [
            { name: 'SearchBar', path: '', component: SearchBar },
        ]
    }
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