# Audit UX dan Konten Poolapack Care

Tanggal audit: 11 September 2026  
Ruang lingkup: navigasi, kejelasan konten, pencarian, pembagian audiens, Customer Care, responsif, dan perbandingan dengan pola Tokopedia Care.

## Ringkasan

Poolapack Care sudah memiliki fondasi yang baik sebagai portal pusat bantuan untuk marketplace Poolapack. Alur utamanya mudah dikenali:

Beranda → Kategori → Daftar Artikel → Detail Panduan → Customer Care

Project ini layak sebagai MVP/help center kecil. Namun, project belum setara dengan Tokopedia Care sebagai sistem penyelesaian masalah pelanggan karena belum memiliki konteks transaksi, ticketing, status komplain, personalisasi, dan kanal bantuan terintegrasi.

### Penilaian umum

| Area | Penilaian | Catatan |
|---|---:|---|
| Visual dan branding | 8/10 | Konsisten, bersih, dan sesuai identitas Poolapack |
| Struktur navigasi | 7/10 | Alur utama jelas, tetapi search mobile dan pemisahan role perlu diperbaiki |
| Kejelasan konten | 7/10 | Artikel detail, tetapi beberapa kategori dan istilah masih dapat membingungkan |
| Customer support | 5/10 | Sudah ada WhatsApp/email, tetapi belum ada ticketing dan alur komplain |
| Kesiapan dibandingkan Tokopedia Care | 6/10 | Fondasi self-service baik, fitur operasional support masih terbatas |

## Hal yang sudah bagus

- Tampilan memiliki identitas Poolapack yang konsisten.
- Beranda menyediakan search, kategori, dan FAQ.
- Pencarian mendukung sinonim, stemming bahasa Indonesia, multi-token, dan toleransi typo.
- Artikel memiliki screenshot langkah demi langkah.
- Beberapa artikel mendukung panduan Mobile Web dan Desktop Web.
- Halaman artikel memiliki daftar isi, scroll spy, dan reading progress bar.
- Tersedia artikel terkait.
- Floating Customer Care selalu dapat diakses.
- Halaman search sudah memiliki tab Pooler dan Packer.
- Setiap artikel memiliki metadata seperti excerpt, waktu baca, tag, dan tanggal pembaruan.
- npm run build berhasil dijalankan tanpa error.

File utama:

- [data/content.ts](./data/content.ts)
- [pages/index.vue](./pages/index.vue)
- [pages/category/[slug].vue](./pages/category/[slug].vue)
- [pages/article/[slug].vue](./pages/article/[slug].vue)
- [pages/search.vue](./pages/search.vue)
- [components/layout/Navbar.vue](./components/layout/Navbar.vue)
- [components/common/HelpFloatingWidget.vue](./components/common/HelpFloatingWidget.vue)

## Temuan yang dapat membingungkan pengguna

### 1. Search tidak tersedia di mobile pada halaman selain beranda

Search navbar menggunakan class hidden md:block di [Navbar.vue](./components/layout/Navbar.vue). Pada perangkat mobile, search hanya tersedia di beranda. Ketika user sudah berada di halaman kategori atau artikel, mereka tidak memiliki akses search yang jelas.

#### Dampak

- User harus kembali ke beranda untuk mencari artikel lain.
- User mungkin mengira website tidak memiliki search di halaman artikel.
- Pengalaman mobile lebih lambat dibandingkan desktop.

#### Rekomendasi

- Tampilkan ikon search di navbar mobile.
- Atau tampilkan input search compact di halaman kategori dan artikel.
- Pastikan halaman hasil search juga memiliki input pencarian, bukan hanya daftar hasil.

### 2. Filter subkategori dapat terlihat aktif padahal daftar artikel tidak berubah

Logika filter di [pages/category/[slug].vue](./pages/category/[slug].vue) mencocokkan nama lengkap subkategori dengan judul, excerpt, atau slug artikel. Jika hasilnya kosong, kode mengembalikan seluruh artikel dalam kategori.

