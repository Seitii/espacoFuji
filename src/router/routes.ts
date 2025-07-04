import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/NavBar/Navbar.vue'),
    children: [
      { 
        path: '/', component: () => import('pages/paginaInicial.vue')
      },
      // {
      //   path: '/clientes',
      //   children: [{path: "", component: () => import("pages/.vue")}]
      // },
      // {
      //   path: "/cardapio",
      //   children: [{path: "", component: () => import("pages/.vue")}]
      // },
    ],
  },
  // {
  //   path: "/realizarPedido/:clienteId",
  //   name: "realizarPedido",
  //   component: () => import("pages/RealizarPedido.vue")
  // },
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
];

export default routes;
