import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks-list',
    component: () => import('../views/TasksListView.vue')
  },
  {
    path: '/tasks/:id',
    name: 'tasks-edit',
    component: () => import('../views/TasksEditView.vue')
  },
  {
    path: '/task-add',
    name: 'tasks-add',
    component: () => import('../views/TasksAddView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
