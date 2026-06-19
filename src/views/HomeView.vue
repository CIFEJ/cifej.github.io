<template>
  <main>
    <!-- Main banner -->
    <div class="banner-container">
      <img
        src="/img/bannerBosque.webp"
        alt=""
        class="banner-bg"
        aria-hidden="true"
        fetchpriority="high"
      />
      <img
        src="/img/fondoBannerPrincipal.webp"
        alt=""
        class="banner-img-left"
        aria-hidden="true"
        fetchpriority="high"
      />
      <img
        src="/img/ondaVerde.webp"
        alt=""
        class="banner-img-bottom"
        aria-hidden="true"
        fetchpriority="low"
      />
      <div class="banner-content">
        <h1 class="section-title">
          Ingeniería Forestal para un futuro sostenible
        </h1>
        <h3 class="section-body">
          Construyendo un futuro verde: explora cómo estamos cultivando hoy para
          un mañana más verde.
        </h3>
        <RouterLink to="/servicios" class="btn btn-beige">SERVICIOS</RouterLink>
      </div>
      <div class="banner-icon" aria-hidden="true"></div>
    </div>

    <!-- Welcome -->
    <div class="welcome-container motion-pending" data-motion="fade-right">
      <div class="img-div">
        <img
          src="/img/bosqueEnHoja.webp"
          alt="Imagen del bosque en forma de hoja"
        />
      </div>
      <div class="text-div">
        <h3 class="section-title">
          Bienvenido al colegio de prestadores de servicios técnicos forestales
        </h3>
        <p class="section-body">
          El Colegio de Ingenieros Forestales del Estado de Jalisco A.C somos
          una institución conformada para participar y colaborar en los procesos
          de gestión de manejo de los recursos naturales localizados en el
          estado de Jalisco. Está formado por 68 ingenieros forestales que se
          encuentran distribuidos en las regiones del estado de Jalisco, los
          cuales cuentan con diversas capacidades entre ellas su registro
          forestal nacional que los faculta para realizar trámites de gestión en
          el manejo de los recursos naturales ante las instituciones del medio
          forestal de carácter estatal y federal e internacional,
          específicamente entre otras en la Elaboración, Ejecución y Evaluación
          de Programas de Manejo Forestal.
        </p>
        <h5 class="section-title">
          Nuestro Colegio participa en el estado en plataformas de gestión de
          recursos naturales, siendo algunas de ellas:
        </h5>
      </div>
    </div>

    <!-- Membership columns -->
    <div class="columns-container motion-pending" data-motion="fade-up">
      <div v-for="m in memberships" :key="m.title" class="column">
        <img :src="m.img" :alt="m.alt" />
        <h3>{{ m.title }}</h3>
        <p>{{ m.desc }}</p>
      </div>
    </div>

    <!-- Our cause -->
    <div class="causes-container motion-pending" data-motion="fade-left">
      <div class="cause-col left">
        <img src="/img/fotoCausa1.webp" alt="Colaborador del colegio" />
      </div>
      <div class="cause-col center">
        <h3 class="section-title">NUESTRA CAUSA</h3>
        <ul class="bullet-list">
          <li v-for="cause in causes" :key="cause">{{ cause }}</li>
        </ul>
      </div>
      <div class="cause-col right">
        <img
          src="/img/fotoCausa2.webp"
          alt="Personas trabajando en campo forestal"
        />
      </div>
    </div>

    <!-- Why choose us? -->
    <div class="why-container motion-pending" data-motion="zoom-in">
      <div class="why-content">
        <h3 class="section-title">¿Por qué escogernos?</h3>
        <p class="section-body">
          Contamos con más de 25 años de experiencia desarrollando e
          implementando proyectos de conservación y manejo forestal sustentable
          de recursos de flora y fauna silvestre, nuestros servicios técnicos
          forestales son de alta calidad a través de los cuales promovemos
          prácticas sostenibles adaptándonos a las necesidades de cada cliente.
          Durante el mismo tiempo hemos sido miembros de los diferentes consejos
          consultivos en los tres niveles de gobierno y colaboramos con la
          Dirección de Profesiones del Gobierno del Estado para el registro de
          sus miembros.
        </p>
        <RouterLink to="/nosotros" class="btn btn-green">CONOCE MÁS</RouterLink>
      </div>
      <div class="why-image">
        <img src="/img/fotoHojaCafe.webp" alt="Hoja de árbol café" />
      </div>
    </div>

    <!-- Testimonials -->
    <div
      class="carousel-container motion-pending"
      data-motion="fade-up"
      @touchstart.passive="onTouchstart"
      @touchend.passive="onTouchend"
    >
      <div class="testimonial-icon" aria-hidden="true"></div>
      <div style="width: 100%">
        <div class="carousel-track">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="carousel-slide"
            :class="{ active: current === i }"
          >
            <p>{{ t.quote }}</p>
            <h5>{{ t.author }}</h5>
          </div>
        </div>
        <div class="carousel-controls">
          <button
            class="carousel-arrow nav-arrow nav-arrow--light prev"
            @click="prev"
            aria-label="Testimonio anterior"
          >
            &#8249;
          </button>
          <div class="carousel-dots">
            <button
              v-for="(_, i) in testimonials"
              :key="i"
              class="carousel-dot nav-dot nav-dot--light"
              :class="{ active: current === i }"
              @click="goTo(i)"
              :aria-label="`Testimonio ${i + 1}`"
            ></button>
          </div>
          <button
            class="carousel-arrow nav-arrow nav-arrow--light next"
            @click="next"
            aria-label="Siguiente testimonio"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useMotion } from '../composables/useMotion.js'
