<template>
    <div class="auth-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        console.log("Logged in with", this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  .form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  button {
    background-color: #f27f33;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ff9f5c;
  }
  </style>
  