<template>
  <div class="min-h-screen bg-gradient-to-b from-[#FFFDF6] to-white">
    <!-- Header/Navbar -->
    <header class="border-b border-gray-100 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-[#FFB800] to-[#F5A623]">
              <span class="text-sm font-bold text-white">P</span>
            </div>
            <span class="text-lg font-bold text-gray-900">Poolapack Care</span>
          </div>

          <!-- Right side: Bell + Profile -->
          <div class="flex items-center gap-4">
            <button class="relative">
              <Bell class="h-5 w-5 text-gray-600" />
              <span class="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FFB800]"></span>
            </button>
            <div class="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
              <div class="h-6 w-6 rounded-full bg-gradient-to-br from-[#F5A623] to-[#8B1E22]"></div>
              <span class="text-sm font-medium text-gray-700">Bisnis Maju</span>
              <ChevronDown class="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- Left Column: Illustration -->
        <div class="flex items-center justify-center">
          <div class="relative h-80 w-80">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poolapack%20Care%20-%20Pembeli-RiinI2SHWmg93Vo9eeSAZlfxPCoEUj.png"
              :alt="activeRole === 'pembeli' ? 'Pembeli illustration' : 'Penjual illustration'"
              class="h-full w-full object-contain"
            />
          </div>
        </div>

        <!-- Right Column: Content -->
        <div class="flex flex-col justify-center">
          <!-- Role Tabs -->
          <div class="mb-8 flex gap-4">
            <button
              v-for="role in ['pembeli', 'penjual']"
              :key="role"
              @click="activeRole = role"
              :class="[
                'px-6 py-2 font-semibold transition-all',
                activeRole === role
                  ? 'rounded bg-[#FFB800] text-white shadow-md'
                  : 'rounded bg-gray-200 text-gray-600 hover:bg-gray-300'
              ]"
            >
              {{ role === 'pembeli' ? 'Pembeli' : 'Penjual' }}
            </button>
          </div>

          <!-- Heading -->
          <h1 class="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Selamat Pagi,<br />Ada yang bisa kami bantu?
          </h1>

          <!-- Search Bar -->
          <div class="relative">
            <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Ketik kata kunci (misal: promosi berlangsung)"
              class="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Category Menu Section -->
    <section class="relative bg-gradient-to-b from-[#FFFDF6] via-[#FFFEF8] to-white py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center text-xl font-semibold text-gray-900">
          Pilih menu yang menjadi kendala Anda
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <component
            v-for="category in categories"
            :key="category.id"
            :is="'div'"
            @click="activeCategory = category.id"
            class="group cursor-pointer rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#F5A623] hover:shadow-lg hover:-translate-y-1"
          >
            <div class="mb-3 inline-flex rounded-lg bg-gradient-to-br from-[#FFB800]/10 to-[#F5A623]/10 p-3 text-[#F5A623]">
              <component :is="category.icon" class="h-6 w-6" />
            </div>
            <h3 class="font-semibold text-gray-900 group-hover:text-[#F5A623]">
              {{ category.name }}
            </h3>
          </component>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 class="mb-12 text-center text-2xl font-bold text-gray-900">
        Pertanyaan yang sering ditanya
      </h2>

      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <!-- Left decorative element -->
        <div class="hidden lg:flex">
          <div class="relative h-64 w-64">
            <div class="absolute -left-12 top-16 h-16 w-16 rounded-full bg-[#FFB800]/10 p-2">
              <div class="flex h-full w-full items-center justify-center rounded-full bg-white shadow-md">
                <span class="text-2xl">?</span>
              </div>
            </div>
            <div class="absolute -bottom-4 left-8 h-12 w-12 rounded-full bg-red-500 p-1 shadow-lg">
              <div class="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span class="text-lg">💡</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-3 lg:col-span-1">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="rounded-lg border border-gray-200 bg-white transition-all hover:border-[#F5A623] hover:shadow-md"
          >
            <button
              @click="expandedFaq = expandedFaq === index ? -1 : index"
              class="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span class="font-medium text-gray-900">{{ faq.question }}</span>
              <ChevronDown
                :class="[
                  'h-5 w-5 transition-transform text-gray-600',
                  expandedFaq === index ? 'rotate-180' : ''
                ]"
              />
            </button>
            <div
              v-if="expandedFaq === index"
              class="border-t border-gray-100 px-5 py-4 text-sm text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>

        <!-- Right decorative element -->
        <div class="hidden lg:flex">
          <div class="relative h-64 w-64">
            <div class="absolute -right-12 top-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFB800] shadow-lg">
              <span class="text-3xl">💬</span>
            </div>
            <div class="absolute -bottom-8 right-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B1E22] shadow-lg">
              <span class="text-2xl">•••</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 bg-gradient-to-b from-[#FFFDF6] to-[#FFF9E6] py-16">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h3 class="mb-2 text-lg font-bold text-gray-900">Layanan Pengaduan</h3>
        <p class="mb-4 text-sm text-gray-600">
          Poolapack - Group Buying Marketplace
        </p>
        <div class="space-y-2 text-sm text-gray-600">
          <p>Email: info@Poolapack.com</p>
          <p>
            Jl Batununggal Indah Raya No. 369, Batununggal, Kec. Batununggal, Kota Bandung, Jawa Barat, 40266
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  Bell,
  ChevronDown,
  Search,
  User,
  Package,
  Truck,
  CreditCard,
  Tag,
  Grid3x3
} from 'lucide-vue-next'

