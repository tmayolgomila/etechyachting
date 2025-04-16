<template>
  <section class="jobs-section py-5" :style="{ backgroundImage: 'var(--gradient-ety-gray-blue)' }">
    <div class="container">
      <h2 class="text-center text-white fw-bold text-uppercase mb-5" data-aos="fade-up">
        Work With Us
      </h2>

      <!-- Lista de ofertas activas -->
      <div v-if="showOffers">
        <div v-for="(job, index) in jobOffers" :key="index" class="job-card text-white p-4 rounded-4 shadow-sm mb-5"
          data-aos="fade-up">
          <h4 class="fw-bold mb-3">{{ job.title }}</h4>

          <ul class="list-unstyled text-ety-light mb-4">
            <li><strong>Location:</strong> {{ job.location }}</li>
            <li><strong>Contract type:</strong> {{ job.contract }}</li>
            <li><strong>Level:</strong> {{ job.level }}</li>
            <li><strong>Start:</strong> {{ job.start }}</li>
          </ul>

          <p class="text-ety-light"><strong>About the Role</strong></p>
          <p class="text-ety-light">{{ job.about }}</p>

          <p class="text-ety-light"><strong>Your Responsibilities</strong></p>
          <ul class="text-ety-light">
            <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
          </ul>

          <p class="text-ety-light"><strong>What We Value</strong></p>
          <ul class="text-ety-light">
            <li v-for="(value, i) in job.values" :key="i">{{ value }}</li>
          </ul>

          <p v-if="job.bonus?.length" class="text-ety-light"><strong>Bonus (Not Required)</strong></p>
          <ul v-if="job.bonus?.length" class="text-ety-light">
            <li v-for="(bonus, i) in job.bonus" :key="i">{{ bonus }}</li>
          </ul>

          <p class="text-ety-light"><strong>What We Offer</strong></p>
          <ul class="text-ety-light">
            <li v-for="(offer, i) in job.offers" :key="i">{{ offer }}</li>
          </ul>

          <a :href="`mailto:${job.email}?subject=${encodeURIComponent('Application for ' + job.title + ' at Etech Yachting')}`"
            class="btn btn-outline-light mt-3">
            Apply Now
          </a>
        </div>
      </div>

      <!-- Call to Action: enviar CV siempre visible -->
      <div v-if="showOffers" class="job-card text-white p-4 rounded-4 shadow-sm text-center mx-auto"
        style="max-width: 720px;" data-aos="fade-up">
        <p class="fs-5 mb-4">
          Didn’t find the right position?
        </p>
        <p class="text-ety-light mb-4">
          At ETY, we’re always looking for passionate, curious and talented people. If you think you’d be a great fit,
          don’t hesitate to send us your CV.
        </p>
        <a href="mailto:info@etechyachting.com?subject=Spontaneous%20Application%20to%20ETY"
          class="btn btn-outline-light">
          Send Your CV
        </a>
      </div>
      <div v-if="!showOffers" class="job-card text-white p-5 rounded-4 shadow-sm text-center mx-auto"
        style="max-width: 720px;" data-aos="fade-up">
        <h4 class="fw-bold mb-3">No open roles, yet always open to talent.</h4>
        <p class="text-ety-light mb-4">
          At ETY, we’re always looking for passionate, curious, and talented people. If you think you’d be a great
          fit,
          feel free to send us your CV — we’d love to hear from you.
        </p>
        <a href="mailto:info@etechyachting.com?subject=Spontaneous%20Application%20to%20ETY"
          class="btn btn-outline-light">
          Send Your CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000, once: false, mirror: true })
})

// ⚠️ CAMBIA ESTE BOOLEANO A true cuando quieras mostrar las ofertas reales
const showOffers = ref(false)

const jobOffers = ref([
  {
    title: 'Junior Electrical Engineer',
    location: 'Palma de Mallorca',
    contract: 'Full-time',
    level: 'Junior',
    start: 'Immediate or based on availability',
    about:
      'At Etech Yachting, specialists in electrical and control systems for yachts, we are looking for a junior electrical engineer eager to learn, with a proactive mindset and an interest in marine systems and industrial automation. We’re not seeking years of experience — just a strong technical foundation and the will to grow within a multidisciplinary team.',
    tasks: [
      'Participate in the design and development of electrical and control engineering for large yachts.',
      'Use tools like AutoCAD and EPLAN for creating electrical diagrams.',
      'Support automation using PLCs (Siemens, Wago, etc.).',
      'Assist in component selection and electrical wiring layouts.',
      'Help with technical documentation and onboard system commissioning.',
      'Learn marine electrical standards and industry regulations.',
      'Participate in fault detection and system startups onboard.',
    ],
    values: [
      'Basic knowledge of electricity and automation.',
      'Introductory experience with AutoCAD and/or EPLAN.',
      'Interest in marine electrical systems and technical environments.',
      'Eagerness to learn, positive attitude, and team spirit.',
      'Ability to read and interpret electrical schematics.',
      'Basic knowledge of PLC programming.',
    ],
    bonus: [],
    offers: [
      'Technical guidance and ongoing learning from day one.',
      'A friendly, supportive team of technical professionals.',
      'Direct involvement in real-world yacht refit projects.',
      'Career growth opportunities in a dynamic and expanding company.',
    ],
    email: 'info@etechyachting.com',
  },
  {
    title: 'Junior Developer',
    location: 'Palma de Mallorca',
    contract: 'Full-time',
    level: 'Junior (ideal for early-career profiles)',
    start: 'Immediate or based on availability',
    about:
      'At Etech Yachting, experts in digital and electrical systems for vessels, we\'re seeking a junior developer with tech curiosity, a passion for learning, and an affinity for the marine or electrical engineering world. We don’t require years of experience — just a solid technical foundation and lots of motivation. If you care about visual user experiences, clean code, and real-world projects, we’d love to meet you.',
    tasks: [
      'Improve the look & feel of our web applications.',
      'Collaborate on interface development using JavaScript, HTML, and CSS.',
      'Support internal tools and control panel evolution.',
      'Learn about electronics and engineering applied to the yachting sector.',
      'Engage in both technical and functional projects.',
    ],
    values: [
      'Basic JavaScript knowledge.',
      'Interest in UI/UX design.',
      'Willingness to learn, proactive mindset, and positive attitude.',
      'Affinity with marine, electronics, or electrical engineering topics.',
      'Teamwork and clear communication skills.',
    ],
    bonus: [
      'Experience with Vue, React, Bootstrap or similar frameworks.',
      'Familiarity with Figma or other visual design tools.',
      'Understanding of Git, APIs, and basic databases.',
    ],
    offers: [
      'Technical mentorship and ongoing learning support.',
      'Great work atmosphere in a multidisciplinary team.',
      'Real involvement in technological marine solutions.',
      'Clear opportunities for career growth in a niche industry.',
    ],
    email: 'info@etechyachting.com',
  },
])
</script>

<style scoped>
.jobs-section {
  min-height: 100vh;
}

.job-card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
