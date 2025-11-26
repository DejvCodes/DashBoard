<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]">
    <!----- LOADER ----->
    <Loader />
    <!----- HEADER ----->
    <Header />
    <!----- MAIN ----->
    <main>
      <RouterView />
    </main>
    <!----- FOOTER ----->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Loader from './components/Loader.vue';
</script>

<style>
  html {
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: #03071a;
  }
  @keyframes slideDown {
    from {opacity: 0;transform: translateY(-10px);}
    to {opacity: 1; transform: translateY(0);}
  }
  .animate-slideDown {
    animation: slideDown 0.3s ease-out;
  }
</style>