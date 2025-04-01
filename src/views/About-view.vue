<template>
  <section
    class="about-section py-5 text-white text-center"
    :style="{ backgroundColor: 'var(--ety-light-blue)' }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h2 class="mb-4 fw-bold" data-aos="fade-up">About E-Tech Yachting</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100" style="color: var(--ety-gray)">
            E-Tech Yachting is the largest marine electrical engineering specialist in the Spanish
            yachting community. To date, we have worked on over 700 vessels and counting.
          </p>
          <p data-aos="fade-up" data-aos-delay="200" style="color: var(--ety-gray)">
            Our team brings together over 200 years of combined experience in shipbuilding, repair,
            and refit sectors. The E-Tech Yachting team has been carefully selected to ensure we
            have the in-house capability to provide all services required to design, build, install,
            and maintain the electrical and electronic systems present in today’s and
            next-generation superyachts.
          </p>
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
  AOS.init({ duration: 800, once: true })
})
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  padding-bottom: 6rem;
}
</style>
