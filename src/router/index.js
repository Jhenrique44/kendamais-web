import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: "/user",
    component: () => import("../views//UserPage/UserView.vue"),
    children: [
      {
        path: "edit",
        name: "user-edit",
        component: () => import("../views/UserPage/UserEdit")
      },
      {
        path: "",
        name: "user",
        component: () => import("../views/UserPage/UserProducts.vue")
      }
    ]
  },
  {
    path: "/produto/:id",
    name: "product",
    component: ProductView,
    props: true
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
