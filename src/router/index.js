import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import AboutView from "../views/About.vue";

const routes = [
    {
        path: "/",
        component: DashboardView
    },
    {
        path: "/about",
        component: AboutView
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
