<template>
  <main>
    <!-- Banner -->
    <div class="services-banner page-banner">
      <img
        src="/img/bannerServicios.webp"
        alt=""
        class="banner-bg"
        aria-hidden="true"
        fetchpriority="high"
      />
    </div>

    <!-- Intro -->
    <div
      class="services-intro bg-section motion-pending"
      data-motion="fade-right"
    >
      <h1 class="section-title">Nuestros servicios</h1>
      <p class="section-body">
        Explora nuestros servicios forestales especializados, diseñados para
        promover la conservación y el aprovechamiento sostenible de los recursos
        naturales en Jalisco.
      </p>
    </div>

    <!-- Slider: SEMARNAT procedures -->
    <div class="service-title-bar motion-pending" data-motion="fade-left">
      <h3 class="section-title">Trámites ante SEMARNAT</h3>
    </div>

    <section
      class="slider motion-pending"
      data-motion="zoom-in"
      aria-label="Servicios SEMARNAT"
      @touchstart.passive="onTouchstart"
      @touchend.passive="onTouchend"
    >
      <div class="slider-container">
        <div
          v-for="(s, i) in semarnatServices"
          :key="i"
          class="slider-item card"
          :class="{ active: semarnatCurrent === i }"
        >
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
      <div class="slider-controls">
        <button
          class="slider-arrow nav-arrow nav-arrow--dark prev"
          aria-label="Anterior"
          @click="semarnatPrev"
        >
          &#8249;
        </button>
        <button
          v-for="(_, i) in semarnatServices"
          :key="i"
          class="dot nav-dot nav-dot--dark"
          :class="{ active: semarnatCurrent === i }"
          :aria-label="`Servicio ${i + 1}`"
          @click="semarnatGoTo(i)"
        ></button>
        <button
          class="slider-arrow nav-arrow nav-arrow--dark next"
          aria-label="Siguiente"
          @click="semarnatNext"
        >
          &#8250;
        </button>
      </div>
    </section>

    <!-- CONAFOR cards -->
    <div class="service-title-bar motion-pending" data-motion="fade-left">
      <h3 class="section-title">Trámites ante CONAFOR</h3>
    </div>
    <div class="conafor-container motion-pending" data-motion="fade-up">
      <div v-for="c in conaforCards" :key="c.title" class="conafor-card card">
        <h3>{{ c.title }}</h3>
        <p>{{ c.desc }}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-container motion-pending" data-motion="zoom-in">
      <div class="cta-content">
        <h3 class="section-title">Contáctanos para más información</h3>
        <p class="section-body">
          Si quieres obtener más información sobre nuestros servicios y cómo
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
import { useMotion } from '../composables/useMotion.js'
import { useSlider } from '../composables/useSlider.js'

useMotion()

const semarnatServices = [
  {
    title: 'Autorización de Aprovechamiento de Recursos Forestales Maderables',
    desc: 'Obtén la autorización necesaria para aprovechar los recursos forestales maderables en terrenos preferentemente forestales, garantizando un manejo responsable de nuestros bosques; a través de la elaboración de Programas de Manejo Forestal Maderable, su ejecución y evaluación.'
  },
  {
    title: 'Aviso de Aprovechamiento Forestal No Maderable',
    desc: 'Registra tu actividad de aprovechamiento forestal no maderable ante SEMARNAT, asegurando la legalidad y sostenibilidad de tus operaciones en el sector forestal.'
  },
  {
    title: 'Autorización para Realizar Plantaciones Forestales Comerciales',
    desc: 'Solicita la autorización para establecer plantaciones forestales comerciales y contribuir al incremento de la cobertura forestal en Jalisco, bajo los lineamientos y regulaciones establecidos por SEMARNAT.'
  },
  {
    title:
      'Informes anuales de aprovechamientos forestales y plantaciones forestales comerciales',
    desc: 'Te permite informar a la autoridad del cumplimiento de las actividades realizadas por el titular en la plantación forestal comercial cada año, en su caso también del aprovechamiento de materias primas forestales cosechadas.'
  },
  {
    title:
      'Remisiones para acreditar la procedencia legal de materias primas forestales',
    desc: 'Si cuentas con autorización de aprovechamiento o registro de plantación y necesitas transportar las materias primas forestales de tu propiedad a cualquier otro lugar, solicita remisiones forestales a la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT).'
  },
  {
    title:
      'Autorización de centros de almacenamiento y transformación de materias primas forestales',
    desc: 'Si requieres obtener una autorización para un centro de almacenamiento y transformación de materias primas forestales, así como regular el ingreso de materias primas y la salida de productos y subproductos forestales para acreditar su legal procedencia, contáctanos.'
  },
  {
    title:
      'Aviso de funcionamiento de carpinterías, madererías, centros de producción de muebles y otros',
    desc: 'Si quieres dar aviso de funcionamiento de carpinterías, madererías, centros de producción de muebles y otros no integrados a un centro de transformación primaria, cuya materia prima lo constituyan productos maderables de escuadría, con excepción de madera en rollo y labrada, contáctanos.'
  },
  {
    title: 'Reembarques forestales para legal procedencia',
    desc: 'Si eres responsable de un centro de almacenamiento o transformación de materias primas forestales, sus productos y subproductos, y necesitas transportarlas, solicita tus reembarques.'
  },
  {
    title: 'Trámite unificado de aprovechamiento forestal',
    desc: 'Con este trámite puedes obtener en un solo procedimiento administrativo la autorización de aprovechamiento forestal y la de impacto ambiental.'
  },
  {
    title: 'Cambio de uso de suelo en terrenos forestales',
    desc: 'Si quieres construir dentro de zonas forestales del país y eso implica una remoción total o parcial de la vegetación forestal para actividades no forestales, debes solicitar el cambio de uso de suelo ante la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT).'
  },
  {
    title:
      'Colecta de Germoplasma Forestal para reforestación y forestación para conservar o restaurar',
    desc: 'Si te sirve para representar el aviso de colecta semillas o partes de la planta, que se utilizan para la propagación de las mismas con fines de forestación o reforestación.'
  }
]

