<template>
  <div class="min-h-screen bg-[#FAF8F5]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm mb-8 text-neutral-500" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-neutral-900 flex items-center gap-1.5 font-medium">
          <Icon icon="ph:house-bold" class="w-4 h-4" />
          <span>Home</span>
        </NuxtLink>
        <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300" />
        <span class="text-neutral-900 font-semibold">{{ category?.title }}</span>
      </nav>

      <!-- Category Header Card -->
      <div class="bg-white rounded-xl p-6 sm:p-10 mb-10 border border-neutral-200/90 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-amber-50/70 flex items-center justify-center shrink-0 border border-amber-200/70 shadow-sm">
            <CategoryCardIcon :slug="category?.slug || ''" size-class="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div class="flex-1">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F2E2C] tracking-tight mb-2">
              {{ category?.title }}
            </h1>
            <p class="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
              {{ category?.description }}
            </p>
            <div class="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
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
            class="text-xs font-bold text-amber-600 hover:text-amber-700 underline self-start sm:self-auto cursor-pointer"
          >
            Reset Filter (Lihat Semua)
          </button>
        </div>

        <!-- Subcategory Grid (Checkmark hanya pada subkategori yang aktif dipilih) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <!-- "Semua Topik" Card -->
          <button
            @click="selectedSubCategory = 'all'"
            class="text-left bg-white rounded-xl p-5 border cursor-pointer shadow-sm"
            :class="selectedSubCategory === 'all' ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-300/60' : 'border-neutral-200 hover:border-neutral-300'"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-neutral-900">
                Semua Topik
              </h3>
              <span
                v-if="selectedSubCategory === 'all'"
                class="w-5 h-5 rounded-full flex items-center justify-center text-xs bg-[#F8C031] text-neutral-900 font-bold shrink-0"
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
            class="text-left bg-white rounded-xl p-5 border cursor-pointer shadow-sm"
            :class="selectedSubCategory === subCat.id ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-300/60' : 'border-neutral-200 hover:border-neutral-300'"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-neutral-900">
                {{ subCat.name }}
              </h3>
              <span
                v-if="selectedSubCategory === subCat.id"
                class="w-5 h-5 rounded-full flex items-center justify-center text-xs bg-[#F8C031] text-neutral-900 font-bold shrink-0"
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

      <!-- Role Filter Tabs (Bentuk Simpel & Rapi sesuai instruksi user) -->
      <div v-if="hasSellerArticles" class="mb-6">
        <div class="inline-flex items-center p-1 bg-neutral-100/90 rounded-xl border border-neutral-200/80">
          <button
            @click="activeRoleTab = 'semua'"
            :class="[
              'px-3.5 py-1.5 rounded-lg text-xs font-semibold focus:outline-none cursor-pointer',
              activeRoleTab === 'semua'
                ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/70 font-bold'
                : 'text-neutral-500 hover:text-neutral-800'
            ]"
          >
            Semua ({{ roleTotalCount }})
          </button>
          <button
            @click="activeRoleTab = 'pembeli'"
            :class="[
              'flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold focus:outline-none cursor-pointer',
              activeRoleTab === 'pembeli'
                ? 'bg-white text-amber-800 shadow-sm border border-amber-200/70 font-bold'
                : 'text-neutral-500 hover:text-neutral-800'
            ]"
          >
            <Icon icon="ph:shopping-bag-bold" class="w-3.5 h-3.5 text-amber-600" />
            <span>Untuk Pooler ({{ countForRole('pembeli') }})</span>
          </button>
          <button
            @click="activeRoleTab = 'penjual'"
            :class="[
              'flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold focus:outline-none cursor-pointer',
              activeRoleTab === 'penjual'
                ? 'bg-white text-amber-800 shadow-sm border border-amber-200/70 font-bold'
                : 'text-neutral-500 hover:text-neutral-800'
            ]"
          >
            <Icon icon="ph:storefront-bold" class="w-3.5 h-3.5 text-amber-600" />
            <span>Untuk Packer ({{ countForRole('penjual') }})</span>
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
            class="w-full pl-9 pr-4 py-2 bg-white border border-neutral-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F8C031] focus:border-transparent"
          />
        </div>
      </div>

      <!-- Articles List -->
      <div v-if="filteredArticles.length > 0" class="bg-white rounded-xl border border-neutral-200 divide-y divide-neutral-100 overflow-hidden shadow-sm">
        <NuxtLink
          v-for="(article, index) in filteredArticles"
          :key="article.id"
          :to="`/article/${article.slug}`"
          class="block px-6 sm:px-8 py-5 sm:py-6 hover:bg-neutral-50/70"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2.5 mb-2">
                <span class="text-sm font-extrabold text-amber-500/80 w-5">{{ index + 1 }}</span>
                <h3 class="text-base sm:text-lg font-bold text-neutral-900">
                  {{ article.title }}
                </h3>
                <!-- Role Badge: Menghilangkan ambiguitas audiens artikel -->
                <span
                  v-if="article.audience === 'penjual'"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200/80 shrink-0"
                >
                  <Icon icon="ph:storefront-bold" class="w-3 h-3" />
                  Untuk Packer
                </span>
                <span
                  v-else-if="article.audience === 'pembeli'"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200 shrink-0"
                >
                  <Icon icon="ph:shopping-bag-bold" class="w-3 h-3" />
                  Untuk Pooler
                </span>
              </div>
              <p class="text-sm text-neutral-600 leading-relaxed line-clamp-2 ml-7.5">
                {{ article.excerpt }}
              </p>
              <div class="flex items-center gap-2 mt-3 ml-7.5 text-xs text-neutral-500 font-medium">
                <Icon icon="ph:clock-bold" class="w-3.5 h-3.5 text-neutral-400" />
                <span>{{ article.readTime }} menit baca</span>
              </div>
            </div>
            <Icon icon="ph:caret-right-bold" class="w-5 h-5 text-neutral-300 shrink-0 mt-2" />
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State within Category -->
      <div v-else class="text-center py-12 px-4 bg-white rounded-xl border border-dashed border-neutral-200">
        <p class="text-neutral-500 text-sm mb-4">
          Tidak ada artikel yang sesuai dengan filter pencarian ini.
        </p>
        <button
          @click="resetFilters"
          class="px-5 py-2 rounded-lg bg-amber-50 text-amber-800 font-bold text-xs hover:bg-amber-100 cursor-pointer"
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
import { getCategoryBySlug, getArticlesByCategory } from '~/data/content'
import CategoryCardIcon from '~/components/common/CategoryCardIcon.vue'

