<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        <!-- Left Sidebar (Bantuan / Kategori Cepat) -->
        <aside class="w-full lg:w-64 shrink-0 flex flex-col gap-6 border-b border-neutral-100 lg:border-none pb-6 lg:pb-0">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm">
              <Icon icon="ph:headset-bold" class="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-neutral-900 tracking-tight">Bantuan</h2>
              <NuxtLink to="/" class="inline-block text-xs font-semibold text-amber-600 hover:text-amber-700 hover:underline">
                Lihat Semua Topik &rarr;
              </NuxtLink>
            </div>
          </div>

          <!-- Quick Category Links in Sidebar -->
          <div class="hidden lg:flex flex-col gap-1.5 pt-4 border-t border-neutral-100">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
              Kategori Bantuan
            </span>
            <NuxtLink
              v-for="cat in categories"
              :key="cat.id"
              :to="`/category/${cat.slug}`"
              class="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors duration-100 group"
            >
              <span class="truncate group-hover:text-amber-700">{{ cat.title }}</span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors" />
            </NuxtLink>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 w-full min-w-0">

          <!-- Tabs: Untuk Pooler (Pembeli) | Untuk Packer (Penjual) -->
          <div class="flex items-center gap-6 sm:gap-8 border-b border-neutral-200/80 w-full overflow-x-auto hide-scrollbar mb-6">
            <button
              v-for="tab in ['Untuk Pooler (Pembeli)', 'Untuk Packer (Penjual)']"
              :key="tab"
              @click="activeTab = tab"
              class="relative pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-100 focus:outline-none flex items-center gap-1.5"
              :class="activeTab === tab ? 'text-amber-600' : 'text-neutral-500 hover:text-neutral-800'"
            >
              {{ tab }}
              <span
                class="text-[10px] font-bold px-1.5 py-0.5 rounded-md transition-colors duration-100"
                :class="activeTab === tab ? 'bg-amber-100 text-amber-700' : 'bg-neutral-100 text-neutral-400'"
              >
                {{ tabArticleCount(tab) }}
              </span>
              <div
                v-if="activeTab === tab"
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t-sm"
              ></div>
            </button>
          </div>

          <!-- Search Results Summary Header -->
          <div class="mb-6">
            <h1 v-if="query" class="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight mb-1">
              Hasil untuk "<span class="text-amber-700">{{ query }}</span>"
            </h1>
            <h1 v-else class="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight mb-1">
              Semua Topik Panduan
            </h1>
            <p class="text-xs sm:text-sm text-neutral-500 font-medium">
              Menampilkan {{ filteredResults.length }} artikel yang relevan
            </p>
          </div>

          <!-- List of Search Results -->
          <div v-if="filteredResults.length > 0" class="flex flex-col divide-y divide-neutral-100">
            <article
              v-for="(result, index) in filteredResults"
              :key="result.id || index"
              class="py-5 sm:py-6 group"
            >
              <NuxtLink :to="`/article/${result.slug}`" class="block">
                <div class="flex items-center gap-2 mb-1.5">
                  <span v-if="result.categoryTitle" class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md uppercase tracking-wider border border-amber-200/60">
                    {{ result.categoryTitle }}
                  </span>
                  <span v-if="result.categoryTitle" class="text-neutral-300">&bull;</span>
                  <div class="flex items-center gap-1 text-[11px] text-neutral-400 font-medium">
                    <Icon icon="ph:clock-bold" class="w-3.5 h-3.5" />
                    <span>{{ result.readTime }} menit baca</span>
                  </div>
                </div>

                <h2
                  class="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors mb-1.5 leading-snug"
                  v-html="highlightText(result.title)"
                ></h2>

                <p
                  class="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2"
                  v-html="highlightText(result.excerpt)"
                ></p>
              </NuxtLink>
            </article>
          </div>

          <!-- Empty State when no results found -->
          <div v-else class="text-center py-14 px-4 bg-neutral-50 rounded-lg border border-dashed border-neutral-200 my-4">
            <div class="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
              <Icon icon="ph:magnifying-glass-bold" class="w-6 h-6 text-amber-700" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-neutral-900 mb-1">
              Tidak ada artikel yang cocok dengan "{{ query }}"
            </h3>
            <p class="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto mb-5 leading-relaxed">
              Coba gunakan kata kunci yang lebih umum seperti "daftar", "pesanan", "pembayaran", atau "pengiriman".
            </p>
            <div class="flex flex-wrap items-center justify-center gap-2">
              <button
                v-for="suggest in ['Cara Daftar', 'Daftar Packer', 'PoolPoint', 'PoolPay', 'Pre Order', 'Flash Sale', 'Ready Stock', 'Lacak Pesanan']"
                :key="suggest"
                @click="applySuggestion(suggest)"
                class="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold hover:border-amber-400 hover:text-amber-800 transition-colors duration-100 shadow-2xs"
              >
                {{ suggest }}
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'nuxt/app'
import { searchArticles, articles, categories } from '~/data/content'

const route = useRoute()
const router = useRouter()

const query = computed(() => (route.query.q as string) || '')

useHead({
  title: computed(() => query.value ? `Pencarian: ${query.value} - Poolapack Care` : 'Poolapack Care')
})

const activeTab = ref('Untuk Pooler (Pembeli)')

// Dynamic search results from smart fuzzy content search
const searchResults = computed(() => {
  if (!query.value || !query.value.trim()) {
    return articles
  }
  return searchArticles(query.value)
})

// Tab filtering: pisahkan artikel Pooler (pembeli) vs Packer (penjual) berdasarkan field `audience`
// Artikel tanpa field audience dianggap sebagai 'pembeli' (backward compatible)
const filteredResults = computed(() => {
  const tabTarget = activeTab.value.includes('Packer') || activeTab.value.includes('Penjual') ? 'penjual' : 'pembeli'
  return searchResults.value.filter(art => {
    const aud = art.audience ?? 'pembeli'
    return aud === 'semua' || aud === tabTarget
  })
})

// Hitung jumlah artikel per tab (untuk badge count)
const tabArticleCount = (tab: string): number => {
  const target = tab.includes('Packer') || tab.includes('Penjual') ? 'penjual' : 'pembeli'
  return searchResults.value.filter(art => {
    const aud = art.audience ?? 'pembeli'
    return aud === 'semua' || aud === target
  }).length
}

const applySuggestion = (text: string) => {
  router.push({ path: '/search', query: { q: text } })
}

// Highlight matched keywords cleanly without breaking word spacing
const highlightText = (text: string) => {
  if (!query.value || !query.value.trim()) return text
  const tokens = query.value.trim().split(/\s+/).filter(t => t.length > 1)
  if (tokens.length === 0) return text
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${escaped})`, 'gi')
  return text.replace(regex, '<span class="text-amber-600 font-bold">$1</span>')
}
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
