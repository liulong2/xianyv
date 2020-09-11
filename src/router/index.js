import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)
const Personal = () => import('../components/personalcenter/Personal')
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/home"
        },
        {
            path: '/personal',
            component: Personal
        }
    ]
})