// 路由
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// 组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import PersonalCenter from '../pages/PersonalCenter.vue'
import Home from '../pages/Home.vue'

import CourseDetail from '../pages/CourseDetail.vue'
import SearchResult from '../pages/SearchResult.vue'
import SearchBar from '../components/SearchBar.vue'


// 路由
const routes = [
    {
        path: '/', component: Home,
        children: [
            { path: '', component: SearchBar },
        ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/personalCenter', component: PersonalCenter }


    , { name: 'CourseDetail', path: '/CourseDetail', component: CourseDetail }
    , {
        name: 'SearchResult', path: '/SearchResult', component: SearchResult,
        children: [
            { name: 'SearchBar',path: '', component: SearchBar },
        ]
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

export default router