const conaforCards = [
  {
    title: 'Informe Técnico Fitosanitario',
    desc: 'En caso de presencia de plagas en tu bosque es necesario elaborar el informe técnico cumpliendo con los requisitos establecidos por CONAFOR, para poderle dar un manejo adecuado de las mismas.'
  },
  {
    title: 'Gestión de Apoyos ante la Comisión Nacional Forestal',
    desc: 'Accede a los programas de apoyo y financiamiento ofrecidos por CONAFOR para impulsar proyectos de conservación, restauración y aprovechamiento sostenible de los recursos forestales en Jalisco, fortaleciendo así el desarrollo forestal de la región.'
  }
]

const {
  current: semarnatCurrent,
  goTo: semarnatGoTo,
  prev: semarnatPrev,
  next: semarnatNext,
  onTouchstart,
  onTouchend
} = useSlider(semarnatServices.length, 8000)
</script>

<style scoped>
.services-banner {
  height: clamp(100px, 25vw, 500px);
}

.services-intro {
  background-image: url('/img/fondoServicios.webp');
  min-height: clamp(150px, 25vw, 500px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 10%;
  color: var(--color-green);
}

.services-intro h1 {
  font-size: var(--text-4xl);
}
.services-intro p {
  font-size: var(--text-md);
}

.service-title-bar {
  background-color: var(--color-beige);
  padding: 1%;
  text-align: center;
}

.service-title-bar h3 {
  font-size: var(--text-2xl);
  color: var(--color-brown);
}

/* -- Slider -- */
.slider {
  width: 80%;
  max-width: 900px;
  margin: 5% auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  touch-action: pan-y;
}

.slider-container {
  /* ponytail: grid stack sizes to tallest item */
  display: grid;
  width: 100%;
}

.slider-item {
  grid-area: 1 / 1;
  box-sizing: border-box;
  padding: 5% 10%;
  opacity: 0;
  transition: opacity 0.5s ease;
  text-align: center;
  pointer-events: none;
  visibility: hidden;
}

.slider-item.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.slider-item h3 {
  font-size: var(--text-xl);
  margin-bottom: 5%;
}
.slider-item p {
  font-size: var(--text-md);
  text-align: justify;
}

/* -- CONAFOR cards -- */
.conafor-container {
  display: flex;
  justify-content: center;
  gap: var(--gap-md);
  margin: 5% auto;
  flex-wrap: wrap;
  padding: 0 5%;
}

.conafor-card {
  padding: 2% 5%;
  width: clamp(280px, 40vw, 500px);
}

.conafor-card h3 {
  font-size: var(--text-xl);
  text-align: center;
  margin-bottom: 5%;
}

.conafor-card p {
  font-size: var(--text-md);
  text-align: justify;
}

@media (max-width: 767px) {
  .conafor-card {
    padding: clamp(16px, 5vw, 24px) 5%;
  }
}
</style>
