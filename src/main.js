import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//TODO axios自定义request出错
//路由
import {router} from './router'
//echart图表
// import * as echarts from 'echarts'

const app = createApp(App)

//挂载echart图表
// app.config.globalProperties.$echarts = echarts

//引入v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});



//vue3 注册全局指令，title-标签标题title为自定义
app.directive('title',  function (el) {
    document.title = el.dataset.title
})
app.use(ElementPlus);
app.use(VMdPreview);
app.use(router);
app.mount('#app')
