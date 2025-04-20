<template>
  <section class="services-section" style="overflow-x: hidden!important;">
    <section class="services-header-section d-flex align-items-center justify-content-center text-center text-white">
      <div class="overlay"></div>
      <div class="z-2 position-relative">
        <h1 class="display-4 fw-bold text-uppercase mb-3">Our Services</h1>
        <p class="lead text-ety-light">Complete electrical and electronic solutions tailored for the yachting industry.
        </p>
      </div>
    </section>


    <div v-for="(service, index) in services" :key="index"
      :class="['service-full-section', index % 2 === 0 ? 'bg-ety-dark-blue' : 'bg-ety-mid-blue']">
      <div class="container-fluid px-0">
        <div class="d-flex flex-column flex-md-row align-items-center w-100"
          :class="{ 'flex-md-row-reverse': index % 2 !== 0 }" :data-aos="getAosDirection(index)">
          <!-- Imagen -->
          <div class="service-full-image pe-md-4 ps-md-4" :style="{ backgroundImage: `url('${service.image}')` }"></div>

          <!-- Texto -->
          <div class="service-full-text text-white px-4 py-5 text-center text-md-start">
            <div class="container">
              <h3 class="fw-bold mb-3">{{ service.title }}</h3>
              <p class="text-ety-light m-0">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import electricalImg from '@/assets/services/electrical.jpg'
import amsImg from '@/assets/ams/mockup-tanks.png'
import pmsImg from '@/assets/services/pms.jpg'
import lightingImg from '@/assets/services/lighting.jpg'
import testingImg from '@/assets/services/testing.jpg'
import switchboardImg from '@/assets/services/switchboard.jpg'
import aseaImg from '@/assets/services/asea-converter.jpg'

onMounted(() => {
  AOS.init({ duration: 1000, once: false, mirror: true })
  setTimeout(() => AOS.refresh(), 300)
})

const getAosDirection = (index) => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) return 'fade-up'
  return index % 2 === 0 ? 'fade-right' : 'fade-left'
}

const services = ref([
  {
    title: 'Shore Power Converters',
    description:
      'Partnered with ASEA for eco-efficient shore converters and safe isolation systems.',
    image: aseaImg,
  },
  {
    title: 'Electrical Design & Installations',
    description:
      'Design and implementation of modular, adaptive electrical systems tailored to vessel size and complexity.',
    image: electricalImg,
  },
  {
    title: 'Alarm Monitoring Systems (AMS)',
    description:
      'Custom AMS solutions that integrate with legacy systems for streamlined control and monitoring.',
    image: amsImg,
  },
  {
    title: 'Switchboards, Panels, and Automation',
    description:
      'BLUEWAVE™ certified panels aligned with DNV and SOLAS standards for seamless integration.',
    image: switchboardImg,
  },
  {
    title: 'Power Management Systems',
    description:
      'Advanced diagnostics using thermal imaging and analyzers to identify and resolve energy issues.',
    image: pmsImg,
  },
  {
    title: 'Lighting and Entertainment Systems',
    description: 'Custom mood lighting and AV integration for luxurious onboard experiences.',
    image: lightingImg,
  },
  {
    title: 'Testing & Diagnostics',
    description:
      'From harmonics to load analysis, our tools pinpoint faults quickly and effectively.',
    image: testingImg,
  },
])
</script>

<style scoped>
.services-section {
  background: var(--gradient-ety-gray-blue);
  padding-bottom: 0;
}

.services-header-section {
  position: relative;
  height: 60vh;
  background-image: url('/images/services-pic.jpg');
  /* o el que elijas */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 3rem 1rem;
  overflow: hidden;
}

.services-header-section .overlay {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
  z-index: 1;
}


.service-full-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.bg-ety-dark-blue {
  background-color: var(--ety-dark-blue);
}

.bg-ety-mid-blue {
  background-color: var(--ety-mid-blue);
}

.service-full-image {
  flex: 1;
  height: 550px;
  background-size: cover;
  background-position: center;
  min-width: 45%;
}

.service-full-text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  min-height: 550px;
}

.text-ety-light {
  color: var(--ety-text-light);
}

@media (max-width: 768px) {

  .service-full-image,
  .service-full-text {
    min-height: 400px;
    width: 100%;
  }

  .service-full-text {
    padding: 2rem 1.5rem;
  }
}
</style>
