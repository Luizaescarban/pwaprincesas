import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Detalhes from '@/views/Detalhes.vue'
import Carrinho from '@/views/CarrinhoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/detalhes/:nome',
    name: 'Detalhes',
    component: Detalhes
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
