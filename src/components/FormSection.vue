<!-- FormSection.vue -->
<template>
  <section class="form-section">
    <div class="navigation-buttons">
      <router-link to="/templates" class="back-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        Назад
      </router-link>
      <button class="ai-helper-btn" @click="showModal = true">
        AI Helper
        <img src="../assets/AI_white.svg" alt="image">
      </button>
    </div>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>AI Helper</h3>
          <img src="../assets/AI_gradient.svg" alt="image">
        </div>
        <button class="close-btn" @click="showModal = false"><img src="../assets/close.svg" alt="close"></button>
        <div class="modal-body">
          <p>Загрузите файл в формате .docx, и наш помощник автоматически обработает содержимое, чтобы помочь вам
            заполнить поля для создания постера</p>
          <button class="upload-btn" @click="triggerFileUpload">
            Загрузить файл
          </button>
          <input type="file" ref="fileInput" accept=".docx" @change="handleFileUpload" style="display: none">
        </div>
      </div>
    </div>
    <div class="form-div">
      <!-- Poster Header Form -->
      <h3 class="form-title">Шапка постера</h3>
      <div class="form-container">
        <div class="form-group">
          <label for="project-title">Заголовок проекта</label>
          <textarea type="text" id="project-title" class="form-control" placeholder="Тема проекта" v-model="title"
            @input="
              (e) => {
                autoResize(e);
                updateTitle();
              }
            "></textarea>
        </div>

        <div class="form-group">
          <label for="project-info">Титульная информация</label>
          <textarea type="text" id="project-info" class="form-control" placeholder="Направление: «»" v-model="subtitle"
            @input="
              (e) => {
                autoResize(e);
                updateSubtitle();
              }
            "></textarea>
        </div>
      </div>

      <!-- Poster Main Content Form -->
      <h3 class="form-title">Основная часть постера</h3>
      <div class="form-container">
        <div v-for="(element, index) in elements" :key="element.id" class="form-group">
          <label :for="element.id">
            {{ getElementLabel(element.type) }}
          </label>
          <textarea v-if="['text', 'highlightedText'].includes(element.type)" :id="element.id"
            class="form-control form-textarea" :placeholder="getElementPlaceholder(element.type)" v-model="element.text"
            @input="
              (e) => {
                autoResize(e);
                updateContent();
              }
            "></textarea>
          <input v-else type="text" :id="element.id" class="form-control"
            :placeholder="getElementPlaceholder(element.type)" v-model="element.text" @input="updateContent" />

          <div v-if="element.type === 'image'" class="image-upload-container">
            <input type="file" :id="'file-' + element.id" class="file-input" accept="image/*"
              @change="(e) => handleImageUpload(e, element)" hidden />
            <div class="add-file-container">
              <button class="add-file-btn" @click="triggerFileInput(element.id)">
                {{ element.imageUrl ? "Изменить файл" : "Загрузить с устройства" }}
              </button>
              <button class="add-file-btn">Выбрать из галереи</button>
            </div>
            <div v-if="element.imageUrl" class="image-preview">
              <img :src="element.imageUrl" alt="Preview" />
              <button class="remove-image-btn" @click="removeImage(element)">
                <img class="img-close" src="../assets/close_red.svg" alt="close">
              </button>
            </div>
          </div>
          <button class="delete-btn" @click="deleteElement(index)"><img class="img-close" src="../assets/close.svg"
              alt="close"></button>
        </div>
        <div class="action-buttons">
          <button class="action-btn" @click="addElement('header')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Заголовок
          </button>
          <button class="action-btn" @click="addElement('highlightedText')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Выделенный текст
          </button>
          <button class="action-btn" @click="addElement('text')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Текст
          </button>
          <button class="action-btn" @click="addElement('image')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Рисунок
          </button>
        </div>
      </div>

      <h3 class="form-title">Подвал постера</h3>
      <div class="form-container">
        <div class="form-group">
          <label for="footer-title">Заголовок подвала</label>
          <input type="text" id="footer-title" class="form-control" placeholder="Учебное заведение" v-model="footer"
            @input="
              (e) => {
                autoResize(e);
                updateFooter();
              }
            " />
        </div>
      </div>
      <div class="btn-container">
        <button class="save-btn" @click="downloadPDF">
          Скачать постер в PDF
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, watch } from "vue";
import { store } from "./store";
import html2pdf from "html2pdf.js";

const title = ref("");
const subtitle = ref("");
const elements = ref([]);
const footer = ref("");

const updateTitle = () => {
  store.updateTitle(title.value);
};

const updateSubtitle = () => {
  store.updateSubtitle(subtitle.value);
};

const updateContent = () => {
  store.updateSections(elements.value);
};

const updateFooter = () => {
  store.updateFooter(footer.value);
};

// Автоматическое обновление при изменении elements
watch(
  elements,
  () => {
    updateContent();
  },
  { deep: true }
);

watch(
  title,
  (newValue) => {
    store.updateTitle(newValue);
  },
  { immediate: true }
);

