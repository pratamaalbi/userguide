<template>
  <div class="min-h-screen flex flex-col bg-[#FAF8F5] font-sans text-neutral-900 antialiased selection:bg-amber-200 selection:text-neutral-900 relative">
    <Navbar />
    <main class="flex-1 w-full">
      <slot />
    </main>
    <Footer />
    <!-- Global Help Floating Widget (Tokopedia Care Style) -->
    <HelpFloatingWidget />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import HelpFloatingWidget from '~/components/common/HelpFloatingWidget.vue'
</script>
