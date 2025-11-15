<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,2\Č1,0.1),transparent_70%)]">
    <header class="fixed w-full backdrop-blur-xl bg-slate-900/70 border-b border-slate-800/40 shadow-lg shadow-black/20 z-1000">
      <nav class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center justify-between">
          <!----- LOGO ----->
          <div class="shrink-0">
            <RouterLink 
              to="/" 
              class="flex items-center gap-2 group"
            >
              <div class="w-8 h-8 flex items-center justify-center bg-linear-to-r from-primary via-accent to-success rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                <span class="text-xl font-bold text-white">D</span>
              </div>
              <span class="text-xl font-bold bg-linear-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                Dashboard
              </span>
            </RouterLink>
          </div>
          <!----- DESKTOP NAVIGATION ----->
          <div class="hidden md:flex items-center gap-4">
            <RouterLink 
              v-for="link in routerLinks"
              :key="link.name"
              :to="link.to" 
              class="rounded-lg text-gray-300 font-medium hover:text-white hover:bg-linear-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 px-4 py-2"
              active-class="!text-white !bg-linear-to-r !from-primary/20 !to-accent/20"
            >
              {{ link.name }}
            </RouterLink>
          </div>
          <!----- BTN GET STARTED ----->
          <button class="hidden md:flex text-white font-semibold bg-linear-to-r from-primary via-accent to-success rounded-lg px-3 py-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer">
            Get Started
          </button>
          <!----- BTN MOBILE ----->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!mobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!----- MOBILE MENU ----->
        <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-white/10 animate-slideDown pt-4 pb-4"
        >
          <div class="flex flex-col gap-2">
            <RouterLink 
              v-for="link in routerLinks"
              :key="link.name"
              :to="link.to" 
              class="block rounded-lg text-gray-300 hover:text-white hover:bg-linear-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 font-medium px-4 py-2"
              active-class="!text-white !bg-linear-to-r !from-primary/20 !to-accent/20"
              @click="mobileMenuOpen = false"
            >
              {{ link.name }}
            </RouterLink>
            <button class="bg-linear-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 mt-2 px-4 py-3">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
    <!----- MAIN ----->
    <main>
      <RouterView />
    </main>
    <!----- FOOTER ----->
    <footer class="border-t border-white/10 text-center text-gray-500 py-3">
      &copy; {{ currentYear }} Dashboard. All rights reserved.
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';

  const routerLinks = [
    { to: '/', name: 'Home' },
    { to: '/about', name: 'About' },
    { to: '/dashboard', name: 'Dashboard' },
  ];

  const mobileMenuOpen = ref(false);
  const currentYear = new Date().getFullYear();
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