<template>
  <header>
    <div class="header-image">
      <p>
        Colegio de Ingenieros Forestales<span class="inst-break"
          >del Estado de Jalisco A.C</span
        >
      </p>
      <RouterLink to="/" aria-label="Ir al inicio">
        <img
          src="/img/logo.svg"
          alt="Logo del Colegio de Ingenieros Forestales"
        />
      </RouterLink>
    </div>
    <nav class="menu" aria-label="Navegación principal">
      <button
        class="nav-toggle"
        :aria-expanded="isOpen.toString()"
        aria-controls="nav-list"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? '✕' : '☰' }}
      </button>
      <ul class="nav-list" :class="{ open: isOpen }" id="nav-list">
        <li><RouterLink to="/" @click="isOpen = false">Inicio</RouterLink></li>
        <li>
          <RouterLink to="/nosotros" @click="isOpen = false"
            >Nosotros</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/servicios" @click="isOpen = false"
            >Servicios</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/galeria" @click="isOpen = false">Galería</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacto" @click="isOpen = false"
            >Contacto</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
