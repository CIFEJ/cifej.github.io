<template>
  <main>
    <div class="gallery-banner page-banner">
      <img
        src="/img/bannerGaleria.webp"
        alt=""
        class="banner-bg"
        aria-hidden="true"
        fetchpriority="high"
      />
    </div>

    <div class="gallery-container bg-section">
      <div class="gallery-header motion-pending" data-motion="fade-right">
        <h1 class="section-title">GALERÍA DE PROYECTOS</h1>
        <p class="section-body">
          Explora nuestra galería de proyectos y conoce cómo estamos marcando la
          diferencia en la gestión de los recursos naturales.
        </p>
      </div>

      <section
        v-for="cat in categories"
        :key="cat.id"
        class="gallery-section"
        :id="cat.id"
      >
        <h2
          class="gallery-section-title motion-pending"
          data-motion="fade-right"
        >
          {{ cat.title }}
        </h2>
        <div class="gallery-grid">
          <div
            v-for="img in cat.images"
            :key="img.src"
            class="gallery-item"
            @click="openLightbox(img)"
          >
            <img v-lazy="img.src" :alt="img.alt" />
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightbox.open"
      class="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
      @click.self="closeLightbox"
      @touchstart.passive="onLbTouchstart"
      @touchend.passive="onLbTouchend"
    >
      <div class="lightbox-inner">
        <button
          class="lightbox-close"
          @click="closeLightbox"
          aria-label="Cerrar"
        >
          ✕
        </button>
        <img :src="lightbox.src" :alt="lightbox.alt" />
        <div class="lightbox-nav">
          <button
            class="lightbox-prev"
            @click="navigateLightbox(-1)"
            aria-label="Anterior"
          >
            &#8249;
          </button>
          <button
            class="lightbox-next"
            @click="navigateLightbox(1)"
            aria-label="Siguiente"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-container motion-pending" data-motion="zoom-in">
      <div class="cta-content">
        <h3 class="section-title">Contáctanos para más información</h3>
        <p class="section-body">
          Si quieres obtener más información sobre nuestros proyectos y cómo
          podemos colaborar, no dudes en ponerte en contacto con nosotros.
        </p>
        <RouterLink to="/contacto" class="btn btn-beige"
          >CONTÁCTANOS</RouterLink
        >
      </div>
      <div class="cta-icon" aria-hidden="true"></div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '../composables/useMotion.js'

useMotion()

