<template>
  <div class="min-h-screen bg-[#FAF8F5] relative">

    <!-- Top Reading Progress Bar -->
    <div
      class="fixed top-0 left-0 h-1 bg-[#F8C031] z-50"
      :style="{ width: `${readingProgress}%` }"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      <!-- Breadcrumbs -->
      <nav class="flex flex-wrap items-center gap-2 text-sm mb-8 text-neutral-500" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-neutral-900 flex items-center gap-1.5 font-medium">
          <Icon icon="ph:house-bold" class="w-4 h-4" />
          <span>Home</span>
        </NuxtLink>
        <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300" />
        <NuxtLink
          v-if="category"
          :to="`/category/${category.slug}`"
          class="hover:text-neutral-900 font-medium"
        >
          {{ category.title }}
        </NuxtLink>
        <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300" />
        <span class="text-neutral-900 font-semibold truncate max-w-xs sm:max-w-md">{{ article?.title }}</span>
      </nav>

      <!-- Main Layout: Content + Sticky Sidebar -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        <!-- Article Main Container (8 cols) -->
        <main class="lg:col-span-8 w-full" ref="articleContainer">
          <article class="bg-white rounded-xl p-6 sm:p-10 border border-neutral-200 shadow-sm">

            <!-- Category Badge & Read Time Meta -->
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
              <div class="flex items-center gap-3">
                <NuxtLink
                  v-if="category"
                  :to="`/category/${category.slug}`"
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200/90 text-amber-800 text-xs font-bold hover:bg-amber-100"
                >
                  <CategoryCardIcon :slug="category.slug" size-class="w-3.5 h-3.5" />
                  <span>{{ category.title }}</span>
                </NuxtLink>
                <div class="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Icon icon="ph:clock-bold" class="w-3.5 h-3.5 text-neutral-400" />
                  <span>{{ article?.readTime }} menit baca</span>
                </div>
              </div>
            </div>

            <!-- Article Title -->
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F2E2C] tracking-tight mb-4 leading-tight">
              {{ article?.title }}
            </h1>

            <!-- Last Updated -->
            <p v-if="article?.lastUpdated" class="text-xs text-neutral-400 mb-8 flex items-center gap-1.5">
              <Icon icon="ph:calendar-blank-bold" class="w-3.5 h-3.5 text-neutral-400" />
              <span>Terakhir diperbarui: {{ article.lastUpdated }}</span>
            </p>

            <!-- Platform Tabs (only shown when article has platform-specific content) -->
            <div v-if="article?.platforms && article.platforms.length > 0" class="mb-6">
              <!-- Tab Buttons -->
              <div class="flex items-center gap-2 p-1 bg-neutral-100/80 rounded-xl w-fit border border-neutral-200/70">
                <button
                  v-for="(platform, index) in article.platforms"
                  :key="index"
                  @click="activePlatform = index"
                  class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold focus:outline-none"
                  :class="activePlatform === index
                    ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/80'
                    : 'text-neutral-500 hover:text-neutral-700 hover:bg-white/50'"
                >
                  <Icon :icon="platform.icon" class="w-4 h-4 shrink-0" />
                  <span>{{ platform.label }}</span>
                </button>
              </div>

              <!-- Tab Content -->
              <div
                v-for="(platform, index) in article.platforms"
                :key="`content-${index}`"
                v-show="activePlatform === index"
              >
                <!-- Per-platform TOC (replaces sidebar TOC when platform has its own toc) -->

                <!-- Platform Content Body -->
                <div
                  class="prose prose-neutral max-w-none article-body text-neutral-700 leading-relaxed text-base mt-6"
                  v-html="platform.content"
                ></div>
              </div>
            </div>

            <!-- Rich Content Body (shown only when no platform tabs) -->
            <div
              v-else
              class="prose prose-neutral max-w-none article-body text-neutral-700 leading-relaxed text-base"
              v-html="article?.content"
            ></div>

          </article>

          <!-- Related Articles (Artikel Terkait) -->
          <section v-if="relatedArticles.length > 0" class="mt-10 print:hidden">
            <h3 class="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <span>Artikel Terkait</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NuxtLink
                v-for="rel in relatedArticles"
                :key="rel.id"
                :to="`/article/${rel.slug}`"
                class="bg-white rounded-xl p-5 border border-neutral-200 hover:border-neutral-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 class="font-bold text-neutral-900 text-base mb-2 line-clamp-2">
                    {{ rel.title }}
                  </h4>
                  <p class="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {{ rel.excerpt }}
                  </p>
                </div>
                <div class="flex items-center justify-between text-xs text-neutral-400 font-medium mt-4 pt-3 border-t border-neutral-50">
                  <span class="flex items-center gap-1.5">
                    <Icon icon="ph:clock-bold" class="w-3.5 h-3.5 text-neutral-400" />
                    {{ rel.readTime }} mnt
                  </span>
                  <span class="text-amber-600 font-bold inline-flex items-center gap-0.5">
                    Baca &rarr;
                  </span>
                </div>
              </NuxtLink>
            </div>
          </section>

        </main>

        <!-- Right Sticky Sidebar (4 cols) -->
        <aside class="lg:col-span-4 w-full sticky top-24 space-y-6 print:hidden">

          <!-- Table of Contents (TOC) with Scroll Spy -->
          <!-- When article has platform tabs: show active platform's TOC if it has one, else fall back to article-level TOC -->
          <div
            v-if="activeToc && activeToc.length > 0"
            class="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200 shadow-sm"
          >
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <Icon icon="ph:list-bullets-bold" class="w-4 h-4 text-amber-500" />
              <span>Daftar Isi</span>
            </h3>
            <ul class="space-y-1 text-xs sm:text-sm">
              <li v-for="item in activeToc" :key="item.id">
                <a
                  :href="`#${item.id}`"
                  @click.prevent="scrollToSection(item.id)"
                  class="block py-1.5 px-3 rounded-md font-medium"
                  :class="activeSection === item.id ? 'bg-amber-100/70 text-amber-900 font-bold' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'"
                >
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Quick Help / Customer Service Card -->
          <div class="bg-amber-50/70 rounded-xl p-5 sm:p-6 border border-amber-200 text-neutral-900">
            <div class="w-10 h-10 rounded-md bg-[#F8C031] flex items-center justify-center mb-3.5 text-neutral-900">
              <Icon icon="ph:headset-bold" class="w-5 h-5 text-neutral-900" />
            </div>
            <h4 class="text-base sm:text-lg font-bold mb-1.5 leading-snug text-neutral-900">
              Butuh Bantuan Lain?
            </h4>
            <p class="text-xs text-neutral-600 leading-relaxed mb-4">
              Punya kendala pesanan atau ingin konsultasi transaksi? Tim Poolapack siap membantu Anda.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=628112380989&text=Halo+Poolapack%2C+saya+ingin+bertanya+mengenai+&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F8C031] hover:bg-[#F5B400] text-neutral-900 font-bold text-xs sm:text-sm"
            >
              <span>Hubungi CS Poolapack</span>
              <Icon icon="ph:arrow-right-bold" class="w-3.5 h-3.5" />
            </a>
          </div>

        </aside>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'nuxt/app'
import { getArticleBySlug, getCategoryBySlug, getRelatedArticles } from '~/data/content'
import CategoryCardIcon from '~/components/common/CategoryCardIcon.vue'

const route = useRoute()
const articleSlug = computed(() => route.params.slug as string)

const article = computed(() => getArticleBySlug(articleSlug.value))
const category = computed(() => article.value ? getCategoryBySlug(article.value.category) : undefined)
const relatedArticles = computed(() => {
  if (!article.value) return []
  return getRelatedArticles(article.value.slug, article.value.category, 4)
})

// 404 if article is not found
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel panduan tidak ditemukan' })
}