watch(
  subtitle,
  (newValue) => {
    store.updateSubtitle(newValue);
  },
  { immediate: true }
);

watch(
  footer,
  (newValue) => {
    store.updateFooter(newValue);
  },
  { immediate: true }
);

const addElement = (type) => {
  elements.value.push({
    id: Date.now(),
    type: type,
    text: "",
    imageUrl: null,
    imageName: null
  });
};

const deleteElement = (index) => {
  elements.value.splice(index, 1);
  updateContent();
};

const getElementLabel = (type) => {
  const labels = {
    header: "Заголовок",
    highlightedText: "Выделенный текст",
    text: "Текст",
    image: "Рисунок",
  };
  return labels[type];
};

const getElementPlaceholder = (type) => {
  const placeholders = {
    header: "Введите заголовок",
    highlightedText: "Введите выделенный текст",
    text: "Введите текст",
    image: "Рисунок – Название",
  };
  return placeholders[type];
};

const autoResize = (event) => {
  const textarea = event.target;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};

const downloadPDF = async () => {
  // Находим элемент постера
  const poster = document.querySelector(".poster");

  // Конфигурация для PDF
  const opt = {
    margin: 0,
    filename: "poster.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 1,
      width: 7016,
      height: 9933,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: {
      unit: "px",
      format: [7016, 9933],
      orientation: "portrait",
    },
  };

  // Создаем PDF
  html2pdf().set(opt).from(poster).save();
};

const triggerFileInput = (elementId) => {
  document.getElementById('file-' + elementId).click()
}

const handleImageUpload = async (event, element) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      element.imageUrl = e.target.result
      element.imageName = file.name
      updateContent()
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = (element) => {
  element.imageUrl = null
  element.imageName = null
  updateContent()
}

const showModal = ref(false);
const fileInput = ref(null);

const triggerFileUpload = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Здесь будет логика обработки файла
    console.log('File uploaded:', file.name);
    showModal.value = false;
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

:root {
  --blue-color: #000c76;
}

.form-group {
  position: relative;
  margin-bottom: 10px;
}

.delete-btn {
  position: absolute;
  right: 10px;
  top: 2px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 18px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 50%;
}

.img-close {
  padding: 4px;
}

.form-section {
  flex: 1;
  padding: 25px 80px;
  overflow-y: auto;
}

.form-div {
  max-height: 75vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #9ba1c4 #dde1e6;
}

.navigation-buttons {
  margin-bottom: 20px;
  display: flex;
}

.back-btn,
.ai-helper-btn {
  padding: 7px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.ai-helper-btn:hover {
  /* background-color: #001299; */
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.ai-helper-btn:active {
  background-color: #000951;
  transform: translateY(0px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  /* background-color: #001299; */
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.back-btn:active {
  background-color: #000951;
  transform: translateY(0px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.back-btn {
  background-color: var(--blue-color);
  color: white;
  display: flex;
  align-items: center;
}

.back-btn svg {
  margin-right: 5px;
}

.ai-helper-btn {
  background-color: var(--blue-color);
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-helper-btn svg {
  margin-left: 5px;
}

.form-container {
  margin-bottom: 10px;
  border: 1px solid var(--blue-color);
  padding: 8px;
  border-radius: 5px;
  gap: 8px;
  display: flex;
  flex-direction: column;
}

.form-title {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 200;
}

.form-group {
  background-color: #ffffff;
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #dde1e6;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 200;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #dde1e6;
  background-color: #dde1e6;
  resize: none;
}

.add-file-container {
  display: flex;
  gap: 10px;
}

.add-file-btn {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.add-file-btn svg {
  margin-right: 8px;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-color);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.action-btn svg {
  margin-right: 5px;
}

.save-btn {
  padding: 12px 28px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--blue-color);
  color: white;
  display: flex;
  align-items: center;
  font-size: 16px;
  transition: all 0.3s ease;
}

.save-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.btn-container {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1024px) {
  .form-section {
    padding: 20px;
  }
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #dde1e6;
  background-color: #dde1e6;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
}

.form-textarea {
  min-height: 50px;
  line-height: 1.5;
  overflow: hidden;
  resize: none;
}

@media print {
  .poster {
    width: 7016px !important;
    height: 9933px !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}

.image-upload-container {
  margin-top: 10px;
}

.image-preview {
  margin-top: 10px;
  position: relative;
  display: inline-block;
}

.image-preview img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 4px;
}

.remove-image-btn {
  position: absolute;
  top: -7px;
  right: -7px;
  color: white;
  border: 1px solid #C90000;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-input {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 450px;
  padding: 20px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  gap: 5px;
}

.modal-header h3 {
  margin: 0;
  color: var(--blue-color);
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  position: absolute;
  right: 20px;
  top: 20px;
}

.close-btn:hover {
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 50%;
}

.modal-body {
  text-align: center;
}

.modal-body p {
  margin-bottom: 20px;
  color: #000000;
  line-height: 1.5;
}

.upload-btn {
  background-color: var(--blue-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
  font-size: 16px;
}

.upload-btn:hover {
  background-color: #000a61;
}
</style>