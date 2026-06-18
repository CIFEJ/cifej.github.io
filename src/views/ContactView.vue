<template>
  <main>
    <!-- Banner -->
    <div class="contact-banner page-banner">
      <img
        src="/img/bannerContacto.webp"
        alt=""
        class="banner-bg"
        aria-hidden="true"
        fetchpriority="high"
      />
    </div>

    <!-- Map + Info + Form -->
    <div class="contact-container motion-pending" data-motion="fade-right">
      <div class="map-container">
        <iframe
          class="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.572264708227!2d-103.47238252423776!3d19.688245781646526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f86920d302395%3A0xf2ed993b85c3b329!2sAv%20Gobernador%20Alberto%20Cardenas%20Jim%C3%A9nez%20650%2C%2020%20de%20Noviembre%202a.%20Etapa%2C%2049088%20Cdad.%20Guzm%C3%A1n%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1726011504072!5m2!1ses-419!2smx"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación del Colegio de Ingenieros Forestales de Jalisco"
        ></iframe>
      </div>

      <div class="info-contact-container">
        <div class="contact-info">
          <h3 class="section-title">DATOS DE CONTACTO</h3>
          <div class="info-content">
            <img src="/img/location.webp" alt="" />
            <div class="info-content-text">
              <h5>Dirección</h5>
              <p>
                Avenida Alberto Cárdenas Jiménez N° 650, Colonia Constituyentes,
                Cd. Guzmán, Jalisco
              </p>
            </div>
          </div>
          <div class="info-content">
            <img src="/img/phone.webp" alt="" />
            <div class="info-content-text">
              <h5>Teléfono</h5>
              <p><a href="tel:+523411234567">341 123 4567</a></p>
            </div>
          </div>
          <div class="info-content">
            <img src="/img/message.webp" alt="" />
            <div class="info-content-text">
              <h5>Email</h5>
              <p>
                <a href="mailto:colegioingenierosforestalesjal@gmail.com"
                  >colegioingenierosforestalesjal@gmail.com</a
                >
              </p>
            </div>
          </div>
          <hr />
          <p>
            Estamos aquí para responder a tus preguntas y brindarte la ayuda que
            necesitas. ¡Contáctanos hoy mismo!
          </p>
        </div>

        <div class="contact-form">
          <h3 class="section-title">FORMULARIO DE CONTACTO</h3>
          <p class="section-body">
            Déjanos saber en qué podemos colaborar contigo.
          </p>
          <div class="form-container">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="d2b95924-e17f-457e-9aee-93aa7fdd0260"
              />
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                autocomplete="name"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                required
                autocomplete="email"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ / Accordion -->
    <section
      class="faq-section bg-section motion-pending"
      data-motion="fade-left"
      aria-label="Preguntas frecuentes"
    >
      <h3 class="section-title">Preguntas Frecuentes</h3>
      <div>
        <details v-for="(faq, i) in faqs" :key="i" class="accordion-item">
          <summary class="accordion-header">
            <span>{{ faq.question }}</span>
            <span class="accordion-icon" aria-hidden="true"></span>
          </summary>
          <div class="accordion-content">
            <p>{{ faq.answer }}</p>
          </div>
        </details>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useMotion } from '../composables/useMotion.js'

useMotion()

// ponytail: accordion uses native <details>/<summary>, zero JS state needed
const faqs = [
  {
    question:
      '¿Cuánto tiempo se tarda en obtener la autorización de aprovechamiento forestal?',
    answer:
      'El tiempo de obtención de la autorización puede variar dependiendo de la complejidad del proyecto y la documentación requerida. Sin embargo, nos comprometemos a gestionar tu trámite de manera eficiente para minimizar los tiempos de espera.'
  },
  {
    question:
      '¿Cuáles son los requisitos para realizar plantaciones forestales comerciales?',
    answer:
      'Los requisitos pueden variar según el tipo de proyecto y la ubicación específica. Sin embargo, generalmente se requiere presentar un plan de plantación detallado, así como cumplir con ciertos criterios ambientales y legales establecidos por SEMARNAT.'
  },
  {
    question:
      '¿Ofrecen asesoramiento para el cambio de uso de suelo en terrenos forestales?',
    answer:
      'Sí, nuestro equipo de ingenieros forestales ofrece asesoramiento especializado para el cambio de uso de suelo en terrenos forestales, guiándote a través del proceso y asegurando que se cumplan todos los requisitos normativos y ambientales necesarios.'
  }
]
</script>

