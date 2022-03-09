import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//TODO axios自定义request出错
//路由
import {router} from './router'
const app = createApp(App)
//vue3 注册全局指令
app.directive('title',  function (el) {
    document.title = el.dataset.title
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')