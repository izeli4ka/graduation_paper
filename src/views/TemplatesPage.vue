<template>
    <div class="templates-page">
        <h1 class="page-title">Выберите подходящий шаблон постера</h1>

        <div class="templates-grid">
            <div v-for="template in templates" :key="template.id" @click="selectTemplate(template.id)"
                class="template-card">
                <div class="template-image">
                    <img :src="template.image" :alt="template.title">
                </div>

                <div class="template-info">
                    <h3 class="template-title">{{ template.title }}</h3>
                    <p class="template-description">{{ template.description }}</p>
                </div>

                <button class="select-button">
                    Выбрать
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import posterImage from '../assets/banner.png';

const router = useRouter();

const templates = ref([
    {
        id: 1,
        title: 'Научный постер',
        description: 'Идеально для презентации исследовательских работ и научных проектов',
        image: posterImage,
    },
    {
        id: 2,
        title: 'Бизнес-презентация',
        description: 'Строгий дизайн для бизнес-презентаций и деловых отчетов',
        image: posterImage,
    },
    {
        id: 3,
        title: 'Креативный проект',
        description: 'Яркий дизайн для творческих проектов и художественных работ',
        image: posterImage,
    },
    {
        id: 4,
        title: 'Информационный постер',
        description: 'Для наглядного представления статистики и информации',
        image: posterImage,
    },
    {
        id: 5,
        title: 'Минималистичный',
        description: 'Лаконичный дизайн с фокусом на контент и читаемость',
        image: posterImage,
    },
    {
        id: 6,
        title: 'Событийный постер',
        description: 'Для анонсирования мероприятий, конференций и событий',
        image: posterImage,
    }
]);

const selectTemplate = (templateId) => {
    router.push({
        name: 'CreatePoster',
        params: { template: templateId }
    });
};
</script>

<style scoped>
body {
  background-color: #f9faff;
  margin: 0;
  padding: 0;
  height: 100%;
}

.templates-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.page-title {
    font-size: 38px;
    color: #000c76;
    text-align: center;
    margin-bottom: 40px;
}

.templates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.template-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 15px;
}

.template-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px #000c7647;
}

.template-card:active {
    transform: translateY(0px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.template-image {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.template-image img {
    width: 90%;
    height: 100%;
    object-fit: cover;
}

.template-card:hover {
    transform: scale(1.03);
}

.template-info {
    padding: 20px;
    flex-grow: 1;
}

.template-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #000c76;
}

.template-description {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
}

.select-button {
    width: 100%;
    padding: 15px;
    background-color: #000c76;
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .templates-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }

    .page-title {
        font-size: 2rem;
        margin-bottom: 30px;
    }

    .template-info {
        padding: 15px;
    }

    .template-title {
        font-size: 1.1rem;
    }

    .select-button {
        padding: 12px;
    }
}
</style>