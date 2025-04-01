<template>
  <transition name="fade">
    <div
      v-if="show"
      class="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
      style="background-color: var(--ety-dark-blue); z-index: 9999"
    >
      <img src="@/assets/ety-logo.png" alt="ETY Logo" class="mb-3" style="width: clamp(160px, 20vw, 300px);" />
      <h5 class="text-uppercase tracking-in-expand">Electrical Engineering Systems</h5>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['finished'])

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
    emit('finished')
  }, 2000) // muestra la intro por 2 segundos
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tracking-in-expand {
  animation: tracking-in-expand 0.8s cubic-bezier(0.215, 0.610, 0.355, 1) both;
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
</style>
