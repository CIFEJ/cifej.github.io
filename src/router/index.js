import { createRouter, createWebHistory } from 'vue-router'

// ponytail: shared suffix avoids repeating 40 chars across every route
const SUFFIX = ' — Colegio de Ingenieros Forestales de Jalisco'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    meta: { title: `Inicio${SUFFIX}` }
  },
  {
    path: '/nosotros',
    component: () => import('../views/AboutView.vue'),
    meta: { title: `Nosotros${SUFFIX}` }
  },
  {
    path: '/servicios',
    component: () => import('../views/ServicesView.vue'),
    meta: { title: `Servicios${SUFFIX}` }
  },
  {
    path: '/galeria',
    component: () => import('../views/GalleryView.vue'),
    meta: { title: `Galería${SUFFIX}` }
  },
  {
    path: '/contacto',
    component: () => import('../views/ContactView.vue'),
    meta: { title: `Contacto${SUFFIX}` }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Página no encontrada — CIFEJ' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: '',
  scrollBehavior: () => ({ top: 0 })
})

// Update document title on each navigation
router.afterEach((to) => {
  document.title =
    to.meta.title || 'CIFEJ — Colegio de Ingenieros Forestales de Jalisco'
})

export default router