import { useSlider } from '../composables/useSlider.js'

useMotion()

const testimonials = [
  {
    quote:
      '"La Asociación de Ingenieros Forestales ha sido fundamental para mejorar nuestras prácticas forestales. Recomiendo esta asociación a todos los profesionales comprometidos con el cuidado responsable de nuestros bosques."',
    author: '– Javier Rodríguez, Gerente forestal'
  },
  {
    quote:
      '"Gracias a su apoyo y asesoría, hemos logrado implementar prácticas de manejo forestal más efectivas en nuestras áreas de trabajo. Su equipo es confiable y altamente capacitado."',
    author: '– Isandro Méndez, Coordinador de Programas Ambientales'
  },
  {
    quote: '"Excelente atención y resultados más allá de mis expectativas."',
    author: '– Zara Montoya, Directora de Estrategias Ecológicas'
  }
]

const memberships = [
  {
    img: '/img/icono1.webp',
    alt: 'Ícono del Consejo Forestal Estatal',
    title: 'Miembro activo en el Consejo Forestal Estatal',
    desc: 'Órgano consultivo y asesor en las materias que le señala la Ley General de Desarrollo Forestal Sustentable.'
  },
  {
    img: '/img/icono2.webp',
    alt: 'Ícono del Comité Técnico del Consejo Forestal',
    title: 'Miembro activo del Comité Técnico del Consejo Forestal Estatal',
    desc: 'Órgano de asesoría, supervisión, vigilancia, evaluación y seguimiento en la aplicación de los criterios e instrumentos de política forestal.'
  },
  {
    img: '/img/icono3.webp',
    alt: 'Ícono del Comité Técnico de Sanidad Forestal',
    title: 'Miembro activo en el Comité Técnico Estatal de Sanidad Forestal',
    desc: 'Órgano consultivo en materia de sanidad de acuerdo con lo que se le señala en la Ley General de Desarrollo Forestal Sustentable.'
  },
  {
    img: '/img/icono4.webp',
    alt: 'Ícono de los Comités Forestales Regionales',
    title: 'Integrante de los Comités Forestales Regionales',
    desc: 'Plataforma de gestión de manejo de recursos naturales distribuidos en las diversas regiones del estado.'
  }
]

const causes = [
  'Colaborar con las instituciones federales, estatales, municipales, sociedad civil, ONG´s, OPD, etc., en implementar la sinergia de las políticas públicas en el ámbito forestal.',
  'Asesorar a los dueños y poseedores de los recursos naturales con servicios técnicos en proyectos de conservación, manejo y uso sustentable de los recursos naturales.',
  'Promover el uso racional y manejo sustentable de los recursos naturales en el estado de Jalisco.'
]

const { current, goTo, prev, next, onTouchstart, onTouchend } = useSlider(
  testimonials.length,
  8000
)
</script>

<style scoped>
/* -- Main banner -- */
.banner-container {
  position: relative;
  width: 100%;
  min-height: clamp(200px, 50vw, 700px);
  overflow: hidden;
  background-color: var(
    --color-green
  ); /* ponytail: placeholder while banner image loads */
}

@media (max-width: 767px) {
  .banner-container {
    min-height: clamp(380px, 120vw, 600px);
    display: flex;
    align-items: flex-end;
  }
  .banner-content {
    position: relative;
    top: unset;
    left: unset;
    transform: none;
    padding: clamp(1.5rem, 6vw, 3rem) clamp(1rem, 5vw, 2rem);
    padding-bottom: clamp(2rem, 8vw, 4rem);
    width: 100%;
  }
}

