<template>
  <footer class="ety-footer text-white py-5" :style="{ background: 'var(--ety-dark-blue)' }">
    <div class="container">
      <div class="row gy-4 justify-content-center text-center">

        <!-- Logo + descripción -->
        <div class="col-md-6">
          <img src="@/assets/logos/ETY_Claim_Positive.jpg" alt="E-Tech Yachting" class="mb-3"
            style="max-width: 160px" />
          <p class="small text-ety-light mb-0">
            Engineering the future of yachting — one system at a time. Based in Palma de Mallorca.
          </p>
        </div>

        <!-- Contacto -->
        <div class="col-md-6">
          <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
          <p class="mb-2 small">
            <i class="bi bi-envelope me-2"></i>
            <a href="mailto:info@etechyachting.com" class="footer-link">info@etechyachting.com</a>
          </p>
          <p class="small">
            <i class="bi bi-telephone me-2"></i>
            <a href="tel:+34971431155" class="footer-link">+34 971 43 11 55</a>
          </p>
        </div>

      </div>

      <!-- Copyright -->
      <div class="text-center pt-4 mt-4 border-top border-light-subtle small text-ety-light">
        © {{ new Date().getFullYear() }} E-Tech Yachting. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-link {
  color: var(--ety-text-light);
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
  color: white;
}
</style>