Contoh logika:

~~~ts
if (list.length === 0) {
  list = categoryArticles.value
}
~~~

#### Dampak

User dapat memilih subkategori, tetapi melihat daftar artikel yang sama. Ini membuat user tidak yakin apakah filter benar-benar berfungsi.

#### Rekomendasi

Tambahkan metadata subkategori khusus pada setiap artikel, misalnya:

~~~ts
subcategory: 'lacak-pesanan'
~~~

Kemudian filter berdasarkan ID subkategori, bukan pencocokan teks. Jika hasil benar-benar kosong, tampilkan empty state yang jelas dan jangan diam-diam mengembalikan semua artikel.

### 3. Pooler dan Packer belum dipisahkan sejak awal

Pemisahan Pooler/Packer saat ini terutama muncul pada halaman search. Di halaman kategori, artikel pembeli dan penjual masih bercampur.

Contoh:

- Artikel pendaftaran Packer berada di kategori Akun & Keamanan.
- Artikel pengelolaan produk Packer berada di kategori Pesanan.

#### Dampak

Packer dapat kesulitan menemukan panduan yang sesuai karena kategori utama lebih berorientasi pada pembeli.

#### Rekomendasi

Tambahkan pilihan audiens di beranda:

- Saya Pembeli / Pooler
- Saya Penjual / Packer

Setelah user memilih role, tampilkan kategori dan artikel yang relevan untuk role tersebut. Alternatifnya, berikan filter role pada seluruh halaman kategori, bukan hanya halaman search.

### 4. Beberapa istilah membutuhkan penjelasan lebih awal

Istilah berikut penting bagi platform, tetapi belum tentu langsung dipahami pengguna baru:

- Pooler
- Packer
- PoolPoint
- PoolPay
- Flash Sale
- Pre Order
- Ready Stock
- MOQ
- Split Payment

#### Rekomendasi

Tambahkan blok penjelasan singkat di beranda:

> Pooler adalah pembeli di Poolapack, sedangkan Packer adalah penjual atau produsen yang menyediakan produk.

Tambahkan juga tooltip atau glosarium singkat untuk MOQ, PoolPay, PoolPoint, dan Split Payment.

### 5. Label "Back to Marketplace" sedikit ambigu

Tombol di navbar berlabel "Back to Marketplace", tetapi link membuka marketplace di tab baru. Kata "Back" biasanya berarti kembali ke halaman sebelumnya.

#### Rekomendasi

Ganti menjadi:

> Ke Marketplace

atau:

> Buka Marketplace Poolapack

Gunakan bahasa Indonesia agar konsisten dengan mayoritas antarmuka.

### 6. Customer Care belum memiliki alur komplain yang lengkap

Floating widget di [HelpFloatingWidget.vue](./components/common/HelpFloatingWidget.vue) sudah menyediakan WhatsApp, email, dan link marketplace. Namun, belum tersedia:

- Form laporan kendala.
- Input nomor pesanan.
- Kategori masalah.
- Nomor tiket.
- Status penanganan.
- Estimasi penyelesaian.
- Riwayat komplain.

Label "Online • Siap Membantu" dan klaim "Respon cepat dalam hitungan menit" perlu dipastikan sesuai kondisi operasional sebenarnya.

#### Rekomendasi

Tambahkan CTA utama:

> Laporkan Kendala Pesanan

Form minimal dapat meminta nomor pesanan, kategori masalah, deskripsi, dan lampiran bukti.

## Temuan teknis yang memengaruhi UX

### 1. Isi platform Mobile/Desktop belum sepenuhnya masuk search

Fungsi search membaca:

~~~ts
const contentLower = article.content.toLowerCase()
~~~

Namun artikel yang menggunakan platforms menyimpan isi utama di platform.content, sementara article.content dapat berupa string kosong.

