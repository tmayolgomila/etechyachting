<template>
  <section class="bluewave-section py-5 text-white text-center"
    :style="{ backgroundImage: 'var(--gradient-ety-gray-blue)' }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">

          <!-- TÍTULO -->
          <div class="mb-4" data-aos="zoom-in">
            <img src="@/assets/ams/bluewave.png" alt="Bluewave Logo" class="bluewave-logo img-fluid" />
          </div>

          <!-- DESCRIPCIÓN -->
          <p class="lead text-ety-light mb-3" data-aos="fade-up" data-aos-delay="100">
            Meet <strong>BLUEWAVE™</strong>, the advanced Alarm Monitoring System designed by E-Tech Yachting to provide
            real-time system awareness, fail-safe alerts, and seamless onboard integration.
          </p>

          <p class="text-ety-light" data-aos="fade-up" data-aos-delay="200">
            As the <strong>first European company</strong> in the marine industry to become an
            <strong>EATON Authorized Lean Solutions Partner</strong>, we combine innovation, trust, and engineering
            excellence in every panel we build.
          </p>

          <!-- BOTÓN DEMO -->
          <div class="mt-4 d-none d-md-inline-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <a href="http://demo.etybluewave.com/in.php" target="_blank"
              class="btn btn-outline-light btn-lg px-4 rounded-pill d-inline-flex align-items-center gap-2">
              <i class="bi bi-play-circle"></i> Visit Live Demo
            </a>
          </div>

          <!-- INTERACTIVE CARD intacto -->
          <div class="d-flex justify-content-center mt-5">
            <div data-aos="fade-up" data-aos-delay="400">
              <InteractiveCard />
            </div>
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
import InteractiveCard from '@/components/Interactive-card.vue'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})
</script>

<style scoped>
.bluewave-section {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.bluewave-logo {
  max-width: 280px;
  height: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
}

@media (max-width: 768px) {
  .bluewave-logo {
    max-width: 200px;
  }
}
</style>
