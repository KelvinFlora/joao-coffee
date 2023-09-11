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
      path: "/servicos",
      name: "servicos",
      component: () => import("../views/ServicesView.vue")
    },
    {
      path: "/cursos",
      name: "cursos",
      component: () => import("../views/Courses.vue")
    },
    {
      path: "/empregos",
      name: "empregos",
      component: () => import("../views/Jobs.vue")
    },
    {
      path: "/contato",
      name: "contato",
      component: () => import("../views/ContactView.vue")
    }
  ]
});

export default router;
