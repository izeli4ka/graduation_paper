<!-- views/HomePage.vue -->
<template>
  <div class="app">
    <main class="main-content">
      <div class="left-section">
        <h1 class="main-title">
          Создавайте стильные постеры для ваших проектов за минуты!
        </h1>
        <div class="rectangle"></div>
        <div class="subtitle">
          <p>Не хочется разбираться в дизайне</p>
          <p>и тратить время на сложные программы?</p>
          <p>Просто вставьте текст — и получите готовый постер!</p>
        </div>
        <router-link to="/create" class="create-button">
          Создать постер!
        </router-link>

        <section class="features">
          <!-- <h2 class="section-title">Почему стоит выбрать нас?</h2> -->
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🤖</div>
              <div class="feature-content">
                <h3>ИИ-помощник</h3>
                <p class="feature-text">Автоматический анализ вашей документации и создание постера</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h3>Быстро и просто</h3>
                <p class="feature-text">Создание профессионального постера за считанные минуты</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h3>Быстро и просто</h3>
                <p class="feature-text">Создание профессионального постера за считанные минуты</p>
              </div>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤖</div>
              <div class="feature-content">
                <h3>ИИ-помощник</h3>
                <p class="feature-text">Автоматический анализ вашей документации и создание постера</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="right-section">
        <div class="poster-preview">
          <img src="../assets/banner.png" alt="Poster Preview" class="preview-image" />
        </div>
      </div>
    </main>
  </div>
</template>



<style scoped>
.app {
  min-height: 100vh;
  background-color: #f9faff;
  font-family: "Inter", sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #000c76;
}

.logo-image {
  height: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 0.25rem;
}

.nav-link.active {
  border-bottom: 2px solid white;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login {
  background: transparent;
  border: 1px solid white;
  color: white;
}

.btn-try {
  background: white;
  border: none;
  color: #000c76;
}

.main-content {
  display: flex;
  padding: 4rem;
  gap: 4rem;
  max-width: 1440px;
  margin: 0 auto;
  align-items: flex-start;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
}

.main-title {
  font-size: 38px;
  font-weight: 700;
  color: #000c76;
  line-height: 1.2;
  margin-bottom: 2rem;
}

.rectangle {
  width: 120px;
  height: 7px;
  background-color: #000c76;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
  margin-bottom: 2rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.create-button {
  display: inline-block;
  background-color: #000c76;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  width: fit-content;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.create-button:hover {
  /* background-color: #001299; */
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.create-button:active {
  background-color: #000951;
  transform: translateY(0px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poster-preview {
  position: relative;
  transform: perspective(1000px) rotateY(-15deg);
  transition: all 0.3s ease;
}

.poster-preview:hover {
  transform: perspective(1000px) rotateY(-5deg);
}

.preview-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 12, 118, 0.15);
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    padding: 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .navbar {
    padding: 1rem 2rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .auth-buttons {
    gap: 0.5rem;
  }

  .btn {
    padding: 0.5rem 1rem;
  }
}

.features {
  /* padding: 6rem 4rem; */
  background: white;
  margin-top: 70px;
}

.section-title {
  /* text-align: center; */
  font-size: 1.25rem;
  color: #000c76;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  background-color: #f9faff;
}

.feature-card {
  background: white;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px #000c7647;
}

.feature-icon {
  margin: 1rem;
  font-size: 2.5rem;
  margin-right: 2rem;
}

.feature-text {
  margin-top: 10px;
}

/* Медиа-запрос для адаптивности */
@media (max-width: 1024px) {
  .features {
    padding: 4rem 2rem;
  }
}
</style>
