<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import HeaderComponent from './components/Header-component.vue'
import SplashIntro from './components/SplashIntro.vue'

const showSplash = ref(true)

function onSplashFinished() {
  showSplash.value = false
}
</script>

<template>
  <SplashIntro v-if="showSplash" @finished="onSplashFinished" />

  <HeaderComponent v-if="!showSplash" />

  <RouterView v-if="!showSplash" />
</template>