useHead({
  title: `${article.value?.title} - Poolapack Care`,
  meta: [
    { name: 'description', content: article.value?.excerpt }
  ]
})

// Interactive UI State for sharing, printing & feedback
const copied = ref(false)
const feedbackSent = ref(false)
const readingProgress = ref(0)
const activeSection = ref('')
const articleContainer = ref<HTMLElement | null>(null)
const activePlatform = ref(0)

// Computed: which TOC to show — platform-specific or article-level fallback
const activeToc = computed(() => {
  if (article.value?.platforms && article.value.platforms.length > 0) {
    const platform = article.value.platforms[activePlatform.value]
    return platform?.toc ?? article.value.toc ?? []
  }
  return article.value?.toc ?? []
})




const scrollToSection = (id: string) => {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -90
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Scroll listener for reading progress & TOC active spy
const onScroll = () => {
  if (!import.meta.client) return

  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  readingProgress.value = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0

  if (activeToc.value) {
    for (const item of activeToc.value) {
      const el = document.getElementById(item.id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140) {
          activeSection.value = item.id
        }
      }
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>

<style>
/* Custom styling for rendered article body content */
.article-body h2 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #171717;
  margin-top: 2rem;
  margin-bottom: 0.85rem;
  padding-top: 0.5rem;
  scroll-margin-top: 6rem;
}

.article-body p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.article-body ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.article-body ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.article-body li {
  margin-bottom: 0.4rem;
  line-height: 1.65;
}

.article-body .callout {
  padding: 1rem 1.25rem;
  border-radius: 1rem;
  margin: 1.5rem 0;
  font-size: 0.925rem;
  line-height: 1.6;
}

.article-body .callout-info {
  background-color: #FEF9C3;
  border-left: 4px solid #F59E0B;
  color: #78350F;
}

.article-body .callout-warning {
  background-color: #FFF7ED;
  border-left: 4px solid #EA580C;
  color: #9A3412;
}

/* Screenshot images inside article steps */
.article-body img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.article-body .callout-warning {
  background-color: #FFF7ED;
  border-left: 4px solid #EA580C;
  color: #9A3412;
}

@media print {
  body {
    background-color: white !important;
  }
}
</style>
