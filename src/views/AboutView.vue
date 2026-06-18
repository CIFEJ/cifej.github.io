<template>
  <main>
    <!-- Banner -->
    <div class="about-banner page-banner">
      <img
        src="/img/bannerNosotros.webp"
        alt=""
        class="banner-bg"
        aria-hidden="true"
        fetchpriority="high"
      />
    </div>

    <!-- History -->
    <div class="about-container">
      <div class="history-container motion-pending" data-motion="fade-right">
        <div class="history-content">
          <h3 class="section-title">Nuestra historia</h3>
          <p class="section-body">
            Constituidos el 21 de enero de 1999 el Colegio de Ingenieros
            Forestales del Estado de Jalisco surge para dar voz a la actividad
            forestal. El padrón original consistía en 34 asociados, sin embargo,
            ha habido incorporaciones a lo largo de estos 25 años por lo que
            actualmente se cuentan con 68 miembros. Desde entonces, hemos
            trabajado incansablemente por la gestión sostenible de nuestros
            recursos, para proteger y conservar nuestros ecosistemas.
          </p>
        </div>
        <div class="history-img motion-pending" data-motion="fade-left">
          <img
            src="/img/fotografiaCirculo.webp"
            alt="Fotografía de ingenieros forestales"
          />
        </div>
      </div>
    </div>

    <!-- Who we are -->
    <div class="who-wrapper">
      <div class="section-heading motion-pending" data-motion="zoom-in">
        <h2>Quiénes somos</h2>
      </div>

      <div class="identity-paragraphs motion-pending" data-motion="fade-up">
        <div class="paragraph">
          <p>
            Nuestro Colegio de Ingenieros Forestales de Jalisco A.C está
            conformado por ingenieros forestales dedicados a la gestión
            sostenible de los recursos forestales en el estado de Jalisco; con
            experiencia y compromiso en promover e impulsar en diversas
            plataformas de gestión y en campo las prácticas sustentables de uso,
            manejo y conservación de los bosques.
          </p>
        </div>
        <div class="paragraph">
          <p>
            Somos un órgano colegiado del Estado de Jalisco, unido, responsable,
            orgulloso de su historia y sus valores; que busca el bienestar de
            sus generaciones actuales y futuras, a través del uso y manejo
            sustentable de los recursos naturales, con voluntad,
            responsabilidad, inclusión, equidad y confianza.
          </p>
        </div>
      </div>

      <!-- Mission and Vision -->
      <div class="mission-vision-container">
        <div
          class="mission-vision-card mission-card motion-pending"
          data-motion="flip-left"
        >
          <h3>Misión</h3>
          <p>
            Promover la gestión sostenible de los recursos forestales en
            Jalisco, otorgando nuestra opinión Colegiada y los servicios
            técnicos especializados en manejo, conservación y restauración de
            los ecosistemas forestales, así como impulsar la formulación y
            ejecución de políticas públicas acorde a las necesidades actuales de
            manejo de los bosques. De igual manera, procurar la autorregulación
            de sus miembros en cuanto a su actuación profesional.
          </p>
        </div>
        <div
          class="mission-vision-card vision-card motion-pending"
          data-motion="flip-right"
        >
          <h3>Visión</h3>
          <p>
            Ser líderes en la implementación de prácticas sostenibles de manejo
            y conservación de los recursos forestales en Jalisco, contribuyendo
            activamente al desarrollo integral y sustentable de nuestros
            territorios forestales, siendo un referente en la implementación de
            prácticas innovadoras y efectivas para enfrentar los desafíos del
            cambio climático, al mismo tiempo buscando el bienestar de la
            sociedad actual y de sus generaciones futuras.
          </p>
        </div>
      </div>
    </div>

    <div
      class="vignette-container motion-pending"
      data-motion="fade-up"
      aria-hidden="true"
    ></div>

    <!-- Team -->
    <div class="team-wrapper">
      <div class="team-heading">
        <h3 class="section-title">Nuestro equipo</h3>
        <p class="section-body">
          Conoce a nuestro equipo de ingenieros forestales, líderes en la
          gestión sostenible de los recursos naturales en Jalisco.
        </p>
      </div>
      <div class="team-container">
        <div class="card-scroll motion-pending" data-motion="fade-left">
          <div class="scroll-content">
            <p v-for="member in members" :key="member" class="name-scroll">
              {{ member }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-container motion-pending" data-motion="zoom-in">
      <div class="cta-content">
        <h3 class="section-title">Únete a nuestro equipo</h3>
        <p class="section-body">
          ¡Tu pasión por la ingeniería forestal es la pieza que nos falta para
          hacer la diferencia!
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

useMotion()

const members = [
  'ABRAHAM AGUIRRE VERDUZCO',
  'ADOLFO ARECHIGA GUZMAN',
  'ALBERTO SANCHEZ RAMIREZ',
  'ALEJANDO MARTINEZ RAMIREZ',
  'ALDO ORTEGA CATTANEO',
  'ALDO RIVERA RAMOS (PRESIDENTE)',
  'ALFREDO ZEPEDA SANCHEZ (TESORERO SUPLENTE)',
  'ANTONIO MORA SANTACRUZ',
  'ARIEL CORREA ARREOLA',
  'ARISTEO FRANCISCO BARRIOS RIVERA',
  'ARMANDO CARDENAS MARTIN DEL CAMPO',
  'ARMANDO LOMELI JIMENEZ',
  'ARNOLDO URIBE RODRIGUEZ',
  'ARNULFO RAMOS MATA',
  'ARTURO OCEGUEDA PARRA',
  'ARTURO SANCHEZ VIELMAS',
  'BALTAZAR RODRIGUEZ COMPARAM',
  'BENITO LABRADO LOPEZ',
  'CARLOS HERNANDEZ DIAZ',
  'EDGAR ADRIAN GOMEZ DEL CASTILLO',
  'GLORIA IÑIGUEZ HERRERA',
  'FIDEL JIMENEZ MORA',
  'FRANCISCO JAVIER CAMPOS SOLANO',
  'GERARDO GRANADOS MORALES',
  'GONZALO MILLAN CURIEL ALCARAZ',
  'GUILLERMO RAMOS PINTO',
  'HUGO LOPEZ EQUIHUA',
  'HECTOR JULIAN GUZMAN CORTEZ',
  'IGNACIO TOVAR CORTEZ',
  'JOSE ANTONIO VIAYRA RAMIREZ',
  'JAIME BOCANEGRA GALLEGOS',
  'JOSE JORGE ORTIZ ESQUIVEL',
  'JOSE CARLOS CORTES CARRILLO',
  'JOSE FELIX PIEDRA SANDOVAL',
  'JOSE JUAN RAMIREZ MARTINEZ',
  'JOSE LUIS GAMEZ VALDIVIA',
  'JOSE LUIS RAZURA GONZALEZ',
  'JOSE SAMUEL GARCIA ROBLES',
  'JOSE TRINIDAD CARRILLO LEDESMA (SECRETARIO)',
  'JUAN JOSE FAJARDO ACEVES',
  'JUAN PABLO CORTÉS VÁZQUEZ',
  'JUAN SALAS JIMENEZ',
  'JUAN VALENCIA GARCIA',
  'JUVENAL RODRIGUEZ VILLICAÑA',
  'LETICIA RAMIREZ HUERTA',
  'LUIS ALFONSO HUESO PLAZOLA',
  'LUIS ANTONIO ACEVES MONTAÑO',
  'LUIS HECTOR MACIAS MACIAS',
  'MANUEL PEREZ GOMEZ',
  'OSCAR RAUL JAUREGUI ORTIZ',
  'QUETZALPILLI ROBLES SARAY (VICEPRESIDENTE)',
  'RAUL MICHEL JIMENEZ',
  'RENE HUMBERTO BECERRA ESPINOZA',
  'ROBERTO PEREZ MURILLO',
  'ROBERTO TRUJILLO SANCHEZ (SECRETARIO)',
  'SALVADOR JUAREZ CASTILLO',
  'SAUL MORENO GOMEZ',
  'WILFRIDO VARGAS VARGAS',
  'VICTOR MANUEL GARCIA FLORES (TESORERO)',
  'RAMON MICHEL SANDOVAL',
  'FERNANDO SOTO HERRERA',
  'MARTIN MENDOZA BRISEÑO',
  'DIEGO RICARDO CHAVEZ ROMO',
  'GERARDO ALBERTO GONZALEZ CUEVA',
  'JOSE DE JESUS ACEVES MONTAÑO',
  'LUCIO ALFREDO GARCIA GARCIA',
  'JOSE ORLANDO ENRIQUEZ PINTOR',
  'JOSE LUIS BUENROSTRO GONZALEZ'
]
</script>

<style scoped>
.about-banner {
  height: clamp(150px, 30vw, 600px);
}

/* -- History -- */
.history-container {
  display: flex;
  flex-wrap: wrap;
}

.history-content {
  flex: 0 0 55%;
  padding: 5%;
  color: var(--color-green);
}

.history-content h3 {
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: 5%;
}

.history-content p {
  font-size: var(--text-base);
  text-align: justify;
}

.history-img {
  flex: 0 0 45%;
  display: flex;
  justify-content: flex-end;
}

.history-img img {
  width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  .history-content,
  .history-img {
    flex: 1 1 100%;
  }
}

/* -- "Who we are" wrapper -- */
.who-wrapper {
  position: relative;
  width: 100%;
  background-image: url('/img/fondoHelicoptero.webp');
  background-size: cover;
  background-position: center 15%;
  background-attachment: scroll;
}

.who-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0) 18%,
    rgba(255, 255, 255, 0) 82%,
    rgba(255, 255, 255, 0.6) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.who-wrapper > * {
  position: relative;
  z-index: 1;
}