.banner-img-left {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: auto;
  z-index: 1;
}

.banner-img-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  height: auto;
  width: clamp(300px, 70vw, 1400px);
  z-index: 1;
}

.banner-content {
  position: absolute;
  left: clamp(20px, 5vw, 80px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: #fff;
}

.banner-content h1 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-3xl);
  width: min(90%, 600px);
  margin-bottom: 1rem;
}

.banner-content h3 {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--color-beige);
  width: min(85%, 550px);
  margin-bottom: 1.5rem;
}

/* -- Welcome -- */
.welcome-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-container .img-div {
  flex: 0 0 clamp(30%, 35%, 40%);
}

.welcome-container .text-div {
  flex: 1;
  padding: 5%;
  color: var(--color-green);
  text-align: justify;
}

.text-div h3 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-2xl);
}

.text-div h5 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-lg);
}

.text-div p {
  font-family: var(--font-body);
  font-size: var(--text-md);
  padding: 2% 0 3%;
}

@media (max-width: 767px) {
  .welcome-container {
    flex-direction: column;
  }
}

/* -- Columns (icons) -- */
.columns-container {
  display: flex;
  justify-content: center;
  gap: var(--gap-md);
  margin: 0 3%;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--color-green);
  flex: 1 1 180px;
  max-width: 260px;
}

.column img {
  width: clamp(70px, 8vw, 160px);
  margin-bottom: 1rem;
}
.column h3 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-md);
}
.column p {
  font-family: var(--font-body);
  font-size: var(--text-base);
}

/* -- Our cause -- */
.causes-container {
  display: flex;
  background-image: url('/img/fondoHojas.webp');
  background-size: cover;
  background-position: center;
  margin-top: var(--gap-lg);
}

.cause-col {
  flex: 1;
  display: flex;
}

.left {
  flex: 0 0 25%;
}
.left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right {
  flex: 0 0 25%;
  align-self: flex-end;
}
.right img {
  width: 100%;
  object-fit: cover;
}

.center {
  flex-direction: column;
  gap: var(--gap-md);
  justify-content: center;
  text-align: start;
  padding-left: 8%;
}

.center h3 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-3xl);
  color: var(--color-beige);
  padding-left: 10%;
}

.bullet-list li {
  display: flex;
  align-items: flex-start;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: #fff;
  margin-bottom: 10px;
  padding-left: clamp(32px, 3.2vw, 48px);
  position: relative;
}

@media (max-width: 767px) {
  .causes-container {
    background-image: none;
    background-color: var(--color-green);
    flex-direction: column;
  }
  .center {
    align-items: center;
    padding: 0 5% 0 1%;
    margin-top: 20px;
  }
  .center h3 {
    padding-left: 0;
  }
}

/* -- Why choose us? -- */
.why-container {
  display: flex;
  align-items: stretch;
  background-color: var(--color-beige);
  padding: 0 0 0 5%;
  min-height: clamp(300px, 40vw, 600px);
}

.why-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  color: var(--color-brown);
  gap: var(--gap-sm);
  padding: 3% 5% 5% 0;
}

.why-content h3 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-xl);
}
.why-content p {
  font-family: var(--font-body);
  font-size: var(--text-md);
}

.why-image {
  flex: 1;
  align-self: stretch;
  display: flex;
  overflow: hidden;
}

.why-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .why-container {
    flex-direction: column;
    padding: 0 5%;
    min-height: unset;
  }
  .why-content {
    padding: 5% 0;
  }
  .why-image {
    min-height: 200px;
  }
}

/* -- Testimonials carousel -- */
.carousel-container {
  position: relative;
  background: url('/img/fondoTestimonial.webp') no-repeat center center;
  background-size: cover;
  padding: 8% 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  touch-action: pan-y;
}

.carousel-track {
  /* ponytail: grid stack sizes to tallest slide, no JS height needed */
  display: grid;
  width: 100%;
}

.carousel-slide {
  grid-area: 1 / 1;
  opacity: 0;
  transition: opacity 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-beige);
  pointer-events: none;
  visibility: hidden;
}

.carousel-slide.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.carousel-slide p {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-2xl);
  margin-bottom: 1rem;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.55);
}
.carousel-slide h5 {
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 400;
  font-size: var(--text-lg);
  opacity: 0.85;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
}

@media (max-width: 767px) {
  .carousel-container {
    padding-bottom: clamp(3rem, 8vw, 5rem);
  }
}
</style>
