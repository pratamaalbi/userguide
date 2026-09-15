<template>
  <div class="min-h-screen bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm mb-8 text-neutral-500" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-amber-600 transition-colors flex items-center gap-1.5 font-medium">
          <Icon icon="ph:house-bold" class="w-4 h-4" />
          <span>Home</span>
        </NuxtLink>
        <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300" />
        <span class="text-neutral-900 font-semibold">{{ category?.title }}</span>
      </nav>

      <!-- Category Header Card -->
      <div class="bg-white rounded-lg p-6 sm:p-10 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-neutral-200/80">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-amber-50 flex items-center justify-center text-neutral-900 shrink-0 border border-amber-200/70 shadow-sm">
            <ShieldFillIcon v-if="category?.slug === 'akun-keamanan' || category?.slug === 'akun-dan-keamanan'" class="w-9 h-9 sm:w-11 sm:h-11 text-neutral-900" />
            <Icon v-else :icon="getCategoryIcon(category?.slug)" class="w-9 h-9 sm:w-11 sm:h-11 text-neutral-900" />
          </div>
          <div class="flex-1">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F2E2C] tracking-tight mb-2">
              {{ category?.title }}
            </h1>
            <p class="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
              {{ category?.description }}
            </p>
            <div class="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-md border border-neutral-200/80">
              <Icon icon="ph:file-text-bold" class="w-4 h-4 text-amber-500" />
              <span>{{ categoryArticles.length }} Total Artikel Tersedia</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub Categories & Filter Controls -->
      <div v-if="category?.subCategories && category.subCategories.length > 0" class="mb-10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 class="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              Pilih Sub-Kategori
            </h2>
            <p class="text-xs sm:text-sm text-neutral-500 mt-1">
              Klik sub-kategori untuk menyaring artikel yang sesuai kebutuhan Anda
            </p>
          </div>

          <!-- Reset Filter button if active -->
          <button
            v-if="selectedSubCategory !== 'all' || searchFilter"
            @click="resetFilters"
            class="text-xs font-bold text-amber-600 hover:text-amber-700 underline self-start sm:self-auto"
          >
            Reset Filter (Lihat Semua)
          </button>
        </div>

        <!-- Subcategory Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <!-- "Semua Topik" Card -->
          <button
            @click="selectedSubCategory = 'all'"
            class="text-left bg-white rounded-lg p-5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-200 border cursor-pointer group"
            :class="selectedSubCategory === 'all' ? 'border-[#F8C031] ring-2 ring-[#F8C031]/30 bg-amber-50/20' : 'border-neutral-100 hover:border-amber-200 '"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                Semua Topik
              </h3>
              <span
                class="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                :class="selectedSubCategory === 'all' ? 'bg-[#F8C031] text-neutral-900 font-bold' : 'text-neutral-300'"
              >
                <Icon icon="ph:check-bold" class="w-3.5 h-3.5" />
              </span>
            </div>
            <p class="text-xs text-neutral-500 mt-2">
              {{ categoryArticles.length }} artikel
            </p>
          </button>

          <!-- Dynamic Subcategory Cards -->
          <button
            v-for="subCat in category.subCategories"
            :key="subCat.id"
            @click="selectedSubCategory = subCat.id"
            class="text-left bg-white rounded-lg p-5 shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-200 border cursor-pointer group"
            :class="selectedSubCategory === subCat.id ? 'border-[#F8C031] ring-2 ring-[#F8C031]/30 bg-amber-50/20' : 'border-neutral-100 hover:border-amber-200 '"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                {{ subCat.name }}
              </h3>
              <span
                class="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                :class="selectedSubCategory === subCat.id ? 'bg-[#F8C031] text-neutral-900 font-bold' : 'text-neutral-300'"
              >
                <Icon icon="ph:check-bold" class="w-3.5 h-3.5" />
              </span>
            </div>
            <p class="text-xs text-neutral-500 mt-2">
              {{ subCat.articleCount }} artikel
            </p>
          </button>
        </div>
      </div>

      <!-- In-Category Search & Filter Bar -->
      <div class="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="flex items-center gap-2">
          <h2 class="text-xl sm:text-2xl font-bold text-neutral-900">
            Daftar Artikel
          </h2>
          <span class="text-xs font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
            {{ filteredArticles.length }}
          </span>
        </div>

        <!-- Search Input within Category -->
        <div class="relative w-full sm:w-72">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <Icon icon="ph:magnifying-glass-bold" class="w-4 h-4 text-neutral-400" />
          </div>
          <input
            v-model="searchFilter"
            type="text"
            placeholder="Cari dalam topik ini..."
            class="w-full pl-9 pr-4 py-2 bg-white border border-neutral-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F8C031] focus:border-transparent transition-colors duration-100"
          />
        </div>
      </div>

      <!-- Articles List -->
      <div v-if="filteredArticles.length > 0" class="bg-white rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-neutral-200/80 divide-y divide-neutral-100 overflow-hidden">
        <NuxtLink
          v-for="(article, index) in filteredArticles"
          :key="article.id"
          :to="`/article/${article.slug}`"
          class="block px-6 sm:px-8 py-5 sm:py-6 hover:bg-neutral-50/80 transition-colors group"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-sm font-extrabold text-amber-500/80 w-5">{{ index + 1 }}</span>
                <h3 class="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                  {{ article.title }}
                </h3>
              </div>
              <p class="text-sm text-neutral-600 leading-relaxed line-clamp-2 ml-8">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center gap-2 mt-3 ml-8 text-xs text-neutral-500 font-medium">
                <Icon icon="ph:clock-bold" class="w-3.5 h-3.5 text-neutral-400" />
                <span>{{ article.readTime }} menit baca</span>
              </div>
            </div>
            <Icon icon="ph:caret-right-bold" class="w-5 h-5 text-neutral-300 group-hover:text-amber-500 transition-colors shrink-0 mt-2" />
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State within Category -->
      <div v-else class="text-center py-12 px-4 bg-white rounded-lg border border-dashed border-neutral-200">
        <p class="text-neutral-500 text-sm mb-4">
          Tidak ada artikel yang sesuai dengan filter pencarian ini.
        </p>
        <button
          @click="resetFilters"
          class="px-5 py-2 rounded-lg bg-amber-50 text-amber-800 font-bold text-xs hover:bg-amber-100 transition-colors duration-100"
        >
          Tampilkan Semua Artikel
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'nuxt/app'
import ShieldFillIcon from '@iconify-vue/ph/shield-fill'
import { getCategoryBySlug, getArticlesByCategory } from '~/data/content'

