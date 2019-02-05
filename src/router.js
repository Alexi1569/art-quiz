import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/start",
      name: "start",
      component: () =>
        import(/* webpackChunkName: "info" */ "./views/Start.vue")
    },
    {
      path: "/compare",
      name: "compare",
      component: () =>
        import(/* webpackChunkName: "info" */ "./views/Compare.vue")
    },
  ]
});
