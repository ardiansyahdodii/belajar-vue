import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import AboutView from "../views/About.vue";
import UserView from "../views/user/User.vue";
import UserDetailView from "../views/user/UserDetail.vue"
import UserPostView from "../views/user/UserPost.vue"
import UserProfileView from "../views/user/UserProfile.vue"
import UserIndexView from "../views/user/UserIndex.vue"
import PiniaView from "../views/Pinia.vue"

const routes = [
    {
        path: "/",
        component: DashboardView
    },
    {
        path: "/about",
        component: AboutView
    },
    {
        path: "/user",
        component: UserView
    },
    {
        path: "/user/:name",
        component: UserIndexView,
        children: [
            {
                path: "",
                component: UserDetailView
            },
            {
                path: "/user/:name/posts",
                component: UserPostView
            },
            {
                path: "/user/:name/profile",
                component: UserProfileView
            }
        ]
    },
    {
        path: "/pinia",
        component: PiniaView
    },
    // {
    //     path: "/user/:name/posts",
    //     component: UserPostView
    // },
    // {
    //     path: "/user/:name/profile",
    //     component: UserProfileView
    // }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
