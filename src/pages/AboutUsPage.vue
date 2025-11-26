<template>
  <div class="relative min-h-screen flex justify-center items-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
    <!-- AMBIENT BG EFFECTS -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <!-- ABOUT US SECTION -->
    <section class="relative max-w-[1300px] px-[5%] lg:px-0 mt-22 lg:mt-10 mb-10">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- LEFT SIDE: TEXT CONTENT -->
        <div class="space-y-3">
          <div class="inline-block bg-white/5 rounded-full border border-white/10 backdrop-blur-2xl mb-4 px-4 py-2">
            <span class="text-sm text-gray-300">About Us</span>
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="bg-linear-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              About Our Company
            </span>
          </h1> 
          <div class="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              We are a team of professionals passionate about data and technology. Our mission is to provide the best analytical tools that help companies grow and achieve their goals.
            </p>
            <p>
              With years of experience in the industry, we create solutions that combine the power of data with intuitive design. We believe that good data should be accessible to everyone.
            </p>
          </div>
        </div>
        <!-- RIGHT SIDE: IMAGE PLACEHOLDER -->
        <div class="relative">
          <div class="max-h-[440px] object-cover relative bg-linear-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden">
            <img :src="img" alt="About Us Image"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import img from '../../public/dashboard.avif';
</script>
