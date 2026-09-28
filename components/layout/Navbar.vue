<template>
  <header class="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
      <!-- Left: Official Poolapack Care Logo -->
      <NuxtLink to="/" class="flex items-center shrink-0" aria-label="Poolapack Care">
        <img
          src="/icons/logo-care.svg"
          alt="Poolapack Care"
          class="h-7 sm:h-8 w-auto object-contain"
        />
      </NuxtLink>

      <!-- Center: Search Bar with Live Autocomplete (Desktop) -->
      <div v-if="!isHome" class="flex-1 max-w-xl hidden md:block relative" v-click-outside="closeDropdown">
        <form @submit.prevent="handleSearch" class="relative w-full">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Icon icon="ph:magnifying-glass-bold" class="h-4 w-4 text-neutral-400" />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            @focus="showDropdown = true"
            class="block w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg bg-white text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F8C031] focus:border-transparent shadow-sm"
            placeholder="Cari topik bantuan atau artikel..."
          />
        </form>

        <!-- Navbar Autocomplete Dropdown -->
        <div
          v-if="showDropdown && searchQuery && filteredSuggestions.length > 0"
          class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-neutral-100 divide-y divide-neutral-50"
        >
          <ul class="py-1 text-xs sm:text-sm text-neutral-700">
            <li v-for="item in filteredSuggestions" :key="item.id">
              <button
                @click="selectArticle(item.slug)"
                class="w-full text-left px-4 py-2.5 hover:bg-neutral-50 flex items-center justify-between gap-3"
              >
                <div class="flex items-center gap-2 truncate">
                  <Icon icon="ph:file-text-bold" class="w-4 h-4 text-neutral-400 shrink-0" />
                  <span class="truncate font-medium text-neutral-800" v-html="highlightMatch(item.title)"></span>
                </div>
                <span v-if="item.categoryTitle" class="text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-md shrink-0">
                  {{ item.categoryTitle }}
                </span>
              </button>
            </li>
            <li>
              <button
                @click="handleSearch"
                class="w-full text-left px-4 py-2.5 font-bold text-xs text-amber-700 hover:bg-neutral-50 flex items-center justify-between"
              >
                <span>Lihat semua hasil untuk "{{ searchQuery }}"</span>
                <Icon icon="ph:arrow-right-bold" class="w-3.5 h-3.5" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Search Toggle -->
      <button
        v-if="!isHome"
        type="button"
        @click="isMobileSearchOpen = !isMobileSearchOpen"
        class="md:hidden w-9 h-9 rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 flex items-center justify-center shrink-0"
        :aria-expanded="isMobileSearchOpen"
        aria-label="Buka pencarian"
      >
        <Icon :icon="isMobileSearchOpen ? 'ph:x-bold' : 'ph:magnifying-glass-bold'" class="w-4 h-4" />
      </button>

      <!-- Right: Back To Marketplace Button (Poolapack style: rounded-lg) -->
      <a
        href="https://liva.poolapack.id/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka Marketplace Poolapack"
        class="shrink-0 inline-flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-amber-200/90 text-amber-900 text-xs sm:text-sm font-semibold"
      >
        <Icon icon="ph:arrow-left-bold" class="w-3.5 h-3.5 text-amber-800" />
        <span class="hidden sm:inline tracking-tight">Ke Marketplace</span>
      </a>
    </div>

    <!-- Mobile Search Bar -->
    <div
      v-if="!isHome && isMobileSearchOpen"
      class="md:hidden border-t border-neutral-100 bg-white px-4 py-3 sm:px-6"
    >
      <div class="relative" v-click-outside="closeMobileSearchDropdown">
        <form @submit.prevent="handleSearch" class="relative">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Icon icon="ph:magnifying-glass-bold" class="h-4 w-4 text-neutral-400" />
          </div>
          <input
            v-model="searchQuery"
            ref="mobileSearchInput"
            type="search"
            autocomplete="off"
            @focus="showDropdown = true"
            class="block w-full pl-10 pr-20 py-2.5 border border-amber-200 rounded-lg bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F8C031] focus:border-transparent shadow-sm"
            placeholder="Cari topik bantuan atau artikel..."
            aria-label="Cari topik bantuan atau artikel"
          />
          <button
            type="submit"
            class="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-[#F8C031] hover:bg-[#F5B400] text-neutral-900 text-xs font-bold"
          >
            Cari
          </button>
        </form>

        <!-- Mobile Autocomplete Dropdown -->
        <div
          v-if="showDropdown && searchQuery && filteredSuggestions.length > 0"
          class="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-neutral-200 divide-y divide-neutral-100 max-h-[300px] overflow-y-auto"
        >
          <ul class="py-1 text-xs text-neutral-700">
            <li v-for="item in filteredSuggestions" :key="`mobile-${item.id}`">
              <button
                @click="selectArticle(item.slug)"
                class="w-full text-left px-4 py-2.5 hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none flex items-center justify-between gap-3"
              >
                <div class="flex items-center gap-2.5 truncate">
                  <Icon icon="ph:file-text-bold" class="w-4 h-4 text-neutral-400 shrink-0" />
                  <span class="truncate font-medium text-neutral-800" v-html="highlightMatch(item.title)"></span>
                </div>
                <span v-if="item.categoryTitle" class="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md shrink-0">
                  {{ item.categoryTitle }}
                </span>
              </button>
            </li>
            <li>
              <button
                @click="handleSearch"
                class="w-full text-left px-4 py-2.5 font-bold text-xs text-amber-700 hover:bg-neutral-50 border-t border-neutral-100 flex items-center justify-between"
              >
                <span>Lihat semua hasil</span>
                <Icon icon="ph:arrow-right-bold" class="w-3.5 h-3.5" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import { searchArticles } from '~/data/content'

const route = useRoute()
const router = useRouter()

const isHome = computed(() => route.path === '/')
const searchQuery = ref((route.query.q as string) || '')
const showDropdown = ref(false)
const isMobileSearchOpen = ref(false)
const mobileSearchInput = ref<HTMLInputElement | null>(null)

// Sync search query with URL when it changes externally
watch(() => route.query.q, (newQ) => {
  if (newQ) searchQuery.value = newQ as string
})

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    isMobileSearchOpen.value = false
    showDropdown.value = false
  }
})

// Autocomplete suggestions
const filteredSuggestions = computed(() => {
  if (!searchQuery.value || !searchQuery.value.trim()) return []
  return searchArticles(searchQuery.value).slice(0, 5)
})

const closeDropdown = () => {
  showDropdown.value = false
}

const closeMobileSearchDropdown = () => {
  showDropdown.value = false
}

watch(isMobileSearchOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    mobileSearchInput.value?.focus()
  }
})

const selectArticle = (slug: string) => {
  showDropdown.value = false
  isMobileSearchOpen.value = false
  router.push(`/article/${slug}`)
}

const handleSearch = () => {
  showDropdown.value = false
  isMobileSearchOpen.value = false
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
  }
}

const highlightMatch = (text: string) => {
  if (!searchQuery.value || !searchQuery.value.trim()) return text
  const tokens = searchQuery.value.trim().split(/\s+/).filter(t => t.length > 1)
  if (tokens.length === 0) return text
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${escaped})`, 'gi')
  return text.replace(regex, '<span class="text-amber-600 font-bold">$1</span>')
}

// Click outside directive
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>
