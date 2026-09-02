<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 shadow-sm backdrop-blur-md bg-opacity-90">
    <div class="flex items-center gap-4">
      <button 
        class="p-2 text-gray-500 transition-colors rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" 
        @click="$emit('toggle-sidebar')"
      >
        <MenuIcon :size="24" />
      </button>
      
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <span class="text-2xl font-extrabold tracking-tight text-poolapack-primary group-hover:text-poolapack-hover transition-colors">
          Poolapack
        </span>
        <div class="h-6 w-[2px] bg-gray-200 mx-2"></div>
        <span class="text-lg font-medium text-gray-500">
          User Guide
        </span>
      </NuxtLink>
    </div>
    
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4 text-gray-400">
        <SearchIcon :size="20" class="transition-colors cursor-pointer hover:text-poolapack-primary" />
        <BellIcon :size="20" class="transition-colors cursor-pointer hover:text-poolapack-primary" />
        <HelpCircleIcon :size="20" class="transition-colors cursor-pointer hover:text-poolapack-primary" />
      </div>
      
      <a 
        href="https://liva.poolapack.id" 
        target="_blank" 
        rel="noreferrer"
        class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all rounded-full bg-poolapack-primary hover:bg-poolapack-hover hover:shadow-md hover:-translate-y-0.5"
      >
        Ke Marketplace <ExternalLinkIcon :size="16" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import { Menu as MenuIcon, Search as SearchIcon, Bell as BellIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])
</script>
