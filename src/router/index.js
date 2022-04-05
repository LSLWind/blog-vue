import {createRouter, createWebHashHistory} from "vue-router";
import BlogHome from "@/views/BlogHome";
import ArticlePage from "@/views/ArticlePage";
import LogPage from "@/views/LogPage";
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
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})