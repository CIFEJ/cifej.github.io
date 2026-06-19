import { createRouter, createWebHistory } from 'vue-router'

// ponytail: shared suffix avoids repeating 40 chars across every route
const SUFFIX = ' — Colegio de Ingenieros Forestales de Jalisco'
const BASE_URL = 'https://ingenierosforestales.com'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: `Inicio${SUFFIX}`,
      description:
        'Colegio de Ingenieros Forestales del Estado de Jalisco. Más de 25 años promoviendo el manejo sustentable de bosques en Jalisco.',
      canonical: `${BASE_URL}/`
    }
  },
  {
    path: '/nosotros',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: `Nosotros${SUFFIX}`,
      description:
        'Conoce nuestra historia, misión y visión. Desde 1999 somos un colegio de 68 ingenieros forestales comprometidos con la gestión sostenible en Jalisco.',
      canonical: `${BASE_URL}/nosotros`
    }
  },
  {
    path: '/servicios',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: `Servicios${SUFFIX}`,
      description:
        'Servicios técnicos forestales especializados: trámites ante SEMARNAT y CONAFOR, programas de manejo forestal, reforestación y más en Jalisco.',
      canonical: `${BASE_URL}/servicios`
    }
  },
  {
    path: '/galeria',
    component: () => import('../views/GalleryView.vue'),
    meta: {
      title: `Galería${SUFFIX}`,
      description:
        'Galería de proyectos forestales: inventarios, aprovechamiento, reforestación, sanidad forestal y transformación de recursos en Jalisco.',
      canonical: `${BASE_URL}/galeria`
    }
  },
  {
    path: '/contacto',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: `Contacto${SUFFIX}`,
      description:
        'Contáctanos para servicios técnicos forestales en Jalisco. Estamos listos para asesorarte en el manejo sustentable de tus recursos naturales.',
      canonical: `${BASE_URL}/contacto`
    }
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

// Update document title, description and canonical on each navigation
router.afterEach((to) => {
  document.title =
    to.meta.title || 'CIFEJ — Colegio de Ingenieros Forestales de Jalisco'

  const desc = to.meta.description
  if (desc) {
    let el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', desc)
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', desc)
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', desc)
  }

  const canonical = to.meta.canonical
  if (canonical) {
    let el = document.querySelector('link[rel="canonical"]')
    if (el) el.setAttribute('href', canonical)
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle)
    ogTitle.setAttribute(
      'content',
      to.meta.title || 'CIFEJ — Colegio de Ingenieros Forestales de Jalisco'
    )
  const twTitle = document.querySelector('meta[name="twitter:title"]')
  if (twTitle)
    twTitle.setAttribute(
      'content',
      to.meta.title || 'CIFEJ — Colegio de Ingenieros Forestales de Jalisco'
    )
})

export default router
