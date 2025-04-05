<template>
  <section class="hero d-flex align-items-center text-white text-center">
    <div class="container py-5">
      <h1 data-aos="fade-up" class="display-4 fw-bold mb-4">
        COMPLETE ELECTRICAL <br />
        SOLUTIONS FOR THE <br />
        MARITIME INDUSTRY
      </h1>
      <p data-aos="fade-up" data-aos-delay="200" class="lead mb-4">
        E-Tech Yachting is the largest marine electrical and electronics specialist in Spain,<br />
        serving the yachting industry worldwide.
      </p>
      <RouterLink
        to="/bluewave"
        class="btn btn-outline-light btn-lg"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        Discover our AMS
      </RouterLink>
    </div>
  </section>
</template>


<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background-color: var(--ety-mid-blue);
}
</style>
