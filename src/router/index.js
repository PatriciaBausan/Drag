import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LevelsView from "../views/LevelsView.vue";
import GameView from "../views/GameView.vue";

const routes = [
  {
    path: "/",
    component: HomeView
  },
  {
    path: "/niveles",
    component: LevelsView
  },
  {
  path: "/juego",
  component: GameView
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;