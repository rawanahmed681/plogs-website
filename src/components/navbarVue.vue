<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <img src="" alt="Logo" />
          <span>LOGO</span>
        </div>
        <ul class="navbar-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog" class="active">Blog</router-link></li>
          <li><router-link to="/support">Support</router-link></li>
        </ul>
        <div class="navbar-auth">
          <router-link to="/login" class="login-btn">Login</router-link>
          <router-link to="/register" class="register-btn">Register</router-link>
          <button class="navbar-btn">Get started</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .navbar-logo {
    display: flex;
    align-items: center;
  }
  
  .navbar-logo img {
    width: 40px;
    margin-right: 10px;
  }
  
  .navbar-logo span {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  
  .navbar-links {
    display: flex;
    list-style: none;
  }
  
  .navbar-links li {
    margin-left: 20px;
  }
  
  .navbar-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .navbar-links a.active {
    color: #f27f33;
  }
  
  .navbar-links a:hover {
    color: #f27f33;
  }
  
  .navbar-auth {
    display: flex;
    align-items: center;
  }
  
  .login-btn, .register-btn {
    margin-right: 15px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .login-btn:hover, .register-btn:hover {
    color: #f27f33;
  }
  
  .navbar-btn {
    background-color: #f27f33;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .navbar-btn:hover {
    background-color: #ff9f5c;
  }
  </style>
  