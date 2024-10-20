
<!-- src/App.vue -->
<template>
  <div id="app">
    <NavbarVue ></NavbarVue>

    <main>
      <router-view />
    </main>

    <FooterVue></FooterVue>
  </div>
</template>

<script>
import FooterVue from './components/footerVue.vue';
import NavbarVue from './components/navbarVue.vue';

export default {
  components: {
   NavbarVue,
   FooterVue
  },

 
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}

header, footer {
  background-color: #f8f9fa;
  padding: 10px;
}
</style>
>>>>>>> 0f10917 (pushing blog compunents)
