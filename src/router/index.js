import {createRouter, createWebHistory} from "vue-router";
import BlogHome from "@/views/BlogHome";
import ArticlePage from "@/views/ArticlePage";
import LogPage from "@/views/LogPage";
import ArticleDetail from "@/components/ArticleDetail";
import LslCheckout from "@/components/lsl/LslCheckout";
// import ArticleHome from "@/views/ArticleHome";

const routes = [
    {
        path: '',
        component: BlogHome
    },
    {
        path: "/article",
        component: ArticlePage
    },
    {
        path: '/log',
        component: LogPage
    },
    {
        path: '/home',
        name: 'BlogHome',
        component: BlogHome,
    },
    {
        path: "/articleS",
        name: "article",
        component: ArticlePage
    },
    //路由跳转到详情页
    {
        path: "/articleDetail/:id",
        name: "articleDetail",
        component: ArticleDetail
    },
    //lsl 后台 CURD
    {
        path: "/lsl",
        name: 'LslCheckout',
        component: LslCheckout
    }
]


export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})