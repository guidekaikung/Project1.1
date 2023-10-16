<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit="login" class="login-form">
      <div class="input-container">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required>
      </div>
      <div class="input-container">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required>
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <!-- เพิ่มปุ่ม Register และลิงค์ไปยังหน้า Register -->
    <div class="register-link">
      <p>Don't have an account? <router-link to="/register">Register</router-link></p>
    </div>
  </div>
</template>
<!-- สร้าง route สำหรับหน้า Register ในส่วน script -->
<script>
export default {
  methods: {
    login() {
      // เพิ่มโค้ดสำหรับการเข้าสู่ระบบที่นี่
    },
  },
};
</script>
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .login-form {
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
  
  .login-button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>