<style scoped>
.contact-banner {
  height: clamp(150px, 30vw, 500px);
}

.contact-container {
  width: 80%;
  max-width: 1300px;
  margin: clamp(30px, 5vw, 60px) auto;
}

.map-container {
  margin-bottom: clamp(30px, 5vw, 60px);
  border: 5px solid var(--color-green);
  border-radius: 10px;
  overflow: hidden;
}

.map-frame {
  width: 100%;
  height: clamp(150px, 25vw, 400px);
  border: none;
}

.info-contact-container {
  display: flex;
  justify-content: space-between;
  gap: var(--gap-md);
  flex-wrap: wrap;
}

.contact-info,
.contact-form {
  flex: 1 1 280px;
  min-width: 0;
}

.contact-info h3,
.contact-form h3 {
  font-size: var(--text-xl);
  margin-bottom: 5%;
}

.contact-form > p {
  margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
}

.info-content {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--gap-sm);
}

.info-content img {
  width: clamp(35px, 4vw, 60px);
  height: auto;
  margin-right: 5%;
}
.info-content h5 {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-md);
}
.info-content p,
.contact-info p {
  font-family: var(--font-body);
  font-size: var(--text-md);
  overflow-wrap: break-word;
}
.info-content a {
  color: inherit;
}

.info-content-text {
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

/* Form */
.form-container {
  background: linear-gradient(
    to bottom right,
    var(--color-green),
    rgba(32, 64, 50, 0.1)
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 5%;
  border-radius: 10px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--color-green);
  box-shadow: 0 0 0 3px rgba(32, 64, 50, 0.15);
}

.contact-form input:not(:placeholder-shown):valid,
.contact-form textarea:not(:placeholder-shown):valid {
  border-color: #3a8a5c;
}

.contact-form input:not(:placeholder-shown):invalid,
.contact-form textarea:not(:placeholder-shown):invalid {
  border-color: #c0392b;
  box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.12);
}

.contact-form textarea {
  height: 120px;
  resize: vertical;
}

.contact-form button {
  width: 40%;
  padding: 10px;
  background-color: var(--color-green);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-base);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: rgba(32, 64, 50, 0.6);
}

/* FAQ / Accordion */
.faq-section {
  background-image: url('/img/fondoQuestions.webp');
  min-height: clamp(360px, 50vw, 1100px);
  padding: clamp(40px, 7vw, 100px);
  color: #fff;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .faq-section {
    min-height: unset;
    padding-bottom: clamp(40px, 5vw, 70px);
  }
}

.faq-section h3 {
  font-size: var(--text-2xl);
  color: var(--color-beige);
  margin-bottom: 5%;
}

.accordion-item {
  font-family: var(--font-body);
  color: var(--color-beige);
}

/* Remove default browser disclosure marker */
.accordion-item summary {
  list-style: none;
}
.accordion-item summary::-webkit-details-marker {
  display: none;
}

.accordion-header {
  background: transparent;
  width: 100%;
  padding: 15px;
  text-align: justify;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-beige);
  font-family: var(--font-body);
  font-size: var(--text-md);
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: rgba(32, 64, 50, 0.8);
}

.accordion-icon {
  font-family: var(--font-titles);
  font-weight: 700;
  font-size: var(--text-xl);
  margin-left: 5%;
  flex-shrink: 0;
}

/* ponytail: CSS-only open/close icon, no JS toggle */
.accordion-icon::after {
  content: '+';
}
.accordion-item[open] .accordion-icon::after {
  content: '\2212';
}

.accordion-content {
  font-size: var(--text-md);
  text-align: justify;
}

.accordion-content > p {
  margin: 5px 10px 10px;
}
</style>
