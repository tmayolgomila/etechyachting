<template>
  <footer class="ety-footer text-white py-3" :style="{ background: 'white' }">
    <div class="container">
      <div class="row text-center">
        <div class="col-12 mb-4">
          <img src="@/assets/logos/ETY_Claim_Positive.jpg" alt="E-Tech Yachting" style="max-width: 160px" />
          <p class="small text-black mb-0 mt-3">
            Engineering the future of yachting — one system at a time. Based in Palma de Mallorca.
          </p>
        </div>

        <div class="col-12">
          <h6 class="text-uppercase text-black fw-bold mb-3">Contact</h6>
          <p class="mb-2 small">
            <i class="bi bi-envelope me-2"></i>
            <a href="mailto:info@etechyachting.com" class="footer-link text-black">info@etechyachting.com</a>
          </p>
          <p class="small">
            <i class="bi bi-telephone me-2"></i>
            <a href="tel:+34971431155" class="footer-link text-black">+34 971 43 11 55</a>
          </p>
        </div>
      </div>


      <!-- Copyright -->
      <div class="text-center pt-4 mt-4 border-top border-light-subtle small text-black">
        © {{ new Date().getFullYear() }} E-Tech Yachting. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-link {
  color: var(--ety-text-light);
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
  color: white;
}
</style>
