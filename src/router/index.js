import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)
const Personal = () => import('../components/personalcenter/Personal')
const SignIn = () => import('../components/user/SignIn')
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/personal"
        },
        {
            path: '/personal',
            component: Personal
        },
        {
            path: '/signin',
            component: SignIn
        }
    ],
    mode: 'history'
})