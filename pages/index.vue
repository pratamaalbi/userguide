<template>
  <div class="w-full flex flex-col relative pb-20 bg-[#FAF8F5]">

    <!-- Hero Section (Soft Warm Tint with Poolapack-styled Search Bar) -->
    <section class="relative w-full bg-gradient-to-b from-[#FFFDF5] via-[#FFFBEB] to-[#FAF8F5] border-b border-amber-100/60 pt-10 pb-12 sm:pt-14 sm:pb-16 z-30">
      <!-- Decorative Floating Badges (Subtle & Lightweight) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <img src="/images/Group 229.png" class="absolute top-8 left-[6%] md:left-[10%] w-12 sm:w-14 md:w-16 object-contain z-10 hidden sm:block opacity-60" alt="Deco 1" />
        <img src="/images/Group 230.png" class="absolute top-12 right-[5%] md:right-[15%] lg:right-[32%] w-12 sm:w-14 md:w-16 object-contain z-10 hidden lg:block opacity-60" alt="Deco 2" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        <!-- Left Content: Headline + Search Bar -->
        <div class="flex-1 w-full flex flex-col items-center lg:items-start relative">

          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100/60 border border-amber-200 text-amber-900 text-[11px] font-semibold tracking-wide uppercase mb-3">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Pusat Bantuan &amp; Panduan
          </div>

          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-extrabold text-[#1E293B] tracking-tight text-center lg:text-left">
            Ada yang bisa kami bantu?
          </h1>
          <p class="text-xs sm:text-sm text-neutral-600 mt-2 text-center lg:text-left font-normal max-w-lg">
            Temukan panduan transaksi, verifikasi identitas untuk diskon 1%, ketentuan produk, hingga solusi pembayaran di Poolapack Care.
          </p>

          <!-- Search Bar Wrapper (Poolapack style: rounded-lg like Masuk/Daftar button) -->
          <div class="w-full max-w-xl relative mt-6 sm:mt-7 mx-auto lg:mx-0 z-50" v-click-outside="closeDropdown">
            <form @submit.prevent="handleSearch" class="relative">
              <div class="relative flex items-center">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon icon="ph:magnifying-glass-bold" class="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400" />
                </div>
                <input
                  v-model="searchQuery"
                  @focus="showDropdown = true"
                  type="text"
                  class="block w-full pl-11 sm:pl-12 pr-24 sm:pr-28 py-3 sm:py-3.5 border border-amber-200/90 rounded-lg bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F8C031] focus:border-transparent text-xs sm:text-sm shadow-sm"
                  placeholder="Ketik kata kunci (misal: cara belanja, diskon 1%)"
                />
                <button
                  type="submit"
                  class="absolute right-1 top-1 bottom-1 px-4 sm:px-5 bg-[#F8C031] hover:bg-[#F5B400] text-neutral-900 rounded-md flex items-center justify-center font-bold text-xs sm:text-sm gap-1.5 transition-colors duration-100 shadow-sm"
                >
                  <Icon icon="ph:magnifying-glass-bold" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" />
                  <span class="hidden sm:inline">Cari</span>
                </button>
              </div>
            </form>

            <!-- Autocomplete Dropdown overlaying seamlessly on top of everything -->
            <div
              v-if="showDropdown && searchQuery && filteredSuggestions.length > 0"
              class="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-neutral-200/80 divide-y divide-neutral-100 max-h-[360px] overflow-y-auto"
            >
              <ul class="py-1 text-xs sm:text-sm text-neutral-700">
                <li v-for="item in filteredSuggestions" :key="item.id">
                  <button
                    @click="selectSuggestion(item.slug)"
                    class="w-full text-left px-4 sm:px-5 py-2.5 hover:bg-amber-50/70 focus:bg-amber-50 focus:outline-none flex items-center justify-between gap-3 transition-colors duration-100 group"
                  >
                    <div class="flex items-center gap-2.5 truncate">
                      <Icon icon="ph:file-text-bold" class="w-4 h-4 text-neutral-400 group-hover:text-amber-600 shrink-0" />
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
                    class="w-full text-left px-4 sm:px-5 py-2.5 font-bold text-xs sm:text-sm text-amber-700 hover:bg-neutral-50 border-t border-neutral-100 focus:outline-none flex items-center justify-between transition-colors duration-100"
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
            class="w-full h-auto max-w-[260px] sm:max-w-[300px] md:max-w-[340px] object-contain relative z-20 drop-shadow-sm"
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

      <!-- 3x2 Grid on Desktop & 2x3 Grid on Mobile/Tablet -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">

        <!-- 1. Akun & Keamanan -->
        <NuxtLink
          to="/category/akun-keamanan"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <ShieldFillIcon class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Akun &amp; Keamanan
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Daftar akun &amp; kelola password</p>
          </div>
        </NuxtLink>

        <!-- 2. Pesanan -->
        <NuxtLink
          to="/category/pesanan"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <Icon icon="ph:clipboard-text-bold" class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Pesanan
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Cara beli, alamat &amp; lacak pesanan</p>
          </div>
        </NuxtLink>

        <!-- 3. Pembayaran -->
        <NuxtLink
          to="/category/pembayaran"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <Icon icon="ph:wallet-bold" class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Pembayaran
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Virtual account, fee &amp; refund</p>
          </div>
        </NuxtLink>

        <!-- 4. Pengiriman -->
        <NuxtLink
          to="/category/pengiriman"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <Icon icon="ph:truck-bold" class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Pengiriman
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Ekspedisi, ambil di pabrik &amp; ongkir</p>
          </div>
        </NuxtLink>

        <!-- 5. Promo & Reward -->
        <NuxtLink
          to="/category/promo"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <Icon icon="ph:gift-bold" class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Promo &amp; Reward
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Diskon 1% KTP, PoolPoint &amp; PoolPay</p>
          </div>
        </NuxtLink>

        <!-- 6. Kategori Produk -->
        <NuxtLink
          to="/category/kategori-produk"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-amber-300 hover:shadow-sm transition-colors duration-100 group cursor-pointer"
        >
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-amber-50/90 border border-amber-200/70 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-100/70 transition-colors">
            <Icon icon="ph:tag-bold" class="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight truncate group-hover:text-amber-800 transition-colors">
                Kategori Produk
              </span>
              <Icon icon="ph:caret-right-bold" class="w-3.5 h-3.5 text-neutral-300 group-hover:text-amber-600 transition-colors hidden sm:block" />
            </div>
            <p class="text-[11px] text-neutral-400 mt-0.5 hidden sm:block truncate">Flash Sale, Pre Order &amp; Ready Stock</p>
          </div>
        </NuxtLink>

      </div>
    </section>

    <!-- FAQ Section ("Yang sering ditanyakan") - Minimalist Accordion -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 w-full relative z-10">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-[#1E293B] tracking-tight">
          Yang sering ditanyakan
        </h2>
        <p class="text-xs sm:text-sm text-neutral-500 mt-1">
          Jawaban ringkas untuk pertanyaan yang paling sering diajukan seputar transaksi
        </p>
      </div>

      <div class="space-y-3 sm:space-y-3.5">

        <!-- FAQ Item 1 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Bagaimana cara melakukan Transaksi di Poolapack?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Anda dapat melakukan transaksi dengan memilih katalog produk kain yang diinginkan (Flash Sale, Pre Order, atau Ready Stock), menentukan kuantitas sesuai MOQ, melengkapi alamat pengiriman, dan memilih opsi kirim ekspedisi atau ambil di pabrik. Pembayaran dapat diselesaikan via Virtual Account atau PoolPay.
          </div>
        </details>

        <!-- FAQ Item 2 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Bagaimana cara mendapatkan Diskon Sebesar 1%?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Pooler berhak mendapatkan <strong>potongan diskon 1% di setiap transaksi</strong> dan bebas biaya administrasi cukup dengan melakukan <strong>verifikasi identitas (upload KTP atau NPWP)</strong> melalui menu Profil akun. Setelah disetujui tim Poolapack, diskon 1% akan otomatis terpotong di halaman checkout.
          </div>
        </details>

        <!-- FAQ Item 3 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Metode pembayaran apa saja yang tersedia?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Poolapack menyediakan pilihan metode pembayaran resmi: <strong>Mandiri Virtual Account, BCA Transfer, CIMB Virtual Account, BRI Virtual Account (BRIVA), BNI Virtual Account, Permata Virtual Account, Danamon Virtual Account, dan BCA Espay</strong>, serta saldo digital <strong>PoolPay</strong> yang mendukung fitur pembayaran kombinasi (*split payment*).
          </div>
        </details>

        <!-- FAQ Item 4 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Apa itu Poolapack dan apa bedanya Pooler vs Packer?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Poolapack adalah marketplace yang menghubungkan <strong>Pooler (Pembeli)</strong> langsung dengan <strong>Packer (Penjual / Produsen Pabrik)</strong> kain dan packaging tangan pertama dengan harga pabrik dan sistem pembelian berkelompok otomatis.
          </div>
        </details>

        <!-- FAQ Item 5 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Bagaimana cara melacak pesanan?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Status pesanan dapat dilacak pada menu <strong>Transaksi</strong> di akun Anda. Nomor resi pengiriman akan otomatis diperbarui dan dapat dipantau langsung begitu Packer menyerahkan paket ke pihak ekspedisi rekanan.
          </div>
        </details>

        <!-- FAQ Item 6 -->
        <details class="group bg-white rounded-lg border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-open:border-amber-300 group-open:shadow-sm overflow-hidden transition-colors duration-100 cursor-pointer">
          <summary class="flex justify-between items-center font-bold list-none p-4 sm:p-4.5 text-xs sm:text-sm text-[#1E293B] select-none hover:text-amber-800 transition-colors">
            <span>Bagaimana sistem pengembalian dana (refund) ke PoolPay?</span>
            <span class="transition-transform duration-100 group-open:rotate-180 text-neutral-400 group-hover:text-amber-600 shrink-0 ml-3">
              <Icon icon="ph:caret-down-bold" class="w-4 h-4" />
            </span>
          </summary>
          <div class="text-neutral-600 px-4 sm:px-4.5 pb-4 sm:pb-4.5 text-xs sm:text-sm leading-relaxed border-t border-amber-100/70 pt-3 bg-amber-50/20">
            Jika transaksi dibatalkan oleh admin atau sistem (misal karena kendala produksi pabrik), dana yang sudah Anda bayarkan akan <strong>otomatis dikembalikan 100% ke saldo digital PoolPay</strong>. Saldo ini dapat langsung dipakai berbelanja kembali tanpa potongan atau dicairkan ke rekening bank Anda.
          </div>
        </details>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'nuxt/app'
import ShieldFillIcon from '@iconify-vue/ph/shield-fill'
import { searchArticles } from '~/data/content'

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
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
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
</style>
