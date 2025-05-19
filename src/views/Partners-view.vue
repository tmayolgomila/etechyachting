<template>
  <section class="partners-section py-5 min-vh-100 d-flex align-items-center">
    <div class="container">
      <h2 class="text-center text-white fw-bold text-uppercase mb-5" data-aos="fade-up">
        Our Trusted Partners
      </h2>
      <div class="row g-4 justify-content-center">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          data-aos="zoom-in"
          :data-aos-delay="(index % 4) * 100"
        >
          <div
            class="partner-card d-flex flex-column position-relative text-center p-4 rounded-4 h-100"
          >
            <div class="flex-grow-1">
              <img :src="partner.logo" :alt="partner.name" class="img-fluid partner-logo mb-3" />
              <h6 class="fw-bold text-white mb-2">{{ partner.name }}</h6>
              <p class="small text-ety-light m-0">{{ partner.description }}</p>
            </div>
            <a
              v-if="partner.url"
              :href="partner.url"
              class="btn btn-outline-light btn-sm mt-3 align-self-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 600, once: true })
})

const partners = ref([
  {
    name: 'Auto Maskin',
    logo: new URL('@/assets/partners/automaskin.png', import.meta.url).href,
    description:
      'Norwegian leader in advanced engine control and monitoring systems for marine and power generation industries. Trusted for performance, safety, and reliability.',
  },
  {
    name: 'ASEA Power Systems',
    logo: new URL('@/assets/partners/asea-logo.png', import.meta.url).href,
    description: 'Leading global provider of shore power converters and voltage regulators.',
  },
  {
    name: 'WAGO',
    logo: new URL('@/assets/partners/wago-logo.webp', import.meta.url).href,
    description: 'Versatile automation technology using open standards for marine systems.',
  },
  {
    name: 'DEIF',
    logo: new URL('@/assets/partners/deif-logo.png', import.meta.url).href,
    description: 'Compact energy control systems designed without PLCs for marine applications.',
  },
  {
    name: 'EDITRON (Danfoss)',
    logo: new URL('@/assets/partners/editron.png', import.meta.url).href,
    description: 'Electric drivetrain systems for efficient, durable marine propulsion.',
  },
  {
    name: 'Lumishore',
    logo: new URL('@/assets/partners/lumishore-logo.jpg', import.meta.url).href,
    description: 'Innovators in high-end underwater lighting for luxury yachts.',
  },
  {
    name: 'Consilium',
    logo: new URL('@/assets/partners/consilium-logo.jpg', import.meta.url).href,
    description: 'Experts in onboard fire and gas safety systems.',
  },
  {
    name: 'Blaunaval',
    logo: new URL('@/assets/partners/blau-naval.svg', import.meta.url).href,
    description:
      'Leading provider of fluid management and technical supplies for yachts, superyachts, and shipyards across the Mediterranean.',
    url: 'https://blaunaval.com',
  },
  {
    name: 'Shore Marine',
    logo: new URL('@/assets/partners/shore-marine.jpg', import.meta.url).href,
    description:
      'Established in 2004, offering over 90 years of combined yachting experience in TPA, customs, refit projects, and yacht management.',
    url: 'https://www.shoremarinegroup.com/',
  },
  {
    name: 'Disvent',
    logo: new URL('@/assets/partners/disvent.png', import.meta.url).href,
    description:
      'Specialists in electronics, refrigeration, communication, and energy solutions for maritime, industrial, and renewable energy sectors.',
    url: 'https://disvent.com',
  },
  {
    name: 'Marine Oil',
    logo: new URL('@/assets/partners/marine-oil.svg', import.meta.url).href,
    description:
      'Specialists in oil and fuel treatment, purification, and contamination control for superyachts, offering tank cleaning, fluid analysis, and preventive maintenance solutions.',
    url: 'https://www.oilfuelcare.com/',
  },
  {
    name: 'Yachtica',
    logo: new URL('@/assets/partners/yachtica-logo.jpg', import.meta.url).href,
    description: 'Advanced control systems for lighting and comfort at sea.',
  },
  {
    name: 'STP Palma',
    logo: new URL('@/assets/partners/stp-logo.png', import.meta.url).href,
    description: 'Europe’s leading refit shipyard supporting vessels up to 120 meters.',
  },
])
</script>

<style scoped>
.partner-card {
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  cursor: default;
  min-height: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.partner-logo {
  max-height: 80px;
  filter: grayscale(100%) brightness(1.2);
  transition: transform 0.3s ease;
}

.partner-card:hover .partner-logo {
  transform: scale(1.05);
  filter: none;
}

.text-ety-light {
  color: var(--ety-text-light);
}

@media (max-width: 768px) {
  .partner-logo {
    filter: none !important;
  }
}

.partners-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/partners-pic.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
}

.partners-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  z-index: 0;
}

.partners-section .container {
  position: relative;
  z-index: 2;
}
</style>
