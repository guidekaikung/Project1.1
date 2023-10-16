<template>
    <div class="register-container">
      <h1>Register</h1>
      <form @submit="register" class="register-form">
        <div class="input-container">
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required>
        </div>
        <div class="input-container">
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required>
        </div>
        <div class="input-container">
          <label for="confirm-password">Confirm Password:</label>
          <input v-model="confirmPassword" type="password" id="confirm-password" required>
        </div>
        <button type="submit" class="register-button">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      register() {
        // เพิ่มโค้ดสำหรับการลงทะเบียนผู้ใช้ที่นี่
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .input-container {
    margin: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .register-button {
    background-color: #28a745; /* เปลี่ยนสีพื้นหลังเพื่อให้เหมาะสำหรับหน้า Register */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  