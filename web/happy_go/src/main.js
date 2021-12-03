// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons'

import App from './App.vue'
import router from './router/router'

import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName];
        app.component(iconName, item)
    }
}
app.config.globalProperties.$axios = axios;

// 最后再 mount
app.mount('#app')