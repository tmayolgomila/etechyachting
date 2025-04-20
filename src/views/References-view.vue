<template>
  <section class="references-section py-5" :style="{ backgroundImage: 'var(--gradient-ety-gray-blue)' }">
    <div class="container">
      <h2 class="text-center text-white fw-bold text-uppercase mb-5" data-aos="fade-up">
        Our References
      </h2>

      <div v-for="(ref, index) in references" :key="index"
        class="reference-card mb-5 d-flex flex-column flex-lg-row align-items-center gap-4"
        :class="{ 'flex-lg-row-reverse': index % 2 !== 0 }" :data-aos="getAosDirection(index)">
        <!-- Image -->
        <div class="col-lg-6">
          <img :src="ref.image" :alt="ref.name" class="img-fluid rounded-4 shadow-sm w-100" />
        </div>

        <!-- Text -->
        <div class="col-lg-6 text-white">
          <h4 class="fw-bold">{{ ref.name }}</h4>
          <p class="text-ety-light">{{ ref.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import wallyImg from '@/assets/references/Wally.jpg'
import amelsImg from '@/assets/references/Amels.jpg'
import astraliumImg from '@/assets/references/astralium.jpg'
import borkumImg from '@/assets/references/Borkumriff.jpg'
import customlineImg from '@/assets/references/customline.jpg'
import goImg from '@/assets/references/GO.jpg'
import mirageImg from '@/assets/references/Mirage.jpg'
import mysilverdreamImg from '@/assets/references/mysilverdream.jpg'
import periniImg from '@/assets/references/perini.jpg'
import rabdanImg from '@/assets/references/Rabdan.jpg'
import Wally1Img from '@/assets/references/Wally-1.jpg'

onMounted(() => {
  AOS.init({ duration: 1000, once: false, mirror: true })
})

const getAosDirection = (index) => {
  if (window.innerWidth < 768) return 'fade-up'
  return index % 2 === 0 ? 'fade-right' : 'fade-left'
}


const references = ref([
  {
    name: 'Lowland Yachts BV, 31 Metre',
    description:
      'ETY carried out the AMS refit of the 31mt Astralium yacht. The project included the installation of a brand new Bluewave AMS and electrical works throughout the vessel, enhancing system reliability and operational efficiency.',
    image: astraliumImg,
  },
  {
    name: 'Warren Yachts, 43 Metre',
    description:
      'ETY carried out the AMS refit of the 43mt Silver Dream yacht. The scope of work included the installation of a new Bluewave AMS and a complete electrical system upgrade, ensuring seamless integration and enhanced monitoring capabilities.',
    image: mysilverdreamImg,
  },

  {
    name: 'Royal Huisman Yacht, 51 Metre',
    description:
      'ETY carried out the complete AMCS (Alarm, Monitoring and Control System) refit of the  51mt Royal Huisman sail yacht. ETY team redesigned the complete AMCS with a new robust Bluewave system.',
    image: borkumImg,
  },
  {
    name: 'Turquoise Yacht, 77 Metre',
    description:
      'ETY carried out main switchboard rebuild and general electrical installation rectifications to comply to class rules of the 77mt Turquoise yacht in Marseille, France. We also carried out the installation of our Bluewave AMS with UMS notation handling more than 1200 physical and virtual I/Os.',
    image: goImg,
  },
  {
    name: 'Feadship Yacht, 53 Metre',
    description:
      'ETY carried out the complete AMS refit on the 53mt Feadship. ETY supplied and installed a new alarm and monitoring system which fully interfaced with all existing systems as well as adding the fridge and freezer systems.',
    image: mirageImg,
  },
  {
    name: 'Wally Yacht, 32 Metre',
    description:
      'ETY carried out the complete AMS refit on the Wally 105 (32 mt). ETY team redesigned the complete AMS with a new Bluewave AMS in 9 weeks, interfacing with additional systems. The new system is composed by a number of data acquisition units installed all around the vessel and communicated via a single modbus cable.',
    image: Wally1Img,
  },
  {
    name: 'Silver Yachts, 73 Metre',
    description:
      'ETY carried out the AMS refit of the 73.3mt Silver Yacht in Abu Dhabi, UAE. The new Bluewave AMS is handling more than 1000 I/O and communicates with systems such as main engines, generators, fire alarm system, navigation system and ventilation system.',
    image: rabdanImg,
  },
  {
    name: 'Perini Navi, 52 Metre',
    description:
      'ETY carried out the main switchboard refit of the 52.3m Perini Navi sailing yacht in Palma de Mallorca, Spain. Thanks to the Bluewave technology, we reduced the original main Switchboard volume by a 25% integrating the new PMS inside the switchboard cabinet, which was not located in the main switchboard previously.',
    image: periniImg,
  },
  {
    name: 'Custom Line, 30 Metre',
    description:
      'ETY carried out the bridge refit bringing the old bridge console to the latest technology. We designed the new console layout with new flush mounted controls, indicators and steering control systems. Installation of new class approved touchscreens, navigation PC’s, radars, echosounder, cameras and a new autopilot.',
    image: customlineImg,
  },
  {
    name: 'Amels, 58 Metre',
    description:
      'ETY is carrying out the complete electrical refit of the 57.7m motor yacht in Balk shipyard, the Netherlands. This refit includes the supply and installation of a Bluewave switchboard and monitoring system, power management system, shore power converter, AC/DC distribution system, security system and lighting update to LED.',
    image: amelsImg,
  },
  {
    name: 'Wally Yacht, 26 Metre',
    description:
      'ETY carried out the complete rewire of all systems on-board the 26m Wally racing yacht. A BLUEWAVE switchboard and monitoring system, DC system for electric winches, lighting throughout including navigation was installed with careful consideration for space and weight.',
    image: wallyImg,
  },
])
</script>

<style scoped>
.references-section {
  min-height: 100vh;
}

.reference-card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 1rem;
}

.text-ety-light {
  color: var(--ety-text-light);
}
</style>