const categories = [
  {
    id: 'inventario',
    title: 'Inventario',
    images: [
      {
        src: '/img/galeria/Inventarios/img001_13_11zon.webp',
        alt: 'Inventario forestal 1'
      },
      {
        src: '/img/galeria/Inventarios/img002_14_11zon.webp',
        alt: 'Inventario forestal 2'
      },
      {
        src: '/img/galeria/Inventarios/img003_15_11zon.webp',
        alt: 'Inventario forestal 3'
      },
      {
        src: '/img/galeria/Inventarios/img004_16_11zon.webp',
        alt: 'Inventario forestal 4'
      },
      {
        src: '/img/galeria/Inventarios/img005_17_11zon.webp',
        alt: 'Inventario forestal 5'
      },
      {
        src: '/img/galeria/Inventarios/img006_18_11zon.webp',
        alt: 'Inventario forestal 6'
      },
      {
        src: '/img/galeria/Inventarios/img007_19_11zon.webp',
        alt: 'Inventario forestal 7'
      },
      {
        src: '/img/galeria/Inventarios/img008_20_11zon.webp',
        alt: 'Inventario forestal 8'
      },
      {
        src: '/img/galeria/Inventarios/img-parcelas01_9_11zon.webp',
        alt: 'Parcelas de inventario 1'
      },
      {
        src: '/img/galeria/Inventarios/img-parcelas02_10_11zon.webp',
        alt: 'Parcelas de inventario 2'
      },
      {
        src: '/img/galeria/Inventarios/img-parcelas03_11_11zon.webp',
        alt: 'Parcelas de inventario 3'
      },
      {
        src: '/img/galeria/Inventarios/img-parcelas04_12_11zon.webp',
        alt: 'Parcelas de inventario 4'
      },
      {
        src: '/img/galeria/Inventarios/img-modelo01_6_11zon.webp',
        alt: 'Modelo de inventario 1'
      },
      {
        src: '/img/galeria/Inventarios/img-modelo02_7_11zon.webp',
        alt: 'Modelo de inventario 2'
      },
      {
        src: '/img/galeria/Inventarios/img-modelo03_8_11zon.webp',
        alt: 'Modelo de inventario 3'
      }
    ]
  },
  {
    id: 'aprovechamiento',
    title: 'Aprovechamiento',
    images: [
      {
        src: '/img/galeria/Aprovechamiento/img001.webp',
        alt: 'Aprovechamiento forestal 1'
      },
      {
        src: '/img/galeria/Aprovechamiento/img002.webp',
        alt: 'Aprovechamiento forestal 2'
      },
      {
        src: '/img/galeria/Aprovechamiento/img003.webp',
        alt: 'Aprovechamiento forestal 3'
      },
      {
        src: '/img/galeria/Aprovechamiento/img004.webp',
        alt: 'Aprovechamiento forestal 4'
      },
      {
        src: '/img/galeria/Aprovechamiento/img005.webp',
        alt: 'Aprovechamiento forestal 5'
      },
      {
        src: '/img/galeria/Aprovechamiento/img006.webp',
        alt: 'Aprovechamiento forestal 6'
      }
    ]
  },
  {
    id: 'transformacion',
    title: 'Transformación',
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `/img/galeria/Transformacion/img${String(i + 1).padStart(3, '0')}_${i + 36}_11zon.webp`,
      alt: `Transformación forestal ${i + 1}`
    }))
  },
  {
    id: 'reforestacion',
    title: 'Reforestación',
    images: [
      {
        src: '/img/galeria/Reforestacion/img001_27_11zon.webp',
        alt: 'Reforestación 1'
      },
      {
        src: '/img/galeria/Reforestacion/img002_28_11zon.webp',
        alt: 'Reforestación 2'
      },
      {
        src: '/img/galeria/Reforestacion/img003_29_11zon.webp',
        alt: 'Reforestación 3'
      },
      {
        src: '/img/galeria/Reforestacion/img004_30_11zon.webp',
        alt: 'Reforestación 4'
      },
      {
        src: '/img/galeria/Reforestacion/img005_31_11zon.webp',
        alt: 'Reforestación 5'
      },
      {
        src: '/img/galeria/Reforestacion/img006_32_11zon.webp',
        alt: 'Reforestación 6'
      },
      {
        src: '/img/galeria/Reforestacion/img007_33_11zon.webp',
        alt: 'Reforestación 7'
      },
      {
        src: '/img/galeria/Reforestacion/img008_34_11zon.webp',
        alt: 'Reforestación 8'
      },
      {
        src: '/img/galeria/Reforestacion/img009_35_11zon.webp',
        alt: 'Reforestación 9'
      }
    ]
  },
  {
    id: 'plagas',
    title: 'Manejo de Plagas',
    images: [
      {
        src: '/img/galeria/Plagas/img001_21_11zon.webp',
        alt: 'Manejo de plagas 1'
      },
      {
        src: '/img/galeria/Plagas/img002_22_11zon.webp',
        alt: 'Manejo de plagas 2'
      },
      {
        src: '/img/galeria/Plagas/img003_23_11zon.webp',
        alt: 'Manejo de plagas 3'
      },
      {
        src: '/img/galeria/Plagas/img004_24_11zon.webp',
        alt: 'Manejo de plagas 4'
      },
      {
        src: '/img/galeria/Plagas/img005_25_11zon.webp',
        alt: 'Manejo de plagas 5'
      },
      {
        src: '/img/galeria/Plagas/img006_26_11zon.webp',
        alt: 'Manejo de plagas 6'
      }
    ]
  },
  {
    id: 'fuego',
    title: 'Manejo de Fuego',
    images: [
      {
        src: '/img/galeria/Fuego/img001_1_11zon.webp',
        alt: 'Manejo de fuego 1'
      },
      {
        src: '/img/galeria/Fuego/img002_2_11zon.webp',
        alt: 'Manejo de fuego 2'
      },
      {
        src: '/img/galeria/Fuego/img003_3_11zon.webp',
        alt: 'Manejo de fuego 3'
      },
      {
        src: '/img/galeria/Fuego/img004_5_11zon.webp',
        alt: 'Manejo de fuego 4'
      },
      {
        src: '/img/galeria/Fuego/img005_4_11zon.webp',
        alt: 'Manejo de fuego 5'
      }
    ]
  }
]

