<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,2\Č1,0.1),transparent_70%)]">
    <header class="fixed w-full backdrop-blur-xl bg-slate-900/70 border-b border-slate-800/40 shadow-lg shadow-black/20 z-1000">
      <nav class="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center justify-between">
          <!----- LOGO ----->
          <div class="shrink-0">
            <RouterLink to="/" class="flex items-center gap-2 group">
              <div class="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-600 rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                <span class="text-xl font-bold text-white">D</span>
              </div>
              <span class="text-xl font-bold bg-linear-to-r from-indigo-500 via-purple-700 to-pink-500 bg-clip-text text-transparent">
                Dashboard
              </span>
            </RouterLink>
          </div>
          <!----- DESKTOP NAVIGATION ----->
          <div class="hidden md:flex items-center gap-4">
            <RouterLink 
              to="/" 
              class="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-linear-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all duration-300 font-medium"
              active-class="!text-white !bg-linear-to-r !from-indigo-500/20 !to-purple-500/20"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/dashboard"
              class="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-linear-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all duration-300 font-medium"
              active-class="!text-white !bg-linear-to-r !from-indigo-500/20 !to-purple-500/20"
            >
              DashBoard
            </RouterLink>
          </div>
          <!----- BTN GET STARTED ----->
          <button class="hidden md:flex text-white font-semibold bg-linear-to-r from-indigo-500 via-purple-700 to-pink-500 rounded-lg px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer">
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
          class="md:hidden pt-4 pb-4 border-t border-white/10 animate-slideDown"
        >
          <div class="flex flex-col gap-2">
            <RouterLink 
              to="/" 
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-lg text-gray-300 bg-white/3 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
              active-class="!text-white !bg-indigo-700"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/dashboard" 
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-lg text-gray-300 bg-white/3 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
              active-class="!text-white !bg-indigo-700"
            >
              Dashboard
            </RouterLink>
            <button class="mt-2 px-4 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="border-t border-white/10 text-center text-gray-500 py-3">
      &copy; {{ currentYear }} Dashboard. All rights reserved.
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from 'vue';
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
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideDown {
    animation: slideDown 0.3s ease-out;
  }
</style>