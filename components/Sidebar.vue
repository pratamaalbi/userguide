<template>
  <aside :class="['fixed md:relative top-0 left-0 h-full w-72 bg-poolapack-light border-r border-gray-200 shadow-sm transition-transform duration-300 z-40 overflow-y-auto pt-[4.5rem] md:pt-6 pb-10 flex flex-col', isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0']">
    <div class="flex items-center justify-between px-6 mb-6">
      <h2 class="text-xs font-bold tracking-wider text-gray-400 uppercase">Topik Panduan</h2>
      <button class="p-1 text-gray-500 rounded-md md:hidden hover:bg-gray-200 focus:outline-none" @click="$emit('toggle-sidebar')">
        <XIcon :size="20" />
      </button>
    </div>

    <div class="flex flex-col flex-1 gap-1">
      <NuxtLink to="/" :class="getNavLinkClass($route.path === '/')">
        <HomeIcon :size="18" />
        <span>Beranda</span>
      </NuxtLink>

      <div class="mt-2">
        <div 
          class="flex items-center gap-3 px-6 py-3 font-medium text-gray-700 transition-colors border-l-4 border-transparent cursor-pointer hover:bg-gray-100" 
          @click="toggleGroup('pooler')"
        >
          <UsersIcon :size="18" :class="expanded.pooler ? 'text-poolapack-primary' : 'text-gray-400'" />
          <span class="flex-1">Pooler Guide</span>
          <ChevronDownIcon v-if="expanded.pooler" :size="16" />
          <ChevronRightIcon v-else :size="16" />
        </div>
        <div v-if="expanded.pooler" class="flex flex-col pl-10 pr-2 mt-1 space-y-1">
          <NuxtLink to="/pooler/register" :class="getSubNavLinkClass($route.path === '/pooler/register')">Registrasi & Login</NuxtLink>
          <NuxtLink to="/pooler/shopping" :class="getSubNavLinkClass($route.path === '/pooler/shopping')">Cara Belanja</NuxtLink>
          <NuxtLink to="/pooler/orders" :class="getSubNavLinkClass($route.path === '/pooler/orders')">Manajemen Pesanan</NuxtLink>
          <NuxtLink to="/pooler/rfq" :class="getSubNavLinkClass($route.path === '/pooler/rfq')">Pengajuan RFQ</NuxtLink>
          <NuxtLink to="/pooler/points" :class="getSubNavLinkClass($route.path === '/pooler/points')">PoolPoint, Pay & Coin</NuxtLink>
          <NuxtLink to="/pooler/account" :class="getSubNavLinkClass($route.path === '/pooler/account')">Pengaturan Akun</NuxtLink>
        </div>
      </div>

      <div class="mt-2">
        <div 
          class="flex items-center gap-3 px-6 py-3 font-medium text-gray-700 transition-colors border-l-4 border-transparent cursor-pointer hover:bg-gray-100" 
          @click="toggleGroup('packer')"
        >
          <PackageIcon :size="18" :class="expanded.packer ? 'text-poolapack-primary' : 'text-gray-400'" />
          <span class="flex-1">Packer Guide</span>
          <ChevronDownIcon v-if="expanded.packer" :size="16" />
          <ChevronRightIcon v-else :size="16" />
        </div>
        <div v-if="expanded.packer" class="flex flex-col pl-10 pr-2 mt-1 space-y-1">
          <NuxtLink to="/packer/setup" :class="getSubNavLinkClass($route.path === '/packer/setup')">Daftar & Setup</NuxtLink>
          <NuxtLink to="/packer/products" :class="getSubNavLinkClass($route.path === '/packer/products')">Manajemen Produk</NuxtLink>
          <NuxtLink to="/packer/orders" :class="getSubNavLinkClass($route.path === '/packer/orders')">Pesanan</NuxtLink>
          <NuxtLink to="/packer/dashboard" :class="getSubNavLinkClass($route.path === '/packer/dashboard')">Dashboard & Analitik</NuxtLink>
        </div>
      </div>

      <div class="mt-4">
        <NuxtLink to="/faq" :class="getNavLinkClass($route.path === '/faq')">
          <HelpCircleIcon :size="18" />
          <span>FAQ & Support</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronDown as ChevronDownIcon, ChevronRight as ChevronRightIcon, X as XIcon, Home as HomeIcon, Users as UsersIcon, Package as PackageIcon, HelpCircle as HelpCircleIcon } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar'])

const route = useRoute()

const expanded = ref({
  pooler: true,
  packer: false
})

const toggleGroup = (group) => {
  expanded.value[group] = !expanded.value[group]
}

const navLinkBase = "flex items-center gap-3 px-6 py-3 font-medium transition-colors border-l-4"
const getNavLinkClass = (isActive) => 
  `${navLinkBase} ${isActive ? 'bg-amber-50 text-poolapack-hover border-poolapack-primary' : 'border-transparent text-gray-600 hover:bg-gray-100'}`

const subNavLinkBase = "block py-2 pl-4 text-sm transition-colors border-l-2"
const getSubNavLinkClass = (isActive) =>
  `${subNavLinkBase} ${isActive ? 'text-poolapack-hover border-poolapack-primary font-semibold bg-amber-50/50' : 'text-gray-500 border-gray-200 hover:text-poolapack-primary hover:border-poolapack-primary/50'}`
</script>
