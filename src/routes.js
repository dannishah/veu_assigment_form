/* eslint-disable */

import { createWebHistory, createRouter } from 'vue-router'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const routes = [


    {
        name: 'Login',
        path: '/',
        component: Login
    },

    {
        name: 'Signup',
        path: '/Signup',
        component: Signup
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
