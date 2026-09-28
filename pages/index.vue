<template>
  <div class="w-full flex flex-col relative pb-20 bg-[#FAF8F5]">

    <!-- Hero Section (Soft Warm Tint with Poolapack-styled Search Bar & Geometric Decor) -->
    <section class="relative w-full bg-gradient-to-b from-[#FFF7DB] via-[#FFFDF5] to-[#FAF8F5] border-b border-amber-200/50 pt-10 pb-12 sm:pt-14 sm:pb-16 z-30">
      <!-- Background Geometric Watermark Pattern (Motif Khas Poolapack Marketplace: Kantong Belanja, Voucher %, Toko Packer, Resi & Saldo PoolPay) -->
      <HeroBackgroundDecor />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        <!-- Left Content: Headline + Search Bar -->
        <div class="flex-1 w-full flex flex-col items-center lg:items-start relative">

          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-extrabold text-[#1E293B] tracking-tight text-center lg:text-left">
            Ada yang bisa kami bantu?
          </h1>
          <p class="text-xs sm:text-sm text-neutral-600 mt-2 text-center lg:text-left font-normal max-w-lg">
            Temukan panduan transaksi, verifikasi identitas untuk diskon 1%, ketentuan produk, hingga solusi pembayaran di Poolapack Care.
          </p>

          <!-- Search Bar Wrapper -->
          <div class="w-full max-w-xl relative mt-6 sm:mt-7 mx-auto lg:mx-0 z-50" v-click-outside="closeDropdown">
            <form @submit.prevent="handleSearch" class="relative">
              <div class="relative flex items-center bg-white rounded-xl border border-neutral-200/90 shadow-sm focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-300/40">
                <button
                  type="submit"
                  class="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center cursor-pointer text-[#F8C031] focus:outline-none"
                  aria-label="Cari"
                >
                  <Icon icon="ph:magnifying-glass" class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#F8C031]" />
                </button>
                <input
                  v-model="searchQuery"
                  @focus="showDropdown = true"
                  type="text"
                  class="block w-full pl-12 sm:pl-14 pr-5 py-3.5 sm:py-4 rounded-xl bg-transparent text-neutral-900 placeholder-neutral-400 focus:outline-none text-xs sm:text-sm"
                  placeholder="Ketik kata kunci (misal: promosi berlangsung)"
                />
              </div>
            </form>

            <!-- Autocomplete Dropdown overlaying seamlessly on top of everything -->
            <div
              v-if="showDropdown && searchQuery && filteredSuggestions.length > 0"
              class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-neutral-200/80 divide-y divide-neutral-100 max-h-[360px] overflow-y-auto"
            >
              <ul class="py-1 text-xs sm:text-sm text-neutral-700">
                <li v-for="item in filteredSuggestions" :key="item.id">
                  <button
                    @click="selectSuggestion(item.slug)"
                    class="w-full text-left px-4 sm:px-5 py-2.5 hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none flex items-center justify-between gap-3"
                  >
                    <div class="flex items-center gap-2.5 truncate">
                      <Icon icon="ph:file-text-bold" class="w-4 h-4 text-neutral-400 shrink-0" />
                      <span class="truncate font-medium text-neutral-800" v-html="highlightMatch(item.title)"></span>
                    </div>
                    <span v-if="item.categoryTitle" class="text-[10px] sm:text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md shrink-0">
                      {{ item.categoryTitle }}
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    @click="handleSearch"
                    class="w-full text-left px-4 sm:px-5 py-2.5 font-bold text-xs sm:text-sm text-amber-700 hover:bg-neutral-50 border-t border-neutral-100 focus:outline-none flex items-center justify-between"
                  >
                    <span>Lihat semua hasil untuk "{{ searchQuery }}"</span>
                    <Icon icon="ph:arrow-right-bold" class="w-3.5 h-3.5" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Illustration (Clean & Proportional) -->
        <div class="w-full lg:w-5/12 relative flex justify-center lg:justify-end shrink-0">
          <img
            src="/icons/Pembeli.svg"
            alt="Illustration Pembeli"
            class="w-full h-auto max-w-[260px] sm:max-w-[300px] md:max-w-[340px] object-contain relative z-20"
          />
        </div>
      </div>
    </section>

    <!-- Categories Section (6 Main Topics Grid - 16px radius, Squircle Icons) -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-12 w-full">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-[#1E293B] tracking-tight">
          Pilih topik sesuai kebutuhan transaksi Anda
        </h2>
        <p class="text-xs sm:text-sm text-neutral-500 mt-1">
          Jelajahi panduan terorganisir per kategori untuk solusi cepat
        </p>
      </div>

      <!-- Role Selector Toggle -->
      <div class="flex justify-center mb-6 sm:mb-7">
        <div class="inline-flex items-center gap-1 p-1 bg-neutral-100 rounded-lg border border-neutral-200">
          <button
            @click="activeRole = 'pembeli'"
            :class="[
              'flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold focus:outline-none',
              activeRole === 'pembeli'
                ? 'bg-white text-amber-800 shadow-sm border border-amber-200/60'
                : 'text-neutral-500 hover:text-neutral-700'
            ]"
          >
            <Icon icon="ph:shopping-bag-bold" class="w-4 h-4" />
            Saya Pooler <span class="text-neutral-400 font-normal">(Pembeli)</span>
          </button>
          <button
            @click="activeRole = 'penjual'"
            :class="[
              'flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold focus:outline-none',
              activeRole === 'penjual'
                ? 'bg-white text-amber-800 shadow-sm border border-amber-200/60'
                : 'text-neutral-500 hover:text-neutral-700'
            ]"
          >
            <Icon icon="ph:storefront-bold" class="w-4 h-4" />
            Saya Packer <span class="text-neutral-400 font-normal">(Penjual)</span>
          </button>
        </div>
      </div>

      <!-- Dynamic Grid berdasarkan role aktif -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
        <NuxtLink
          v-for="cat in visibleCategories"
          :key="cat.slug"
          :to="activeRole === 'penjual' ? `/category/${cat.slug}?role=penjual` : `/category/${cat.slug}`"
          class="flex items-center gap-3.5 sm:gap-4 px-5 py-4 sm:px-6 sm:py-4.5 bg-white rounded-xl border border-neutral-200/90 shadow-sm hover:border-amber-300 hover:shadow transition-all cursor-pointer"
        >
          <!-- Ikon Kategori Dua Nada (Dark Brown & Golden Yellow) sesuai referensi -->
          <CategoryCardIcon :slug="cat.slug" />

          <!-- Nama Kategori -->
          <span class="font-semibold text-neutral-800 text-sm sm:text-base tracking-tight truncate">
            {{ cat.title }}
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ Section ("Yang sering ditanyakan") - Linked to Articles -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 w-full relative z-10">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-[#1E293B] tracking-tight">
          Yang sering ditanyakan
        </h2>
        <p class="text-xs sm:text-sm text-neutral-500 mt-1">
          Jawaban ringkas untuk pertanyaan yang paling sering diajukan seputar transaksi
        </p>
      </div>

      <div class="space-y-2 sm:space-y-2.5">

        <!-- FAQ Item 1 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Bagaimana cara melakukan Transaksi di Poolapack?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Pilih produk kain dari katalog (Flash Sale, Pre Order, atau Ready Stock), tentukan varian & kuantitas, lengkapi alamat pengiriman, lalu pilih opsi kirim ekspedisi atau ambil di pabrik. Pembayaran dapat diselesaikan via Virtual Account atau saldo PoolPay.</p>
            <NuxtLink to="/article/cara-melakukan-pemesanan" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Baca panduan lengkap cara memesan
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

        <!-- FAQ Item 2 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Bagaimana cara mendapatkan Diskon Sebesar 1%?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Pooler berhak mendapatkan <strong class="text-neutral-700">potongan diskon 1% di setiap transaksi</strong> dan bebas biaya administrasi cukup dengan melakukan <strong class="text-neutral-700">verifikasi identitas (upload KTP atau NPWP)</strong> melalui menu Profil. Setelah disetujui, diskon 1% otomatis terpotong di halaman checkout.</p>
            <NuxtLink to="/article/cara-verifikasi-identitas" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Baca panduan verifikasi identitas
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

        <!-- FAQ Item 3 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Metode pembayaran apa saja yang tersedia?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Poolapack menyediakan 8 metode resmi: <strong class="text-neutral-700">Mandiri VA, BCA Transfer, CIMB VA, BRIVA, BNI VA, Permata VA, Danamon VA, dan BCA Espay</strong>, plus saldo digital <strong class="text-neutral-700">PoolPay</strong> yang mendukung pembayaran kombinasi (split payment).</p>
            <NuxtLink to="/article/metode-pembayaran-tersedia" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Lihat semua metode pembayaran & biaya
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

        <!-- FAQ Item 4 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Bagaimana cara melacak dan melihat status pesanan?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Status pesanan dapat dipantau di menu <strong class="text-neutral-700">Pesanan / Transaksi</strong> akun Anda. Log pesanan menampilkan tahapan: Menunggu Pembayaran → Diproses → Dikirim → Selesai → Ulasan. Nomor resi diperbarui otomatis begitu Packer menyerahkan paket ke ekspedisi.</p>
            <NuxtLink to="/article/cara-melihat-log-pesanan" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Baca cara melihat log & status pesanan
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

        <!-- FAQ Item 5 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Bagaimana sistem pengembalian dana (refund) ke PoolPay?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Jika transaksi dibatalkan oleh admin (misal karena kendala produksi), dana yang sudah dibayarkan akan <strong class="text-neutral-700">otomatis dikembalikan 100% ke saldo PoolPay</strong> secara real-time. Saldo dapat langsung dipakai belanja kembali atau dicairkan ke rekening bank (min. Rp 10.000, estimasi 1–2 hari kerja).</p>
            <NuxtLink to="/article/cara-ajukan-refund" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Baca panduan lengkap refund & PoolPay
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

        <!-- FAQ Item 6 -->
        <details class="group bg-white rounded-xl border border-neutral-200 overflow-hidden cursor-pointer open:border-amber-300/70">
          <summary class="flex justify-between items-center font-semibold list-none px-4 sm:px-5 py-3.5 text-xs sm:text-sm text-[#1E293B] select-none hover:bg-neutral-50/60 transition-colors">
            Bisakah pesanan dibatalkan setelah dibayar?
            <Icon icon="ph:caret-down-bold" class="faq-caret w-3.5 h-3.5 text-neutral-400 shrink-0 ml-3" />
          </summary>
          <div class="text-neutral-500 px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 pt-3">
            <p>Pembatalan dapat dilakukan selama pesanan belum masuk status <strong class="text-neutral-700">Dikirim</strong>. Pesanan yang belum dibayar bisa dibatalkan kapan saja. Pesanan yang sedang diproses dapat dibatalkan sebelum Packer mencetak resi. Dana yang sudah dibayar otomatis kembali ke PoolPay.</p>
            <NuxtLink to="/article/cara-batalkan-pesanan" class="inline-flex items-center gap-1 mt-2.5 text-xs font-semibold text-amber-700 hover:text-amber-800 group/link">
              Baca syarat & cara membatalkan pesanan
              <Icon icon="ph:arrow-right-bold" class="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </details>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'nuxt/app'
