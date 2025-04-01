<template>
  <header class="sticky-top shadow-sm" :style="{ backgroundColor: 'var(--ety-dark-blue)' }">
    <div
      class="container-fluid d-flex justify-content-between align-items-center py-3 px-4 position-relative"
    >
      <!-- Logo -->
      <RouterLink to="/" class="navbar-brand text-white">
        <img src="@/assets/ety-logo.png" alt="E-Tech Yachting" height="36" />
      </RouterLink>

      <!-- Toggle button -->
      <button class="btn d-md-none text-white" @click="isMenuOpen = !isMenuOpen">
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12.5a.5.5 0 010-1h11a.5.5 0 010 1h-11zm0-5a.5.5 0 010-1h11a.5.5 0 010 1h-11zm0-5a.5.5 0 010-1h11a.5.5 0 010 1h-11z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"
          />
        </svg>
      </button>

      <!-- Desktop nav -->
      <nav class="d-none d-md-flex gap-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link text-white"
          active-class="fw-bold text-warning"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Mobile nav -->
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="position-absolute top-100 start-0 w-100 py-3 z-3"
          :style="{ backgroundColor: 'var(--ety-dark-blue)' }"
        >
          <div class="d-flex flex-column align-items-start px-4">
            <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="nav-link text-white py-2"
              active-class="fw-bold text-warning"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'AMS', to: '/bluewave' },
  { label: 'Partners', to: '/partners' },
  { label: 'Our References', to: '/references' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
