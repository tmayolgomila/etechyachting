<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="max-width: 100vw; padding: 4rem 0; perspective: 1200px"
  >
    <div
      ref="card"
      style="
        transform: rotateX(8deg) rotateY(-12deg);
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        transform-style: preserve-3d;
        will-change: transform;
        display: inline-block;
        filter: drop-shadow(-24px 16px 60px rgba(0, 0, 0, 0.4));
        max-width: 1000px;
        width: 100%;
      "
      @mousemove="handleMouseMove"
      @mouseleave="resetTilt"
    >
      <img
        src="/src/assets/ams/ams.png"
        alt="Mockup AMS"
        class="img-fluid rounded-4 shadow-lg mockup-img"
        style="width: 100%; height: auto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const card = ref(null)
const tilt = ref({ x: 8, y: -12 })

const handleMouseMove = (e) => {
  const bounds = card.value.getBoundingClientRect()
  const centerX = bounds.left + bounds.width / 2
  const centerY = bounds.top + bounds.height / 2
  const deltaX = (e.clientX - centerX) / bounds.width
  const deltaY = (e.clientY - centerY) / bounds.height
  tilt.value = {
    x: deltaY * -10 + 8,
    y: deltaX * 10 - 12,
  }
  card.value.style.transform = `rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg)`
  card.value.style.filter = `drop-shadow(${tilt.value.y * 2}px ${tilt.value.x * 2}px 60px rgba(0, 0, 0, 0.4))`
}

const resetTilt = () => {
  tilt.value = { x: 8, y: -12 }
  card.value.style.transform = `rotateX(8deg) rotateY(-12deg)`
  card.value.style.filter = `drop-shadow(-24px 16px 60px rgba(0, 0, 0, 0.4))`
}
</script>

<style scoped>
@media (max-width: 768px) {
  div[ref='card'] {
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
  .mockup-img {
    max-width: 90vw !important;
  }
}
</style>
