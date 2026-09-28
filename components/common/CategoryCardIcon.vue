<template>
  <!-- 1. Akun & Keamanan: Siluet Pengguna Cokelat Tua + Roda Gerigi Kuning di kanan bawah -->
  <svg
    v-if="slug === 'akun-keamanan' || slug === 'akun-dan-keamanan'"
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Head -->
    <circle cx="12" cy="8" r="4.5" fill="#381D10" />
    <!-- Torso -->
    <path
      d="M3.5 24C3.5 19 7 16 12 16C14.5 16 16.7 16.8 18.2 18.2C17.5 19.3 17 20.6 17 22C17 22.7 17.1 23.4 17.3 24H3.5Z"
      fill="#381D10"
    />
    <!-- Gear (Kuning Keemasan) -->
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23 17L23.7 18.2C24.3 18.1 24.9 18.2 25.4 18.4L26.4 17.4L27.8 18.8L26.8 19.8C27 20.3 27.1 20.9 27 21.5L28.2 22.2V24.2L27 24.9C26.9 25.5 26.7 26.1 26.4 26.6L27.4 27.6L26 29L25 28C24.5 28.3 23.9 28.5 23.3 28.5L22.6 29.7H20.6L19.9 28.5C19.3 28.5 18.7 28.3 18.2 28L17.2 29L15.8 27.6L16.8 26.6C16.5 26.1 16.3 25.5 16.2 24.9L15 24.2V22.2L16.2 21.5C16.3 20.9 16.5 20.3 16.8 19.8L15.8 18.8L17.2 17.4L18.2 18.4C18.7 18.2 19.3 18.1 19.9 18.2L20.6 17H23ZM21.6 20.5C20.2 20.5 19.1 21.6 19.1 23C19.1 24.4 20.2 25.5 21.6 25.5C23 25.5 24.1 24.4 24.1 23C24.1 21.6 23 20.5 21.6 20.5Z"
      fill="#F8C031"
    />
  </svg>

  <!-- 2. Pesanan: Nota/Kuitansi Cokelat Tua dengan 3 Garis Putih, Gerigi Bawah & Lencana Centang Kuning di KIRI -->
  <svg
    v-else-if="slug === 'pesanan'"
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Kertas Nota -->
    <path
      d="M7 4C7 2.9 7.9 2 9 2H23C24.1 2 25 2.9 25 4V24L22.5 22.5L20 24L17.5 22.5L15 24L12.5 22.5L10 24L7.5 22.5L7 22.8V4Z"
      fill="#381D10"
    />
    <!-- Garis Nota Putih -->
    <rect x="11" y="6" width="10" height="2" rx="1" fill="#FFFFFF" />
    <rect x="11" y="10" width="10" height="2" rx="1" fill="#FFFFFF" />
    <rect x="13" y="14" width="8" height="2" rx="1" fill="#FFFFFF" />
    <!-- Lencana Centang Kuning di SISI KIRI (persis seperti gambar referensi) -->
    <circle cx="11.5" cy="19.5" r="5.5" fill="#F8C031" />
    <path
      d="M9 19.5L10.7 21.2L14.3 17.6"
      stroke="#FFFFFF"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <!-- 3. Pengiriman: Mobil Truk Kargo Kuning dengan Kabin & Roda Cokelat Tua -->
  <svg
    v-else-if="slug === 'pengiriman'"
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Bak Kargo Kuning Emas dengan Outline Cokelat Tua -->
    <rect
      x="3"
      y="8"
      width="15"
      height="12"
      rx="2"
      fill="#F8C031"
      stroke="#381D10"
      stroke-width="2.2"
    />
    <!-- Kabin Depan Cokelat Tua -->
    <path
      d="M18 11.5H23.5C24.2 11.5 24.8 11.9 25.1 12.5L27.5 16C27.8 16.4 28 17 28 17.5V20H18V11.5Z"
      fill="#381D10"
    />
    <!-- Kaca Kabin Kuning -->
    <path d="M20 13.5H23.2L25.2 16.5H20V13.5Z" fill="#F8C031" />
    <!-- Roda Cokelat Tua dengan Titik Putih -->
    <circle cx="8" cy="22.5" r="3.2" fill="#381D10" />
    <circle cx="8" cy="22.5" r="1.2" fill="#FFFFFF" />
    <circle cx="22.5" cy="22.5" r="3.2" fill="#381D10" />
    <circle cx="22.5" cy="22.5" r="1.2" fill="#FFFFFF" />
  </svg>

  <!-- 4. Pembayaran: Dua Lembar Uang (Kuning di Belakang, Cokelat Tua di Depan) -->
  <svg
    v-else-if="slug === 'pembayaran'"
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Uang Belakang (Kuning Emas, menonjol di kiri bawah) -->
    <rect
      x="3"
      y="11"
      width="19"
      height="13"
      rx="2.5"
      fill="none"
      stroke="#F8C031"
      stroke-width="2.5"
    />
    <!-- Uang Depan (Cokelat Tua) -->
    <rect x="7" y="7" width="22" height="14" rx="2.5" fill="#381D10" />
    <!-- Oval Tengah Putih -->
    <circle cx="18" cy="14" r="3" fill="#FFFFFF" />
    <!-- Titik Putih Sudut -->
    <circle cx="10.5" cy="14" r="1.2" fill="#FFFFFF" />
    <circle cx="25.5" cy="14" r="1.2" fill="#FFFFFF" />
  </svg>

  <!-- 5. Promo / Promosi: Label Harga Miring Cokelat Tua dengan Aksen Kuning di Bawah -->
  <svg
    v-else-if="slug === 'promo' || slug === 'promo-voucher'"
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Aksen Bayangan Kuning di Bawah Tag -->
    <path
      d="M13.5 8L25.5 20L19.5 26L7.5 14V8H13.5Z"
      fill="#F8C031"
      transform="translate(-2, 2)"
    />
    <!-- Badan Tag Cokelat Tua -->
    <path
      d="M14 6L25.5 17.5C26.1 18.1 26.1 19.1 25.5 19.7L19.7 25.5C19.1 26.1 18.1 26.1 17.5 25.5L6 14C5.4 13.4 5 12.6 5 11.8V7C5 5.9 5.9 5 7 5H11.8C12.6 5 13.4 5.4 14 6Z"
      fill="#381D10"
    />
    <!-- Lubang Tag Putih -->
    <circle cx="9.5" cy="9.5" r="2" fill="#FFFFFF" />
  </svg>

  <!-- 6. Lainnya / Kategori Produk: 4 Kotak Membulat (2x2 Grid) Berselang Cokelat Tua & Kuning -->
  <svg
    v-else
    :class="[sizeClass || 'w-7 h-7 sm:w-8 sm:h-8', 'shrink-0']"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Kiri Atas: Cokelat Tua -->
    <rect x="5" y="5" width="9" height="9" rx="2.5" fill="#381D10" />
    <!-- Kanan Atas: Kuning Emas -->
    <rect x="18" y="5" width="9" height="9" rx="2.5" fill="#F8C031" />
    <!-- Kiri Bawah: Kuning Emas -->
    <rect x="5" y="18" width="9" height="9" rx="2.5" fill="#F8C031" />
    <!-- Kanan Bawah: Cokelat Tua -->
    <rect x="18" y="18" width="9" height="9" rx="2.5" fill="#381D10" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  slug: string
  sizeClass?: string
}>()
</script>
