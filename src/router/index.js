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
      path: "/educacao",
      name: "CoffeeFamilyPage",
      component: () => import("../views/CafeFamiliaView.vue")
    },
    {
      path: "/curso1",
      name: "Curso de Barista",
      component: () => import("../views/DrinksCourse.vue")
    },
    {
      path: "/curso2",
      name: "Curso de Cafes Especiais",
      component: () => import("../views/CoffeeView.vue")
    },
    {
      path: "/ciclo",
      name: "Ciclo de Produção do Café",
      component: () => import("../views/CicloView.vue")
    },
    {
      path: "/sustentavel",
      name: "Sustentabilidade",
      component: () => import("../views/SustentavelView.vue")
    },
    {
      path: "/impacto",
      name: "Impacto Social",
      component: () => import("../views/ImpactoView.vue")
    },
    {
      path: "/historias",
      name: "Histórias",
      component: () => import("../views/HistoriasView.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  }
});

export default router;
