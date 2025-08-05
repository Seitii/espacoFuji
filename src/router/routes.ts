import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/NavBar/Navbar.vue'),
    children: [
      { 
        path: '/', component: () => import('pages/paginaInicial.vue')
      },
    ],
  },
];

export default routes;