// ponytail: plain array, no reactivity needed
const allImages = categories.flatMap((c) => c.images)

const lightbox = ref({ open: false, src: '', alt: '', index: 0 })

function openLightbox(img) {
  lightbox.value = {
    open: true,
    src: img.src,
    alt: img.alt,
    index: allImages.indexOf(img)
  }
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value.open = false
  document.body.style.overflow = ''
}

function navigateLightbox(dir) {
  const newIdx =
    (lightbox.value.index + dir + allImages.length) % allImages.length
  const img = allImages[newIdx]
  lightbox.value = {
    ...lightbox.value,
    index: newIdx,
    src: img.src,
    alt: img.alt
  }
}

// Keyboard and swipe support
let lbTouchX = 0

function onKeydown(e) {
  if (!lightbox.value.open) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') navigateLightbox(-1)
  if (e.key === 'ArrowRight') navigateLightbox(1)
}

function onLbTouchstart(e) {
  lbTouchX = e.touches[0].clientX
}
function onLbTouchend(e) {
  const diff = lbTouchX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1)
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.gallery-banner {
  height: clamp(100px, 20vw, 400px);
}

.gallery-container {
  background-image: url('/img/fondoGaleria.webp');
}

.gallery-header {
  padding: 8% 10% 0;
  color: var(--color-green);
}

.gallery-header h1 {
  font-size: var(--text-4xl);
}
.gallery-header p {
  font-size: var(--text-md);
}

.gallery-section {
  padding: 0 5% 4%;
}

.gallery-section-title {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-green);
  padding: 2.5rem 0 0.75rem;
  border-left: 5px solid var(--color-brown);
  padding-left: 1rem;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(clamp(160px, 25vw, 320px), 1fr)
  );
  gap: var(--gap-sm);
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  min-height: clamp(150px, 20vw, 320px);
}

/* Deferred placeholder */
.gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  z-index: 1;
  background-color: var(--color-beige);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 48 48'%3E%3Crect x='6' y='10' width='36' height='28' rx='3' ry='3' fill='none' stroke='%23204032' stroke-width='2.5'/%3E%3Ccircle cx='17' cy='20' r='4' fill='none' stroke='%23204032' stroke-width='2.5'/%3E%3Cpolyline points='6,33 16,22 24,30 31,24 42,33' fill='none' stroke='%23204032' stroke-width='2.5' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: clamp(56px, 8vw, 80px);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.gallery-item.show-placeholder::before {
  opacity: 1;
}

:deep(.gallery-item:has(img.loaded)::before),
.gallery-item.img-loaded::before {
  opacity: 0;
}

:deep(.gallery-item img) {
  width: 100%;
  height: clamp(150px, 20vw, 320px);
  object-fit: cover;
  position: relative;
  z-index: 2;
  opacity: 0;
  transition:
    opacity 0.4s ease,
    transform 0.3s ease;
}

:deep(.gallery-item img.loaded) {
  opacity: 1;
}

.gallery-item:hover :deep(img) {
  transform: scale(1.05);
}

/* -- Lightbox -- */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 2%;
}

.lightbox.open {
  display: flex;
}

.lightbox-inner {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-inner img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  object-fit: contain;
}

.lightbox-nav {
  display: contents;
}

.lightbox-close {
  position: absolute;
  top: -14px;
  right: -14px;
  background: var(--color-beige);
  color: var(--color-green);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 0;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-beige);
  color: var(--color-green);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  line-height: 0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.lightbox-prev {
  left: -50px;
}
.lightbox-next {
  right: -50px;
}
.lightbox-prev:hover,
.lightbox-next:hover {
  background: var(--color-gray);
}

@media (max-width: 767px) {
  .lightbox {
    padding: 4% 2%;
    align-items: center;
  }
  .lightbox-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 96vw;
    max-height: 95vh;
  }
  .lightbox-close {
    position: static;
    align-self: flex-end;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
  .lightbox-inner img {
    max-height: 68vh;
    max-width: 92vw;
    width: auto;
  }
  .lightbox-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
  }
  .lightbox-prev,
  .lightbox-next {
    position: static;
    transform: none;
    width: 52px;
    height: 52px;
    font-size: 1.6rem;
    line-height: 0;
    flex: 0 0 auto;
  }
}
</style>
