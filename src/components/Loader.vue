<template>
  <div v-if="isLoading" class="fixed inset-0 bg-[#03071a] flex items-center justify-center z-50">
    <div class="relative">
      <div class="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      <div class="mt-4 text-indigo-400 text-center font-medium">Loading...</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref, onMounted} from 'vue';

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  });
</script>
