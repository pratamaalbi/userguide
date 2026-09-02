<template>
  <div class="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
    <Navbar @toggle-sidebar="toggleSidebar" />
    
    <div class="flex flex-1 overflow-hidden relative">
      <Sidebar :is-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
      
      <main 
        class="flex-1 p-6 md:p-10 overflow-y-auto max-w-5xl mx-auto w-full" 
        @click="sidebarOpen && toggleSidebar()"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(false)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
