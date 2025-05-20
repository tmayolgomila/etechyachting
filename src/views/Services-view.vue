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
              <p class="text-ety-light">{{ service.description }}</p>
              <ul class="text-ety-light ps-3">
                <li v-for="(point, i) in service.bullets" :key="i">{{ point }}</li>
              </ul>
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
    description: 'High-performance frequency and voltage conversion systems designed to meet the demands of global marinas and onboard energy efficiency.',
    bullets: [
      'ASEA converters supply and installation',
      'Isolation transformers and shore protection systems',
      'Integration with hybrid and electric propulsion architectures',
    ],
    image: aseaImg,
  },
  {
    title: 'Electrical Design & Installations',
    description: 'Complete turnkey engineering for electrical systems, from concept to commissioning.',
    bullets: [
      'Load calculations and schematic development',
      'Full system layout and technical documentation',
      'Class-compliant wiring, routing, and installation',
    ],
    image: electricalImg,
  },
  {
    title: 'Alarm Monitoring Systems (AMS)',
    description: 'Real-time critical system supervision with custom AMS/HMI integration through our BLUEWAVE™ platform.',
    bullets: [
      'Real-time alarms with trend logging and reporting',
      'Intuitive touchscreen control panels',
      'Remote access and class-approved safety features',
    ],
    image: amsImg,
  },
  {
    title: 'Switchboards, Panels, and Automation',
    description: 'Design, assembly, and commissioning of marine-grade control and distribution boards.',
    bullets: [
      'BLUEWAVE™ DNV/SOLAS-certified panels',
      'PLC automation and remote diagnostics',
      'Seamless integration with propulsion, HVAC, and utility systems',
    ],
    image: switchboardImg,
  },
  {
    title: 'Power Management Systems',
    description: 'Optimized onboard power control to maximize energy efficiency and system reliability.',
    bullets: [
      'Generator synchronization and load balancing',
      'Shore-to-generator transition logic',
      'Thermal imaging and harmonic analysis for diagnostics',
    ],
    image: pmsImg,
  },
  {
    title: 'Testing & Diagnostics',
    description: 'Certified electrical testing services to ensure system performance and safety compliance.',
    bullets: [
      'Load bank and insulation resistance testing (Megger)',
      'Thermographic inspections and power quality audits',
      'Pre-classification inspections and reporting',
    ],
    image: testingImg,
  },
  {
    title: 'Lighting and Entertainment Systems',
    description: 'Custom ambiance and AV control for luxury yachts and refit projects.',
    bullets: [
      'Dimmable lighting and DMX automation',
      'Centralized AV and multimedia distribution',
      'Touch control interfaces and scene management',
    ],
    image: lightingImg,
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
