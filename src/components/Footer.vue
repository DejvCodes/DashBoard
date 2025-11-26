<template>
  <footer class="border-t border-white/10 text-center text-gray-500 py-3">
    &copy; {{ currentYear }} Dashboard. All rights reserved.
  </footer>
</template>

<script lang="ts" setup>
  const currentYear = new Date().getFullYear();
</script>