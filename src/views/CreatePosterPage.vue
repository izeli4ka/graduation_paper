<!-- views/CreatePosterPage.vue -->
<template>
  <div class="app">
    <main class="main-content">
      <FormSection />
      <PreviewSection />
    </main>
    <!-- Невидимый контейнер для PosterSection -->
    <div id="poster-preview" style="position: absolute; top: -10000px; visibility: visible;">
      <PosterSection />
    </div>
  </div>
</template>

<script setup>
import FormSection from "../components/FormSection.vue";
import PreviewSection from "../components/PreviewSection.vue";
import PosterSection from "../components/PosterSection.vue";
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f9faff;
  margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}

.main-content {
  display: flex;
  min-height: calc(100vh - 70px);
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
  }
}
</style>
