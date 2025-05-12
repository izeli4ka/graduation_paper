<template>
    <div class="registration-container">
        <div class="registration-form">
            <h1 class="form-title">Регистрация</h1>

            <div class="input-field">
                <label for="firstName">Имя</label>
                <input type="text" id="firstName" v-model="form.firstName" placeholder="Иван" class="form-control" />
            </div>
            <div class="input-field">
                <label for="email">Почта</label>
                <input type="email" id="email" v-model="form.email" placeholder="ivanov.ivan@mail.ru"
                    class="form-control" />
            </div>
            <div class="input-field">
                <label for="password">Пароль</label>
                <div class="password-input-container">
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="form.password"
                        placeholder="Пароль" class="form-control" />
                    <span @click="togglePassword" class="password-toggle">
                        <i :class="showPassword ? 'eye-closed' : 'eye-open'"></i>
                    </span>
                </div>
                <small class="password-requirements">
                    Пароль должен содержать минимум 8 букв, цифр и знаков.
                </small>
            </div>
            <button @click="handleSubmit" class="submit-button">Зарегистрироваться</button>
            <div class="login-link">
                <router-link to="/login" class="login">Вы уже зарегистрированы? Вход</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const showPassword = ref(false);

const form = reactive({
    firstName: '',
    email: '',
    password: ''
});

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!form.firstName) {
        alert('Пожалуйста введите свое имя');
        return;
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
        alert('Пожалуйста введите корректную почту');
        return;
    }
    if (!passwordRegex.test(form.password)) {
        alert('Пароль должен содержать минимум 8 букв, цифр и знаков');
        return;
    }
    // Submit form data
    console.log('Form submitted:', form);
    // Implement API call here
};
</script>

<style scoped>
:root {
    --blue-color: #560083;
}

.registration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.registration-form {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.form-title {
    text-align: center;
    margin-bottom: 25px;
    font-size: 24px;
    color: #333;
}

.form-row {
    display: flex;
    gap: 15px;
}

.input-field {
    margin-bottom: 15px;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #555;
}

.form-control {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f9f9f9;
}

.password-input-container {
    position: relative;
}

.password-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #777;
}

.eye-open::before {
    content: "👁";
}

.eye-closed::before {
    content: "👁‍🗨";
}

.password-requirements {
    display: block;
    font-size: 12px;
    color: #777;
    margin-top: 5px;
}

.submit-button {
    width: 100%;
    padding: 12px;
    background-color: var(--blue-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.login-link {
    text-align: center;
}

.login-link a {
    color: var(--blue-color);
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>