import { searchArticles, categories, articles } from '~/data/content'
import HeroBackgroundDecor from '~/components/common/HeroBackgroundDecor.vue'
import CategoryCardIcon from '~/components/common/CategoryCardIcon.vue'

// ── Role selector ────────────────────────────────────────────────────────────
const activeRole = ref<'pembeli' | 'penjual'>('pembeli')

// Ikon per slug kategori
const categoryIconMap: Record<string, string> = {
  'akun-keamanan':   'ph:shield-bold',
  'pesanan':         'ph:clipboard-text-bold',
  'pembayaran':      'ph:wallet-bold',
  'pengiriman':      'ph:truck-bold',
  'promo':           'ph:gift-bold',
  'kategori-produk': 'ph:tag-bold',
}

// Deskripsi singkat per slug kategori — reaktif terhadap activeRole
const categoryDescMap = computed<Record<string, string>>(() => {
  const isPenjual = activeRole.value === 'penjual'
  return {
    'akun-keamanan':   isPenjual ? 'Daftar Packer & verifikasi toko'      : 'Daftar akun & kelola password',
    'pesanan':         isPenjual ? 'Kelola produk, stok & harga jual'      : 'Cara beli, alamat & lacak pesanan',
    'pembayaran':      isPenjual ? 'Penarikan saldo & ketentuan settlement' : 'Virtual account, fee & refund',
    'pengiriman':      isPenjual ? 'Ekspedisi mitra & proses serah terima'  : 'Ekspedisi, ambil di pabrik & ongkir',
    'promo':           isPenjual ? 'Program reward & promosi toko Packer'   : 'Diskon 1% KTP, PoolPoint & PoolPay',
    'kategori-produk': isPenjual ? 'Flash Sale, PO & Ready Stock Packer'    : 'Flash Sale, Pre Order & Ready Stock',
  }
})

