<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/polytech_logo.png" alt="Московский Политех" />
    </div>
    
    <div class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <nav class="nav-menu" :class="{ 'active': menuOpen }">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/about" class="nav-link">О сервисе</router-link>
      <router-link to="/templates" class="nav-link">Шаблоны</router-link>
      <!-- <router-link to="/create" class="nav-link">Создать</router-link> -->
    </nav>
    
    <div class="auth-buttons" :class="{ 'active': menuOpen }">
      <button class="register-btn">Регистрация</button>
      <button class="login-btn">Вход</button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue-color);
  padding: 10px 80px;
  color: white;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  height: 40px;
  z-index: 20;
}

.logo img {
  height: 100%;
  width: auto;
}

.nav-menu {
  display: flex;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 16px;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.8;
}

.auth-buttons {
  display: flex;
}

.auth-buttons button {
  margin-left: 15px;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.login-btn {
  background-color: white;
  border: none;
  color: var(--blue-color);
}

.login-btn:hover {
  background-color: #f0f0f0;
}

.register-btn {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.register-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 20;
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s;
}

/* Tablet Styles */
@media (max-width: 1024px) {
  .header {
    padding: 15px 40px;
  }
  
  .nav-link {
    margin: 0 15px;
    font-size: 15px;
  }
  
  .auth-buttons button {
    padding: 7px 15px;
    font-size: 15px;
  }
}

/* Small Tablet Styles */
@media (max-width: 900px) {
  .header {
    padding: 15px 20px;
  }
  
  .nav-link {
    margin: 0 10px;
    font-size: 14px;
  }
}

/* Mobile Styles */
@media (max-width: 767px) {
  .header {
    padding: 15px 20px;
    flex-wrap: wrap;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--blue-color);
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    transition: all 0.5s ease;
    z-index: 10;
    padding: 150px 0 0 0;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    margin: 15px 0;
    font-size: 18px;
  }
  
  .auth-buttons {
    position: fixed;
    /* bottom: 50px; */
    right: -100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
    z-index: 10;
    top: 330px;
  }
  
  .auth-buttons.active {
    right: 0;
  }
  
  .auth-buttons button {
    margin: 10px 0;
    width: 80%;
    padding: 10px 20px;
    font-size: 16px;
  }
  
  /* Hamburger animation */
  .menu-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}

/* Small Mobile Styles */
@media (max-width: 480px) {
  .logo {
    height: 30px;
  }
  
  .nav-menu {
    width: 80%;
  }
  
  .auth-buttons {
    width: 80%;
    right: -100%;
  }
  
  /* .auth-buttons.active {
    right: 10%;
  } */
  
  .auth-buttons button {
    width: 90%;
  }
}

/* Very Small Devices */
@media (max-width: 320px) {
  .header {
    padding: 10px 15px;
  }
  
  .logo {
    height: 25px;
  }
  
  .nav-menu {
    width: 100%;
  }
  
  .auth-buttons {
    width: 100%;
  }
  
  .auth-buttons.active {
    right: 0;
  }
}
</style>