const route = useRoute()
const categorySlug = computed(() => route.params.slug as string)

const category = computed(() => getCategoryBySlug(categorySlug.value))
const categoryArticles = computed(() => getArticlesByCategory(categorySlug.value))

const hasSellerArticles = computed(() => {
  return categoryArticles.value.some(art => art.audience === 'penjual')
})

// Interactive filter states
const selectedSubCategory = ref<string>('all')
const searchFilter = ref<string>('')
const activeRoleTab = ref<'semua' | 'pembeli' | 'penjual'>(
  route.query.role === 'penjual' && hasSellerArticles.value ? 'penjual' : (route.query.role === 'pembeli' ? 'pembeli' : 'semua')
)

// Base articles filtered by selected subcategory
const baseArticlesForRole = computed(() => {
  if (selectedSubCategory.value === 'all') return categoryArticles.value
  return categoryArticles.value.filter(art => art.subCategoryId === selectedSubCategory.value)
})

const roleTotalCount = computed(() => baseArticlesForRole.value.length)

const countForRole = (role: 'pembeli' | 'penjual') => {
  return baseArticlesForRole.value.filter(art => {
    if (role === 'penjual') {
      return art.audience === 'penjual' || art.audience === 'semua'
    }
    return (art.audience ?? 'pembeli') === 'pembeli' || art.audience === 'semua'
  }).length
}

const resetFilters = () => {
  selectedSubCategory.value = 'all'
  searchFilter.value = ''
  activeRoleTab.value = 'semua'
}

// Reactive filtered list based on subcategory, keyword, and role
const filteredArticles = computed(() => {
  let list = categoryArticles.value

  if (activeRoleTab.value === 'pembeli') {
    list = list.filter(art => (art.audience ?? 'pembeli') === 'pembeli' || art.audience === 'semua')
  } else if (activeRoleTab.value === 'penjual') {
    list = list.filter(art => art.audience === 'penjual' || art.audience === 'semua')
  }

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
