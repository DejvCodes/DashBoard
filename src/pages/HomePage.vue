<template>
  <div class="relative min-h-lvh bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
    <!----- AMBIENT BG EFFECTS ----->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
    <!----- FLOATING OBJECTS ----->
    <div class="floating-object floating-object-1">
      <div class="w-20 h-20 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl backdrop-blur-xl border border-white/10 rotate-45"></div>
    </div>
    <div class="floating-object floating-object-2">
      <div class="w-16 h-16 bg-linear-to-br from-accent/30 to-success/30 rounded-full backdrop-blur-xl border border-white/10"></div>
    </div>
    <div class="floating-object floating-object-3">
      <div class="w-24 h-24 bg-linear-to-br from-secondary/30 to-primary/30 rounded-3xl backdrop-blur-xl border border-white/10 rotate-12"></div>
    </div>
    <div class="floating-object floating-object-4">
      <div class="w-14 h-14 bg-linear-to-br from-success/30 to-accent/30 rounded-xl backdrop-blur-xl border border-white/10 rotate-30"></div>
    </div>
    <div class="floating-object floating-object-5">
      <div class="w-18 h-18 bg-linear-to-br from-primary/30 to-accent/30 rounded-2xl backdrop-blur-xl border border-white/10 rotate-60"></div>
    </div>
    <!----- HERO SECTION ----->
    <section class="relative max-w-[1400px] px-[5%] py-16 md:py-20 mx-auto mt-6 md:mt-20 2xl:mt-42">
      <div class="max-w-[900px] text-center mx-auto">
        <div class="inline-block bg-white/5 rounded-full border border-white/10 backdrop-blur-2xl mb-4 md:mb-8 px-4 py-2">
          <span class="text-sm text-gray-300">Next-generation analytics platform</span>
        </div>
        <!----- MAIN TITLE ----->
        <h1 class="text-[55px] md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
          <span class="bg-linear-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Elevate Your
          </span>
          <br>
          <span class="bg-linear-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
            Data Experience
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-[700px] mx-auto mb-6">
          Transform raw data into actionable insights with our premium analytics dashboard designed for modern teams
        </p>
        <div class="flex gap-4 flex-wrap justify-center items-center">
          <RouterLink 
            to="/dashboard" 
            class="w-48 group bg-linear-to-br from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 px-8 py-3"
          >
            Get Started
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </RouterLink>
          <button class="w-48 bg-white/5 text-white rounded-full font-semibold text-lg backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-3">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
    <!----- FEATURES SECTION ----->
    <section id="features" class="relative py-12 md:py-32 px-[5%] overflow-hidden z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Premium Features
          </span>
        </h2>
        <p class="text-xl text-gray-400 max-w-[600px] mx-auto">
          Everything you need to make data-driven decisions with confidence
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="oneFeature in premiumFeatures"
          :key="oneFeature.title"
          class="group bg-linear-to-br from-white/10 to-white/2 rounded-3xl border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] p-4 md:p-8"
        >
          <div :class="`w-12 h-12 md:w-14 md:h-14 bg-linear-to-br ${oneFeature.color} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 md:mb-6`">
            <span class="text-2xl">
              {{ oneFeature.icon }}
            </span>
          </div>
          <h3 class="text-2xl font-bold text-white mb-1 md:mb-3">
            {{ oneFeature.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ oneFeature.description }}
          </p>
        </div>
      </div>
    </section>
    <!----- START SECTION ----->
    <section class="relative py-12 md:py-32 px-[5%] z-10">
      <div class="max-w-[1200px] text-center mx-auto">
        <div class="relative bg-linear-to-br from-white/10 to-white/5 rounded-3xl md:rounded-[3rem] border border-white/20 backdrop-blur-xl overflow-hidden p-6 md:p-16">
          <div class="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20"></div>
          <div class="relative">
            <h2 class="text-3xl md:text-6xl font-bold mb-4 md:mb-6">
              <span class="bg-linear-to-br from-white to-gray-300 bg-clip-text text-transparent">
                Ready to transform your workflow?
              </span>
            </h2>
            <p class="text-xl text-gray-400 max-w-[600px] mx-auto mb-8 md:mb-10">
              Join thousands of teams already using our platform to drive better decisions
            </p>
            <RouterLink 
              to="/dashboard" 
              class="inline-flex items-center text-xl bg-linear-to-br from-primary to-secondary text-white rounded-full font-semibold shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:shadow-[0_0_70px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300 gap-2 px-8 md:px-10 py-3 md:py-5"
            >
              Start Free Trial
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  interface PremiumFeatures {
    color: string;
    icon: string;
    title: string;
    description: string;
  }

  const premiumFeatures: PremiumFeatures[] = [
    {
      color: "from-primary to-secondary",
      icon: "⚡",
      title: "Real-time Analytics",
      description: "Monitor your metrics instantly with live data synchronization and updates."
    },
    {
      color: "from-accent to-secondary",
      icon: "🔒",
      title: "Bank-level Security",
      description: "Enterprise-grade encryption and security protocols to protect your data."
    },
    {
      color: "from-secondary to-primary",
      icon: "🎨",
      title: "Customizable Views",
      description: "Personalize your dashboard with drag-and-drop widgets and layouts."
    },
    {
      color: "from-primary to-accent",
      icon: "📱",
      title: "Multi-platform",
      description: "Seamless experience across desktop, tablet, and mobile devices."
    },
    {
      color: "from-success to-secondary",
      icon: "🤖",
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions from machine learning."
    },
    {
      color: "from-secondary to-accent",
      icon: "🔗",
      title: "Smart Integrations",
      description: "Connect with your favorite tools and services effortlessly."
    }
  ]
</script>

<style scoped>
  .floating-object {
    position: absolute;
    pointer-events: none;
    opacity: 0.6;
    z-index: 1;
  }
  .floating-object-1 {
    top: 15%;
    left: 10%;
    animation: floatAround 25s ease-in-out infinite;
  }
  .floating-object-2 {
    top: 25%;
    right: 15%;
    animation: floatAround 20s ease-in-out infinite reverse;
  }
  .floating-object-3 {
    top: 60%;
    left: 8%;
    animation: floatAround 30s ease-in-out infinite 5s;
  }
  .floating-object-4 {
    top: 70%;
    right: 12%;
    animation: floatAround 22s ease-in-out infinite 3s reverse;
  }
  .floating-object-5 {
    top: 45%;
    left: 50%;
    animation: floatAround 28s ease-in-out infinite;
  }
  @keyframes floatAround {
    0% {transform: translate(0, 0) rotate(0deg);}
    25% {transform: translate(100px, -100px) rotate(90deg);}
    50% {transform: translate(200px, 0) rotate(180deg);}
    75% {transform: translate(100px, 100px) rotate(270deg);}
    100% {transform: translate(0, 0) rotate(360deg);}
  }
</style>