#### Dampak

Kata kunci yang hanya muncul di panduan Mobile atau Desktop tidak akan ditemukan melalui search, kecuali kata tersebut sudah ada di judul, excerpt, atau tags.

#### Rekomendasi

Gabungkan konten sebelum pencarian:

~~~ts
const platformContent = (article.platforms || [])
  .map(platform => platform.content)
  .join(' ')

const contentLower = (article.content + ' ' + platformContent).toLowerCase()
~~~

### 2. State feedback dan share belum digunakan

Pada halaman artikel terdapat state seperti copied dan feedbackSent, tetapi belum ada UI yang memanfaatkannya. Ini menunjukkan fitur share, print, atau feedback mungkin belum selesai.

#### Rekomendasi

Tambahkan bagian bawah artikel:

> Apakah artikel ini membantu?

Dengan tombol:

- Ya, membantu
- Tidak, masih membutuhkan bantuan

Jika user memilih tidak membantu, arahkan ke Customer Care atau form laporan kendala.

### 3. Data kategori dan subkategori masih manual

articleCount dan subCategories ditulis manual di [data/content.ts](./data/content.ts). Ini dapat menjadi tidak sinkron ketika artikel ditambah atau dipindahkan.

#### Rekomendasi

- Hitung jumlah artikel secara otomatis.
- Gunakan ID subkategori pada setiap artikel.
- Tambahkan validasi data saat build atau test.

### 4. Dokumentasi README tidak sinkron

README masih menyebut 25 Artikel Panduan, sedangkan data aktual yang ditemukan berisi 20 artikel.

#### Rekomendasi

Perbarui README menjadi 20 artikel atau tambahkan lima artikel yang memang direncanakan.

## Perbandingan dengan Tokopedia Care

> Perbandingan ini menggunakan dokumentasi publik Tokopedia Care yang tersedia, bukan akses ke sistem internal Tokopedia. Tampilan dan fitur produksi dapat berubah dari waktu ke waktu.

### Search dan navigasi

Poolapack Care sudah memiliki search berbasis sinonim dan fuzzy matching yang cocok untuk jumlah artikel yang masih kecil.

Tokopedia Care mendokumentasikan pendekatan yang lebih kontekstual, termasuk pencarian bantuan dari homepage, artikel terkait, FAQ, dan rekomendasi berdasarkan status transaksi atau invoice.

### Konten artikel

Poolapack Care memiliki keunggulan pada screenshot langkah demi langkah dan dukungan Mobile/Desktop.

Tokopedia Care menekankan artikel yang ringkas, infografik, GIF, contoh konkret, dan bahasa yang mudah dipahami. Artikel Tokopedia juga dirancang agar user dapat menemukan solusi lanjutan jika solusi pertama belum berhasil.

### Pembagian user

Poolapack Care sudah membedakan Pooler dan Packer pada search, tetapi belum konsisten di beranda dan halaman kategori.

Tokopedia Care menggunakan pemisahan pembeli dan penjual sebagai bagian penting dari navigasi bantuan.

### Customer service

Poolapack Care saat ini menyediakan:

- WhatsApp.
- Email.
- Link marketplace.

Tokopedia Care mendokumentasikan kanal yang lebih lengkap, seperti chatbot/TANYA, messenger atau live chat, email, resolution center, media sosial, dan mekanisme penyelesaian kasus.

### Konteks transaksi

Poolapack Care masih berupa portal dokumentasi statis. User belum dapat melihat bantuan berdasarkan nomor pesanan, status pembayaran, status pengiriman, atau status refund.

Tokopedia Care menghubungkan bantuan dengan konteks transaksi dan status invoice sehingga rekomendasi artikel dapat lebih relevan.

### Feedback dan pengukuran kualitas

Poolapack Care belum memiliki feedback artikel yang aktif.

