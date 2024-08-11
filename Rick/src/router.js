import { createRouter, createWebHistory } from 'vue-router';

import LauncherPaginas from './paginas/LauncherPaginas.vue'; 
import HelloWorld from './components/HelloWorld.vue';
import libreJuan from './paginas/libreJuan.vue';
import datosJuan from './paginas/datosJuan.vue';

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: LauncherPaginas, 
  },
  {
    path: '/rick',
    name: 'rick',
    component: HelloWorld,
  },
  {
    path: '/libre',
    name: 'libre',
    component: libreJuan,
  },
  {
    path: '/datos',
    name: 'datos',
    component: datosJuan,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes 
});

export default router;