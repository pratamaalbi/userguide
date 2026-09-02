# Poolapack User Guide

Ini adalah repositori untuk aplikasi **User Guide Poolapack**, sebuah pusat panduan interaktif bagi pengguna (Pooler/Pembeli) dan penjual (Packer).

---

## 📋 Rencana Implementasi (Implementation Plan)
Proyek ini dibangun untuk merapikan desain UI panduan pengguna sebelumnya yang tidak konsisten, sekaligus mengintegrasikan laporan *Quality Assurance* (QA) ke dalam *alert* dinamis di dalam aplikasi.

### Teknologi yang Digunakan
- **Frontend Framework**: Nuxt 3 (Vue.js framework dengan fitur *auto-imports* dan performa optimal).
- **Styling**: Tailwind CSS (*Utility-first* CSS framework).
- **Routing**: File-system based routing (Bawaan Nuxt 3).
- **Ikonografi**: Lucide Vue (`lucide-vue-next`).

---

> **Catatan Pengembangan:** Sesuai dengan prosedur pengembangan (SOP) proyek ini, **setiap pembuatan fitur baru atau penambahan halaman panduan akan selalu dicatat dan diperbarui secara berkala di dalam file `README.md` ini beserta penjelasan alurnya**.

## ✨ Fitur yang Tersedia di Web User Guide

Berikut adalah daftar fitur utama yang sudah dibangun di dalam *web* panduan ini:

### 1. Sistem Navigasi & Tata Letak (*Layout*)
- **Sidebar Kiri Persisten**: Menu navigasi akordion (*dropdown*) yang mengelompokkan topik "Pooler Guide" dan "Packer Guide".
- **Desain Responsif (Mobile Friendly)**: Sidebar utama akan otomatis bersembunyi dan berubah menjadi menu *Hamburger* di pojok kiri atas saat diakses melalui *smartphone/mobile*.
- **Breadcrumbs**: Navigasi hirarkis di bagian atas setiap halaman panduan untuk mengetahui posisi halaman saat ini (Contoh: `Beranda > Pooler Guide > Cara Berbelanja`).

### 2. Komponen Khusus (QA Alert Box)
- Tersedia komponen dinamis `<QAAlert />` yang terintegrasi dengan laporan hasil pengujian (QA).
- Menampilkan peringatan *Bug*, status *On-Development*, maupun informasi penting (seperti *Error 401* pada Manajemen Produk, atau *Error Google Login*).

### 3. Halaman Panduan Interaktif
- **Halaman Beranda (`/`)**: Pemilihan peran *User* (Pooler vs Packer) dilengkapi ilustrasi "Mulai Cepat" berupa video 2 menit.
- **Halaman Registrasi Pooler (`/pooler/register`)**: Panduan *step-by-step* (langkah 1 s.d. 6) untuk melakukan registrasi dan *login*, lengkap dengan catatan kendala bahasa dan otorisasi.
- **Halaman Cara Berbelanja (`/pooler/shopping`)**: 
  - Penjelasan **Kenali Jenis Produk** berdasarkan label warnanya (Hijau: *Ready Stock*, Ungu: *Pre-Order*, Emas: *Flash Sale*).
  - Alur pembelian 2 opsi (Mengisi alamat lebih dulu VS Langsung *checkout* produk).
- **Halaman Manajemen Pesanan (`/pooler/orders`)**: Panduan melacak progres dan riwayat transaksi (membedakan pesanan *Reguler*, *Pre-Order*, dan *RFQ*).
- **Halaman Pengajuan RFQ & Manufaktur (`/pooler/rfq`)**: 
  - **RFQ Produk**: Panduan mengajukan permintaan produk non-aktif agar diaktifkan kembali / kain baru yang belum ada di katalog, serta penjelasan mengenai fitur **RFQ Prioritas (Biaya Komitmen Rp1.000.000)**.
  - **RFQ Manufaktur**: Panduan pemesanan produksi pakaian/produk kustom (Hoodie, Celana, Jaket, Dress, Hijab) lengkap dengan pratinjau **simulasi 3D** dan pengaturan posisi logo/artwork.
- **Halaman PoolPoint, PoolPay & PoolCoin (`/pooler/points`)**:
  - **PoolPoint**: Diskon belanja skala besar (digunakan min 50 - max 100 point per produk) yang diperoleh otomatis setelah seluruh alur transaksi pesanan berstatus *Selesai*.
  - **PoolPay**: Dompet penampung refund otomatis dari transaksi yang dibatalkan oleh admin (contoh: refund pembatalan Rp9.000.000) yang bisa dicarikan ke rekening bank.
  - **PoolCoin**: Informasi fitur koin marketplace yang sedang dalam tahap pengembangan (1 PoolCoin = Rp1 Perak).
- **Halaman Pengaturan Akun & Verifikasi (`/pooler/account`)**: Panduan lengkap memverifikasi identitas menggunakan KTP atau NPWP guna mendapatkan keuntungan berupa **diskon 1% pada setiap transaksi/pembelian**.
- **Halaman Manajemen Produk Packer (`/packer/products`)**: Panduan menambahkan dan mengatur *toggle status* produk penjual.

---

## 🔄 Alur Penggunaan Aplikasi (Flow)

Bagaimana aplikasi ini beroperasi dari sisi *user*?

1. **Titik Masuk (Entry Point)**
   *User* tiba di halaman Beranda. Mereka diberikan dua jalur utama berdasarkan peran bisnis mereka di Poolapack: **Sebagai Pooler (Pembeli)** atau **Sebagai Packer (Penjual)**.

2. **Eksplorasi Panduan (Navigasi)**
   - Jika *user* masuk ke bagian Pooler, *sidebar* secara otomatis mekar (*expand*) menampilkan sub-topik (Registrasi, Cara Belanja, Manajemen Pesanan, dll).
   - *User* bebas melompat antar topik menggunakan *sidebar* tersebut tanpa memuat ulang (*reload*) halaman.

3. **Mengkonsumsi Konten & Peringatan (Troubleshooting)**
   Saat membaca panduan (misal: "Cara Berbelanja"), *user* mungkin melihat kotak peringatan (berwarna merah/kuning). Kotak ini (hasil integrasi *QA report*) memberi tahu *user* secara proaktif tentang batasan sistem saat ini (misal: "Fitur ini masih dalam tahap pengembangan" atau "Jika terjadi Error 401, silakan *login* ulang").

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal `Node.js` di sistem Anda. Buka terminal pada folder proyek ini, lalu jalankan:

```bash
# Instalasi semua dependensi 
npm install

# Menjalankan development server
npm run dev
```

Aplikasi dapat diakses melalui *browser* pada tautan `http://localhost:3000/`.
