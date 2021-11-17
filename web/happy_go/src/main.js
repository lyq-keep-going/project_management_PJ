// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

// 最后再 mount
app.mount('#app')