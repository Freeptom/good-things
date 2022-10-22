import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES, ROUTE_LINKS } from "@/constants";
import HomeView from "../views/HomeView.vue";
import LoremPage from "../views/LoremPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTE_NAMES.HOME,
      component: HomeView,
    },
    {
      path: ROUTE_LINKS.WHAT_WE_DO,
      name: ROUTE_NAMES.WHAT_WE_DO,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.DIGITAL_DIVIDE,
      name: ROUTE_NAMES.DIGITAL_DIVIDE,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.GET_INVOLVED,
      name: ROUTE_NAMES.GET_INVOLVED,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.OUR_NETWORK,
      name: ROUTE_NAMES.OUR_NETWORK,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.INSIGHTS,
      name: ROUTE_NAMES.INSIGHTS,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.LEARN,
      name: ROUTE_NAMES.LEARN,
      component: LoremPage,
    },
    {
      path: ROUTE_LINKS.DONATE,
      name: ROUTE_NAMES.DONATE,
      component: LoremPage,
    },
  ],
});

export default router;
