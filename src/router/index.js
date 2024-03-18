import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/sobre",
      name: "sobre",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/cursos",
      name: "cursos",
      component: () => import("../views/CoursesView.vue")
    },
    {
      path: "/empregos",
      name: "empregos",
      component: () => import("../views/JobsView.vue")
    },
    {
      path: "/contato",
      name: "contato",
      component: () => import("../views/ContactView.vue")
    },
    {
      path: "/cursocomercializacao",
      name: "Comercialização de Cafés",
      component: () => import("../views/ComercialCourse.vue")
    },
    {
      path: "/cursotorra",
      name: "Introdução à Torra de Cafés",
      component: () => import("../views/RoastCourse.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  }
});

export default router;
