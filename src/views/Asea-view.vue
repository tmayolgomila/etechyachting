<template>
  <section class="asea-hero text-white py-5" :style="{ backgroundImage: 'var(--gradient-ety-dark)' }">
    <div class="container text-center">
      <h1 class="fw-bold text-uppercase mb-3">ASEA Power Systems</h1>
      <p class="lead text-ety-light">
        E-Tech Yachting is an <strong>authorized distributor and technical service partner</strong> of ASEA® — global
        leader in shore power conversion solutions for superyachts.
      </p>
    </div>
  </section>

  <section class="py-5 bg-light text-dark">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img src="@/assets/asea/asea-unit.jpg" class="img-fluid rounded shadow" alt="ASEA Power Unit" />
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <h2 class="fw-bold mb-3">Power Without Limits</h2>
          <p>
            ASEA shore power converters provide seamless power conversion and isolation from dock power sources —
            ensuring optimal electrical performance anywhere in the world.
          </p>
          <ul class="list-unstyled mt-3">
            <li><i class="bi bi-check-circle text-success me-2"></i>Automatic voltage and frequency conversion</li>
            <li><i class="bi bi-check-circle text-success me-2"></i>Fully marine-certified and compact</li>
            <li><i class="bi bi-check-circle text-success me-2"></i>Remote monitoring & diagnostics</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 text-white" :style="{ backgroundImage: 'var(--gradient-ety-skin2)' }">
    <div class="container text-center">
      <h2 class="fw-bold mb-4">Certified Service & Support</h2>
      <p class="mb-4 text-ety-light">
        Our technical team is certified to install, commission, maintain, and repair ASEA equipment onboard superyachts.
        We offer 24/7 support, fault diagnosis, spare parts, and on-site service across Europe and beyond.
      </p>
      <a href="/contact" class="btn btn-outline-light rounded-pill px-4">
        <i class="bi bi-envelope-fill me-2"></i>Contact our ASEA Team
      </a>
    </div>
  </section>

  <section class="bg-dark text-white small text-center py-4">
    <div class="container">
      <p class="mb-1">
        E-Tech Yachting is an authorized distributor and technical service provider of ASEA Power Systems.
      </p>
      <p class="mb-0">
        ASEA® and its associated trademarks and logos are the property of ASEA Power Systems, LLC. All rights reserved.
      </p>
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
.asea-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
