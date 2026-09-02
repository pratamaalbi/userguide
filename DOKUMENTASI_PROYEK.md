# Dokumentasi Proyek: Poolapack User Guide

## 📌 Deskripsi Singkat
**Poolapack User Guide** adalah sebuah website *Single Page Application* (SPA) yang berfungsi sebagai pusat panduan, dokumentasi, dan resolusi kendala bagi pengguna platform Poolapack. Aplikasi ini dirancang interaktif untuk melayani dua tipe pengguna utama platform:
1. **Pooler (Pembeli)**
2. **Packer (Penjual)**

Tujuan utama dari proyek ini adalah merapikan desain antarmuka panduan sebelumnya yang tidak konsisten dan menyajikan alur informasi (troubleshooting) secara lebih intuitif dan *user-friendly*.

---

## 🛠️ Teknologi Utama (Tech Stack)
Aplikasi ini dibangun menggunakan tumpukan teknologi modern untuk memastikan performa yang cepat dan pengembangan yang efisien:
- **Frontend Framework**: Nuxt 3 (Vue.js 3)
- **Build Tool**: Vite / Nitro (bawaan Nuxt 3 untuk performa tinggi)
- **Routing**: File-system based routing bawaan Nuxt 3
- **Styling**: Tailwind CSS (*Utility-first framework* untuk penataan gaya yang cepat dan konsisten)
- **Ikonografi**: Lucide Vue (`lucide-vue-next`)

---

## 📂 Struktur Navigasi & Halaman Saat Ini
Aplikasi memiliki hirarki *routing* yang rapi. Berikut adalah halaman yang sudah tersedia:

- **`/` (Beranda / Home)**: Halaman sambutan di mana pengguna dapat memilih jalur (role) panduan yang ingin mereka baca.
- **Jalur Pooler (Pembeli)**:
  - `/pooler/register`: Panduan langkah-langkah pendaftaran akun, *login*, serta otorisasi.
  - `/pooler/shopping`: Panduan alur berbelanja, *checkout*, dan pemahaman tentang label status produk (seperti *Ready Stock*, *Pre-Order*, dan *Flash Sale*).
  - `/pooler/orders`: Panduan pelacakan progres pesanan reguler, PO, dan RFQ.
  - `/pooler/rfq`: Panduan pengajuan RFQ Produk (Kain) & RFQ Manufaktur (Simulasi Produk Jadi 3D dengan Custom Logo), serta opsi RFQ Prioritas.
  - `/pooler/points`: Panduan lengkap sistem reward PoolPoint (diskon min 50 - max 100 poin), dompet refund otomatis PoolPay, dan info pengembangan PoolCoin.
  - `/pooler/account`: Panduan pengaturan akun dan verifikasi identitas (KTP/NPWP) untuk mendapatkan diskon 1% setiap transaksi.
- **Jalur Packer (Penjual)**:
  - `/packer/products`: Panduan cara menambahkan produk baru dan mengatur status operasional (ketersediaan) produk bagi penjual.

---

## ✨ Fitur Unggulan (Core Features)

1. **Komponen Peringatan Cerdas (`<QAAlert />`)**
   Fitur yang sangat inovatif di mana dokumentasi terintegrasi langsung dengan peringatan *Quality Assurance* (QA). Kotak alert ini secara dinamis memberi tahu pengguna jika pada halaman yang sedang mereka baca terdapat *bug* yang diketahui (contoh: peringatan Error 401) atau jika fiturnya masih berstatus *On-Development*.

2. **Sistem Navigasi yang Seamless**
   - **Sidebar Responsif**: Menggunakan struktur akordion (buka-tutup) agar pengguna mudah melompat antar topik panduan. Pada mode ponsel (*mobile*), sidebar ini otomatis berubah menjadi menu *hamburger* yang hemat tempat.
   - **Breadcrumbs**: Navigasi jejak di bagian atas untuk mencegah pengguna merasa tersesat (contoh: `Beranda > Pooler Guide > Cara Berbelanja`).

---

## 🚀 Rencana Pengembangan (Roadmap)

Untuk ke depannya, ini adalah prioritas pengembangan yang akan dilakukan:
1. **Eskalasi Halaman Packer**: Menambahkan halaman-halaman panduan yang belum tersedia untuk *Packer*, seperti Manajemen Pesanan (proses terima/tolak order), Pengaturan Finansial/Tarik Saldo, dan Manajemen Profil Toko.
2. **Kepatuhan SOP `README.md`**: Mengikuti Standard Operating Procedure proyek, di mana setiap penambahan fitur/halaman baru akan didokumentasikan alurnya di dalam file `README.md`.
3. **Penyempurnaan Estetika (Polish & Animations)**: Menambahkan *micro-animations* pada *hover*, *loading state*, dan transisi pergantian halaman agar aplikasi terasa jauh lebih *premium* dan tidak kaku.
4. **Dinamisasi Peringatan QA**: Memungkinkan data di dalam `<QAAlert />` dapat diambil (*fetch*) langsung dari *database* atau sistem *ticketing* internal, alih-alih ditulis secara manual (*hardcode*).

---
*Dokumen ini merupakan intisari operasional dan teknis dari proyek Poolapack User Guide untuk memberikan gambaran cepat (*high-level overview*) kepada pengembang atau pemangku kepentingan (stakeholders).*