// Kategori yang memiliki minimal 1 artikel untuk role aktif
const visibleCategories = computed(() => {
  return categories.filter(cat =>
    articles.some(a =>
      a.category === cat.slug &&
      ((a.audience ?? 'pembeli') === activeRole.value || a.audience === 'semua')
    )
  )
})

useHead({
  title: 'Poolapack Care - Pusat Bantuan & Panduan',
  meta: [
    { name: 'description', content: 'Pusat bantuan dan panduan resmi Poolapack Care' }
  ]
})

const router = useRouter()
const searchQuery = ref('')
const showDropdown = ref(false)

// Real-time suggestions from data/content.ts
const filteredSuggestions = computed(() => {
  if (!searchQuery.value || !searchQuery.value.trim()) return []
  return searchArticles(searchQuery.value).slice(0, 5)
})

// Highlight matched text function with multi-word token support
const highlightMatch = (text: string) => {
  if (!searchQuery.value || !searchQuery.value.trim()) return text
  const tokens = searchQuery.value.trim().split(/\s+/).filter(t => t.length > 1)
  if (tokens.length === 0) return text
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${escaped})`, 'gi')
  return text.replace(regex, '<span class="text-amber-600 font-bold">$1</span>')
}

// Close dropdown when clicking outside
const closeDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false
  }, 150)
}

// Custom directive to handle click outside
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = function(event: Event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
}

const handleSearch = () => {
  showDropdown.value = false
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: {
        q: searchQuery.value.trim(),
        ...(activeRole.value === 'penjual' ? { role: 'penjual' } : {})
      }
    })
  }
}

const selectSuggestion = (slug: string) => {
  showDropdown.value = false
  router.push(`/article/${slug}`)
}
</script>

<style scoped>
/* Hide default list styles on summary for safari/chrome */
details > summary::-webkit-details-marker {
  display: none;
}

/* FAQ caret rotate animation */
details[open] .faq-caret {
  transform: rotate(180deg);
}
.faq-caret {
  transition: transform 0.2s ease;
}
</style>
