<template>
  <section class="contact-section py-5" :style="{ backgroundImage: 'var(--gradient-ety-dark)' }">
    <div class="container">
      <div class="row align-items-center justify-content-center g-4">
        <!-- Info Card -->
        <div class="col-lg-5" data-aos="fade-right">
          <div class="contact-card p-4 rounded-4 shadow-lg h-100">
            <h2 class="fw-bold text-uppercase mb-4 text-white">Contact Us</h2>
            <p class="mb-3 text-ety-light">
              <strong>E-Tech Maritim S.L</strong><br />
              Muelle Viejo (Edificio STP)<br />
              Palma de Mallorca 07012<br />
              Spain
            </p>

            <p class="mb-2">
              <i class="bi bi-envelope-fill me-2 text-ety-cyan"></i>
              <a href="mailto:info@etechyachting.com" class="text-ety-light">info@etechyachting.com</a>
            </p>

            <p class="mb-4">
              <i class="bi bi-telephone-fill me-2 text-ety-cyan"></i>
              <a href="tel:+34971431155" class="text-ety-light">+34 971 43 11 55</a>
            </p>

            <a href="https://www.google.com/maps/place/E+-+Tech+Yachting" target="_blank"
              class="btn btn-outline-light text-uppercase rounded-pill px-4 d-inline-flex align-items-center gap-2">
              <i class="bi bi-geo-alt-fill"></i>
              Get Directions
            </a>
          </div>
        </div>


        <!-- Map -->
        <div class="col-lg-7" data-aos="fade-left">
          <div class="map-container rounded-4 shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.8487075512253!2d2.636895712183655!3d39.563018807036805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979322ed89d7ad%3A0xa323e566230f2bdf!2sE%20-%20Tech%20Yachting!5e0!3m2!1ses!2ses!4v1743957908127!5m2!1ses!2ses"
              width="100%" height="450" style="border: 0" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
})
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  color: var(--ety-text-light);
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-container {
  width: 100%;
  max-height: 450px;
  border-radius: 1rem;
  overflow: hidden;
}

.text-ety-light {
  color: var(--ety-text-light);
}

.text-ety-cyan {
  color: var(--ety-cyan);
  text-decoration: none;
}

.text-ety-cyan:hover,
a.text-ety-light:hover {
  text-decoration: underline;
}

.btn i {
  font-size: 1.2rem;
}


@media (max-width: 768px) {
  .contact-card {
    text-align: center;
  }

  .contact-card a.btn {
    display: inline-block;
    margin-top: 1rem;
  }
}
</style>
