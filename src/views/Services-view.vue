<template>
  <section class="services-section py-5" :style="{ backgroundColor: 'var(--ety-mid-blue)' }">
    <div class="container">
      <h2 class="text-center text-white fw-bold text-uppercase mb-5" data-aos="fade-up">
        Our Services
      </h2>

      <div
        v-for="(service, index) in services"
        :key="index"
        class="row align-items-center mb-5 flex-column flex-md-row"
        :class="{ 'flex-md-row-reverse': index % 2 !== 0 }"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      >
        <!-- Image -->
        <div class="col-md-6 mb-3 mb-md-0">
          <div
            class="service-image rounded-4 shadow-sm"
            :style="{ backgroundImage: `url('${service.image}')` }"
          ></div>
        </div>

        <!-- Text -->
        <div class="col-md-6 text-white">
          <h4 class="fw-bold mb-3">
            <i :class="service.icon" class="me-2 text-ety-cyan"></i>{{ service.title }}
          </h4>
          <p class="text-ety-light">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Importa las imágenes correctamente
import electricalImg from '@/assets/services/electrical.jpg'
import amsImg from '@/assets/services/ams.jpg'
import pmsImg from '@/assets/services/pms.jpg'
import lightingImg from '@/assets/services/lighting.jpg'
import testingImg from '@/assets/services/testing.jpg'

import { useScrollToNext } from '@/stores/useScrollToNext'
useScrollToNext('/services', '/bluewave')

onMounted(() => {
  AOS.init({ duration: 1000, once: false, mirror: true })
})

const services = ref([
  {
    title: 'Electrical Design & Installations',
    description:
      'Design and implementation of modular, adaptive electrical systems tailored to vessel size and complexity.',
    icon: 'bi bi-diagram-3-fill',
    image: electricalImg,
  },
  {
    title: 'Alarm Monitoring Systems (AMS)',
    description:
      'Custom AMS solutions that integrate with legacy systems for streamlined control and monitoring.',
    icon: 'bi bi-bell-fill',
    image: amsImg,
  },
  {
    title: 'Switchboards, Panels, and Automation',
    description:
      'BLUEWAVE™ certified panels aligned with DNV and SOLAS standards for seamless integration.',
    icon: 'bi bi-toggle2-on',
    image: amsImg,
  },
  {
    title: 'Power Management Systems',
    description:
      'Advanced diagnostics using thermal imaging and analyzers to identify and resolve energy issues.',
    icon: 'bi bi-speedometer2',
    image: pmsImg,
  },
  {
    title: 'Shore Power Converters',
    description:
      'Partnered with ASEA for eco-efficient shore converters and safe isolation systems.',
    icon: 'bi bi-plug-fill',
    image: pmsImg,
  },
  {
    title: 'Lighting and Entertainment Systems',
    description: 'Custom mood lighting and AV integration for luxurious onboard experiences.',
    icon: 'bi bi-lightbulb-fill',
    image: lightingImg,
  },
  {
    title: 'Testing & Diagnostics',
    description:
      'From harmonics to load analysis, our tools pinpoint faults quickly and effectively.',
    icon: 'bi bi-search',
    image: testingImg,
  },
  {
    title: 'Preventative Maintenance',
    description: 'Routine checks and predictive actions to extend lifespan of critical systems.',
    icon: 'bi bi-shield-check',
    image: electricalImg,
  },
  {
    title: 'Complete Electrical Refits',
    description:
      'Full rewiring and system upgrade projects tailored to each vessel and regulation.',
    icon: 'bi bi-hammer',
    image: testingImg,
  },
])
</script>

<style scoped>
.service-image {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
}

.text-ety-cyan {
  color: var(--ety-cyan);
}

.text-ety-light {
  color: var(--ety-text-light);
}
</style>