Tokopedia Care mendokumentasikan penggunaan metrik seperti article helpfulness, article deflection, dan Customer Effort Score untuk mengetahui apakah user benar-benar terbantu.

### Informasi proaktif

Poolapack Care belum memiliki area untuk menampilkan gangguan layanan, keterlambatan pembayaran, kendala pengiriman, atau pengumuman penting.

Tokopedia Care menggunakan top information atau pemberitahuan proaktif agar user mengetahui gangguan sebelum membuat komplain.

## Fitur yang sudah setara atau cukup kuat

Untuk skala project saat ini, Poolapack Care sudah memiliki beberapa fondasi yang baik:

- Search yang lebih toleran terhadap istilah informal dan typo.
- Struktur kategori yang sederhana.
- Artikel dengan screenshot.
- Daftar isi artikel.
- Platform tabs Mobile/Desktop.
- FAQ beranda.
- Artikel terkait.
- Link bantuan yang selalu terlihat.
- Identitas visual yang lebih fokus dan tidak terlalu padat.

## Prioritas perbaikan

### Prioritas tinggi

1. Sediakan search di mobile pada semua halaman.
2. Perbaiki filter subkategori menggunakan ID khusus.
3. Pisahkan pengalaman Pooler dan Packer sejak halaman beranda.
4. Tambahkan halaman atau form Laporkan Kendala Pesanan.
5. Tambahkan nomor pesanan dan kategori masalah pada alur bantuan.
6. Index isi platforms ke dalam search.

### Prioritas menengah

7. Tambahkan feedback Apakah artikel ini membantu?
8. Tambahkan artikel terkait berdasarkan tag atau topik, bukan hanya urutan artikel dalam kategori.
9. Tambahkan banner untuk gangguan layanan dan pengumuman penting.
10. Tambahkan glosarium untuk istilah Poolapack.
11. Ganti label Back to Marketplace menjadi Ke Marketplace.
12. Sinkronkan jumlah artikel pada README dan data.

### Prioritas lanjutan

13. Tambahkan ticketing system.
14. Tambahkan status komplain dan riwayat laporan.
15. Hubungkan artikel dengan status pesanan, pembayaran, refund, dan pengiriman.
16. Tambahkan chatbot atau assistant untuk pertanyaan umum.
17. Tambahkan analytics untuk pencarian tanpa hasil, artikel paling dibaca, dan feedback artikel.
18. Ukur waktu penyelesaian masalah dan customer effort.

## Kesimpulan akhir

Poolapack Care sudah bagus sebagai pusat dokumentasi dan panduan transaksi. Desainnya tidak membingungkan pada alur dasar, dan kontennya cukup lengkap untuk fungsi self-service awal.

Kekurangan utama berada pada kemampuan penyelesaian masalah, bukan pada tampilan:

- Search belum optimal di mobile.
- Filter subkategori belum cukup dapat diandalkan.
- Pooler dan Packer belum dipisahkan secara konsisten.
- Belum ada ticketing atau tracking komplain.
- Belum ada personalisasi berdasarkan transaksi.
- Belum ada feedback dan analytics kualitas artikel.

Jika enam prioritas tinggi dikerjakan terlebih dahulu, Poolapack Care akan menjadi lebih jelas, lebih mudah digunakan, dan lebih dekat dengan pola help center modern seperti Tokopedia Care.

## Referensi eksternal

- [Tokopedia Care: One-Stop For All Solutions](https://medium.com/life-at-tokopedia/one-stop-for-all-solutions-go-to-our-help-page-4428bcafb86f)
- [How Tokopedia Care Protects Our Customers](https://medium.com/life-at-tokopedia/how-were-working-to-protect-our-customers-8cbb429e1801)
- [Developing New Metrics: Effort Score in Tokopedia Care](https://medium.com/life-at-tokopedia/developing-new-metrics-effort-score-in-tokopedia-care-787bf3378d82)
