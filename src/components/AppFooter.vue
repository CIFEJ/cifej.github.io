<template>
  <footer class="footer">
    <div class="footer-inner">
      <nav class="footer-menu" aria-label="Navegación del pie de página">
        <RouterLink to="/">INICIO</RouterLink>
        <RouterLink to="/nosotros">NOSOTROS</RouterLink>
        <RouterLink to="/servicios">SERVICIOS</RouterLink>
        <RouterLink to="/galeria">GALERÍA</RouterLink>
        <RouterLink to="/contacto">CONTACTO</RouterLink>
      </nav>
      <p class="copyright">
        Todos los Derechos Reservados &copy; {{ year }} Creado por CARMA
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
