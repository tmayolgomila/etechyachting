<template>
  <section class="services-section py-5" :style="{ backgroundImage: 'var(--gradient-ety-gray-blue)' }">
    <div class="container">
      <h2 class="text-center text-white fw-bold text-uppercase mb-5" data-aos="fade-up">
        Our Services
      </h2>

      <div v-for="(service, index) in services" :key="index" class="row justify-content-center mb-5"
        :data-aos="getAosDirection(index)">
        <div class="col-lg-10">
          <div class="d-flex flex-column flex-md-row align-items-center service-card shadow-lg rounded-4 p-4"
            :class="{ 'flex-md-row-reverse': index % 2 !== 0 }">
            <!-- Imagen sin col-md-6 -->
            <div class="service-image-wrapper mb-4 mb-md-0">
              <div class="service-image rounded-4 shadow-sm" :style="{ backgroundImage: `url('${service.image}')` }">
              </div>
            </div>

            <!-- Texto sin col-md-6 -->
            <div class="ps-md-4 text-white w-100 text-center text-md-start">
              <h4 class="fw-bold mb-3">
                <i :class="service.icon" class="me-2 text-ety-cyan"></i>{{ service.title }}
              </h4>
              <p class="text-ety-light mb-3">{{ service.description }}</p>

              <!-- CTA opcional -->
              <!-- <a href="#" class="btn btn-outline-light btn-sm mt-2">Learn more</a> -->
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

// Importa las imágenes correctamente
import electricalImg from '@/assets/services/electrical.jpg'
import amsImg from '@/assets/services/ams.jpg'
import pmsImg from '@/assets/services/pms.jpg'
import lightingImg from '@/assets/services/lighting.jpg'
import testingImg from '@/assets/services/testing.jpg'

onMounted(() => {
  AOS.init({ duration: 1000, once: false, mirror: true })
})

const getAosDirection = (index) => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return 'fade-up'
  }
  return index % 2 === 0 ? 'fade-right' : 'fade-left'
}


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
.service-image-wrapper {
  width: 100%;
}

.service-image {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.service-image:hover {
  transform: scale(1.02);
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.text-ety-cyan {
  color: var(--ety-cyan);
}

.text-ety-light {
  color: var(--ety-text-light);
}
</style>
