<!-- PosterSection.vue -->
<template>
  <div class="poster">
    <header class="header">
      <h1 class="title">{{ posterData.title }}</h1>
      <div class="rectangle"></div>
      <p class="subtitle" v-html="posterData.subtitle"></p>
    </header>

    <div class="main-content">
      <div class="multi-column-content">
        <div v-for="(section, index) in posterData.sections" :key="index">
          <h2 class="column-title">{{ section.title }}</h2>
          <p
            v-if="!section.isImage"
            :class="section.isSpecial ? 'special-text' : 'column-text'"
            v-html="section.content"
          ></p>
          <div v-else class="image-container">
            <img
              v-if="section.imageUrl"
              :src="section.imageUrl"
              :alt="section.content"
              class="poster-image"
            />
            <p class="image-caption">{{ section.content }}</p>
          </div>
          <!-- <div class="rectangle"></div> -->
        </div>
      </div>
    </div>

    <footer class="footer">
      <p class="footer-text">{{ posterData.footer }}</p>
    </footer>
  </div>
</template>

<script setup>
import { store } from "./store";
import { computed } from "vue";

const posterData = computed(() => store.posterData);
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.poster {
  width: 7016px;
  height: 9933px;
  background-color: white;
}

.header {
  height: 1080px;
  background-color: #32006f;
  padding: 0px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
}

.title {
  font-family: "Inter", sans-serif;
  font-size: 128px;
  color: white;
}

.rectangle {
  width: 1200px;
  height: 54px;
  background-color: #740480;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
  margin-bottom: 60px;
}

.subtitle {
  font-family: "Inter", sans-serif;
  font-size: 100px;
  color: white;
}

.main-content {
  padding: 300px 200px 203px 200px;
  font-family: "Inter", sans-serif;
}

.multi-column-content {
  column-count: 3;
  column-gap: 300px;
  column-rule: 6px solid;
  column-rule-color: #000000;
  height: 8050px;
  column-fill: auto;
}

.column-title {
  font-family: "Inter", sans-serif;
  font-size: 128px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 60px;
  break-after: avoid;
}

.column-text {
  font-size: 96px;
  line-height: 1.4;
  margin-bottom: 60px;
}

.special-text {
  font-size: 96px;
  line-height: 1.4;
  color: #32006f;
  margin-bottom: 60px;
}

.footer {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;
  background-color: #32006f;
}

.footer-text {
  font-family: "Inter", sans-serif;
  font-size: 100px;
  text-align: center;
  color: white;
}

.image-container {
  margin-bottom: 60px;
}

.image-caption {
  font-size: 96px;
  line-height: 1.4;
  color: #000000;
  text-align: center;
}

.image-container {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  break-inside: avoid;
}

.poster-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.image-caption {
  font-size: 96px;
  line-height: 1.4;
  color: #000000;
  text-align: center;
  width: 100%;
}
</style>