/* -- Section heading -- */
.section-heading {
  text-align: center;
  padding: 3% 5%;
  position: relative;
  min-height: clamp(60px, 8vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .section-heading {
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    padding: 2% 4%;
  }
}

.section-heading h2 {
  font-family: var(--font-titles);
  font-weight: 900;
  font-size: var(--text-3xl);
  color: var(--color-green);
  position: relative;
  z-index: 2;
}

@media (min-width: 768px) {
  .section-heading h2 {
    color: #fff;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
  }
}

/* -- Identity paragraphs -- */
.identity-paragraphs {
  display: flex;
  gap: 6%;
  margin: 0 3%;
  flex-wrap: wrap;
}

.paragraph {
  flex: 1 1 250px;
  padding: 5%;
}
.paragraph p {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--color-green);
  text-align: justify;
  text-shadow: 0 1px 6px rgba(255, 255, 255, 0.85);
}

/* -- Mission and Vision -- */
.mission-vision-container {
  display: flex;
  gap: 10%;
  margin: 5% 8% 5% 10%;
  flex-wrap: wrap;
}

.mission-vision-card {
  flex: 1 1 250px;
  padding: 5% 3%;
  border-radius: 30px;
  box-shadow:
    5px 5px 50px rgba(0, 0, 0, 0.2),
    2px 5px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(32, 64, 50, 0.25);
  text-align: center;
  position: relative;
}

