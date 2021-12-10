// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons'

import App from './App.vue'
import router from './router/router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

const app = createApp(App)

app.use(store)
app.use(ElementPlus)
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName];
        app.component(iconName, item)
    }
}
app.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
    //获取用户登录成功后储存的登录标志
    let getFlag = localStorage.getItem("flag");
    let getToken = localStorage.getItem("token");
    //如果登录标志存在且为isLogin，即用户已登录
    if (getFlag == "isLogin" && getToken !== null) {
        //设置vuex登录状态为已登录
        store.state.isLogin = true;
        next();
        //如果已登录，还想想进入登录注册界面，则定向回首页
        if (!to.meta.isLogin) {
            $message.warning('请先退出登录');
            next({ path: '/' })
        }

        //如果登录标志不存在，即未登录
    } else {
        //用户想进入需要登录的页面，则定向回登录界面
        if (to.meta.isLogin) {
            next({
                path: '/login',
            })
            //用户进入无需登录的界面，则跳转继续
        } else {
            next()
        }
    }

});

router.afterEach(() => {
    window.scroll(0, 0);
});

app.use(router)

// 最后再 mount
app.mount('#app')