<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section logo-section">
          <img src="" alt="Logo" class="footer-logo" />
          <p>Get updated with latest design tips, tricks, insights and resources, hot off regal designers.</p>
        </div>
  
        <div class="footer-section">
          <h4>Home</h4>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
  
        <div class="footer-section">
          <h4>Blog</h4>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
  
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li>+234 801 234 5678</li>
            <li>Gmail</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
  
        <div class="footer-section subscribe-section">
          <h4>Stay up to date</h4>
          <p>Subscribe to our newsletter</p>
          <form @submit.prevent="subscribe">
            <input type="email" placeholder="Enter Email" v-model="email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ""
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          alert(`Subscribed with email: ${this.email}`);
          this.email = "";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f27f33;
    padding: 40px 20px;
    color: white;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    margin: 0 20px;
  }
  
  .logo-section {
    max-width: 300px;
  }
  
  .footer-logo {
    width: 50px;
    margin-bottom: 10px;
  }
  
  .footer-section h4 {
    margin-bottom: 15px;
    font-weight: bold;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .subscribe-section form {
    display: flex;
    align-items: center;
  }
  
  .subscribe-section input {
    padding: 10px;
    border: none;
    border-radius: 30px 0 0 30px;
    outline: none;
    width: 200px;
  }
  
  .subscribe-section button {
    padding: 10px 20px;
    background-color: white;
    color: #f27f33;
    border: none;
    border-radius: 0 30px 30px 0;
    cursor: pointer;
  }
  
  .subscribe-section button:hover {
    background-color: #ffe2cc;
  }
  </style>
  