.mission-vision-card h3 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-2xl);
  color: var(--color-beige);
  margin-bottom: 5%;
}

.mission-vision-card p {
  font-family: var(--font-body);
  font-size: var(--text-md);
  color: var(--color-green);
  margin-top: 10px;
}

.mission-card::before,
.vision-card::before {
  content: '';
  position: absolute;
  top: -28px;
  left: -28px;
  width: clamp(70px, 9vw, 120px);
  height: clamp(70px, 9vw, 120px);
  background-repeat: no-repeat;
  background-size: contain;
}

.mission-card::before {
  background-image: url('/img/icon-mision.webp');
}

.vision-card::before {
  background-image: url('/img/icon-vision.webp');
}

@media (max-width: 767px) {
  .mission-vision-container {
    margin: 15% 8% 5% 13%;
  }
  .mission-vision-card {
    margin-bottom: 20%;
  }
  .mission-vision-card h3 {
    color: #fff;
  }
  .who-wrapper {
    background-image: none;
  }
  .who-wrapper::before {
    display: none;
  }
}

/* -- Team -- */
.team-wrapper {
  width: 100%;
  background-image: url('/img/fondoEquipo.webp');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.team-heading {
  width: 100%;
  padding: clamp(3%, 5vw, 5%) 2% clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--gap-sm);
  color: var(--color-beige);
  box-sizing: border-box;
}

.team-heading h3 {
  font-size: var(--text-2xl);
  margin-bottom: var(--gap-sm);
}

.team-heading p {
  font-size: var(--text-md);
  max-width: clamp(320px, 60vw, 900px);
}

.team-container {
  padding: 0 2% clamp(3%, 5vw, 5%);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: var(--gap-md);
}

.card-scroll {
  background-color: var(--color-beige);
  border-radius: 30px;
  width: clamp(280px, 60vw, 800px);
  height: clamp(220px, 45vh, 560px);
  overflow: hidden;
  padding: 20px;
  color: var(--color-green);
  margin: 0 auto;
}

.scroll-content {
  overflow-y: auto;
  max-height: 100%;
  padding: 10px 20px;
  scrollbar-color: var(--color-green) var(--color-beige);
  scrollbar-width: thin;
}

.name-scroll {
  display: flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: var(--text-base);
  margin-bottom: clamp(6px, 1vw, 12px);
  padding: 2px 0 2px clamp(18px, 2vw, 28px);
  position: relative;
}

.name-scroll::before {
  content: '';
  position: absolute;
  left: 0;
  width: clamp(8px, 1.2vw, 20px);
  height: clamp(8px, 1.2vw, 20px);
  background-image: url('/img/vinetaEquipo.webp');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
