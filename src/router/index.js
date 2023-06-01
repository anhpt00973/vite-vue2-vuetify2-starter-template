import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from '@/views/Layout/Base.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/views/Home.vue'),
    children: [
        {
            path: '/',
            name: 'Dashboard1',
            component: () => import('../views/DashBoards/dashboard1.vue'),
        },
        {
            path: '/dashboard1',
            name: 'Dashboard1',
            component: () => import('../views/DashBoards/dashboard1.vue'),
        },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
});

export default router;
