import mainPage from '@/pages/mainPage';
import postPage from '@/pages/postPage';
import postIdPage from '@/pages/postIdPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: mainPage,
   },
   {
      path: '/post',
      component: postPage,
   },
   {
      path: '/post/:id',
      component: postIdPage,
   },
];

const router = createRouter({
   routes,
   history: createWebHistory(),
});

export default router;
