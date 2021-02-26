import { createWebHistory, createRouter } from "vue-router";
// import VueRouterMultiguard from "vue-router-multiguard";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
const { auth } = AuthMiddleware();

import Home from "@/modules/institucional/home";
import FinanceiroIndex from "@/modules/financeiro/pages/FinanceiroIndex";
import AdicionarConta from "@/modules/financeiro/pages/AdicionarConta";
import EditarConta from "@/modules/financeiro/pages/EditarConta";

import Login from "@/modules/auth/pages/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: [auth],
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Home,
  },
  {
    path: "/financeiro",
    name: "Financeiro",
    component: FinanceiroIndex,
    beforeEnter: [auth],
  },
  {
    path: "/financeiro/adicionarconta",
    name: "FinanceiroAdd",
    component: AdicionarConta,
    beforeEnter: [auth],
  },
  {
    path: "/financeiro/editarconta",
    name: "FinanceiroEdit",
    component: EditarConta,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