const activeRole = ref('pembeli')
const activeCategory = ref('account')
const expandedFaq = ref(0)
const searchQuery = ref('')

const categories = [
  { id: 'account', name: 'Akun & Keamanan', icon: User },
  { id: 'order', name: 'Pesanan', icon: Package },
  { id: 'shipping', name: 'Pengiriman', icon: Truck },
  { id: 'payment', name: 'Pembayaran', icon: CreditCard },
  { id: 'promo', name: 'Promosi', icon: Tag },
  { id: 'other', name: 'Lainnya', icon: Grid3x3 }
]

const faqs = [
  {
    question: 'Bagaimana cara melakukan Transaksi?',
    answer: 'Untuk melakukan transaksi di Poolapack, pertama-tama Anda perlu membuat akun dan mengisi data diri lengkap. Setelah itu, Anda dapat memilih produk yang ingin dibeli, menambahkannya ke keranjang, dan melanjutkan ke proses checkout. Pilih metode pembayaran yang tersedia dan konfirmasi pesanan Anda.'
  },
  {
    question: 'Berapa lama proses pengiriman barang?',
    answer: 'Waktu pengiriman tergantung pada lokasi Anda dan pilihan kurir. Umumnya, pengiriman ke kota-kota besar memerlukan waktu 1-3 hari kerja, sedangkan ke daerah terpencil bisa memerlukan waktu lebih lama. Informasi detail pengiriman akan ditampilkan sebelum Anda menyelesaikan pesanan.'
  },
  {
    question: 'Apa saja metode pembayaran yang tersedia?',
    answer: 'Poolapack menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GCash, PayMaya), kartu kredit, dan cicilan tanpa bunga. Semua transaksi dilindungi dengan enkripsi tingkat tinggi untuk keamanan data Anda.'
  },
  {
    question: 'Bagaimana cara mengembalikan barang yang sudah dibeli?',
    answer: 'Jika Anda ingin mengembalikan barang, hubungi tim customer service kami melalui aplikasi atau email dalam waktu 7 hari setelah menerima barang. Jelaskan alasan pengembalian dan ikuti petunjuk untuk mengirimkan barang kembali dengan aman.'
  },
  {
    question: 'Apakah ada biaya tersembunyi dalam transaksi?',
    answer: 'Semua biaya akan ditampilkan dengan jelas sebelum Anda menyelesaikan pembayaran. Tidak ada biaya tersembunyi. Biaya yang ditampilkan meliputi harga produk, biaya pengiriman, dan pajak (jika berlaku).'
  },
  {
    question: 'Bagaimana cara menggunakan kode promosi?',
    answer: 'Setelah Anda memasukkan produk ke keranjang, Anda akan melihat field untuk memasukkan kode promosi. Masukkan kode promosi yang valid dan potongan harga akan diterapkan secara otomatis pada total harga Anda.'
  },
  {
    question: 'Apa yang harus dilakukan jika ada masalah dengan pesanan?',
    answer: 'Jika ada masalah dengan pesanan Anda, silakan hubungi tim customer service kami segera. Anda dapat menghubungi kami melalui live chat, email, atau telepon. Tim kami siap membantu menyelesaikan masalah Anda dengan cepat dan profesional.'
  }
]
</script>
