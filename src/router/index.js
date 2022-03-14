import {createRouter, createWebHashHistory} from "vue-router";
import BlogHome from "@/views/BlogHome";
import ArticlePage from "@/views/ArticlePage";
import ArticleHome from "@/views/ArticleHome";
import LogPage from "@/views/LogPage";
// import ArticleHome from "@/views/ArticleHome";

const routes = [
    {
        path: '/',
        name: 'BlogHome',
        component: BlogHome,
        children: [
            {
                path: '',
                component: ArticleHome
            },
            {
                path: "/article",
                component: ArticlePage
            },
            {
                path: '/log',
                component: LogPage
            }

        ]
    },
    {
        path: "/article",
        name: "article",
        component: ArticlePage
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})