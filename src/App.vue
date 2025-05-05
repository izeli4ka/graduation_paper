<!-- App.vue -->
<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from "./components/HeaderSection.vue"
</script>