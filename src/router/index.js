import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/users/Signup.vue";
import Login from "../views/users/Login.vue";
import Logout from "../views/users/Logout.vue";
import WorkoutsIndex from "../views/workouts/Index.vue";
import WorkoutsNew from "../views/workouts/New.vue";
import WorkoutsShow from "../views/workouts/Show.vue";
import WorkoutsEdit from "../views/workouts/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/workouts",
    name: "workouts-index",
    component: WorkoutsIndex
  },
  {
    path: "/workouts/new",
    name: "workouts-new",
    component: WorkoutsNew
  },
  {
    path: "/workouts/:id",
    name: "workouts-show",
    component: WorkoutsShow
  },
  {
    path: "/workouts/:id/edit",
    name: "workouts-edit",
    component: WorkoutsEdit
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
export default router;
