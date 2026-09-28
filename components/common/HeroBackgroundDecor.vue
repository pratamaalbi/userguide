<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
    <!-- SISI KIRI: Motif Visual Marketplace E-Commerce (Kantong Belanja, Voucher Diskon %, Paket Pengiriman, Dompet PoolPay, Perisai Perlindungan) -->
    <div class="absolute top-2 sm:top-4 -left-6 sm:left-0 md:left-2 lg:left-4 xl:left-8 opacity-35 sm:opacity-45 lg:opacity-50">
      <svg
        class="w-48 sm:w-56 md:w-64 lg:w-72 h-72 sm:h-84 md:h-96"
        viewBox="0 0 250 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- 1. Kantong Belanja E-Commerce Marketplace (Shopping Bag) -->
        <g transform="translate(18, 14)">
          <!-- Handle Tas Belanja -->
          <path
            d="M22 22 V11 C22 4.5 48 4.5 48 11 V22"
            fill="none"
            stroke="#F8C031"
            stroke-opacity="0.55"
            stroke-width="2"
            stroke-linecap="round"
          />
          <!-- Badan Tas Belanja -->
          <rect
            x="0"
            y="20"
            width="70"
            height="72"
            rx="12"
            fill="#F8C031"
            fill-opacity="0.22"
            stroke="#F8C031"
            stroke-opacity="0.45"
            stroke-width="1.6"
          />
          <!-- Aksen Lengkungan Logo Poolapack di Tas Belanja -->
          <path
            d="M24 46 C24 58 46 58 46 46"
            fill="none"
            stroke="#F59E0B"
            stroke-opacity="0.45"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </g>

        <!-- 2. Kupon Voucher Diskon Promo Marketplace (%) -->
        <g transform="translate(136, 18) rotate(6)">
          <!-- Bentuk Tiket Kupon dengan Lekukan Tiket -->
          <path
            d="M0 8 C0 3.6 3.6 0 8 0 H66 C70.4 0 74 3.6 74 8 V22 C70 22 66.5 25.5 66.5 29.5 C66.5 33.5 70 37 74 37 V52 C74 56.4 70.4 60 66 60 H8 C3.6 60 0 56.4 0 52 V37 C4 37 7.5 33.5 7.5 29.5 C7.5 25.5 4 22 0 22 Z"
            fill="#FFFBEB"
            fill-opacity="0.55"
            stroke="#FBBF24"
            stroke-opacity="0.45"
            stroke-width="1.5"
          />
          <!-- Garis Putus-Putus Sobekan Kupon -->
          <line
            x1="26"
            y1="0"
            x2="26"
            y2="60"
            stroke="#F8C031"
            stroke-opacity="0.4"
            stroke-width="1.2"
            stroke-dasharray="3 3"
          />
          <!-- Simbol Persen Diskon (%) -->
          <circle cx="43" cy="22" r="3.2" fill="#F8C031" fill-opacity="0.55" />
          <line
            x1="40"
            y1="38"
            x2="54"
            y2="20"
            stroke="#F8C031"
            stroke-opacity="0.55"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <circle cx="51" cy="38" r="3.2" fill="#F8C031" fill-opacity="0.55" />
          <!-- Garis Kode Kupon -->
          <line x1="8" y1="24" x2="18" y2="24" stroke="#F8C031" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round" />
          <line x1="8" y1="34" x2="16" y2="34" stroke="#F8C031" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round" />
        </g>

        <!-- 3. Paket Pengiriman E-Commerce dengan Label Resi (Marketplace Courier Parcel) -->
        <g transform="translate(16, 128)">
          <!-- Top Face -->
          <path
            d="M40 8 L72 23 L40 38 L8 23 Z"
            fill="#F8C031"
            fill-opacity="0.25"
            stroke="#F8C031"
            stroke-opacity="0.45"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <!-- Left Face -->
          <path
            d="M8 23 L40 38 L40 70 L8 55 Z"
            fill="#F8C031"
            fill-opacity="0.16"
            stroke="#F8C031"
            stroke-opacity="0.35"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <!-- Right Face -->
          <path
            d="M40 38 L72 23 L72 55 L40 70 Z"
            fill="#F8C031"
            fill-opacity="0.12"
            stroke="#F8C031"
            stroke-opacity="0.3"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <!-- Lakban Segel Paket -->
          <line
            x1="40"
            y1="8"
            x2="40"
            y2="38"
            stroke="#F59E0B"
            stroke-opacity="0.45"
            stroke-width="1.5"
            stroke-dasharray="3 2"
          />
          <!-- Label Resi Pengiriman Mini di Muka Paket -->
          <rect
            x="14"
            y="35"
            width="18"
            height="14"
            rx="2"
            fill="#FFFDF7"
            fill-opacity="0.75"
            stroke="#F8C031"
            stroke-opacity="0.4"
            stroke-width="1"
          />
          <line x1="17" y1="39" x2="27" y2="39" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="17" y1="43" x2="24" y2="43" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
        </g>

        <!-- 4. Dompet Digital & Saldo PoolPay (Digital Wallet) -->
        <g transform="translate(138, 126)">
          <!-- Koin Saldo yang Muncul di Atas Dompet -->
          <circle
            cx="26"
            cy="10"
            r="11"
            fill="#F8C031"
            fill-opacity="0.32"
            stroke="#F8C031"
            stroke-opacity="0.5"
            stroke-width="1.4"
          />
          <!-- Badan Dompet Digital -->
          <rect
            x="0"
            y="10"
            width="66"
            height="50"
            rx="10"
            fill="#FEF3C7"
            fill-opacity="0.32"
            stroke="#F8C031"
            stroke-opacity="0.4"
            stroke-width="1.5"
          />
          <!-- Lidah Pengunci Dompet -->
          <path
            d="M42 24 H66 V44 H42 C37 44 33 40 33 34 C33 28 37 24 42 24 Z"
            fill="#F8C031"
            fill-opacity="0.28"
            stroke="#F8C031"
            stroke-opacity="0.45"
            stroke-width="1.4"
          />
          <circle cx="45" cy="34" r="2.8" fill="#FFFDF7" stroke="#F8C031" stroke-opacity="0.55" stroke-width="1" />
        </g>

        <!-- 5. Perisai Transaksi Aman & Terverifikasi (Buyer Protection Shield) -->
        <g transform="translate(24, 250)">
          <path
            d="M30 4 C45 4 56 11 56 21 C56 42 30 55 30 55 C30 55 4 42 4 21 C4 11 15 4 30 4 Z"
            fill="#F8C031"
            fill-opacity="0.18"
            stroke="#F8C031"
            stroke-opacity="0.38"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <!-- Tanda Centang Verifikasi Belanja Aman -->
          <path
            d="M21 27 L27 33 L39 19"
            fill="none"
            stroke="#F59E0B"
            stroke-opacity="0.55"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>

        <!-- 6. Koin Reward Poin Belanja (PoolPoint Rewards) -->
        <g transform="translate(138, 246)">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="#FEF08A"
            fill-opacity="0.2"
            stroke="#F8C031"
            stroke-opacity="0.4"
            stroke-width="1.5"
          />
          <circle
            cx="32"
            cy="32"
            r="21"
            fill="none"
            stroke="#F59E0B"
            stroke-opacity="0.35"
            stroke-width="1.4"
            stroke-dasharray="3 3"
          />
          <!-- Bintang / Emblem Poin Belanja -->
          <path
            d="M32 18 L34.8 26.5 H43.8 L36.5 31.8 L39.3 40.2 L32 35 L24.7 40.2 L27.5 31.8 L20.2 26.5 H29.2 Z"
            fill="#F8C031"
            fill-opacity="0.45"
          />
        </g>
      </svg>
    </div>

    <!-- SISI KANAN: Motif Visual Marketplace E-Commerce (Toko Merchant Packer, Tag Harga Produk, Troli Belanja, Resi Tracking, Bintang Rating) -->
    <div class="absolute top-2 sm:top-4 -right-6 sm:right-0 md:right-2 lg:right-4 xl:right-8 opacity-35 sm:opacity-45 lg:opacity-50">
      <svg
        class="w-48 sm:w-56 md:w-64 lg:w-72 h-72 sm:h-84 md:h-96"
        viewBox="0 0 250 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- 1. Gerai Toko Merchant Penjual (Toko Packer Marketplace) -->
        <g transform="translate(24, 15)">
          <!-- Kanopi Tenda Toko Online -->
          <path
            d="M6 21 L13 8 H59 L66 21 Z"
            fill="#F8C031"
            fill-opacity="0.28"
            stroke="#F8C031"
            stroke-opacity="0.5"
            stroke-width="1.6"
            stroke-linejoin="round"
          />
          <!-- Garis Strip Tenda Toko -->
          <line x1="20" y1="8" x2="20" y2="21" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="1.4" />
          <line x1="36" y1="8" x2="36" y2="21" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="1.4" />
          <line x1="52" y1="8" x2="52" y2="21" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="1.4" />
          <!-- Gelombang Bawah Kanopi -->
          <path
            d="M6 21 Q12 26 18 21 Q24 26 30 21 Q36 26 42 21 Q48 26 54 21 Q60 26 66 21"
            fill="none"
            stroke="#F8C031"
            stroke-opacity="0.5"
            stroke-width="1.4"
          />
          <!-- Badan Gedung Toko Merchant -->
          <rect
            x="11"
            y="23"
            width="50"
            height="46"
            rx="4"
            fill="#FEF3C7"
            fill-opacity="0.25"
            stroke="#F8C031"
            stroke-opacity="0.38"
            stroke-width="1.5"
          />
          <!-- Pintu Toko Online -->
          <rect
            x="27"
            y="42"
            width="18"
            height="27"
            rx="2"
            fill="#FFFDF7"
            fill-opacity="0.65"
            stroke="#F8C031"
            stroke-opacity="0.4"
            stroke-width="1.2"
          />
          <!-- Jendela Etalase Toko Kiri & Kanan -->
          <rect x="16" y="30" width="13" height="12" rx="2" fill="#F8C031" fill-opacity="0.25" />
          <rect x="43" y="30" width="13" height="12" rx="2" fill="#F8C031" fill-opacity="0.25" />
        </g>

        <!-- 2. Tag Harga & Produk Marketplace (Price Tag) -->
        <g transform="translate(144, 20) rotate(7)">
          <path
            d="M10 0 H48 C53 0 58 5 58 10 V54 C58 59 53 64 48 64 H10 C5 64 0 59 0 54 V10 C0 5 5 0 10 0 Z"
            fill="#FFFBEB"
            fill-opacity="0.45"
            stroke="#FBBF24"
            stroke-opacity="0.4"
            stroke-width="1.5"
          />
          <!-- Lubang Tali Tag -->
          <circle cx="29" cy="13" r="4.2" fill="#FFFDF7" stroke="#F8C031" stroke-opacity="0.5" stroke-width="1.4" />
          <!-- Garis Info Harga & Barcode Produk -->
          <line x1="12" y1="32" x2="46" y2="32" stroke="#F8C031" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="3 3" />
          <rect x="14" y="42" width="30" height="10" rx="2" fill="#F8C031" fill-opacity="0.25" />
          <line x1="18" y1="45" x2="18" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="22" y1="45" x2="22" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="26" y1="45" x2="26" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="31" y1="45" x2="31" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="36" y1="45" x2="36" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
          <line x1="40" y1="45" x2="40" y2="49" stroke="#625840" stroke-opacity="0.4" stroke-width="1" />
        </g>

        <!-- 3. Keranjang Belanja / Troli E-Commerce (Marketplace Cart) -->
        <g transform="translate(142, 130)">
          <!-- Keranjang Troli -->
          <path
            d="M4 8 H14 L23 44 H55 L63 18 H18"
            fill="#FDE68A"
            fill-opacity="0.22"
            stroke="#F8C031"
            stroke-opacity="0.5"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Garis Kisi-kisi Keranjang -->
          <line x1="26" y1="26" x2="57" y2="26" stroke="#F8C031" stroke-opacity="0.35" stroke-width="1.4" />
          <line x1="30" y1="35" x2="53" y2="35" stroke="#F8C031" stroke-opacity="0.35" stroke-width="1.4" />
          <!-- Roda Keranjang Belanja -->
          <circle cx="28" cy="54" r="5" fill="#F8C031" fill-opacity="0.35" stroke="#F8C031" stroke-opacity="0.55" stroke-width="1.6" />
          <circle cx="49" cy="54" r="5" fill="#F8C031" fill-opacity="0.35" stroke="#F8C031" stroke-opacity="0.55" stroke-width="1.6" />
        </g>

        <!-- 4. Resi Pengiriman & Pelacakan Pesanan (Order Tracking Waybill) -->
        <g transform="translate(26, 132)">
          <rect
            width="56"
            height="66"
            rx="8"
            fill="#FFFDF7"
            fill-opacity="0.45"
            stroke="#F8C031"
            stroke-opacity="0.38"
            stroke-width="1.5"
          />
          <!-- Badge Sukses / Sampai -->
          <circle cx="28" cy="18" r="8" fill="#F8C031" fill-opacity="0.28" stroke="#F8C031" stroke-opacity="0.48" stroke-width="1.2" />
          <path d="M24 18 L27 21 L33 15" fill="none" stroke="#F59E0B" stroke-opacity="0.65" stroke-width="1.6" stroke-linecap="round" />
          <!-- Garis Status Pelacakan Ekspedisi -->
          <line x1="10" y1="36" x2="46" y2="36" stroke="#F8C031" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" />
          <line x1="10" y1="44" x2="38" y2="44" stroke="#F8C031" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" />
          <line x1="10" y1="52" x2="26" y2="52" stroke="#F8C031" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" />
        </g>

        <!-- 5. Lengkungan Logo Khas Poolapack Marketplace (Pooling Ribbon Arc) -->
        <g transform="translate(138, 246)">
          <path
            d="M62 12 C32 12 10 34 10 62 C10 67 14 70 19 70 C24 70 28 67 28 62 C28 46 40 32 62 32"
            fill="none"
            stroke="#F8C031"
            stroke-opacity="0.45"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M72 4 C27 4 0 30 0 67 C0 73 4 77 10 77 C16 77 20 73 20 67 C20 42 42 20 72 20"
            fill="none"
            stroke="#FBBF24"
            stroke-opacity="0.3"
            stroke-width="1.5"
            stroke-dasharray="4 3"
            stroke-linecap="round"
          />
        </g>

        <!-- 6. Bintang Ulasan & Reputasi Toko (5-Star Rating Badge) -->
        <g transform="translate(28, 252)">
          <rect
            width="62"
            height="46"
            rx="8"
            fill="#FEF3C7"
            fill-opacity="0.3"
            stroke="#F8C031"
            stroke-opacity="0.35"
            stroke-width="1.5"
          />
          <!-- Bintang Rating Terpercaya -->
          <path
            d="M31 14 L33.5 21 H41 L35 25.5 L37.2 32.5 L31 28.2 L24.8 32.5 L27 25.5 L21 21 H28.5 Z"
            fill="#F8C031"
            fill-opacity="0.55"
          />
          <!-- 3 Titik Rating -->
          <circle cx="16" cy="38" r="1.8" fill="#F8C031" fill-opacity="0.4" />
          <circle cx="31" cy="38" r="1.8" fill="#F8C031" fill-opacity="0.4" />
          <circle cx="46" cy="38" r="1.8" fill="#F8C031" fill-opacity="0.4" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
// Desain hiasan geometris khas Poolapack Marketplace:
// Sisi Kiri: Kantong Belanja (Shopping Bag), Kupon Voucher Diskon %, Paket Kiriman Kurir, Dompet Digital PoolPay, Perisai Belanja Aman, Koin Poin Reward.
// Sisi Kanan: Toko Merchant (Packer Storefront), Tag Harga Produk, Troli Belanja (Cart), Resi Pelacakan Pesanan, Lengkungan Logo Poolapack, Bintang Rating 5-Star.
</script>
