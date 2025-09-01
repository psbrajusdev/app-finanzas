import { createRouter, createWebHashHistory } from "vue-router";
import BalanceView from "@/views/BalanceView.vue";
import CreditosView from "@/views/CreditosView.vue";
import DeudasView from "@/views/DeudasView.vue";
import GastosView from "@/views/GastosView.vue";
import IngresosView from "@/views/IngresosView.vue";

const routes = [
  { path: "/", component: BalanceView },
  { path: "/ingresos", name: "Ingresos", component: IngresosView },
  { path: "/gastos", name: "Gastos", component: GastosView },
  { path: "/creditos", name: "Creditos", component: CreditosView },
  { path: "/deudas", name: "Deudas", component: DeudasView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//que significa esto?
export default router;
