<!-- PreviewSection.vue -->
<template>
  <section class="preview-section">
    <div class="preview-header">
      Окно предпросмотра
      <button class="fullscreen-btn" @click="generatePosterPreview">
        Обновить
      </button>
    </div>
    <!-- Кнопка обновления предпросмотра -->

    <div class="preview-content">
      <img
        v-if="posterImage"
        :src="posterImage"
        alt="Preview"
        class="preview-image"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { store } from "./store";
import html2canvas from "html2canvas";

watch(
  () => store.posterData,
  () => {
    generatePosterPreview();
  },
  { deep: true }
);

// Добавьте начальную генерацию при монтировании
onMounted(() => {
  generatePosterPreview();
});

const posterImage = ref(null); // Здесь будет храниться ссылка на изображение

const generatePosterPreview = async () => {
  // Найти ваш компонент PosterSection по идентификатору
  const posterElement = document.querySelector(".poster");
  if (!posterElement) return;

  try {
    // Преобразовать содержимое PosterSection в изображение
    const canvas = await html2canvas(posterElement, {
      scale: 0.2, // Масштаб для уменьшения размера изображения (корректируется)
      useCORS: true, // Учитываем загрузку удаленных изображений
    });
    posterImage.value = canvas.toDataURL(); // Преобразуем canvas в URI изображения
  } catch (error) {
    console.error("Ошибка генерации изображения:", error);
  }
};
</script>

<style>
* {
  margin: 0;

  padding: 0;

  box-sizing: border-box;

  font-family: Arial, sans-serif;
}

.preview-section {
  flex: 1;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: relative;
  max-height: 95vh;
}

.preview-header {
  font-size: 16px;
  color: #979797;
  margin: 5px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  right: 10px;
}

.preview-content {
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Уменьшаем или обрезаем изображение для подходящего размера */
}

.fullscreen-btn {
  padding: 10px;
  right: 10px;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
  }
}
</style>