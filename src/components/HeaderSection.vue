<template>
  <header class="header">
    <div class="logo">
      <img
        src="../assets/polytech_logo.png"
        alt="Московский Политех"
      />
    </div>
    <nav class="nav-menu">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/about" class="nav-link">О сервисе</router-link>
      <router-link to="/templates" class="nav-link">Шаблоны</router-link>
      <router-link to="/create" class="nav-link">Создать</router-link>
    </nav>
    <div class="auth-buttons">
      <button class="login-btn">Log In</button>
      <button class="try-now-btn">Try now</button>
    </div>
  </header>
</template>

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
}

.logo {
  display: flex;
  align-items: center;
  height: 20px;
}

.nav-menu {
  display: flex;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 16px;
}

.auth-buttons {
  display: flex;
}

.auth-buttons button {
  margin-left: 15px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.login-btn {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.try-now-btn {
  background-color: white;
  border: none;
  color: #333;
}

@media (max-width: 1024px) {
  .header {
    padding: 15px 20px;
  }
}
</style>