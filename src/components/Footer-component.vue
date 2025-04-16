<template>
  <footer class="ety-footer text-black pt-5 pb-4 bg-white border-top">
    <div class="container">
      <div class="row gy-4">

        <!-- Columna izquierda: logo + lema -->
        <div class="col-12 col-md-4 text-center text-md-start">
          <img src="@/assets/logos/ETY_Claim_Positive.jpg" alt="E-Tech Yachting" style="max-width: 160px" class="mb-3" />
          <p class="small mb-0">
            Engineering the future of yachting — one system at a time.
          </p>
          <p class="small">Based in Palma de Mallorca.</p>
        </div>

        <!-- Columna central: navegación -->
        <div class="col-6 col-md-4">
          <h6 class="text-uppercase fw-bold mb-3">Explore</h6>
          <ul class="list-unstyled">
            <li><RouterLink to="/services" class="footer-link">Services</RouterLink></li>
            <li><RouterLink to="/asea" class="footer-link">Asea Distributors</RouterLink></li>
            <li><RouterLink to="/bluewave" class="footer-link">AMS</RouterLink></li>
            <li><RouterLink to="/partners" class="footer-link">Partners</RouterLink></li>
            <li><RouterLink to="/references" class="footer-link">Our References</RouterLink></li>
            <li><RouterLink to="/jobs" class="footer-link">Careers</RouterLink></li>
            <li><RouterLink to="/about" class="footer-link">About</RouterLink></li>
            <li><RouterLink to="/contact" class="footer-link">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Columna derecha: contacto + redes -->
        <div class="col-6 col-md-4">
          <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
          <p class="small mb-2">
            <i class="bi bi-envelope me-2"></i>
            <a href="mailto:info@etechyachting.com" class="footer-link">info@etechyachting.com</a>
          </p>
          <p class="small mb-3">
            <i class="bi bi-telephone me-2"></i>
            <a href="tel:+34971431155" class="footer-link">+34 971 43 11 55</a>
          </p>
          <div class="d-flex gap-3 mt-2">
            <a
              href="https://www.linkedin.com/company/etech-yachting"
              class="footer-icon"
              target="_blank"
              rel="noopener"
              aria-label="E-Tech Yachting on LinkedIn"
            >
              <i class="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright y enlaces legales -->
      <div class="text-center mt-5 pt-4 border-top">
        <p class="small mb-2">
          © {{ new Date().getFullYear() }} E-Tech Yachting. All rights reserved.
        </p>
        <div class="small">
          <RouterLink to="/terms" class="footer-link me-3">Terms and Conditions</RouterLink>
          <RouterLink to="/cookies" class="footer-link me-3">Cookie Policy</RouterLink>
          <RouterLink to="/privacy" class="footer-link">Privacy Policy</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer-link {
  color: #000;
  text-decoration: none;
  font-size: 0.9rem;
}
.footer-link:hover {
  text-decoration: underline;
}

.footer-icon {
  color: #000;
}
.footer-icon:hover {
  color: #555;
}
</style>
