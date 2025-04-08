<template>
  <section class="bluewave-section py-5 text-white text-center" :style="{ backgroundColor: 'var(--ety-mid-blue)' }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h2 class="mb-4 fw-bold text-uppercase" data-aos="zoom-in">BLUEWAVE™</h2>
          <p class="lead mb-3" data-aos="fade-up" data-aos-delay="100">
            E-Tech Yachting’s innovative <strong>BLUEWAVE™</strong> series comprises smart
            switchboards and alarm monitoring systems that have revolutionized the marine industry
            since their inception.
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            As the first European company in the marine industry to become an
            <strong>EATON Authorized Lean Solutions Partner</strong>, E-Tech Yachting demonstrates
            its commitment to delivering cutting-edge electrical solutions for yachts and marine
            vessels.
          </p>


          <div class="mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="http://demo.etybluewave.com/in.php" target="_blank" class="btn btn-outline-light btn-lg px-4">
              Visit our demo
            </a>
          </div>

          <div class="d-flex justify-content-center mt-4">
            <div class="interactive-card-wrapper">
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
}
</style>
