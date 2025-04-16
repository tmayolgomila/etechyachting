<template>
  <section class="hero text-white text-center">
    <div class="container py-5">
      <div class="hero-text" data-aos="fade-down">
        <h1 class="display-4 fw-bold mb-4">
          COMPLETE ELECTRICAL <br />
          SOLUTIONS FOR THE <br />
          MARITIME INDUSTRY
        </h1>

        <p class="lead mb-4 fw-bold" data-aos="fade-up" data-aos-delay="200">
          E-Tech Yachting is the largest marine electrical and electronics specialist in Spain,<br />
          serving the yachting industry worldwide.
        </p>

        <!--
        <div class="d-flex justify-content-center mt-4 mb-3" data-aos="zoom-in" data-aos-delay="400">
          <RouterLink to="/bluewave" class="btn btn-outline-light btn-lg">
            Discover our AMS
          </RouterLink>
        </div>
        -->

      </div>
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
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
  background-image: url('/src/assets/stock/splash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  padding-top: 10vh;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  z-index: 0;
}

.hero .container {
  position: relative;
  z-index: 2;
}
</style>
