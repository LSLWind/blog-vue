import {createRouter, createWebHistory} from "vue-router";
import BlogHome from "@/views/BlogHome";
import ArticlePage from "@/views/ArticlePage";
import LogPage from "@/views/LogPage";
import ArticleDetail from "@/components/ArticleDetail";
import LslCheckout from "@/components/lsl/LslCheckout";
import LslHome from "@/components/lsl/LslHome";
import LslAddArticle from "@/components/lsl/LslAddArticle";
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
    },
    {
        path: "/lsl/home",
        name: "LslHome",
        component: LslHome
    },
    {
        path: "/lsl/addArticle",
        name:"LslArticle",
        component: LslAddArticle
    }

]


export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})