<template>
  <main class="not-found-main">
    <div class="not-found-inner motion-pending" data-motion="fade-up">
      <h1 class="not-found-title section-title">
        ¿No encuentras lo que buscas?
      </h1>
      <div class="not-found-actions">
        <RouterLink to="/contacto" class="btn btn-green"
          >CONTÁCTANOS</RouterLink
        >
        <RouterLink to="/" class="btn btn-beige">IR A INICIO</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useMotion } from '../composables/useMotion.js'
useMotion()
</script>

<style scoped>
.not-found-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem);
}

.not-found-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--gap-lg);
}

.not-found-title {
  color: var(--color-green);
  font-size: var(--text-4xl);
  line-height: 1.2;
  max-width: 700px;
}

.not-found-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-md);
}

.not-found-actions .btn-beige {
  font-size: var(--text-lg);
}
</style>