const route = useRoute()
const categorySlug = computed(() => route.params.slug as string)

const category = computed(() => getCategoryBySlug(categorySlug.value))
const categoryArticles = computed(() => getArticlesByCategory(categorySlug.value))

// Interactive filter states
const selectedSubCategory = ref<string>('all')
const searchFilter = ref<string>('')

const resetFilters = () => {
  selectedSubCategory.value = 'all'
  searchFilter.value = ''
}

const getCategoryIcon = (slug?: string): string => {
  switch (slug) {
    case 'akun-keamanan':
    case 'akun-dan-keamanan':
      return 'ph:shield-user-bold'
    case 'pesanan':
      return 'ph:clipboard-text-bold'
    case 'pembayaran':
      return 'ph:wallet-bold'
    case 'pengiriman':
      return 'ph:truck-bold'
    case 'promo':
    case 'promo-voucher':
      return 'ph:gift-bold'
    case 'kategori-produk':
      return 'ph:tag-bold'
    default:
      return 'ph:squares-four-bold'
  }
}

// Reactive filtered list based on subcategory and keyword
const filteredArticles = computed(() => {
  let list = categoryArticles.value

  if (selectedSubCategory.value !== 'all') {
    list = list.filter(art => art.subCategoryId === selectedSubCategory.value)
  }

  if (searchFilter.value.trim()) {
    const q = searchFilter.value.toLowerCase().trim()
    list = list.filter(art =>
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q)
    )
  }

  return list
})

// 404 if category not found
if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: 'Kategori tidak ditemukan' })
}

useHead({
  title: `${category.value?.title} - Poolapack Care`,
  meta: [
    { name: 'description', content: category.value?.description }
  ]
})
</script>
