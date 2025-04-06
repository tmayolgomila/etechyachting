<template>
  <section
    class="about-section d-flex align-items-center text-white position-relative"
    :style="{ backgroundImage: `url('${bgImage}')` }"
  >
    <div class="overlay"></div>
    <div class="container position-relative">
      <div class="row align-items-center">
        <!-- Text Block -->
        <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
          <h2 class="fw-bold text-uppercase mb-4">About E-Tech Yachting</h2>
          <h3 class="display-6 fw-semibold text-ety-cyan mb-4">
            Yachting community’s leading electrical engineering & electronics specialist in Spain
          </h3>
          <p class="lead text-ety-light mb-3">
            E-Tech Yachting has established itself as a reference in the marine electrical
            engineering sector, with extensive experience supporting the yachting industry.
          </p>
          <p class="text-ety-light">
            Our team is composed of multidisciplinary professionals dedicated to designing,
            building, installing, and maintaining next-generation electrical and electronic systems
            for superyachts and marine vessels.
          </p>
        </div>

        <!-- Visual Block -->
        <div class="col-lg-6 text-center" data-aos="fade-left">
          <img
            src="@/assets/ETY.jpg"
            alt="E-Tech Team"
            class="img-fluid rounded-4 shadow"
            style="max-height: 500px; object-fit: cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const bgImage = new URL('@/assets/bg-about.jpg', import.meta.url).href

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
})
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(22, 66, 91, 0.85), rgba(47, 102, 144, 0.85));
  z-index: 0;
}

.about-section .container {
  z-index: 1;
  position: relative;
}

.text-ety-light {
  color: var(--ety-text-light);
}

.text-ety-cyan {
  color: var(--ety-cyan);
}
</style>
