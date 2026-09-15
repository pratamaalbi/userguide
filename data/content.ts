// Data struktur kategori dan artikel untuk Poolapack Care
export interface Category {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  articleCount: number
  subCategories?: SubCategory[]
}

export interface SubCategory {
  id: string
  name: string
  articleCount: number
}

export interface TocItem {
  id: string
  text: string
}

export interface PlatformContent {
  label: string       // e.g. 'Aplikasi Mobile' or 'Desktop (Web)'
  icon: string        // phosphor icon name e.g. 'ph:device-mobile-bold'
  toc?: TocItem[]
  content: string     // HTML string for this platform
}

export interface Article {
  audience?: 'pembeli' | 'penjual' | 'semua'
  /** ID subkategori yang didefinisikan pada kategori artikel */
  subCategoryId?: string
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  categoryTitle?: string
  readTime: number
  lastUpdated?: string
  toc?: TocItem[]
  content: string
  tags?: string[]
  /** If defined, the article shows platform tabs instead of a single content view */
  platforms?: PlatformContent[]
}

export const categories: Category[] = [
  {
    id: '1',
    slug: 'akun-keamanan',
    title: 'Akun & Keamanan',
    description: 'Panduan mendaftar akun Pooler maupun Packer, dan cara mengelola password di Poolapack',
    icon: '🛡️',
    articleCount: 3,
    subCategories: [
      { id: '1-1', name: 'Daftar Akun', articleCount: 2 },
      { id: '1-2', name: 'Password & Keamanan', articleCount: 1 }
    ]
  },
  {
    id: '2',
    slug: 'pesanan',
    title: 'Pesanan',
    description: 'Cara melacak, mengelola, dan membatalkan pesanan Anda',
    icon: '📦',
    articleCount: 7,
    subCategories: [
      { id: '2-1', name: 'Cara Memesan, Alamat & RFQ', articleCount: 4 },
      { id: '2-2', name: 'Lacak Pesanan', articleCount: 1 },
      { id: '2-3', name: 'Pembatalan & Kelola Produk', articleCount: 2 }
    ]
  },
  {
    id: '3',
    slug: 'pembayaran',
    title: 'Pembayaran',
    description: 'Metode pembayaran resmi, rincian biaya (fee), dan pengembalian dana (refund)',
    icon: '💳',
    articleCount: 4,
    subCategories: [
      { id: '3-1', name: 'Metode Pembayaran & Fee', articleCount: 2 },
      { id: '3-2', name: 'BCA & Virtual Account', articleCount: 1 },
      { id: '3-3', name: 'Refund Dana', articleCount: 1 }
    ]
  },
  {
    id: '4',
    slug: 'pengiriman',
    title: 'Pengiriman',
    description: 'Informasi seputar pengiriman dan estimasi waktu tiba',
    icon: '🚚',
    articleCount: 2,
    subCategories: [
      { id: '4-1', name: 'Jasa Pengiriman', articleCount: 1 },
      { id: '4-2', name: 'Estimasi & Ongkir', articleCount: 1 }
    ]
  },
  {
    id: '5',
    slug: 'promo',
    title: 'Promo & Reward',
    description: 'Panduan promo diskon 1% verifikasi identitas, reward PoolPoint, dan saldo digital PoolPay',
    icon: '🎁',
    articleCount: 3,
    subCategories: [
      { id: '5-1', name: 'Diskon 1%', articleCount: 1 },
      { id: '5-2', name: 'PoolPoint', articleCount: 1 },
      { id: '5-3', name: 'PoolPay', articleCount: 1 }
    ]
  },
  {
    id: '6',
    slug: 'kategori-produk',
    title: 'Kategori Produk',
    description: 'Penjelasan lengkap perbedaan Flash Sale, Pre Order, dan Ready Stock di Poolapack',
    icon: '🏷️',
    articleCount: 3,
    subCategories: [
      { id: '6-1', name: 'Flash Sale', articleCount: 1 },
      { id: '6-2', name: 'Pre Order', articleCount: 1 },
      { id: '6-3', name: 'Ready Stock', articleCount: 1 }
    ]
  }
]

export const articles: Article[] = [
  // Akun & Keamanan
  {
    id: '1',
    slug: 'cara-daftar-akun-poolapack',
    title: 'Cara Mendaftar Akun Pooler (Pembeli) di Poolapack',
    excerpt: 'Panduan lengkap langkah demi langkah mendaftar akun baru Pooler di Poolapack: klik tombol Masuk/Daftar, verifikasi 6 digit OTP email, lengkapi data profil & password, hingga siap berbelanja.',
    category: 'akun-keamanan',
    categoryTitle: 'Akun & Keamanan',
    subCategoryId: '1-1',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'daftar', 'mendaftar', 'pendaftaran', 'registrasi', 'register', 'buat akun', 'bikin akun',
      'signup', 'sign up', 'akun baru', 'cara daftar', 'cara mendaftar', 'registrasi akun',
      'masuk daftar', 'otp email', 'pooler', 'pembeli', 'password akun', 'google login'
    ],
    toc: [
      { id: 'tombol-masuk-daftar', text: '1. Akses Tombol Masuk/Daftar di Beranda' },
      { id: 'input-email-whatsapp', text: '2. Input Email / Nomor WhatsApp & Opsi Google' },
      { id: 'notifikasi-belum-terdaftar', text: '3. Konfirmasi Otomatis "Email Belum Terdaftar"' },
      { id: 'verifikasi-kode-otp', text: '4. Memasukkan 6 Digit Kode OTP Email (5 Menit)' },
      { id: 'lengkapi-data-password', text: '5. Lengkapi Data Akun & Pembuatan Password' },
      { id: 'keuntungan-setelah-daftar', text: '6. Akun Aktif & Rekomendasi Diskon 1%' }
    ],
    content: '',
    platforms: [
      {
        label: 'Mobile (Web)',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-tombol-masuk-daftar', text: '1. Akses Tombol Masuk/Daftar di Beranda' },
          { id: 'mob-input-email-whatsapp', text: '2. Input Email / Nomor WhatsApp & Opsi Google' },
          { id: 'mob-notifikasi-belum-terdaftar', text: '3. Konfirmasi "Email Belum Terdaftar"' },
          { id: 'mob-verifikasi-kode-otp', text: '4. Kode OTP Email (5 Menit)' },
          { id: 'mob-lengkapi-data-password', text: '5. Lengkapi Data Akun & Password' },
          { id: 'mob-keuntungan-setelah-daftar', text: '6. Akun Aktif & Diskon 1%' }
        ],
        content: `
          <p>Mendaftar sebagai <strong>Pooler (Pembeli)</strong> melalui <strong>browser di smartphone</strong> (Mobile Web) sangat mudah — cukup buka <em>liva.poolapack.id</em> di browser HP Anda. Ikuti langkah berikut:</p>

          <h2 id="mob-tombol-masuk-daftar">1. Akses Tombol Masuk/Daftar di Beranda</h2>
          <ol>
            <li>Buka browser di smartphone Anda (Chrome, Safari, dll) lalu kunjungi <strong>liva.poolapack.id</strong>.</li>
            <li>Di halaman beranda, ketuk tombol <strong>Masuk/Daftar</strong> yang terletak di pojok kanan atas layar.</li>
          </ol>
          <img src="/images/registermobile/1.png" alt="Tampilan beranda aplikasi Poolapack — tombol Masuk/Daftar di kanan atas" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-input-email-whatsapp">2. Input Email / Nomor WhatsApp &amp; Opsi Google</h2>
          <p>Halaman <strong>Masuk/Daftar Sekarang!</strong> akan terbuka:</p>
          <ul>
            <li><strong>Ketik Alamat Email atau Nomor WhatsApp:</strong> Masukkan email aktif (contoh: <em>user@gmail.com</em>) atau nomor WhatsApp (contoh: <em>08123456789</em>) pada kolom input.</li>
            <li><strong>Opsi Akun Google:</strong> Ketuk tombol <strong>Google</strong> untuk mendaftar lebih cepat menggunakan akun Google Anda.</li>
            <li>Ketuk tombol <strong>Selanjutnya</strong> untuk melanjutkan.</li>
          </ul>
          <img src="/images/registermobile/2.png" alt="Form input email dan tombol Google di aplikasi Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-notifikasi-belum-terdaftar">3. Konfirmasi "Email Belum Terdaftar"</h2>
          <p>Aplikasi akan mengecek apakah email/nomor sudah terdaftar:</p>
          <ul>
            <li>Jika belum terdaftar, muncul notifikasi: <strong>"Email Belum Terdaftar — Lanjut mendaftar menggunakan [email Anda]"</strong>.</li>
            <li>Ketuk <strong>Kembali</strong> jika ada kesalahan pengetikan, atau ketuk tombol kuning <strong>Lanjutkan</strong> untuk melanjutkan pendaftaran.</li>
          </ul>
          <img src="/images/registermobile/3.png" alt="Konfirmasi email belum terdaftar di aplikasi Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-verifikasi-kode-otp">4. Kode OTP Email (5 Menit)</h2>
          <p>Setelah menekan lanjutkan, layar <strong>Masukkan Kode OTP</strong> akan tampil:</p>
          <ul>
            <li>Sistem mengirimkan 6 digit kode ke email yang Anda daftarkan.</li>
            <li>Buka email Anda — periksa <strong>Inbox</strong> dan folder <strong>Spam/Promosi</strong>.</li>
            <li>Masukkan 6 digit angka ke kotak OTP yang tersedia.</li>
            <li>Kode berlaku selama <strong>5 menit</strong>. Jika habis, ketuk <strong>Kirim Ulang</strong>.</li>
            <li>Jika email salah, ketuk link oranye <strong>Alamat Email Salah?</strong> untuk menggantinya.</li>
          </ul>
          <img src="/images/registermobile/4.png" alt="Layar input kode OTP 6 digit di aplikasi Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-lengkapi-data-password">5. Lengkapi Data Akun &amp; Password</h2>
          <p>Setelah OTP terverifikasi, isi form <strong>Lengkapi Data Anda Sekarang</strong>:</p>
          <ol>
            <li><strong>Nama Lengkap:</strong> Masukkan nama lengkap asli Anda.</li>
            <li><strong>Email:</strong> Terisi otomatis dan terkunci sesuai email yang diverifikasi.</li>
            <li><strong>Nomor WhatsApp:</strong> Opsional, namun disarankan untuk notifikasi pesanan.</li>
            <li><strong>Password:</strong> Buat kata sandi dengan minimal 8 karakter, kombinasi huruf kapital, huruf kecil, dan angka.</li>
            <li>Centang kotak persetujuan <em>Syarat &amp; Ketentuan</em>, lalu ketuk <strong>Lanjutkan</strong>.</li>
          </ol>
          <img src="/images/registermobile/5.png" alt="Form lengkapi data akun dan password di aplikasi Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-keuntungan-setelah-daftar">6. Akun Aktif &amp; Diskon 1%</h2>
          <p>Selamat! Akun Pooler Anda kini aktif. Anda dapat:</p>
          <ul>
            <li>Menjelajahi katalog kain (Flash Sale, Pre Order, Ready Stock) langsung dari aplikasi.</li>
            <li>Mengatur alamat pengiriman di menu <strong>Profil &gt; Alamat</strong>.</li>
            <li>Mendapatkan reward <strong>PoolPoint</strong> setiap transaksi selesai.</li>
          </ul>
          <div class="callout callout-info">
            <strong>Langkah Selanjutnya — Diskon Ekstra 1%:</strong> Verifikasi identitas Anda (upload KTP atau NPWP) di menu profil untuk mendapatkan <strong>diskon 1% di setiap transaksi</strong> dan bebas biaya administrasi. Baca panduan: <a href="/article/cara-verifikasi-identitas" class="text-amber-700 underline font-bold">Cara Mendapatkan Diskon 1% dengan Verifikasi Identitas</a>.
          </div>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-tombol-masuk-daftar', text: '1. Akses Tombol Masuk/Daftar di Beranda' },
          { id: 'dsk-input-email-whatsapp', text: '2. Input Email / Nomor WhatsApp & Opsi Google' },
          { id: 'dsk-notifikasi-belum-terdaftar', text: '3. Konfirmasi "Email Belum Terdaftar"' },
          { id: 'dsk-verifikasi-kode-otp', text: '4. Kode OTP Email (5 Menit)' },
          { id: 'dsk-lengkapi-data-password', text: '5. Lengkapi Data Akun & Password' },
          { id: 'dsk-keuntungan-setelah-daftar', text: '6. Akun Aktif & Diskon 1%' }
        ],
        content: `
          <p>Mendaftar sebagai <strong>Pooler (Pembeli)</strong> melalui <strong>website Desktop Poolapack</strong> menggunakan sistem <em>Single Entry Gateway</em> — satu tombol terpadu untuk Masuk maupun Daftar. Berikut panduan lengkapnya:</p>

          <h2 id="dsk-tombol-masuk-daftar">1. Akses Tombol Masuk/Daftar di Beranda</h2>
          <ol>
            <li>Buka browser (Chrome, Firefox, Edge, dll) dan kunjungi <strong>liva.poolapack.id</strong>.</li>
            <li>Di header navbar bagian kanan atas, klik tombol putih <strong>Masuk/Daftar</strong> <code class="bg-neutral-100 px-1.5 py-0.5 rounded text-xs">&rarr;] Masuk/Daftar</code>.</li>
          </ol>
          <img src="/images/registrasidekstop/1regE.png" alt="Tampilan beranda website Poolapack — tombol Masuk/Daftar di navbar kanan atas" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-input-email-whatsapp">2. Input Email / Nomor WhatsApp &amp; Opsi Google</h2>
          <p>Jendela popup (modal) <strong>Masuk/Daftar Sekarang!</strong> akan terbuka di tengah layar:</p>
          <ul>
            <li><strong>Ketik Alamat Email atau Nomor WhatsApp:</strong> Masukkan email aktif (contoh: <em>user@gmail.com</em>) atau nomor WhatsApp (contoh: <em>08123456789</em>) pada kolom input bergaris oranye.</li>
            <li><strong>Opsi Akun Google:</strong> Klik tombol <strong>Google</strong> di bawah separator <em>"atau melanjutkan dengan"</em> untuk mendaftar lebih cepat.</li>
            <li>Klik <strong>Selanjutnya</strong> untuk melanjutkan.</li>
          </ul>
          <img src="/images/registrasidekstop/2.png" alt="Modal form input email dan tombol Google di website Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-notifikasi-belum-terdaftar">3. Konfirmasi "Email Belum Terdaftar"</h2>
          <p>Sistem Poolapack secara otomatis mengecek status akun Anda:</p>
          <ul>
            <li>Jika email/nomor belum pernah terdaftar, muncul modal konfirmasi: <strong>"Email Belum Terdaftar — Lanjut mendaftar menggunakan [email Anda]"</strong>.</li>
            <li>Klik <strong>Kembali</strong> jika ada salah ketik, atau klik tombol kuning <strong>Lanjutkan</strong> untuk melanjutkan pendaftaran.</li>
          </ul>
          <img src="/images/registrasidekstop/3.png" alt="Modal konfirmasi email belum terdaftar di website Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-verifikasi-kode-otp">4. Kode OTP Email (5 Menit)</h2>
          <p>Setelah menekan lanjutkan, modal <strong>Masukkan Kode OTP</strong> akan tampil:</p>
          <ul>
            <li>Sistem mengirimkan 6 digit kode verifikasi ke alamat email yang Anda daftarkan.</li>
            <li>Buka tab baru di browser, masuk ke email Anda — periksa <strong>Inbox (Kotak Masuk)</strong> dan folder <strong>Spam / Promosi</strong>.</li>
            <li>Jika salah ketik email, klik link oranye <strong>Alamat Email Salah?</strong> untuk mengganti tanpa mengulang dari awal.</li>
            <li>Masukkan 6 digit angka ke 6 kotak OTP yang tersedia di layar.</li>
            <li>Kode berlaku selama <strong>5 menit</strong>. Jika habis, klik <strong>Kirim Ulang</strong>.</li>
          </ul>
          <img src="/images/registrasidekstop/4.png" alt="Modal input kode OTP 6 digit di website Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-lengkapi-data-password">5. Lengkapi Data Akun &amp; Password</h2>
          <p>Setelah OTP terverifikasi, modal <strong>Lengkapi Data Anda Sekarang</strong> terbuka:</p>
          <ol>
            <li><strong>Nama Lengkap:</strong> Masukkan nama lengkap asli Anda.</li>
            <li><strong>Email:</strong> Kolom terisi otomatis dan terkunci sesuai email yang telah diverifikasi.</li>
            <li><strong>Nomor WhatsApp:</strong> Opsional, namun sangat disarankan untuk koordinasi kurir &amp; notifikasi pesanan.</li>
            <li><strong>Password:</strong> Buat kata sandi aman — minimal 8 karakter, kombinasi huruf kapital, huruf kecil, dan angka. Klik ikon mata di ujung kolom untuk melihat/menyembunyikan karakter.</li>
            <li>Centang kotak persetujuan <em>"Syarat dan Ketentuan serta Kebijakan Privasi"</em>.</li>
            <li>Klik tombol kuning <strong>Lanjutkan</strong>.</li>
          </ol>
          <img src="/images/registrasidekstop/5.png" alt="Modal lengkapi data akun dan buat password di website Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-keuntungan-setelah-daftar">6. Akun Aktif &amp; Diskon 1%</h2>
          <p>Selamat! Akun Pooler Anda kini resmi aktif. Anda langsung dalam posisi login dan dapat:</p>
          <ul>
            <li>Menjelajahi katalog kain berkualitas dari pabrik (Flash Sale, Pre Order, Ready Stock).</li>
            <li>Mengatur alamat pengiriman di menu <strong>Profil &gt; Alamat</strong> atau langsung saat checkout.</li>
            <li>Mendapatkan reward <strong>PoolPoint</strong> setiap kali transaksi berhasil diselesaikan.</li>
          </ul>
          <div class="callout callout-info">
            <strong>Langkah Selanjutnya — Diskon Ekstra 1%:</strong> Agar mendapatkan <strong>diskon belanja 1% di setiap transaksi</strong> dan <strong>bebas biaya administrasi</strong>, segera verifikasi identitas Anda (upload KTP atau NPWP) di menu profil. Baca panduan: <a href="/article/cara-verifikasi-identitas" class="text-amber-700 underline font-bold">Cara Mendapatkan Diskon Sebesar 1% dengan Verifikasi Identitas (KTP / NPWP)</a>.
          </div>
        `
      }
    ]
  },
  {
    id: '3',
    slug: 'cara-ganti-password',
    title: 'Cara Mengganti atau Reset Password Akun Poolapack',
    excerpt: 'Panduan lengkap mengubah password akun Poolapack: kondisi sudah login (via menu Profil) maupun kondisi lupa password saat belum login (via OTP email).',
    category: 'akun-keamanan',
    categoryTitle: 'Akun & Keamanan',
    subCategoryId: '1-2',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'password', 'kata sandi', 'ganti password', 'ubah password', 'keamanan', 'ubah sandi',
      'ganti sandi', 'keamanan password', 'password baru', 'ubah kata sandi',
      'lupa password', 'reset password', 'lupa kata sandi', 'reset kata sandi',
      'pemulihan akun', 'tidak bisa login', 'lupa akun', 'pulihkan akun', 'bantuan login'
    ],
    toc: [
      { id: 'kondisi-1-sudah-login', text: '1. Ganti Password (Sudah Login)' },
      { id: 'kondisi-2-lupa-password', text: '2. Reset Password (Lupa Password / Belum Login)' },
      { id: 'kriteria-password', text: '3. Ketentuan Password yang Valid' }
    ],
    content: '',
    platforms: [
      {
        label: 'Mobile (Web)',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-pass-langkah', text: '1. Langkah-Langkah Ganti Password' },
          { id: 'mob-pass-kriteria', text: '2. Ketentuan Password yang Valid' }
        ],
        content: `
          <p>Panduan ini untuk kondisi Anda <strong>sudah login</strong> dan ingin mengganti password akun Poolapack melalui <strong>browser smartphone</strong>.</p>

          <h2 id="mob-pass-langkah">1. Langkah-Langkah Ganti Password</h2>
          <ol>
            <li>Pastikan Anda sudah <strong>login</strong> ke akun Poolapack, lalu buka halaman <strong>Akun</strong>.</li>
            <li>Ketuk ikon <strong>gerigi / pengaturan</strong> di pojok kanan atas halaman akun.</li>
          </ol>
          <img src="/images/resetpassmobile/1.png" alt="Halaman akun di mobile web Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
          <ol start="3">
            <li>Ketuk tombol <strong>Ubah Password</strong>.</li>
          </ol>
          <img src="/images/resetpassmobile/2.png" alt="Ikon pengaturan dan tombol Ubah Password di halaman akun" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
          <ol start="4">
            <li>Pilih metode pengiriman kode OTP: <strong>WhatsApp</strong> atau <strong>Email</strong>.</li>
          </ol>
          <img src="/images/resetpassmobile/3.png" alt="Pilihan pengiriman OTP via WhatsApp atau Email" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
          <ol start="5">
            <li>Masukkan kode OTP yang diterima ke kolom yang tersedia.</li>
          </ol>
          <img src="/images/resetpassmobile/4.png" alt="Halaman input kode OTP di mobile web Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
          <ol start="6">
            <li>Setelah OTP terverifikasi, Anda akan diarahkan ke halaman <strong>Ubah Password</strong> — masukkan password baru Anda, konfirmasikan, lalu ketuk <strong>Simpan</strong>.</li>
          </ol>

          <h2 id="mob-pass-kriteria">2. Ketentuan Password yang Valid</h2>
          <p>Password baru harus memenuhi 3 ketentuan berikut (ditandai centang hijau di layar):</p>
          <ul>
            <li>Minimal <strong>8 karakter</strong>.</li>
            <li>Kombinasi <strong>huruf kapital &amp; huruf kecil</strong> (contoh: Abcd).</li>
            <li>Mengandung <strong>angka</strong> (contoh: 1234).</li>
          </ul>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-pass-langkah', text: '1. Langkah-Langkah Ganti Password' },
          { id: 'dsk-pass-kriteria', text: '2. Ketentuan Password yang Valid' }
        ],
        content: `
          <p>Panduan ini untuk kondisi Anda <strong>sudah login</strong> dan ingin mengganti password akun Poolapack melalui <strong>browser desktop</strong>.</p>

          <h2 id="dsk-pass-langkah">1. Langkah-Langkah Ganti Password</h2>
          <ol>
            <li>Pastikan Anda sudah <strong>login</strong>, lalu klik ikon <strong>profil</strong> di pojok kanan atas — Anda akan diarahkan ke halaman Profil.</li>
            <li>Di halaman Profil, temukan tombol <strong>Ubah Password</strong> (terletak di bawah tombol Verifikasi Identitas) lalu klik tombol tersebut.</li>
          </ol>
          <img src="/images/resetpassdekstop/1.png" alt="Halaman profil dengan tombol Ubah Password di desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />
          <ol start="3">
            <li>Pilih metode pengiriman kode OTP: <strong>WhatsApp</strong> atau <strong>Email</strong>.</li>
          </ol>
          <img src="/images/resetpassdekstop/2.png" alt="Pilihan pengiriman OTP via WhatsApp atau Email di desktop" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />
          <ol start="4">
            <li>Masukkan kode OTP yang diterima ke kolom yang tersedia.</li>
          </ol>
          <img src="/images/resetpassdekstop/3.png" alt="Halaman input kode OTP di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />
          <ol start="5">
            <li>Setelah OTP terverifikasi, masukkan <strong>password baru</strong> Anda dan konfirmasikan, lalu klik <strong>Simpan</strong>.</li>
          </ol>

          <h2 id="dsk-pass-kriteria">2. Ketentuan Password yang Valid</h2>
          <p>Password baru harus memenuhi 3 ketentuan berikut (ditandai centang hijau di layar):</p>
          <ul>
            <li>Minimal <strong>8 karakter</strong>.</li>
            <li>Kombinasi <strong>huruf kapital &amp; huruf kecil</strong> (contoh: Abcd).</li>
            <li>Mengandung <strong>angka</strong> (contoh: 1234).</li>
          </ul>
        `
      }
    ]
  },

  // Pesanan
  {
    id: '6',
    slug: 'cara-melakukan-pemesanan',
    title: 'Cara Melakukan Pemesanan di Poolapack',
    excerpt: 'Panduan visual langkah demi langkah berbelanja kain di Poolapack: memilih produk dan varian, rincian pesanan & alamat pengiriman, opsi ambil di pabrik, metode split pembayaran, hingga bayar tagihan.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-1',
    readTime: 5,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'pesan', 'pemesanan', 'cara beli', 'cara belanja', 'checkout', 'keranjang', 'order',
      'beli', 'membeli', 'cara pesan', 'belanja', 'kain', 'yard', 'tambah alamat',
      'transaksi', 'tambah keranjang', 'beli sekarang', 'produk', 'split pembayaran', 'ambil di pabrik', 'pooler'
    ],
    toc: [
      { id: 'pilih-produk-kain', text: '1. Memilih Produk & Spesifikasi Kain' },
      { id: 'halaman-checkout', text: '2. Rincian Pemesanan & Opsi Pengiriman' },
      { id: 'metode-split-pembayaran', text: '3. Metode Pembayaran & Split Pembayaran' },
      { id: 'proses-pembayaran-va', text: '4. Menyelesaikan Pembayaran' }
    ],
    content: '',
    platforms: [
      {
        label: 'Mobile (Web)',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-pilih-produk', text: '1. Memilih Produk di Katalog' },
          { id: 'mob-pilih-varian-sample', text: '2. Memilih Varian & Menentukan Sample atau Beli Produk' },
          { id: 'mob-rincian-pembayaran', text: '3. Rincian Pemesanan & Metode Pembayaran' },
          { id: 'mob-selesaikan-tagihan', text: '4. Menyelesaikan Pembayaran' }
        ],
        content: `
          <h2 id="mob-pilih-produk">1. Memilih Produk di Katalog</h2>
          <ol>
            <li>Pastikan Anda sudah login ke akun Poolapack.</li>
            <li>Buka menu <strong>Katalog</strong> dan pilih produk kain yang diinginkan.</li>
          </ol>
          <img src="/images/belanjamobile/1.png" alt="Memilih produk di katalog mobile" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-pilih-varian-sample">2. Memilih Varian &amp; Menentukan Sample atau Beli Produk</h2>
          <ol start="3">
            <li>Pilih spesifikasi varian kain yang diinginkan (warna, grade, lebar, dan GSM).</li>
            <li>Tentukan apakah ingin <strong>membeli sample</strong> atau <strong>membeli produk langsung</strong>.</li>
            <li>Jika produk tidak menyediakan sample atau stok sample habis, tombol bertuliskan <strong>Sample Kosong</strong> dan tidak dapat diklik. Lanjutkan pembelian produk langsung dengan mengetuk tombol <strong>Beli Sekarang</strong>.</li>
          </ol>
          <img src="/images/belanjamobile/2.png" alt="Pemilihan varian produk dan tombol Beli Sekarang di aplikasi mobile Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
          <div class="callout callout-info">
            <strong>Ingin memesan sample?</strong> Tidak semua produk menyediakan sample. Baca <a href="/article/panduan-sample-produk" class="text-amber-700 underline font-bold">Panduan Sample Produk di Poolapack</a> untuk melihat cara mengecek ketersediaan dan mengajukannya.
          </div>

          <h2 id="mob-rincian-pembayaran">3. Rincian Pemesanan &amp; Metode Pembayaran</h2>
          <ol start="6">
            <li>Periksa alamat pengiriman atau pilih opsi <strong>Diambil di Pabrik/Gudang</strong> jika ingin mengambil kain sendiri tanpa ongkos kirim.</li>
            <li>Pilih metode pembayaran (Virtual Account/Transfer Bank). Anda juga dapat mengaktifkan <strong>PoolPay</strong> untuk pembayaran split jika memiliki saldo.</li>
            <li>Ketuk tombol <strong>Bayar Sekarang</strong> untuk memproses tagihan.</li>
          </ol>
          <img src="/images/belanjamobile/3.png" alt="Rincian pemesanan dan metode pembayaran mobile" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-selesaikan-tagihan">4. Menyelesaikan Pembayaran</h2>
          <ol start="9">
            <li>Salin nomor Virtual Account dan perhatikan batas waktu pembayaran serta nominal tagihan.</li>
            <li>Selesaikan transfer melalui m-banking atau ATM sebelum batas waktu berakhir, lalu ketuk <strong>Cek Status Pembayaran &#8635;</strong>.</li>
          </ol>
          <img src="/images/belanjamobile/4.png" alt="Selesaikan pembayaran mobile" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-pilih-produk', text: '1. Memilih Produk & Spesifikasi Kain' },
          { id: 'dsk-checkout-pengiriman-bayar', text: '2. Rincian Pemesanan & Pembayaran' },
          { id: 'dsk-selesaikan-tagihan', text: '3. Menyelesaikan Pembayaran' }
        ],
        content: `
          <h2 id="dsk-pilih-produk">1. Memilih Produk &amp; Spesifikasi Kain</h2>
          <ol>
            <li>Pastikan Anda sudah <strong>login</strong>, lalu pilih produk kain yang diinginkan di katalog.</li>
            <li>Pilih varian (warna, lebar, grade, GSM) dan masukkan jumlah yard yang ingin dibeli.</li>
            <li>Klik tombol <strong>Beli Sekarang</strong> (atau <strong>Masukkan Keranjang</strong>).</li>
          </ol>
          <img src="/images/belanjadekstop/1.png" alt="Halaman detail produk di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-checkout-pengiriman-bayar">2. Rincian Pemesanan &amp; Pembayaran</h2>
          <ol start="4">
            <li>Di halaman checkout, pastikan <strong>Alamat Pengiriman</strong> sudah sesuai (klik <strong>Ubah Alamat</strong> jika ingin mengganti).</li>
            <li>Pilih opsi pengiriman: <strong>Dikirim ke Alamat Tujuan</strong> (pilih ekspedisi) atau <strong>Diambil di Pabrik/Gudang</strong> (bebas ongkir).</li>
            <li>Pilih <strong>Metode Pembayaran</strong> (Virtual Account / Bank Transfer). Klik <strong>+ Tambah Split Pembayaran</strong> jika ingin menggunakan saldo PoolPay.</li>
            <li>Tinjau total pada <strong>Ringkasan Belanja</strong>, lalu klik <strong>Lanjutkan Pembayaran</strong>.</li>
          </ol>
          <img src="/images/belanjadekstop/2.png" alt="Halaman checkout rincian pemesanan di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-selesaikan-tagihan">3. Menyelesaikan Pembayaran</h2>
          <ol start="8">
            <li>Perhatikan batas waktu transfer pada <strong>Countdown Timer</strong>.</li>
            <li>Klik <strong>Salin</strong> pada <strong>Nomor Virtual Account</strong> dan <strong>Total Pembayaran</strong>, lalu transfer via m-Banking atau ATM.</li>
            <li>Setelah transfer, klik tombol <strong>Cek Status Pembayaran &#8635;</strong> untuk verifikasi instan.</li>
          </ol>
          <img src="/images/belanjadekstop/3.png" alt="Halaman invoice pembayaran di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />
        `
      }
    ]
  },
  {
    id: '31',
    slug: 'panduan-sample-produk',
    title: 'Panduan Sample Produk di Poolapack',
    excerpt: 'Panduan mengecek apakah produk menyediakan sample, mengajukan sample melalui Mobile Web atau Desktop Web, melihat harga dan batas jumlah sample, hingga melanjutkan checkout.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-1',
    readTime: 4,
    lastUpdated: '15 September 2026',
    audience: 'pembeli',
    tags: [
      'sample', 'sampel', 'contoh produk', 'contoh kain', 'ajukan sample',
      'pesan sample', 'beli sample', 'sample berbayar', 'sample kosong',
      'ketersediaan sample', 'stok sample', 'varian sample', 'manajemen sample',
      'produk sample', 'pooler', 'cara pesan sample'
    ],
    toc: [
      { id: 'mob-cek-produk-sample', text: 'Mobile: Cek Produk dan Varian Sample' },
      { id: 'mob-ajukan-sample', text: 'Mobile: Ajukan Sample' },
      { id: 'mob-checkout-sample', text: 'Mobile: Lanjutkan Checkout Sample' },
      { id: 'dsk-cek-produk-sample', text: 'Desktop: Cek Tombol Ajukan Sample' },
      { id: 'dsk-ajukan-sample', text: 'Desktop: Pilih Jumlah Sample' },
      { id: 'dsk-checkout-sample', text: 'Desktop: Lanjutkan Checkout Sample' },
      { id: 'ketentuan-ketersediaan-sample', text: 'Ketentuan Ketersediaan Sample' }
    ],
    content: '',
    platforms: [
      {
        label: 'Mobile (Web)',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-cek-produk-sample', text: '1. Cek Produk dan Varian Sample' },
          { id: 'mob-ajukan-sample', text: '2. Ajukan Sample' },
          { id: 'mob-pilih-jumlah-sample', text: '3. Pilih Jumlah dan Harga Sample' },
          { id: 'mob-checkout-sample', text: '4. Lanjutkan Checkout Sample' },
          { id: 'ketentuan-ketersediaan-sample', text: 'Ketentuan Ketersediaan Sample' }
        ],
        content: `
          <p><strong>Sample</strong> adalah contoh produk atau kain dalam jumlah kecil yang dapat digunakan untuk memeriksa warna, motif, bahan, grade, dan kualitas sebelum membeli produk dalam jumlah lebih besar.</p>

          <div class="callout callout-warning">
            <strong>Penting:</strong> Tidak semua produk atau varian menyediakan sample. Ketersediaan sample bergantung pada produk, varian, dan stok sample yang ditentukan oleh Packer. Jika opsi sample tidak muncul atau tertulis <strong>Sample Kosong</strong>, sample belum dapat dipesan untuk produk tersebut.
          </div>

          <h2 id="mob-cek-produk-sample">1. Cek Produk dan Varian Sample</h2>
          <ol>
            <li>Buka katalog Poolapack melalui browser smartphone, lalu pilih produk yang ingin diperiksa.</li>
            <li>Pastikan varian produk yang dipilih sesuai, misalnya warna, grade, lebar, dan GSM.</li>
            <li>Perhatikan area tombol pembelian di halaman detail produk. Opsi sample hanya tersedia jika produk atau varian tersebut mendukung sample.</li>
          </ol>
          <img src="/images/samplemobile/1.png" alt="Halaman detail produk Mobile Web Poolapack dengan informasi varian dan tombol pembelian" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-ajukan-sample">2. Ajukan Sample</h2>
          <p>Untuk melihat pilihan sample dari varian yang dipilih:</p>
          <ol start="4">
            <li>Ketuk area varian atau tombol pembelian untuk membuka rincian varian produk.</li>
            <li>Periksa tombol <strong>Ajukan Sample</strong>. Ketuk tombol tersebut jika tersedia.</li>
            <li>Jika tombol tidak tersedia atau berubah menjadi <strong>Sample Kosong</strong>, produk tersebut belum dapat dipesan sebagai sample.</li>
          </ol>
          <img src="/images/samplemobile/2.png" alt="Panel varian produk Mobile Web Poolapack dengan tombol Ajukan Sample dan Beli Sekarang" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-pilih-jumlah-sample">3. Pilih Jumlah dan Harga Sample</h2>
          <p>Setelah mengajukan sample, panel <strong>Pengajuan Sample</strong> akan menampilkan detail pembelian:</p>
          <ul>
            <li>Periksa apakah sample berbayar dan lihat harga per sample.</li>
            <li>Atur jumlah sample sesuai batas yang ditampilkan. Pada contoh tampilan, jumlah maksimum adalah <strong>2 sample</strong>.</li>
            <li>Periksa total harga sebelum memilih <strong>Masukkan Keranjang</strong> atau <strong>Pesan Sekarang</strong>.</li>
          </ul>
          <img src="/images/samplemobile/3.png" alt="Panel Pengajuan Sample Mobile Web Poolapack yang menampilkan harga sample dan batas maksimum jumlah" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-checkout-sample">4. Lanjutkan Checkout Sample</h2>
          <ol>
            <li>Setelah memilih <strong>Pesan Sekarang</strong>, periksa produk dan jumlah sample pada halaman checkout.</li>
            <li>Pilih metode penerimaan: <strong>Dikirim ke Alamat Tujuan</strong> atau <strong>Diambil di Pabrik/Gudang</strong> jika opsi tersebut tersedia.</li>
            <li>Pastikan alamat, layanan ekspedisi, metode pembayaran, dan total pembayaran sudah benar.</li>
            <li>Lanjutkan pembayaran untuk menyelesaikan pemesanan sample.</li>
          </ol>
          <img src="/images/samplemobile/4.png" alt="Halaman checkout Mobile Web Poolapack untuk pemesanan sample" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="ketentuan-ketersediaan-sample">Ketentuan Ketersediaan Sample</h2>
          <ul>
            <li>Sample hanya dapat diajukan pada produk atau varian yang menyediakan opsi <strong>Ajukan Sample</strong>.</li>
            <li>Harga sample dan batas jumlah maksimum mengikuti informasi yang tampil pada panel Pengajuan Sample.</li>
            <li>Sample dapat berbayar. Jangan menganggap sample selalu gratis.</li>
            <li>Jika tertulis <strong>Sample Kosong</strong>, stok sample sedang habis atau belum tersedia.</li>
            <li>Jika tidak ada tombol sample, lanjutkan pembelian produk biasa atau pilih produk lain yang menyediakan sample.</li>
          </ul>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-cek-produk-sample', text: '1. Cek Tombol Ajukan Sample' },
          { id: 'dsk-ajukan-sample', text: '2. Pilih Jumlah Sample' },
          { id: 'dsk-checkout-sample', text: '3. Lanjutkan Checkout Sample' },
          { id: 'dsk-ketersediaan-sample', text: 'Ketentuan Ketersediaan Sample' }
        ],
        content: `
          <p>Sample pada Desktop Web dapat diajukan dari halaman detail produk. Fitur ini hanya muncul pada produk atau varian yang memang menjual sample.</p>

          <div class="callout callout-warning">
            <strong>Periksa ketersediaan terlebih dahulu:</strong> Tidak semua produk memiliki opsi sample. Harga, batas jumlah, dan ketersediaan sample mengikuti informasi yang ditampilkan pada produk yang sedang dibuka.
          </div>

          <h2 id="dsk-cek-produk-sample">1. Cek Tombol Ajukan Sample</h2>
          <ol>
            <li>Login ke <strong>liva.poolapack.id</strong>, lalu buka halaman detail produk.</li>
            <li>Pilih varian produk yang ingin diperiksa.</li>
            <li>Cari tombol <strong>Ajukan Sample</strong> di area tombol pembelian.</li>
            <li>Jika tombol tidak ada atau tertulis <strong>Sample Kosong</strong>, sample tidak dapat diajukan untuk produk atau varian tersebut.</li>
          </ol>
          <img src="/images/sampledekstop/2.png" alt="Halaman detail produk Desktop Web Poolapack dengan tombol Ajukan Sample" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-ajukan-sample">2. Pilih Jumlah Sample</h2>
          <ol start="5">
            <li>Klik <strong>Ajukan Sample</strong> untuk membuka panel <strong>Pengajuan Sample</strong>.</li>
            <li>Periksa label sample, harga per sample, dan batas maksimum jumlah.</li>
            <li>Atur jumlah sample sesuai kebutuhan dan batas yang diizinkan.</li>
            <li>Klik <strong>Masukkan Keranjang</strong> atau <strong>Pesan Sekarang</strong>.</li>
          </ol>
          <img src="/images/sampledekstop/3.png" alt="Panel Pengajuan Sample Desktop Web Poolapack dengan harga dan batas jumlah sample" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-checkout-sample">3. Lanjutkan Checkout Sample</h2>
          <ol start="9">
            <li>Periksa ringkasan pesanan sample pada halaman checkout.</li>
            <li>Pilih alamat tujuan atau opsi pengambilan di pabrik/gudang jika tersedia.</li>
            <li>Periksa biaya pengiriman, metode pembayaran, diskon jika tersedia, dan total pembayaran.</li>
            <li>Klik <strong>Lanjutkan Pembayaran</strong> untuk menyelesaikan transaksi.</li>
          </ol>
          <img src="/images/sampledekstop/4.png" alt="Halaman checkout Desktop Web Poolapack untuk pemesanan sample" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-ketersediaan-sample">Ketentuan Ketersediaan Sample</h2>
          <ul>
            <li>Opsi sample bergantung pada produk, varian, dan stok yang disediakan Packer.</li>
            <li>Sample dapat berbayar dan harga setiap produk dapat berbeda.</li>
            <li>Batas jumlah sample mengikuti angka maksimum pada panel Pengajuan Sample.</li>
            <li>Jika tidak ada tombol <strong>Ajukan Sample</strong> atau muncul <strong>Sample Kosong</strong>, sample belum tersedia untuk dipesan.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: '27',
    slug: 'cara-tambah-atur-alamat',
    title: 'Cara Menambahkan dan Mengatur Alamat Pengiriman',
    excerpt: 'Panduan lengkap mengatur lokasi pengiriman bagi Pooler: menambahkan alamat baru via menu akun & pengaturan di aplikasi mobile serta menu profil & tab alamat di desktop (web).',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-1',
    readTime: 4,
    lastUpdated: '14 September 2026',
    audience: 'pembeli',
    tags: [
      'alamat', 'tambah alamat', 'atur lokasi', 'alamat baru', 'ubah alamat', 'lokasi pengiriman',
      'pinpoint', 'titik lokasi', 'ganti alamat', 'alamat utama', 'catatan kurir', 'pooler',
      'ekspedisi', 'profil alamat', 'packer', 'gps', 'lokasi otomatis'
    ],
    toc: [
      { id: 'mob-pentingnya-alamat', text: 'Pentingnya Mengatur Alamat Pengiriman' },
      { id: 'mob-akses-pengaturan', text: '1. Akses Menu Pengaturan (Ikon Gerigi)' },
      { id: 'mob-menu-alamat-saya', text: '2. Masuk Menu Alamat Saya' },
      { id: 'mob-tombol-tambah-alamat', text: '3. Klik Tombol Tambah Alamat' },
      { id: 'mob-isi-detail-dan-gps', text: '4. Isi Detail Alamat & Fitur Lokasi Otomatis' }
    ],
    content: '',
    platforms: [
      {
        label: 'Aplikasi Mobile',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-pentingnya-alamat', text: 'Pentingnya Mengatur Alamat Pengiriman' },
          { id: 'mob-akses-pengaturan', text: '1. Akses Menu Pengaturan (Ikon Gerigi)' },
          { id: 'mob-menu-alamat-saya', text: '2. Masuk Menu Alamat Saya' },
          { id: 'mob-tombol-tambah-alamat', text: '3. Klik Tombol Tambah Alamat' },
          { id: 'mob-isi-detail-dan-gps', text: '4. Isi Detail Alamat & Fitur Lokasi Otomatis' }
        ],
        content: `
          <p>Alamat pengiriman yang tepat sangat krusial bagi <strong>Pooler (Pembeli)</strong> di platform Poolapack. Alamat dan titik pinpoint peta digunakan oleh sistem untuk menghitung ongkos kirim ekspedisi kargo maupun reguler secara presisi dari pabrik/gudang <strong>Packer</strong> ke lokasi usaha atau gudang Anda.</p>

          <h2 id="mob-pentingnya-alamat">Pentingnya Mengatur Alamat Pengiriman</h2>
          <p>Mengatur alamat dengan data yang akurat dan titik GPS yang tepat memberikan berbagai manfaat:</p>
          <ul>
            <li><strong>Akurasi Ongkos Kirim:</strong> Menghitung tarif pengiriman kargo dan kurir reguler secara otomatis tanpa selisih biaya.</li>
            <li><strong>Jangkauan Ekspedisi:</strong> Memastikan armada ekspedisi atau kargo rekanan Poolapack dapat menjangkau titik bongkar muat Anda.</li>
            <li><strong>Ketepatan Kurir:</strong> Memudahkan kurir menemukan lokasi penerima, rumah, ruko konveksi, atau gudang Anda tanpa tersesat.</li>
          </ul>

          <h2 id="mob-akses-pengaturan">1. Akses Menu Pengaturan (Ikon Gerigi)</h2>
          <p>Pastikan Anda telah <strong>login ke akun Poolapack</strong> terlebih dahulu di smartphone Anda. Setelah berhasil masuk:</p>
          <ol>
            <li>Buka menu <strong>Akun</strong> pada bilah navigasi di bagian bawah aplikasi.</li>
            <li>Pada halaman Akun, klik / ketuk <strong>ikon gerigi (pengaturan)</strong> yang terletak di pojok kanan atas layar seperti yang ditunjukkan pada gambar.</li>
          </ol>
          <img src="/images/alamatmobile/1.png" alt="Halaman Akun aplikasi mobile Poolapack dengan sorotan pada ikon gerigi pengaturan di pojok kanan atas" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-menu-alamat-saya">2. Masuk Menu Alamat Saya</h2>
          <p>Setelah mengetuk ikon gerigi, Anda akan dialihkan ke halaman <strong>Pengaturan Akun</strong>:</p>
          <ul>
            <li>Cari dan klik tombol / menu <strong>Alamat Saya</strong> untuk masuk ke halaman pengelolaan daftar alamat pengiriman.</li>
          </ul>
          <img src="/images/alamatmobile/2.png" alt="Halaman Pengaturan Akun di aplikasi mobile Poolapack dengan tombol menu Alamat Saya" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-tombol-tambah-alamat">3. Klik Tombol Tambah Alamat</h2>
          <p>Di halaman <strong>Daftar Alamat</strong>, Anda dapat melihat seluruh alamat pengiriman yang terdaftar atau menambahkan lokasi baru:</p>
          <ul>
            <li>Klik tombol <strong>+ Tambah Alamat</strong> di bagian bawah layar untuk membuka formulir pendaftaran alamat baru.</li>
          </ul>
          <img src="/images/alamatmobile/3.png" alt="Halaman Daftar Alamat aplikasi mobile Poolapack dengan tombol Tambah Alamat" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-isi-detail-dan-gps">4. Isi Detail Alamat &amp; Fitur Lokasi Otomatis</h2>
          <p>Layar formulir <strong>Tambah Alamat</strong> akan muncul. Anda dapat melengkapi informasi alamat secara manual atau memanfaatkan fitur otomatis yang sangat praktis:</p>
          <ul>
            <li><strong>Fitur &quot;Atur Lokasi Secara Otomatis&quot;:</strong> Pooler dapat langsung mengetuk banner <em>&quot;Atur lokasi secara otomatis&quot;</em> di bagian atas formulir. Dengan fitur berbasis GPS ini, sistem akan mendeteksi posisi Anda saat itu juga dan otomatis mengisi detail alamat pengiriman secara instan tanpa perlu mengetik manual satu per satu.</li>
            <li><strong>Nama &amp; Nomor Handphone Penerima:</strong> Masukkan nama penanggung jawab dan nomor WhatsApp/telepon aktif yang dapat dihubungi oleh kurir pengantar.</li>
            <li><strong>Detail Alamat:</strong> Lengkapi data jalan, nomor bangunan, RT/RW, kelurahan/desa, kecamatan, kota/kabupaten, serta kode pos.</li>
            <li><strong>Pinpoint Lokasi Peta:</strong> Pastikan titik koordinat penanda peta tepat berada di lokasi gedung, gerbang, atau ruko konveksi Anda.</li>
            <li><strong>Simpan sebagai Alamat Utama:</strong> Aktifkan opsi ini jika ingin menjadikan alamat ini sebagai tujuan pengiriman default saat checkout.</li>
            <li>Klik tombol <strong>Simpan Alamat</strong> untuk menyimpan alamat baru ke akun Anda.</li>
          </ul>
          <img src="/images/alamatmobile/4.png" alt="Formulir Tambah Alamat aplikasi mobile Poolapack dengan fitur Atur Lokasi Secara Otomatis dan kolom detail alamat" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <div class="callout callout-info">
            <strong>Tips Pengiriman Grosir Pooler:</strong> Jika Anda memesan kain roll-rollan dalam jumlah besar (kargo/truk), pastikan titik pinpoint berada di jalan yang dapat diakses oleh armada kendaraan besar atau truk ekspedisi logistik mitra Packer.
          </div>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-pentingnya-alamat', text: 'Pentingnya Mengatur Alamat Pengiriman' },
          { id: 'dsk-akses-menu-profil', text: '1. Akses Menu Profil & Tab Alamat' },
          { id: 'dsk-tambah-alamat-baru', text: '2. Klik Tombol Tambah Alamat Baru' },
          { id: 'dsk-formulir-detail-alamat', text: '3. Isi Formulir Detail Alamat & Pinpoint Peta' }
        ],
        content: `
          <p>Bagi <strong>Pooler (Pembeli)</strong> yang bertransaksi menggunakan komputer atau laptop melalui website <strong>liva.poolapack.id</strong>, pengaturan alamat pengiriman dapat dilakukan dengan mudah dan leluasa melalui tampilan desktop.</p>

          <h2 id="dsk-pentingnya-alamat">Pentingnya Mengatur Alamat Pengiriman</h2>
          <p>Alamat pengiriman yang terdaftar lengkap dan akurat dengan titik koordinat peta sangat penting untuk menjamin kelancaran transaksi grosir kain Anda:</p>
          <ul>
            <li>Kalkulasi ongkos kirim ekspedisi logistik kargo maupun reguler langsung terkalkulasi secara real-time saat Anda memilih produk kain pabrik <strong>Packer</strong>.</li>
            <li>Memastikan armada pengiriman atau truk kargo tidak tersesat menuju lokasi gudang, pabrik, atau workshop konveksi Anda.</li>
            <li>Mempermudah pemilihan alamat pengiriman default saat proses checkout pesanan.</li>
          </ul>

          <div class="callout callout-info">
            <strong>Syarat Awal:</strong> Pastikan Anda telah <strong>masuk (login)</strong> ke akun Pooler Anda di website <strong>liva.poolapack.id</strong> sebelum menambahkan alamat baru.
          </div>

          <h2 id="dsk-akses-menu-profil">1. Akses Menu Profil &amp; Tab Alamat</h2>
          <p>Setelah berhasil login, langkah awal untuk mengatur alamat pengiriman adalah:</p>
          <ol>
            <li>Klik ikon avatar profil atau nama akun Anda yang berada di sudut kanan atas header navbar website Poolapack.</li>
            <li>Sistem akan mengarahkan Anda ke halaman <strong>Profil Akun</strong>.</li>
            <li>Pada menu navigasi profil, klik tab atau tombol <strong>Alamat</strong> untuk membuka daftar alamat tersimpan.</li>
          </ol>
          <img src="/images/alamatdekstop/1.png" alt="Petunjuk klik ikon profil di kanan atas header navbar website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-tambah-alamat-baru">2. Klik Tombol Tambah Alamat Baru</h2>
          <p>Pada halaman daftar alamat pengiriman:</p>
          <ul>
            <li>Anda dapat melihat daftar alamat yang sudah pernah didaftarkan sebelumnya.</li>
            <li>Untuk menambahkan alamat tujuan baru, klik tombol <strong>+ Tambah Alamat Baru</strong> yang terletak di bagian atas tabel/daftar alamat.</li>
          </ul>
          <img src="/images/alamatdekstop/2E.png" alt="Halaman profil tab alamat dengan tombol Tambah Alamat Baru di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-formulir-detail-alamat">3. Isi Formulir Detail Alamat &amp; Pinpoint Peta</h2>
          <p>Setelah menekan tombol tambah alamat baru, modal popup formulir <strong>Tambah Alamat</strong> akan muncul di layar. Lengkapi informasi pengiriman secara detail:</p>
          <ul>
            <li><strong>Jadikan Alamat Utama:</strong> Centang opsi ini apabila alamat ini ingin dijadikan alamat tujuan pengiriman default saat checkout.</li>
            <li><strong>Label Alamat:</strong> Tentukan label pengenal alamat (misalnya: <strong>Rumah</strong>, <strong>Kantor</strong>, atau <strong>Gudang Konveksi</strong>).</li>
            <li><strong>Nama Penerima:</strong> Masukkan nama penanggung jawab penerima paket kain.</li>
            <li><strong>Nomor Handphone:</strong> Masukkan nomor telepon/WhatsApp aktif yang dapat dihubungi kurir logistik.</li>
            <li><strong>Alamat Lengkap:</strong> Isi data jalan, nomor kavling/ruko, RT/RW, kelurahan, kecamatan, kota/kabupaten, dan kode pos secara rinci.</li>
            <li><strong>Titik Koordinat Peta (Pinpoint):</strong> Gunakan peta interaktif untuk menentukan titik lokasi presisi tempat pengantaran barang.</li>
            <li><strong>Catatan Kurir (Opsional):</strong> Tambahkan patokan jalan atau instruksi serah terima barang kepada supir armada ekspedisi.</li>
            <li>Klik tombol <strong>Simpan Alamat</strong> untuk menyimpan data alamat ke akun Anda.</li>
          </ul>
          <img src="/images/alamatdekstop/3.png" alt="Modal popup formulir detail alamat lengkap dengan peta pinpoint interaktif di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <div class="callout callout-info">
            <strong>Fleksibilitas Checkout:</strong> Alamat yang telah tersimpan dapat langsung dipilih saat proses Checkout pesanan (baik produk Flash Sale, Pre Order, maupun Ready Stock).
          </div>
        `
      }
    ]
  },
  {
    id: '29',
    slug: 'cara-mengajukan-rfq-kain',
    title: 'Cara Mengajukan dan Melihat Manajemen RFQ Kain Kustom',
    excerpt: 'Panduan mengajukan Request for Quotation (RFQ) di Poolapack melalui Mobile Web dan Desktop Web, serta cara melihat daftar dan status RFQ melalui menu Akun di mobile.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-1',
    readTime: 6,
    lastUpdated: '15 September 2026',
    audience: 'pembeli',
    tags: [
      'rfq', 'request for quotation', 'minta penawaran', 'penawaran harga', 'tender kain',
      'kain kustom', 'custom kain', 'spesifikasi kain', 'fitur prioritaskan', 'prioritaskan rfq',
      'sourcing pabrik', 'pantone', 'gsm', 'gramasi', 'lebar kain', 'pooler', 'packer',
      'pesanan khusus', 'tender pabrik', '1000000', '1 juta', 'manajemen rfq',
      'daftar rfq', 'status rfq', 'rfq saya', 'melihat rfq', 'riwayat rfq'
    ],
    toc: [
      { id: 'mob-apa-itu-rfq', text: 'Mengenal Fitur RFQ di Poolapack' },
      { id: 'mob-menu-cepat-rfq', text: '1. Ketuk Tombol Menu Cepat RFQ di Beranda' },
      { id: 'mob-isi-modal-rfq', text: '2. Isi Formulir Modal Request for Quotation' },
      { id: 'mob-fitur-prioritaskan', text: 'Fitur Prioritaskan di RFQ (Biaya Komitmen Rp 1.000.000)' },
      { id: 'mob-konfirmasi-status-rfq', text: '3. Konfirmasi Pengajuan Selesai (RFQ Produk Terkirim)' },
      { id: 'mob-manajemen-rfq', text: '4. Melihat Manajemen RFQ dari Menu Akun' }
    ],
    content: '',
    platforms: [
      {
        label: 'Aplikasi Mobile',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-apa-itu-rfq', text: 'Mengenal Fitur RFQ di Poolapack' },
          { id: 'mob-menu-cepat-rfq', text: '1. Ketuk Tombol Menu Cepat RFQ di Beranda' },
          { id: 'mob-isi-modal-rfq', text: '2. Isi Formulir Modal Request for Quotation' },
          { id: 'mob-fitur-prioritaskan', text: 'Fitur Prioritaskan di RFQ (Biaya Komitmen Rp 1.000.000)' },
          { id: 'mob-konfirmasi-status-rfq', text: '3. Konfirmasi Pengajuan Selesai (RFQ Produk Terkirim)' },
          { id: 'mob-manajemen-rfq', text: '4. Melihat Manajemen RFQ dari Menu Akun' }
        ],
        content: `
          <p><strong>RFQ (Request for Quotation)</strong> atau <em>Permintaan Penawaran</em> adalah fitur tender pengadaan tekstil di Poolapack yang dirancang bagi <strong>Pooler (Pembeli)</strong> untuk memesan kain dengan spesifikasi khusus (custom) atau volume produksi besar langsung ke jaringan produsen / pabrik (<strong>Packer</strong>) mitra Poolapack.</p>
          <p>Jika varian kain, gramasi (GSM), lebar kain, atau warna khusus yang Anda butuhkan tidak tersedia di katalog Ready Stock maupun Pre Order, Anda dapat memanfaatkan fitur RFQ untuk mendapatkan penawaran harga pabrik yang kompetitif.</p>

          <div class="callout callout-info">
            <strong>Syarat Awal:</strong> Pastikan Anda telah <strong>masuk (login)</strong> ke akun Pooler Anda di aplikasi mobile Poolapack sebelum mengajukan permintaan penawaran.
          </div>

          <h2 id="mob-apa-itu-rfq">Mengenal Fitur RFQ di Poolapack</h2>
          <p>Fitur RFQ memberikan fleksibilitas penuh bagi pelaku bisnis fashion, konveksi, dan garmen untuk mendapatkan bahan baku tekstil sesuai kebutuhan produksi:</p>
          <ul>
            <li><strong>Kustomisasi Spesifikasi:</strong> Anda bebas menentukan jenis serat benang, ketebalan gramasi (GSM), lebar kain, hingga warna Pantone khusus.</li>
            <li><strong>Harga Grosir Langsung Pabrik:</strong> Penawaran harga diberikan langsung oleh mitra pabrik (Packer) tanpa perantara yang tidak perlu.</li>
            <li><strong>Volume Fleksibel:</strong> Cocok untuk pesanan minimum produksi pabrik hingga puluhan ribu yard.</li>
          </ul>

          <h2 id="mob-menu-cepat-rfq">1. Ketuk Tombol Menu Cepat RFQ di Beranda</h2>
          <p>Setelah berhasil login ke akun Pooler di aplikasi smartphone Anda:</p>
          <ol>
            <li>Buka halaman beranda (<strong>Home</strong>) aplikasi Poolapack.</li>
            <li>Perhatikan deretan ikon menu fitur cepat yang terletak tepat di bawah kolom pencarian produk.</li>
            <li>Ketuk tombol ikon <strong>RFQ</strong> (ikon lembar dokumen) yang berada di samping menu <em>Poolpoint</em>, <em>Flash Sale</em>, dan <em>Bayar Nanti</em>.</li>
          </ol>
          <img src="/images/rfqmobile/1.png" alt="Tampilan beranda aplikasi mobile Poolapack dengan tombol menu cepat RFQ" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-isi-modal-rfq">2. Isi Formulir Modal Request for Quotation</h2>
          <p>Setelah ikon RFQ diketuk, formulir modal (*bottom sheet*) bertajuk <strong>&quot;Request for Quotation&quot;</strong> akan terbuka dengan petunjuk: <em>&quot;Lengkapi detail di bawah ini, dan tim kami akan mencarikan penawaran terbaik untuk Anda.&quot;</em> Lengkapi informasi kebutuhan kain Anda secara terperinci:</p>
          <ul>
            <li><strong>Pilihan Kategori:</strong> Pilih tab <strong>[ Produk ]</strong> (ikon kotak) untuk mencari produk/bahan kain jadi.</li>
            <li><strong>Nama Produk:</strong> Ketuk dropdown <strong>Pilih Produk</strong> dan tentukan jenis kain yang Anda cari (contoh: <em>Cotton Combed</em>, <em>Rayon Viscose</em>, <em>Linen</em>, <em>Polyester</em>, dll).</li>
            <li><strong>Jumlah &amp; Satuan:</strong> Masukkan estimasi angka kebutuhan pada kolom <strong>Jumlah</strong>, lalu pilih satuan yang diinginkan melalui dropdown <strong>Satuan</strong> (seperti <em>Yard</em>, <em>Meter</em>, <em>Roll</em>, atau <em>Kg</em>).</li>
            <li><strong>Foto Produk (Opsional):</strong> Ketuk tombol <strong>Upload Foto Produk</strong> (format file JPG atau PNG, ukuran maksimal 5MB) untuk melampirkan foto fisik sampel kain (swatch) atau referensi visual warna dan tekstur yang diinginkan.</li>
            <li><strong>Catatan Permintaan:</strong> Tuliskan spesifikasi detail pada kolom catatan (tersedia hingga 1.000 karakter), seperti target gramasi (GSM), lebar kain (open finish/tubular), handfeel kain, kode warna Pantone, hingga target harga satuan.</li>
            <li><strong>Opsi RFQ Prioritas:</strong> Terdapat opsi centang <strong>RFQ Prioritas (Biaya Komitmen Rp1.000.000)</strong> dengan keterangan <em>&quot;Dapatkan penawaran lebih cepat dalam 2x24 jam.&quot;</em> Centang kotak ini jika Anda ingin pengajuan tender diprioritaskan.</li>
            <li><strong>Kirim Permintaan:</strong> Jika seluruh data telah lengkap dan sesuai, ketuk tombol kuning <strong>Ajukan Permintaan</strong> di bagian bawah modal.</li>
          </ul>
          <img src="/images/rfqmobile/2.png" alt="Formulir modal bottom sheet Request for Quotation di aplikasi mobile Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-fitur-prioritaskan">Fitur Prioritaskan di RFQ (Biaya Komitmen Rp 1.000.000)</h2>
          <div class="callout callout-warning">
            <p class="text-base font-bold text-[#9A3412] mb-2">⚡ Fitur Prioritaskan di RFQ — Layanan Berbayar Rp 1.000.000</p>
            <p>Untuk kebutuhan pengadaan kain yang mendesak atau proyek produksi massal berprioritas tinggi, Pooler dapat mengaktifkan <strong>Fitur Prioritaskan di RFQ</strong> seharga <strong>Rp 1.000.000 (Satu Juta Rupiah)</strong>.</p>
            <p><strong>Keunggulan dan Manfaat Fitur Prioritaskan:</strong></p>
            <ul>
              <li><strong>Dianggap Sangat Serius oleh Pabrik &amp; Tim Poolapack:</strong> Pengajuan RFQ Anda akan langsung ditandai dengan badge prioritas komersial. Hal ini membuktikan komitmen dan keseriusan bisnis Anda sehingga tim Poolapack dan mitra pabrik (Packer) mendahulukan perhitungan costing serta alokasi kapasitas produksi.</li>
              <li><strong>Penawaran Jauh Lebih Cepat dalam 2x24 Jam:</strong> Memangkas waktu tunggu respon penawaran harga resmi (Quotation Sheet) dari produsen tekstil menjadi maksimal 2x24 jam kerja.</li>
              <li><strong>Priority Factory Matching:</strong> Tim sourcing Poolapack akan secara proaktif mencocokkan spesifikasi teknis kain Anda langsung ke pabrik-pabrik tekstil rekanan teratas dengan reputasi terbaik dan ketersediaan mesin produksi aktif.</li>
              <li><strong>Pendampingan Tim Sourcing Poolapack (Dedicated Assistance):</strong> Anda mendapatkan bantuan khusus dari konsultan tekstil Poolapack untuk mengawal spesifikasi teknis, pembuatan lab dip warna, hingga negosiasi harga terbaik.</li>
            </ul>
            <p class="text-xs text-[#9A3412]/80 mt-2 mb-0"><em>*Catatan: Pembayaran biaya komitmen sebesar Rp 1.000.000 dilakukan saat submit formulir pengajuan melalui metode pembayaran resmi di platform Poolapack.</em></p>
          </div>

          <h2 id="mob-konfirmasi-status-rfq">3. Konfirmasi Pengajuan Selesai (RFQ Produk Terkirim)</h2>
          <p>Setelah Anda mengetuk tombol <strong>Ajukan Permintaan</strong>, sistem akan memproses formulir dan langsung menampilkan jendela pop-up modal konfirmasi keberhasilan pengajuan di atas layar beranda:</p>
          <img src="/images/rfqmobile/3.png" alt="Tampilan pop-up modal konfirmasi RFQ Produk terkirim dengan tombol Selesai di aplikasi mobile Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-manajemen-rfq">4. Melihat Manajemen RFQ dari Menu Akun</h2>
          <p>Setelah RFQ dikirim, Anda dapat melihat daftar permintaan dan progres RFQ melalui halaman manajemen khusus. Menu ini berbeda dari daftar pesanan reguler karena berisi permintaan penawaran yang sedang diproses oleh tim Poolapack dan Packer.</p>
          <ol>
            <li>Kembali ke halaman beranda aplikasi Poolapack.</li>
            <li>Ketuk menu <strong>Akun</strong> pada navigasi bagian bawah.</li>
          </ol>
          <img src="/images/manajemenmobile/1rfq.png" alt="Beranda Mobile Web Poolapack dengan menu Akun pada navigasi bagian bawah untuk membuka manajemen RFQ" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <ol start="3">
            <li>Pada halaman Akun, cari bagian <strong>Layanan</strong>.</li>
            <li>Ketuk menu <strong>RFQ</strong> untuk membuka daftar Request for Quotation yang pernah dibuat.</li>
          </ol>
          <img src="/images/manajemenmobile/2rfq.png" alt="Halaman Akun Mobile Web Poolapack dengan pilihan menu RFQ pada bagian Layanan" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <ol start="5">
            <li>Di halaman <strong>Request for Quotation</strong>, gunakan kolom pencarian atau filter untuk menemukan permintaan RFQ tertentu.</li>
            <li>Periksa nomor RFQ, tanggal pengajuan, produk, jumlah, status proses, dan biaya komitmen jika RFQ Prioritas digunakan.</li>
          </ol>
          <img src="/images/manajemenmobile/3rfq.png" alt="Halaman manajemen Request for Quotation Mobile Web Poolapack yang menampilkan daftar RFQ dan status prosesnya" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <div class="callout callout-info">
            <strong>Catatan tentang RFQ:</strong> Manajemen RFQ digunakan untuk melihat riwayat dan progres permintaan penawaran, bukan untuk melacak lokasi produk. RFQ juga bukan transaksi produk selesai, sehingga PoolPoint mengikuti ketentuan transaksi produk yang berlaku dan tidak otomatis diperoleh hanya karena RFQ telah dibuat.
          </div>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-apa-itu-rfq', text: 'Mengenal Fitur RFQ di Poolapack' },
          { id: 'dsk-akses-menu-rfq', text: '1. Klik Tombol Menu Cepat RFQ di Beranda Website' },
          { id: 'dsk-isi-formulir-rfq', text: '2. Isi Formulir Modal Request for Quotation' },
          { id: 'dsk-fitur-prioritaskan', text: 'Fitur Prioritaskan di RFQ (Biaya Komitmen Rp 1.000.000)' },
          { id: 'dsk-konfirmasi-status-rfq', text: '3. Konfirmasi Pengajuan Selesai (RFQ Produk Terkirim)' }
        ],
        content: `
          <p>Bagi <strong>Pooler (Pembeli)</strong> yang mengakses website <strong>liva.poolapack.id</strong> melalui komputer atau laptop, pengajuan <strong>RFQ (Request for Quotation)</strong> memberikan keleluasaan dalam mengunggah spesifikasi detail kebutuhan kain kustom langsung ke jaringan produsen tekstil (<strong>Packer</strong>) Poolapack.</p>

          <div class="callout callout-info">
            <strong>Syarat Awal:</strong> Pastikan Anda telah <strong>masuk (login)</strong> ke akun Pooler Anda di website <strong>liva.poolapack.id</strong> sebelum mengisi dan mengirimkan formulir pengajuan RFQ.
          </div>

          <h2 id="dsk-apa-itu-rfq">Mengenal Fitur RFQ di Poolapack</h2>
          <p>Fitur RFQ merupakan solusi pengadaan tekstil B2B terlengkap bagi brand fashion, desainer, konveksi seragam, dan garmen ekspor:</p>
          <ul>
            <li><strong>Akses Langsung ke Pabrik (Packer):</strong> Terhubung langsung dengan pabrik rajut (knitting), tenun (weaving), pencelupan (dyeing), dan printing kain terverifikasi.</li>
            <li><strong>Kustomisasi Tanpa Batas:</strong> Sesuaikan konstruksi benang, gramasi GSM, lebar kain, komposisi serat, dan sertifikasi ramah lingkungan (OEKO-TEX, BCI).</li>
            <li><strong>Transparansi Penawaran:</strong> Menerima penawaran harga pabrik resmi secara transparan untuk membandingkan opsi terbaik.</li>
          </ul>

          <h2 id="dsk-akses-menu-rfq">1. Klik Tombol Menu Cepat RFQ di Beranda Website</h2>
          <p>Setelah Anda berhasil masuk (login) ke akun Pooler di website desktop <strong>liva.poolapack.id</strong>:</p>
          <ol>
            <li>Buka halaman beranda (<strong>Home</strong>) website Poolapack.</li>
            <li>Perhatikan barisan tombol menu cepat kategori dan fitur layanan yang berada tepat di bawah kolom pencarian utama.</li>
            <li>Klik tombol ikon <strong>RFQ</strong> (ikon lembar dokumen) yang ditandai dengan petunjuk panah hitam di samping menu <em>Poolpoint</em>, <em>Flash Sale</em>, dan <em>Bayar Nanti</em>.</li>
          </ol>
          <img src="/images/rfqdekstop/1.png" alt="Tampilan beranda website desktop Poolapack dengan tombol menu cepat RFQ" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-isi-formulir-rfq">2. Isi Formulir Modal Request for Quotation</h2>
          <p>Setelah tombol RFQ diklik, jendela pop-up modal <strong>&quot;Request for Quotation&quot;</strong> akan terbuka di tengah layar beranda dengan panduan: <em>&quot;Lengkapi detail di bawah ini, dan tim kami akan mencarikan penawaran terbaik untuk Anda.&quot;</em> Lengkapi detail pengajuan kain secara bertahap:</p>
          <ul>
            <li><strong>Pilihan Kategori:</strong> Pastikan Anda memilih tab <strong>[ Produk ]</strong> (ikon kotak) untuk memesan dan mencari produk bahan kain jadi.</li>
            <li><strong>Nama Produk:</strong> Klik dropdown <strong>Pilih Produk</strong> (ditunjukkan dengan petunjuk panah hitam) dan pilih jenis kain yang diinginkan (seperti <em>Cotton Combed</em>, <em>Rayon Viscose</em>, <em>Linen</em>, <em>Polyester</em>, dll).</li>
            <li><strong>Jumlah &amp; Satuan:</strong> Masukkan kuantitas volume pada kolom <strong>Jumlah</strong>, lalu tentukan unit melalui dropdown <strong>Satuan</strong> (seperti <em>Yard</em>, <em>Meter</em>, <em>Roll</em>, atau <em>Kg</em>).</li>
            <li><strong>Upload Foto Produk (Opsional):</strong> Klik tombol unggah foto produk (format JPG atau PNG, ukuran file maksimal 5MB) jika Anda memiliki sampel fisik kain (swatch) atau acuan visual warna dan pola.</li>
            <li><strong>Catatan Permintaan:</strong> Tuliskan rincian spesifikasi teknis kain pada kolom catatan (hingga 1.000 karakter), seperti kerapatan gramasi (GSM), lebar kain (open width/tubular), jenis rajutan/anyaman, kode warna Pantone acuan, serta target harga.</li>
            <li><strong>Opsi RFQ Prioritas:</strong> Centang opsi <strong>RFQ Prioritas (Biaya Komitmen Rp1.000.000)</strong> pada kotak kartu di bawah catatan jika Anda memerlukan penanganan kilat dalam 2x24 jam kerja.</li>
            <li><strong>Ajukan Permintaan:</strong> Setelah semua rincian terisi dengan akurat, klik tombol kuning <strong>Ajukan Permintaan</strong> di bagian bawah modal.</li>
          </ul>
          <img src="/images/rfqdekstop/2.png" alt="Formulir pop-up modal Request for Quotation di website desktop Poolapack dengan kolom Nama Produk dan opsi Prioritas" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-fitur-prioritaskan">Fitur Prioritaskan di RFQ (Biaya Komitmen Rp 1.000.000)</h2>
          <div class="callout callout-warning">
            <p class="text-base font-bold text-[#9A3412] mb-2">⚡ Fitur Prioritaskan di RFQ — Layanan Berbayar Rp 1.000.000</p>
            <p>Untuk kebutuhan pengadaan kain yang mendesak atau proyek produksi massal berprioritas tinggi, Pooler dapat mengaktifkan <strong>Fitur Prioritaskan di RFQ</strong> seharga <strong>Rp 1.000.000 (Satu Juta Rupiah)</strong>.</p>
            <p><strong>Keunggulan dan Manfaat Fitur Prioritaskan:</strong></p>
            <ul>
              <li><strong>Dianggap Sangat Serius oleh Pabrik &amp; Tim Poolapack:</strong> Pengajuan RFQ Anda akan langsung ditandai dengan badge prioritas komersial. Hal ini membuktikan komitmen dan keseriusan bisnis Anda sehingga tim Poolapack dan mitra pabrik (Packer) mendahulukan perhitungan costing serta alokasi kapasitas produksi.</li>
              <li><strong>Penawaran Jauh Lebih Cepat dalam 2x24 Jam:</strong> Memangkas waktu tunggu respon penawaran harga resmi (Quotation Sheet) dari produsen tekstil menjadi maksimal 2x24 jam kerja.</li>
              <li><strong>Priority Factory Matching:</strong> Tim sourcing Poolapack akan secara proaktif mencocokkan spesifikasi teknis kain Anda langsung ke pabrik-pabrik tekstil rekanan teratas dengan reputasi terbaik dan ketersediaan mesin produksi aktif.</li>
              <li><strong>Pendampingan Tim Sourcing Poolapack (Dedicated Assistance):</strong> Anda mendapatkan bantuan khusus dari konsultan tekstil Poolapack untuk mengawal spesifikasi teknis, pembuatan lab dip warna, hingga negosiasi harga terbaik.</li>
            </ul>
            <p class="text-xs text-[#9A3412]/80 mt-2 mb-0"><em>*Catatan: Pembayaran biaya komitmen sebesar Rp 1.000.000 dilakukan saat submit formulir pengajuan melalui metode pembayaran resmi di platform Poolapack.</em></p>
          </div>

          <h2 id="dsk-konfirmasi-status-rfq">3. Konfirmasi Pengajuan Selesai (RFQ Produk Terkirim)</h2>
          <p>Setelah Anda mengklik tombol kuning <strong>Ajukan Permintaan</strong>, sistem Poolapack akan memproses formulir dan seketika memunculkan pop-up modal konfirmasi keberhasilan pengajuan di layar beranda:</p>
          <ul>
            <li><strong>Pemberitahuan Berhasil:</strong> Modal menampilkan pesan resmi <strong>&quot;RFQ Produk terkirim,&quot;</strong> disertai keterangan: <em>&quot;Terima kasih atas pengajuan RFQ-nya, tim kami akan segera menghubungi Anda!&quot;</em></li>
            <li><strong>Tombol Selesai:</strong> Terdapat tombol konfirmasi <strong>&quot;Selesai (1s)&quot;</strong> dengan hitung mundur otomatis atau dapat langsung diklik untuk menutup modal dan kembali ke halaman utama.</li>
            <li><strong>Tindak Lanjut Tim Poolapack:</strong> Tim konsultan tekstil dan sourcing Poolapack akan segera meninjau spesifikasi kain Anda dan mencocokkannya ke pabrik mitra (Packer) untuk menyusun penawaran resmi.</li>
          </ul>
          <img src="/images/rfqdekstop/5.png" alt="Pop-up modal konfirmasi RFQ Produk terkirim dengan tombol Selesai di website desktop Poolapack" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />
        `
      }
    ]
  },
  {
    id: '30',
    slug: 'cara-melihat-log-pesanan',
    title: 'Cara Melihat Log Pesanan dan Surat Resmi Poolapack',
    excerpt: 'Panduan melihat log tahapan pesanan melalui Mobile Web dan Desktop Web, mulai dari pembayaran, diproses, dikirim, selesai, hingga ulasan. Fitur ini menampilkan status proses dan dokumen resmi, bukan lokasi produk secara real-time.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-2',
    readTime: 4,
    lastUpdated: '15 September 2026',
    audience: 'pembeli',
    tags: [
      'manajemen pesanan', 'manajemen produk', 'log pesanan', 'log transaksi',
      'status pesanan', 'status transaksi', 'pesanan diproses', 'packing', 'dikemas',
      'dalam perjalanan', 'dikirim', 'pesanan selesai', 'ulasan pesanan', 'review pesanan',
      'surat resmi', 'surat poolapack', 'invoice pesanan', 'poolpoint', 'pesanan', 'transaksi',
      'pesanan reguler', 'cek status'
    ],
    toc: [
      { id: 'mob-buka-menu-pesanan', text: 'Mobile: Buka Menu Pesanan' },
      { id: 'mob-baca-log-pesanan', text: 'Mobile: Baca Log dan Dokumen Resmi' },
      { id: 'dsk-buka-profil', text: 'Desktop: Buka Profil Akun' },
      { id: 'dsk-buka-transaksi-reguler', text: 'Desktop: Buka Transaksi Reguler' },
      { id: 'tahap-akhir-ulasan', text: 'Tahap Akhir: Beri Ulasan dan Dapatkan PoolPoint' }
    ],
    content: '',
    platforms: [
      {
        label: 'Mobile (Web)',
        icon: 'ph:device-mobile-bold',
        toc: [
          { id: 'mob-buka-menu-pesanan', text: '1. Buka Menu Pesanan' },
          { id: 'mob-pilih-pesanan', text: '2. Pilih Pesanan yang Ingin Dilihat' },
          { id: 'mob-baca-log-pesanan', text: '3. Baca Log Pesanan dan Surat Resmi' },
          { id: 'mob-selesaikan-ulasan', text: '4. Selesaikan Ulasan untuk PoolPoint' }
        ],
        content: `
          <p>Panduan ini membantu <strong>Pooler (pembeli)</strong> melihat tahapan pesanan yang sudah dibuat melalui browser smartphone. Log pesanan menunjukkan perkembangan proses transaksi, seperti pembayaran, pesanan diproses atau dikemas, dikirim, selesai, dan ulasan.</p>

          <div class="callout callout-warning">
            <strong>Penting:</strong> Log pesanan bukan fitur pelacakan lokasi secara real-time. Anda tidak dapat melihat posisi produk, posisi kurir, atau pergerakan GPS. Fitur ini hanya menampilkan status proses pesanan dan dokumen resmi yang tersedia dari Poolapack.
          </div>

          <h2 id="mob-buka-menu-pesanan">1. Buka Menu Pesanan</h2>
          <ol>
            <li>Login ke akun Poolapack melalui browser smartphone Anda.</li>
            <li>Pada navigasi bagian bawah, ketuk menu <strong>Pesanan</strong>.</li>
            <li>Halaman Pesanan akan menampilkan daftar transaksi yang pernah Anda buat.</li>
          </ol>
          <img src="/images/manajemenmobile/1.png" alt="Beranda Mobile Web Poolapack dengan menu Pesanan pada navigasi bagian bawah" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-pilih-pesanan">2. Pilih Pesanan yang Ingin Dilihat</h2>
          <p>Pada halaman <strong>Pesanan</strong>, Anda dapat mencari atau menyaring transaksi yang ingin diperiksa:</p>
          <ul>
            <li>Gunakan kolom <strong>Cari Pesanan</strong> jika Anda mengetahui nomor invoice atau informasi pesanan.</li>
            <li>Pilih kartu pesanan berdasarkan nomor invoice, tanggal transaksi, nama Packer, atau nama produk.</li>
            <li>Periksa badge status yang tampil pada kartu pesanan, misalnya <strong>Menunggu Pembayaran</strong>.</li>
          </ul>
          <img src="/images/manajemenmobile/2.png" alt="Halaman Pesanan Mobile Web Poolapack yang menampilkan daftar invoice, status transaksi, dan tahapan proses produk" class="rounded-xl border border-neutral-200 shadow-sm my-4 max-w-xs mx-auto block" />

          <h2 id="mob-baca-log-pesanan">3. Baca Log Pesanan dan Surat Resmi</h2>
          <p>Setiap kartu transaksi memiliki urutan log proses. Status dapat berbeda sesuai kondisi pesanan, tetapi secara umum tahapannya adalah:</p>
          <ol>
            <li><strong>Menunggu Pembayaran:</strong> Pesanan sudah dibuat tetapi pembayaran belum terkonfirmasi.</li>
            <li><strong>Diproses atau Dikemas:</strong> Pembayaran telah diterima dan Packer sedang menyiapkan pesanan.</li>
            <li><strong>Dikirim atau Dalam Perjalanan:</strong> Pesanan masuk ke proses pengiriman. Status ini tidak menunjukkan lokasi paket secara real-time.</li>
            <li><strong>Selesai:</strong> Pesanan telah diterima oleh Pooler.</li>
            <li><strong>Ulasan:</strong> Tahap akhir yang perlu diselesaikan setelah barang diterima.</li>
          </ol>
          <p>Nomor invoice pada kartu pesanan dapat disalin melalui ikon salin. Jika dokumen tersedia pada detail transaksi, buka opsi invoice atau surat resmi untuk mendapatkan dokumen resmi dari Poolapack.</p>

          <h2 id="mob-selesaikan-ulasan">4. Selesaikan Ulasan untuk Mendapatkan PoolPoint</h2>
          <ol>
            <li>Pastikan pesanan sudah berstatus <strong>Selesai</strong> dan produk telah diterima.</li>
            <li>Buka kembali detail pesanan, lalu ketuk tombol atau tahap <strong>Ulasan</strong>.</li>
            <li>Berikan penilaian dan kirim ulasan hingga status log mencapai tahap akhir.</li>
            <li>Setelah ulasan berhasil dikirim, PoolPoint akan otomatis ditambahkan sesuai ketentuan program.</li>
          </ol>
          <div class="callout callout-info">
            <strong>Hubungan dengan PoolPoint:</strong> PoolPoint diperoleh setelah alur pesanan selesai sampai tahap ulasan. Baca juga artikel <a href="/article/apa-itu-poolpoint" class="text-amber-700 underline font-bold">Apa Itu PoolPoint dan Cara Menggunakannya?</a>.
          </div>
        `
      },
      {
        label: 'Desktop (Web)',
        icon: 'ph:monitor-bold',
        toc: [
          { id: 'dsk-buka-profil', text: '1. Buka Profil Akun' },
          { id: 'dsk-buka-transaksi-reguler', text: '2. Masuk ke Transaksi Reguler' },
          { id: 'dsk-baca-log-pesanan', text: '3. Baca Log dan Dapatkan Surat Resmi' },
          { id: 'dsk-selesaikan-ulasan', text: '4. Selesaikan Ulasan untuk PoolPoint' }
        ],
        content: `
          <p>Panduan Desktop Web ini digunakan untuk melihat log pesanan melalui website Poolapack di komputer atau laptop. Log membantu Anda mengetahui tahapan proses transaksi dan mendapatkan dokumen resmi, tetapi bukan untuk melacak posisi produk atau kurir secara langsung.</p>

          <div class="callout callout-warning">
            <strong>Batasan fitur:</strong> Log hanya menampilkan status proses pesanan. Posisi barang, lokasi kurir, dan pergerakan GPS tidak dapat dilacak dari halaman ini.
          </div>

          <h2 id="dsk-buka-profil">1. Buka Profil Akun</h2>
          <ol>
            <li>Login ke akun Poolapack melalui <strong>liva.poolapack.id</strong>.</li>
            <li>Pada bagian kanan atas halaman, klik avatar atau nama akun Anda.</li>
            <li>Menu profil akan terbuka. Pilih area profil untuk masuk ke halaman akun.</li>
          </ol>
          <img src="/images/manajemendekstop/1.png" alt="Beranda Desktop Web Poolapack dengan petunjuk menuju avatar atau nama akun di kanan atas" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-buka-transaksi-reguler">2. Masuk ke Transaksi Reguler</h2>
          <p>Setelah halaman profil terbuka:</p>
          <ol>
            <li>Pada menu samping, buka bagian <strong>Transaksi</strong>.</li>
            <li>Klik menu <strong>Reguler</strong> untuk melihat daftar pesanan reguler.</li>
            <li>Pilih pesanan berdasarkan nomor invoice, tanggal, Packer, atau produk yang dibeli.</li>
          </ol>
          <img src="/images/manajemendekstop/2.png" alt="Halaman Profil Desktop Web Poolapack dengan menu Transaksi dan pilihan Reguler" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-baca-log-pesanan">3. Baca Log dan Dapatkan Surat Resmi</h2>
          <p>Pada halaman daftar pesanan, Anda dapat melihat informasi transaksi dan tahapan log yang ditampilkan dalam bentuk ikon status:</p>
          <ul>
            <li><strong>Menunggu Pembayaran:</strong> Pembayaran belum selesai atau belum terkonfirmasi.</li>
            <li><strong>Diproses atau Dikemas:</strong> Packer sedang menyiapkan produk.</li>
            <li><strong>Dikirim atau Dalam Perjalanan:</strong> Pesanan sedang berada pada proses pengiriman, tanpa informasi lokasi GPS real-time.</li>
            <li><strong>Selesai:</strong> Produk telah diterima oleh Pooler.</li>
            <li><strong>Ulasan:</strong> Tahap akhir setelah produk diterima.</li>
          </ul>
          <p>Gunakan tombol <strong>Lihat Invoice</strong> atau opsi dokumen yang tersedia pada kartu pesanan untuk mendapatkan surat resmi/invoice dari Poolapack.</p>
          <img src="/images/manajemendekstop/3.png" alt="Halaman Pesanan Desktop Web Poolapack dengan filter status, tombol invoice, dan log tahapan transaksi" class="rounded-xl border border-neutral-200 shadow-sm my-4 w-full" />

          <h2 id="dsk-selesaikan-ulasan">4. Selesaikan Ulasan untuk Mendapatkan PoolPoint</h2>
          <ol>
            <li>Pastikan status pesanan sudah <strong>Selesai</strong> dan barang telah diterima.</li>
            <li>Buka detail pesanan dan lanjutkan ke tahap <strong>Ulasan</strong>.</li>
            <li>Isi penilaian, lalu kirim ulasan sampai proses berhasil.</li>
            <li>PoolPoint akan otomatis ditambahkan setelah seluruh alur pesanan dan ulasan selesai sesuai ketentuan.</li>
          </ol>
          <div class="callout callout-info">
            <strong>Pelajari lebih lanjut:</strong> Untuk mengetahui syarat penggunaan dan penukaran poin, baca artikel <a href="/article/apa-itu-poolpoint" class="text-amber-700 underline font-bold">Apa Itu PoolPoint dan Cara Menggunakannya?</a>.
          </div>
        `
      }
    ]
  },
  {
    id: '8',
    slug: 'cara-batalkan-pesanan',
    title: 'Cara Membatalkan Pesanan',
    excerpt: 'Ketentuan dan cara membatalkan pesanan sebelum paket dikirimkan oleh gudang.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-3',
    readTime: 3,
    lastUpdated: '30 Agustus 2026',
    tags: [
      'batal', 'batalkan pesanan', 'pembatalan', 'cancel order', 'cancel pesanan',
      'batal beli', 'alasan pembatalan', 'membatalkan', 'cancel', 'batal transaksi'
    ],
    toc: [
      { id: 'syarat-pembatalan', text: 'Syarat dan Ketentuan Pembatalan' },
      { id: 'langkah-pembatalan', text: 'Langkah Membatalkan Pesanan' },
      { id: 'pengembalian-dana-poolpay', text: 'Alur Pengembalian Dana Otomatis ke PoolPay' },
      { id: 'opsi-pencairan-saldo', text: 'Pemanfaatan Saldo PoolPay & Pencairan ke Bank' }
    ],
    content: `
      <h2 id="syarat-pembatalan">Syarat dan Ketentuan Pembatalan</h2>
      <p>Pembatalan pesanan di platform Poolapack dapat dilakukan atau terjadi melalui ketentuan berikut:</p>
      <ul>
        <li><strong>Pesanan Belum Dibayar:</strong> Pesanan dengan status <em>Menunggu Pembayaran</em> dapat langsung dibatalkan kapan saja oleh Pooler (pembeli) tanpa konsekuensi.</li>
        <li><strong>Pesanan Sedang Diproses:</strong> Pengajuan pembatalan dapat dilakukan sebelum Packer mencetak resi atau sebelum pesanan masuk antrean produksi pabrik.</li>
        <li><strong>Pembatalan Otomatis oleh Admin:</strong> Jika stok bahan di pabrik Packer habis, terjadi kendala mesin/produksi, atau kendala operasional lainnya, admin Poolapack berhak membatalkan transaksi demi kenyamanan Anda.</li>
        <li><strong>Pesanan Sudah Dikirim:</strong> Pesanan yang sudah berstatus <em>Dikirim</em> tidak dapat dibatalkan melalui sistem (harus melalui prosedur komplain / retur setelah barang diterima).</li>
      </ul>

      <h2 id="langkah-pembatalan">Langkah Membatalkan Pesanan</h2>
      <ol>
        <li>Masuk ke akun Poolapack Anda, lalu buka menu <strong>Daftar Transaksi</strong> atau <strong>Pesanan Saya</strong>.</li>
        <li>Pilih detail pesanan yang ingin dibatalkan.</li>
        <li>Klik tombol <strong>Batalkan Pesanan</strong> di bagian bawah halaman.</li>
        <li>Pilih alasan pembatalan yang sesuai, lalu klik <strong>Konfirmasi Pembatalan</strong>.</li>
      </ol>

      <h2 id="pengembalian-dana-poolpay">Alur Pengembalian Dana Otomatis ke PoolPay</h2>
      <p>Jika transaksi yang dibatalkan oleh admin adalah transaksi yang <strong>sudah Anda bayarkan</strong>, dana Anda dijamin 100% aman:</p>
      <ul>
        <li><strong>Otomatis 100% ke PoolPay:</strong> Seluruh dana yang sudah Anda transfer akan otomatis dikembalikan 100% dan masuk langsung ke dompet saldo digital <strong>PoolPay</strong> Anda.</li>
        <li><strong>Tanpa Formulir Manual:</strong> Anda tidak perlu mengisi formulir pengajuan refund atau menunggu proses verifikasi berhari-hari. Saldo bertambah secara seketika (real-time).</li>
        <li><strong>Notifikasi WhatsApp:</strong> Begitu pembatalan diproses admin, Anda akan menerima pesan konfirmasi resmi melalui WhatsApp terdaftar beserta rincian pengembalian dana ke PoolPay.</li>
      </ul>

      <h2 id="opsi-pencairan-saldo">Pemanfaatan Saldo PoolPay &amp; Pencairan ke Bank</h2>
      <p>Saldo yang tersimpan di PoolPay sepenuhnya fleksibel untuk Anda gunakan:</p>
      <ol>
        <li><strong>Digunakan Berbelanja Kembali:</strong> Saat Anda checkout produk lain (Pre Order maupun Ready Stock), pilih <em>PoolPay</em> sebagai metode pembayaran. Jika saldo tidak cukup, sistem mendukung pembayaran kombinasi dengan QRIS, Virtual Account, atau E-Wallet.</li>
        <li><strong>Dicairkan ke Rekening Bank:</strong> Anda dapat mencairkan saldo PoolPay ke rekening bank pribadi Anda kapan saja melalui menu <em>Profil &rarr; Saldo PoolPay &rarr; Tarik Dana</em> (minimal penarikan Rp 10.000, estimasi 1–2 hari kerja dengan verifikasi keamanan OTP WhatsApp).</li>
      </ol>
      <div class="callout callout-info">
        Untuk panduan detail lengkap seputar saldo digital dan pencairan dana, silakan baca artikel <a href="/article/cara-ajukan-refund" class="text-amber-700 underline font-bold">Cara Mengajukan Pengembalian Dana (Refund)</a> atau <a href="/article/apa-itu-poolpay" class="text-amber-700 underline font-bold">Apa Itu PoolPay</a>.
      </div>
    `
  },

  // Pembayaran
  {
    id: '9',
    slug: 'metode-pembayaran-tersedia',
    title: 'Metode Pembayaran yang Tersedia di Poolapack & Ketentuan Biaya (Fee)',
    excerpt: 'Daftar lengkap 8 opsi pembayaran resmi Poolapack (Virtual Account & BCA), saldo PoolPay, fitur Split Pembayaran, serta rincian variasi biaya pembayaran (fee).',
    category: 'pembayaran',
    categoryTitle: 'Pembayaran',
    subCategoryId: '3-1',
    readTime: 4,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'pembayaran', 'metode pembayaran', 'cara bayar', 'virtual account', 'va', 'bca transfer',
      'bca espay', 'espay', 'mandiri va', 'briva', 'bri va', 'bni va', 'cimb va', 'permata va',
      'danamon va', 'fee', 'biaya pembayaran', 'fee pembayaran', 'biaya admin', 'split pembayaran',
      'poolpay', 'saldo poolpay', 'cara bayar pesanan', 'countdown'
    ],
    toc: [
      { id: 'daftar-metode-tersedia', text: '8 Metode Pembayaran Resmi Poolapack' },
      { id: 'ketentuan-fee', text: 'Ketentuan Biaya Pembayaran (Fee Berbeda Tiap Metode)' },
      { id: 'poolpay-split', text: 'PoolPay & Fitur Split Pembayaran (+ Tambah Split)' },
      { id: 'countdown-verifikasi', text: 'Batas Waktu Pembayaran & Verifikasi Otomatis' }
    ],
    content: `
      <h2 id="daftar-metode-tersedia">8 Metode Pembayaran Resmi Poolapack</h2>
      <p>Untuk menjamin keamanan dan kenyamanan transaksi kain dan kemasan antara <strong>Pooler (Pembeli)</strong> dan <strong>Packer (Penjual)</strong>, Poolapack menyediakan 8 pilihan channel pembayaran resmi:</p>
      <ol>
        <li><strong>Mandiri Virtual Account:</strong> Pembayaran otomatis dengan nomor VA Mandiri unik via Livin' by Mandiri, ATM Mandiri, atau Internet Banking Mandiri.</li>
        <li><strong>BCA Transfer:</strong> Pembayaran transfer ke rekening BCA melalui BCA Mobile (m-BCA), KlikBCA, atau ATM BCA dengan panduan transfer dan verifikasi akurat.</li>
        <li><strong>CIMB Virtual Account:</strong> Nomor Virtual Account CIMB Niaga untuk pembayaran via aplikasi OCTO Mobile, OCTO Clicks, atau jaringan ATM CIMB.</li>
        <li><strong>BRI Virtual Account (BRIVA):</strong> Nomor VA BRI resmi yang dapat dibayar melalui aplikasi BRImo, Internet Banking BRI, AgenBRILink, atau ATM BRI.</li>
        <li><strong>BNI Virtual Account:</strong> Nomor VA BNI untuk kemudahan transfer melalui BNI Mobile Banking, BNI Internet Banking, atau ATM BNI.</li>
        <li><strong>Permata Virtual Account:</strong> Nomor VA Permata untuk transaksi via PermataMobile X, PermataNet, atau ATM Permata.</li>
        <li><strong>Danamon Virtual Account:</strong> Nomor VA Bank Danamon melalui aplikasi D-Bank PRO atau jaringan ATM Danamon.</li>
        <li><strong>BCA Espay:</strong> Layanan pembayaran instan terintegrasi BCA yang memudahkan proses checkout dengan otorisasi cepat dan praktis.</li>
      </ol>

      <h2 id="ketentuan-fee">Ketentuan Biaya Pembayaran (Fee Berbeda Tiap Metode)</h2>
      <p>Setiap metode pembayaran di Poolapack memiliki <strong>biaya pembayaran (fee transaksi / administrasi gateway) yang berbeda-beda</strong> tergantung pada channel perbankan dan penyedia layanan yang dipilih.</p>
      <div class="callout callout-info">
        <strong>Transparansi Biaya:</strong> Besaran biaya pembayaran akan selalu ditampilkan secara transparan di panel sebelah kanan halaman Checkout pada baris <em>Biaya Pembayaran &#9432;</em> sebelum Anda menekan tombol <strong>Lanjutkan Pembayaran</strong>. Anda dapat memilih metode pembayaran dengan fee yang paling sesuai dengan preferensi Anda.
      </div>
      <p>Rincian perhitungan total tagihan pada halaman Checkout terdiri dari:</p>
      <ul>
        <li><strong>Total Harga Produk:</strong> Akumulasi harga gulungan kain atau kemasan sesuai jumlah pesanan Anda.</li>
        <li><strong>Biaya Pengiriman:</strong> Tarif ekspedisi pengiriman (Rp 0 jika Anda memilih opsi <em>Diambil di Pabrik/Gudang</em>).</li>
        <li><strong>Diskon 1% Verifikasi Identitas:</strong> Potongan harga 1% untuk Pooler yang telah memverifikasi KTP atau NPWP.</li>
        <li><strong>Diskon PoolPoint:</strong> Potongan harga jika Anda menukarkan 50 atau 100 PoolPoint (khusus produk Pre Order dan Ready Stock).</li>
        <li><strong>Biaya Pembayaran:</strong> Fee transaksi resmi sesuai channel metode pembayaran yang Anda pilih.</li>
        <li><strong>Total Pembayaran:</strong> Nominal bersih akhir yang wajib ditransfer sebelum batas waktu habis.</li>
      </ul>

      <h2 id="poolpay-split">PoolPay &amp; Fitur Split Pembayaran (+ Tambah Split Pembayaran)</h2>
      <p>Selain 8 channel perbankan di atas, Poolapack juga menyediakan dompet digital saldo refund resmi yaitu <strong>PoolPay</strong>:</p>
      <ul>
        <li><strong>Otomatis dari Refund:</strong> Jika pesanan yang sudah Anda bayar dibatalkan oleh admin (misalnya karena kendala teknis pabrik Packer atau stok mendadak kosong), dana dikembalikan 100% secara otomatis ke saldo PoolPay Anda.</li>
        <li><strong>Pembayaran Penuh via PoolPay:</strong> Jika saldo PoolPay mencukupi total transaksi, pesanan langsung terbayar lunas seketika tanpa biaya admin tambahan.</li>
        <li><strong>Fitur "+ Tambah Split Pembayaran":</strong> Jika saldo PoolPay Anda kurang dari total belanja, klik tombol <strong>+ Tambah Split Pembayaran</strong>. Anda dapat menggunakan seluruh saldo PoolPay untuk memotong tagihan, lalu membayar sisa kekurangannya menggunakan salah satu dari 8 metode di atas (misal via BCA Transfer atau Mandiri VA).</li>
        <li><strong>Dapat Dicairkan:</strong> Saldo PoolPay sepenuhnya milik Anda dan dapat dicairkan ke rekening bank pribadi kapan saja (minimal penarikan Rp 10.000, verifikasi OTP WhatsApp, cair 1–2 hari kerja).</li>
      </ul>

      <h2 id="countdown-verifikasi">Batas Waktu Pembayaran &amp; Verifikasi Otomatis</h2>
      <p>Setelah menekan tombol <em>Lanjutkan Pembayaran</em>, Anda akan masuk ke halaman tagihan resmi:</p>
      <ul>
        <li><strong>Countdown Timer:</strong> Perhatikan batas waktu transfer yang tertera di bagian atas (misalnya 4 jam). Pastikan pembayaran selesai sebelum timer habis agar pesanan tidak batal otomatis.</li>
        <li><strong>Tombol Salin (Copy):</strong> Manfaatkan tombol salin di samping <em>Total Pembayaran</em> dan <em>Nomor Virtual Account / Rekening</em> untuk mencegah salah nominal atau salah digit rekening tujuan.</li>
        <li><strong>Tombol "Cek Status Pembayaran &#8635;":</strong> Setelah transfer berhasil, klik tombol ini untuk memicu pembaruan status sistem secara langsung (real-time).</li>
        <li><strong>Tombol "Ubah Metode Pembayaran":</strong> Jika ingin beralih ke rekening bank lain, Anda dapat mengganti metode pembayaran selama batas waktu pembayaran belum kedaluwarsa.</li>
      </ul>
    `
  },
  {
    id: '10',
    slug: 'cara-bayar-transfer-bank',
    title: 'Cara Bayar via Virtual Account Bank (Mandiri, BRI, BNI, CIMB, Permata, Danamon)',
    excerpt: 'Tutorial langkah demi langkah membayar tagihan Virtual Account melalui ATM, Mobile Banking (Livin, BRImo, BNI Mobile, OCTO Mobile), dan Internet Banking.',
    category: 'pembayaran',
    categoryTitle: 'Pembayaran',
    subCategoryId: '3-2',
    readTime: 4,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'transfer', 'transfer bank', 'virtual account', 'va', 'mandiri va', 'briva', 'bri va',
      'bni va', 'cimb va', 'permata va', 'danamon va', 'mbanking', 'livin', 'brimo', 'atm',
      'bayar va', 'nomor va', 'petunjuk transfer', 'kode bank'
    ],
    toc: [
      { id: 'mandiri-va', text: '1. Cara Bayar Mandiri Virtual Account' },
      { id: 'bri-va', text: '2. Cara Bayar BRI Virtual Account (BRIVA)' },
      { id: 'bni-va', text: '3. Cara Bayar BNI Virtual Account' },
      { id: 'cimb-permata-danamon', text: '4. Cara Bayar CIMB, Permata & Danamon VA' },
      { id: 'tips-bayar-va', text: '5. Tips Pembayaran & Cek Status Real-time' }
    ],
    content: `
      <h2 id="mandiri-va">1. Cara Bayar Mandiri Virtual Account</h2>
      <p>Melalui aplikasi <strong>Livin' by Mandiri</strong> (Mobile Banking):</p>
      <ol>
        <li>Buka aplikasi Livin' by Mandiri dan login ke akun Anda.</li>
        <li>Pilih menu <strong>Bayar</strong> &gt; tap pada kolom pencarian dan ketik <strong>Poolapack</strong> atau pilih <em>Virtual Account</em>.</li>
        <li>Masukkan nomor Mandiri Virtual Account yang tertera di halaman pembayaran Poolapack.</li>
        <li>Periksa detail pembayaran: nama penerima (Poolapack / nama transaksi) dan total nominal tagihan.</li>
        <li>Konfirmasi dan masukkan PIN Livin' Anda. Transaksi selesai.</li>
      </ol>
      <p>Melalui <strong>ATM Mandiri</strong>: Masukkan kartu ATM &gt; PIN &gt; pilih <em>Bayar/Beli</em> &gt; <em>Lainnya</em> &gt; <em>Multi Payment</em> &gt; masukkan kode perusahaan / nomor VA Poolapack &gt; masukkan nominal tagihan &gt; konfirmasi pembayaran.</p>

      <h2 id="bri-va">2. Cara Bayar BRI Virtual Account (BRIVA)</h2>
      <p>Melalui aplikasi <strong>BRImo</strong> (Mobile Banking):</p>
      <ol>
        <li>Login ke aplikasi BRImo.</li>
        <li>Pilih menu <strong>Tagihan</strong> &gt; pilih <strong>BRIVA</strong>.</li>
        <li>Klik <strong>Tambah Transaksi Baru</strong> dan masukkan nomor BRIVA dari halaman checkout Poolapack.</li>
        <li>Periksa informasi tagihan yang muncul di layar. Pastikan nominal telah sesuai.</li>
        <li>Klik <strong>Bayar</strong> dan masukkan PIN BRImo Anda.</li>
      </ol>

      <h2 id="bni-va">3. Cara Bayar BNI Virtual Account</h2>
      <p>Melalui aplikasi <strong>BNI Mobile Banking</strong>:</p>
      <ol>
        <li>Login ke aplikasi BNI Mobile Banking.</li>
        <li>Pilih menu <strong>Pembayaran</strong> &gt; pilih <strong>Virtual Account Billing</strong>.</li>
        <li>Pilih tab <em>Input Baru</em> dan masukkan nomor Virtual Account BNI yang Anda dapatkan di Poolapack.</li>
        <li>Tagihan akan muncul secara otomatis. Periksa rinciannya dengan teliti.</li>
        <li>Masukkan Password Transaksi BNI Anda untuk menyelesaikan pembayaran.</li>
      </ol>

      <h2 id="cimb-permata-danamon">4. Cara Bayar CIMB, Permata &amp; Danamon VA</h2>
      <ul>
        <li><strong>CIMB Virtual Account:</strong> Buka OCTO Mobile &gt; pilih menu <em>Transfer</em> &gt; <em>Rekening CIMB Niaga / Rekening Ponsel Lain</em> &gt; masukkan nomor VA &gt; konfirmasi PIN OCTO Mobile.</li>
        <li><strong>Permata Virtual Account:</strong> Buka PermataMobile X &gt; pilih menu <em>Bayar Tagihan</em> &gt; pilih <em>Virtual Account</em> &gt; masukkan nomor VA Permata Poolapack &gt; konfirmasi transaksi.</li>
        <li><strong>Danamon Virtual Account:</strong> Buka aplikasi D-Bank PRO &gt; pilih menu <em>Pembayaran</em> &gt; <em>Virtual Account</em> &gt; masukkan nomor VA Danamon &gt; periksa nominal &gt; konfirmasi dengan m-Token/PIN.</li>
      </ul>

      <h2 id="tips-bayar-va">5. Tips Pembayaran &amp; Cek Status Real-time</h2>
      <div class="callout callout-info">
        <strong>Perhatikan Hal Berikut Saat Membayar VA:</strong>
        <ul>
          <li>Salin nomor VA dan nominal tagihan menggunakan tombol <strong>Copy</strong> di halaman tagihan agar terhindar dari kesalahan pengetikan.</li>
          <li>Selesaikan transfer sebelum batas waktu <strong>Countdown Timer</strong> habis.</li>
          <li>Setelah transfer berhasil di m-Banking atau ATM, buka kembali halaman pembayaran Poolapack dan klik tombol <strong>Cek Status Pembayaran &#8635;</strong>. Status pesanan akan otomatis terverifikasi lunas menjadi <em>Diproses</em>.</li>
        </ul>
      </div>
    `
  },
  {
    id: '11',
    slug: 'cara-bayar-bca-espay',
    title: 'Cara Bayar via BCA Transfer & BCA Espay di Poolapack',
    excerpt: 'Panduan lengkap pembayaran transaksi melalui BCA Transfer manual/otomatis dan layanan instan BCA Espay di Poolapack.',
    category: 'pembayaran',
    categoryTitle: 'Pembayaran',
    subCategoryId: '3-1',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'bca', 'bca transfer', 'bca espay', 'espay', 'transfer bca', 'm-bca', 'klikbca',
      'atm bca', 'cara bayar bca', 'pembayaran bca', 'fee bca', 'rekening bca'
    ],
    toc: [
      { id: 'bca-transfer', text: '1. Cara Bayar via BCA Transfer' },
      { id: 'bca-espay', text: '2. Cara Bayar via BCA Espay' },
      { id: 'perbedaan-bca', text: '3. Perbedaan BCA Transfer & BCA Espay' },
      { id: 'verifikasi-bca', text: '4. Biaya Pembayaran & Verifikasi Transaksi' }
    ],
    content: `
      <h2 id="bca-transfer">1. Cara Bayar via BCA Transfer</h2>
      <p>Pembayaran via <strong>BCA Transfer</strong> dapat dilakukan melalui m-BCA (BCA Mobile), KlikBCA (Internet Banking), maupun mesin ATM BCA:</p>
      <ol>
        <li>Pada halaman Checkout Poolapack, pilih metode pembayaran <strong>BCA Transfer</strong>.</li>
        <li>Klik <strong>Lanjutkan Pembayaran</strong> untuk menuju ke halaman tagihan.</li>
        <li>Periksa nomor rekening tujuan BCA resmi Poolapack dan nominal pembayaran yang tertera.</li>
        <li>Buka aplikasi <strong>BCA Mobile (m-BCA)</strong>:
          <ul>
            <li>Pilih menu <strong>m-Transfer</strong> &gt; daftarkan rekening tujuan jika belum terdaftar.</li>
            <li>Pilih <strong>Transfer Antar Rekening</strong> &gt; pilih rekening tujuan BCA Poolapack.</li>
            <li>Masukkan nominal transfer sesuai total tagihan pada halaman pembayaran.</li>
            <li>Periksa nama penerima, lalu masukkan PIN m-BCA Anda.</li>
          </ul>
        </li>
        <li>Setelah transfer berhasil, kembali ke halaman pembayaran Poolapack dan klik tombol <strong>Cek Status Pembayaran &#8635;</strong>.</li>
      </ol>

      <h2 id="bca-espay">2. Cara Bayar via BCA Espay</h2>
      <p><strong>BCA Espay</strong> adalah integrasi sistem payment gateway resmi yang memproses pembayaran BCA secara langsung dan instan:</p>
      <ol>
        <li>Pilih opsi <strong>BCA Espay</strong> pada pilihan metode pembayaran di halaman Checkout.</li>
        <li>Periksa rincian biaya pembayaran (fee) pada ringkasan belanja, lalu klik <strong>Lanjutkan Pembayaran</strong>.</li>
        <li>Sistem akan mengarahkan Anda ke antarmuka pembayaran aman BCA Espay.</li>
        <li>Ikuti instruksi otorisasi pembayaran pada layar untuk menyelesaikan transaksi.</li>
        <li>Begitu transaksi selesai diverifikasi, status pembayaran akan berubah menjadi lunas seketika tanpa perlu verifikasi manual.</li>
      </ol>

      <h2 id="perbedaan-bca">3. Perbedaan BCA Transfer &amp; BCA Espay</h2>
      <ul>
        <li><strong>BCA Transfer:</strong> Menggunakan transfer dana antar rekening BCA standar (bisa via m-BCA, KlikBCA, atau ATM BCA) dengan pengecekan status melalui tombol <em>Cek Status Pembayaran &#8635;</em>.</li>
        <li><strong>BCA Espay:</strong> Menggunakan jalur payment gateway terpadu yang memproses verifikasi secara otomatis langsung dari sistem gateway perbankan.</li>
      </ul>

      <h2 id="verifikasi-bca">4. Biaya Pembayaran &amp; Verifikasi Transaksi</h2>
      <div class="callout callout-info">
        <strong>Ketentuan Biaya (Fee):</strong> BCA Transfer dan BCA Espay memiliki struktur biaya pembayaran yang berbeda. Nominal fee masing-masing channel akan tertera jelas pada rincian <em>Biaya Pembayaran &#9432;</em> di halaman Checkout sebelum Anda melakukan pembayaran.
      </div>
      <div class="callout callout-warning">
        <strong>Penting:</strong> Pastikan Anda mentransfer tepat sesuai total nominal yang tertera dan menyelesaikan pembayaran sebelum waktu <strong>Countdown Timer</strong> berakhir.
      </div>
    `
  },
  {
    id: '12',
    slug: 'cara-ajukan-refund',
    title: 'Cara Mengajukan Pengembalian Dana (Refund)',
    excerpt: 'Prosedur dan alur pengembalian dana transaksi yang dibatalkan langsung ke saldo digital PoolPay Anda.',
    category: 'pembayaran',
    categoryTitle: 'Pembayaran',
    subCategoryId: '3-3',
    readTime: 4,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'refund', 'pengembalian dana', 'kembali dana', 'poolpay', 'saldo poolpay', 'komplain', 'klaim',
      'uang kembali', 'dana kembali', 'stok habis', 'saldo refund', 'ajukan refund',
      'batal transaksi', 'cairkan saldo', 'pengembalian uang', 'pooler'
    ],
    toc: [
      { id: 'ketentuan-refund', text: 'Ketentuan Pengembalian Dana' },
      { id: 'refund-ke-poolpay', text: 'Pengembalian Dana Otomatis ke PoolPay' },
      { id: 'opsi-saldo-poolpay', text: 'Pemanfaatan Saldo: Belanja atau Dicairkan' },
      { id: 'estimasi-pencairan', text: 'Ketentuan & Estimasi Pencairan ke Rekening' }
    ],
    content: `
      <h2 id="ketentuan-refund">Ketentuan Pengembalian Dana</h2>
      <p>Pengembalian dana (refund) di platform Poolapack berlaku jika terjadi salah satu dari kondisi berikut:</p>
      <ul>
        <li><strong>Pembatalan Transaksi oleh Admin:</strong> Admin membatalkan pesanan karena stok di pabrik Packer habis, kendala produksi, atau kendala operasional lainnya setelah Anda melakukan pembayaran.</li>
        <li><strong>Pesanan Dibatalkan Sebelum Diproses:</strong> Transaksi dibatalkan sebelum masuk ke tahap proses antrean produksi atau pengiriman.</li>
        <li><strong>Komplain / Retur Disetujui:</strong> Pengajuan komplain kendala pesanan yang telah disetujui oleh tim Customer Care Poolapack.</li>
      </ul>

      <h2 id="refund-ke-poolpay">Pengembalian Dana Otomatis ke PoolPay</h2>
      <p>Berbeda dengan platform konvensional, di Poolapack seluruh dana pengembalian transaksi yang dibatalkan akan <strong>otomatis masuk 100% ke saldo dompet digital PoolPay</strong> akun Pooler Anda.</p>
      <div class="callout callout-info">
        <strong>Otomatis &amp; Real-time:</strong> Begitu pesanan dibatalkan oleh admin, saldo akan langsung tercatat di menu <strong>PoolPay</strong> Anda seketika tanpa perlu mengisi formulir refund manual atau menunggu berhari-hari.
      </div>

      <h2 id="opsi-saldo-poolpay">Pemanfaatan Saldo: Belanja atau Dicairkan</h2>
      <p>Saldo yang telah masuk ke PoolPay sepenuhnya menjadi hak Anda dan dapat digunakan dengan 2 pilihan:</p>
      <ol>
        <li><strong>Digunakan Berbelanja Kembali:</strong> Saat Anda checkout produk lain (Pre Order atau Ready Stock), Anda dapat memanfaatkan saldo PoolPay. Jika nominal saldo belum cukup menutupi total tagihan, gunakan fitur <strong>+ Tambah Split Pembayaran</strong> untuk menggabungkannya dengan channel pembayaran resmi Poolapack lainnya (seperti BCA Transfer, BCA Espay, atau Virtual Account Bank).</li>
        <li><strong>Dicairkan ke Rekening Bank:</strong> Anda dapat mentransfer saldo PoolPay langsung ke rekening bank pribadi Anda kapan saja.</li>
      </ol>

      <h2 id="estimasi-pencairan">Ketentuan &amp; Estimasi Pencairan ke Rekening</h2>
      <p>Jika Anda memilih untuk mencairkan saldo PoolPay ke rekening bank, ikuti ketentuan berikut:</p>
      <ul>
        <li><strong>Minimal Penarikan:</strong> Rp 10.000 per transaksi penarikan dana.</li>
        <li><strong>Verifikasi Keamanan:</strong> Setiap permintaan penarikan diamankan dengan kode OTP yang dikirim ke nomor WhatsApp terdaftar Anda.</li>
        <li><strong>Estimasi Dana Masuk:</strong> 1–2 hari kerja ke rekening bank terdaftar Anda.</li>
      </ul>
      <div class="callout callout-warning">
        <strong>Penting:</strong> Pastikan nomor rekening dan nama pemilik rekening bank sudah sesuai dan terverifikasi di profil akun Poolapack Anda sebelum melakukan pencairan saldo.
      </div>
    `
  },

  // Pengiriman
  {
    id: '13',
    slug: 'jasa-pengiriman-tersedia',
    title: 'Jasa Pengiriman yang Bekerjasama dengan Poolapack',
    excerpt: 'Daftar kurir instant, reguler, same-day, dan ekspedisi kargo resmi untuk kebutuhan grosir.',
    category: 'pengiriman',
    categoryTitle: 'Pengiriman',
    subCategoryId: '4-1',
    readTime: 3,
    lastUpdated: '04 September 2026',
    tags: [
      'pengiriman', 'kurir', 'ekspedisi', 'kargo', 'jne', 'sicepat', 'jnt', 'gosend',
      'grabexpress', 'sentral cargo', 'dakota', 'antar barang', 'ongkir', 'ongkos kirim',
      'jtr', 'cargo', 'biaya kirim', 'tarif pengiriman'
    ],
    toc: [
      { id: 'kurir-reguler', text: 'Kurir Reguler & Same Day' },
      { id: 'kurir-kargo', text: 'Ekspedisi Kargo (Heavy Duty)' }
    ],
    content: `
      <h2 id="kurir-reguler">Kurir Reguler & Same Day</h2>
      <p>Untuk pengiriman paket satuan dan ukuran sedang, Poolapack bekerjasama dengan:</p>
      <ul>
        <li><strong>Instant & Same Day:</strong> GoSend, GrabExpress, Anteraja Same Day.</li>
        <li><strong>Reguler (1-3 hari):</strong> J&T Express, SiCepat, JNE REG, Lion Parcel.</li>
      </ul>

      <h2 id="kurir-kargo">Ekspedisi Kargo (Heavy Duty)</h2>
      <p>Bagi pelaku bisnis yang memesan packaging dalam jumlah kartonan besar atau berat > 10kg, kami menyediakan layanan kargo hemat ongkir:</p>
      <ul>
        <li><strong>JNE Trucking (JTR)</strong></li>
        <li><strong>Sentral Cargo</strong></li>
        <li><strong>Dakota Cargo & Baraka</strong></li>
      </ul>
    `
  },
  {
    id: '14',
    slug: 'estimasi-waktu-pengiriman',
    title: 'Estimasi Waktu dan Jadwal Operasional Pengiriman',
    excerpt: 'Informasi jam cut-off pemrosesan pesanan di gudang dan estimasi paket sampai di alamat Anda.',
    category: 'pengiriman',
    categoryTitle: 'Pengiriman',
    subCategoryId: '4-2',
    readTime: 2,
    lastUpdated: '02 September 2026',
    tags: [
      'estimasi pengiriman', 'berapa lama sampai', 'jam kirim', 'cut off', 'jadwal pengiriman',
      'lama pengiriman', 'ongkir', 'kapan sampai', 'waktu sampai', 'jadwal gudang',
      'durasi kirim', 'hari pengiriman'
    ],
    toc: [
      { id: 'jadwal-cut-off', text: 'Jadwal Cut-Off Gudang' },
      { id: 'estimasi-wilayah', text: 'Estimasi Per Wilayah' }
    ],
    content: `
      <h2 id="jadwal-cut-off">Jadwal Cut-Off Gudang</h2>
      <ul>
        <li><strong>Instant (Gojek/Grab):</strong> Pembayaran sebelum jam 15.00 WIB dikirim di hari yang sama.</li>
        <li><strong>Reguler & Kargo:</strong> Pembayaran sebelum jam 16.00 WIB diserahkan ke kurir di hari yang sama.</li>
        <li>Pesanan setelah jam cut-off atau di hari Minggu/Libur Nasional akan diproses pada hari kerja berikutnya.</li>
      </ul>

      <h2 id="estimasi-wilayah">Estimasi Per Wilayah</h2>
      <ul>
        <li><strong>Jabodetabek:</strong> 1-2 hari kerja.</li>
        <li><strong>Pulau Jawa & Bali:</strong> 2-3 hari kerja.</li>
        <li><strong>Sumatera, Kalimantan, Sulawesi:</strong> 3-5 hari kerja.</li>
      </ul>
    `
  },

  // ── Artikel Khusus Packer (Penjual / Produsen) ──────────────────────────
  {
    id: '18',
    slug: 'cara-daftar-akun-seller',
    title: 'Cara Mendaftar sebagai Packer (Penjual) di Poolapack',
    excerpt: 'Panduan visual langkah demi langkah mendaftar akun Packer (penjual/produsen pabrik) melalui menu profil akun di marketplace Poolapack.',
    category: 'akun-keamanan',
    categoryTitle: 'Akun & Keamanan',
    subCategoryId: '1-1',
    readTime: 3,
    lastUpdated: '09 September 2026',
    audience: 'penjual',
    tags: [
      'daftar seller', 'registrasi seller', 'akun merchant', 'packer', 'daftar packer', 'buka toko',
      'seller poolapack', 'jadi seller', 'pendaftaran penjual', 'packer center', 'daftar akun packer',
      'nama perusahaan', 'mitra packer', 'profil kanan atas', 'daftar jadi packer'
    ],
    toc: [
      { id: 'akses-menu-profil', text: '1. Klik Profil Akun di Kanan Atas' },
      { id: 'halaman-packer-center', text: '2. Klik "Daftar Akun Packer" di Packer Center' },
      { id: 'isi-formulir-packer', text: '3. Isi Data Pendaftaran Akun Packer' },
      { id: 'verifikasi-toko-packer', text: '4. Verifikasi dan Mulai Berjualan' }
    ],
    content: `
      <p>Bagi Anda produsen kain, konveksi, maupun pabrik packaging yang ingin menjual produk tangan pertama langsung ke pembeli (Pooler), Anda dapat mendaftarkan akun sebagai <strong>Packer</strong> melalui marketplace Poolapack.</p>
      <p>Berikut langkah-langkah resmi pendaftaran Packer langsung dari akun Anda:</p>

      <h2 id="akses-menu-profil">1. Klik Profil Akun di Kanan Atas</h2>
      <ol>
        <li>Masuk (Login) ke akun Poolapack Anda di <strong>liva.poolapack.id</strong>.</li>
        <li>Pada bagian pojok kanan atas halaman, klik <strong>ikon / foto profil akun</strong> Anda (yang bertuliskan sapaan seperti <em>"Hi, Nama Anda..."</em>).</li>
        <li>Menu dropdown profil akan terbuka menampilkan ringkasan akun (PoolPoint, PoolCoin, PoolPay, Transaksi, dan Wishlist).</li>
        <li>Pada bagian bawah menu dropdown tersebut, klik tombol kuning bertuliskan <strong>"Daftar Jadi Packer"</strong>.</li>
      </ol>

      <h2 id="halaman-packer-center">2. Klik "Daftar Akun Packer" di Packer Center</h2>
      <ol>
        <li>Sistem akan mengarahkan Anda ke tampilan gerbang <strong>Packer Center</strong> dengan keterangan:<br>
          <em>"Profil Packer belum terdaftar, daftar untuk mulai menjual produk."</em></li>
        <li>Klik tombol kuning <strong>"Daftar Akun Packer"</strong> untuk membuka formulir registrasi toko/pabrik.</li>
      </ol>
      <div class="callout callout-info">
        <strong>Catatan:</strong> Jika Anda belum ingin melanjutkan pendaftaran saat ini, Anda dapat mengklik teks <em>"&lt; Kembali ke halaman utama"</em> di bawah tombol.
      </div>

      <h2 id="isi-formulir-packer">3. Isi Data Pendaftaran Akun Packer</h2>
      <p>Pada kartu <strong>Pendaftaran Akun Packer</strong> (<em>Isi data profil untuk mendaftar akun</em>), lengkapi 3 data bisnis utama Anda:</p>
      <ul>
        <li><strong>Nama Perusahaan:</strong> Masukkan nama resmi badan usaha, nama brand, pabrik kain, atau konveksi Anda (contoh: <em>Poolapack Textile</em>).</li>
        <li><strong>Email:</strong> Masukkan alamat email bisnis aktif yang dapat digunakan untuk notifikasi pesanan dan korespondensi resmi (contoh: <em>textile@store.com</em>).</li>
        <li><strong>Nomor Telepon:</strong> Masukkan nomor telepon / WhatsApp yang valid lengkap dengan kode nomor (contoh: <em>6281234567890</em>) untuk koordinasi pengiriman pesanan.</li>
      </ul>
      <p>Setelah seluruh kolom terisi dengan data yang valid, klik tombol kuning <strong>"Daftar Akun"</strong>.</p>

      <h2 id="verifikasi-toko-packer">4. Verifikasi dan Mulai Berjualan</h2>
      <p>Setelah formulir berhasil dikirim:</p>
      <ul>
        <li>Data profil usaha Anda akan masuk ke antrean kurasi tim onboarding Packer Poolapack.</li>
        <li>Tim Poolapack akan memvalidasi data kontak dan profil usaha Anda untuk menjaga standar mutu marketplace.</li>
        <li>Setelah akun disetujui, Anda dapat langsung mengakses dashboard <strong>Packer Center</strong> untuk mengunggah katalog produk (baik kategori <strong>Flash Sale</strong>, <strong>Pre Order</strong>, maupun <strong>Ready Stock</strong>), mengatur kuantitas MOQ, dan menerima pesanan dari ribuan Pooler.</li>
      </ul>
      <div class="callout callout-info">
        <strong>Tips Sukses Packer:</strong> Pastikan nomor WhatsApp dan email yang Anda daftarkan aktif agar tim kurasi Poolapack dapat segera mengonfirmasi pembukaan toko Anda tanpa kendala.
      </div>
    `
  },
  {
    id: '20',
    slug: 'cara-atur-produk-stok-harga',
    title: 'Cara Mengelola Produk, Stok, dan Harga Jual di Dashboard Packer',
    excerpt: 'Panduan menambahkan produk baru, mengatur variasi, memperbarui harga, dan memonitor stok bagi Packer di Poolapack.',
    category: 'pesanan',
    categoryTitle: 'Pesanan',
    subCategoryId: '2-3',
    readTime: 5,
    lastUpdated: '08 September 2026',
    audience: 'penjual',
    tags: [
      'atur produk', 'tambah produk', 'stok produk', 'harga jual', 'katalog packer', 'katalog seller',
      'upload produk', 'varian produk', 'kelola stok', 'manajemen produk', 'edit produk', 'packer'
    ],
    toc: [
      { id: 'tambah-produk-baru', text: 'Menambahkan Produk Baru' },
      { id: 'atur-varian-harga', text: 'Mengatur Varian dan Harga' },
      { id: 'kelola-stok', text: 'Monitoring dan Update Stok' },
      { id: 'nonaktifkan-produk', text: 'Menonaktifkan Produk' }
    ],
    content: `
      <h2 id="tambah-produk-baru">Menambahkan Produk Baru</h2>
      <ol>
        <li>Di Dashboard Packer, buka menu <strong>Produk</strong> → klik tombol <strong>+ Tambah Produk</strong>.</li>
        <li>Isi nama produk, deskripsi detail, dan pilih tipe kategori produk (Flash Sale, Pre Order, atau Ready Stock).</li>
        <li>Upload foto produk: minimal 3 foto dari sudut berbeda, resolusi minimal 800×800 px dengan pencahayaan jelas.</li>
        <li>Tentukan satuan jual (yard, roll, pcs, meter) dan minimum order quantity (MOQ) untuk Ready Stock, atau ketentuan toleransi untuk Pre Order.</li>
        <li>Klik <strong>Simpan & Publikasikan</strong> untuk menayangkan produk.</li>
      </ol>
      <div class="callout callout-warning">
        Produk yang tidak memiliki stok aktif akan otomatis disembunyikan dari pencarian Pooler (pembeli). Pastikan stok selalu diperbarui.
      </div>

      <h2 id="atur-varian-harga">Mengatur Varian dan Harga</h2>
      <p>Jika produk memiliki beberapa pilihan warna, ketebalan, atau motif:</p>
      <ul>
        <li>Aktifkan fitur <strong>Varian Produk</strong> pada halaman edit produk.</li>
        <li>Tambahkan atribut varian (contoh: Warna — Putih, Hitam, Navy, atau Gramasi kain).</li>
        <li>Isi harga masing-masing varian. Anda dapat mengatur harga bertingkat (grosir) berdasarkan kuantitas pesanan.</li>
      </ul>

      <h2 id="kelola-stok">Monitoring dan Update Stok</h2>
      <p>Packer dapat memantau stok dari menu <strong>Produk</strong> → <strong>Stok</strong>. Sistem akan mengirim notifikasi WhatsApp otomatis jika stok produk menipis di bawah batas minimum yang Anda tetapkan.</p>

      <h2 id="nonaktifkan-produk">Menonaktifkan Produk</h2>
      <p>Jika stok kain atau kemasan sementara habis atau mesin sedang maintenance, gunakan toggle <strong>Aktif/Nonaktif</strong> pada daftar produk — produk tidak dihapus, hanya disembunyikan sementara dari tampilan Pooler.</p>
    `
  },

  // ── Promo & Reward (Diskon 1% Identitas, PoolPoint, PoolPay) ───────────────
  {
    id: '28',
    slug: 'cara-verifikasi-identitas',
    title: 'Cara Mendapatkan Diskon Sebesar 1% dengan Verifikasi Identitas (KTP / NPWP)',
    excerpt: 'Panduan lengkap cara mendapatkan promo diskon 1% (diskon sebesar 1%) di setiap transaksi belanja dan fasilitas bebas biaya administrasi dengan verifikasi identitas KTP atau NPWP di profil Pooler Poolapack.',
    category: 'promo',
    categoryTitle: 'Promo & Reward',
    subCategoryId: '5-1',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'diskon 1%', 'diskon sebesar 1%', 'verifikasi identitas', 'diskon identitas', 'promo identitas',
      'promo diskon', 'ktp', 'npwp', 'upload ktp', 'upload npwp', 'dokumen identitas', 'profil pooler',
      'gratis biaya administrasi', 'bebas admin', 'status verifikasi', 'verifikasi ditolak',
      'menunggu verifikasi', 'pooler', 'potongan harga', 'diskon', 'hemat', 'promo'
    ],
    toc: [
      { id: 'keuntungan-verifikasi', text: '1. Keuntungan Promo Diskon 1% & Bebas Biaya Admin' },
      { id: 'pilihan-dokumen', text: '2. Pilihan Dokumen: KTP atau NPWP (Bisa Salah Satu atau Keduanya)' },
      { id: 'langkah-verifikasi', text: '3. Langkah Upload Dokumen di Menu Profil' },
      { id: 'arti-status-verifikasi', text: '4. Arti Status: Menunggu Verifikasi, Terverifikasi & Ditolak' },
      { id: 'tips-agar-disetujui', text: '5. Tips Upload Dokumen Agar Cepat Disetujui' }
    ],
    content: `
      <div class="callout callout-info">
        <strong>Promo Spesial Pooler:</strong> Ingin belanja kain dan kemasan lebih hemat di Poolapack? Anda berhak mendapatkan <strong>diskon belanja langsung sebesar 1% di setiap transaksi</strong> serta fasilitas <strong>bebas biaya administrasi</strong> hanya dengan memverifikasi data identitas (KTP atau NPWP) pada menu profil akun Anda!
      </div>

      <h2 id="keuntungan-verifikasi">1. Keuntungan Promo Diskon 1% &amp; Bebas Biaya Admin</h2>
      <p>Poolapack memberikan apresiasi khusus bagi seluruh <strong>Pooler (Pembeli)</strong> yang telah melengkapi dan memverifikasi data identitas akun mereka. Keuntungan yang didapatkan meliputi:</p>
      <ul>
        <li><strong>Diskon 1% Setiap Transaksi Belanja:</strong> Anda berhak mendapatkan potongan harga langsung sebesar <strong>1%</strong> pada setiap transaksi pembelian produk kain dan kemasan di Poolapack tanpa batas maksimum frekuensi belanja.</li>
        <li><strong>Gratis Biaya Administrasi:</strong> Menikmati keuntungan fasilitas bebas atau gratis biaya administrasi transaksi platform.</li>
        <li><strong>Prioritas Transaksi &amp; Pencairan Dana:</strong> Mempercepat proses verifikasi klaim pengembalian dana (refund) <strong>PoolPay</strong> serta pencairan saldo ke rekening bank pribadi.</li>
        <li><strong>Keamanan Akun Terjamin:</strong> Mencegah penyalahgunaan akun dan menjamin transaksi bernominal besar tetap terlindungi secara legal.</li>
      </ul>
      <div class="callout callout-info">
        <strong>Otomatis Diterapkan saat Checkout:</strong> Begitu status dokumen identitas Anda dinyatakan <em>Terverifikasi</em>, diskon 1% dan keuntungan bebas biaya admin akan otomatis muncul dan memotong kalkulasi total tagihan di halaman Checkout.
      </div>

      <h2 id="pilihan-dokumen">2. Pilihan Dokumen: KTP atau NPWP (Bisa Salah Satu atau Keduanya)</h2>
      <p>Untuk memudahkan Pooler perorangan maupun pemilik badan usaha, Poolapack memberikan fleksibilitas pilihan dokumen verifikasi:</p>
      <ul>
        <li><strong>KTP (Kartu Tanda Penduduk):</strong> Pilihan praktis bagi pembeli individu, perorangan, pemilik konveksi rumahan, atau desainer mandiri.</li>
        <li><strong>NPWP (Nomor Pokok Wajib Pajak):</strong> Pilihan ideal bagi pelaku usaha, UMKM berbadan usaha, CV, atau perusahaan yang memerlukan pencatatan pajak resmi.</li>
        <li><strong>Pilih Salah Satu atau Keduanya:</strong> Anda <strong>cukup memverifikasi salah satu dokumen</strong> (hanya KTP saja atau hanya NPWP saja) untuk langsung mengaktifkan keuntungan promo diskon 1%. Anda juga diperbolehkan mengunggah kedua dokumen (KTP dan NPWP) sekaligus untuk profil akun yang lebih lengkap.</li>
      </ul>

      <h2 id="langkah-verifikasi">3. Langkah Upload Dokumen di Menu Profil</h2>
      <p>Ikuti langkah berikut untuk mengunggah dokumen identitas Anda melalui website resmi Poolapack:</p>
      <ol>
        <li>Login ke akun Poolapack Anda, lalu akses menu navigasi: <strong>Beranda &gt; Pooler &gt; Profil</strong> (atau klik avatar profil di pojok kanan atas &gt; <em>Profil</em>).</li>
        <li>Pastikan Anda berada di sub-tab <strong>Profil</strong> (tersedia juga tab <em>Alamat</em> dan <em>Rekening Bank</em>).</li>
        <li>Di bawah lingkaran foto avatar akun Anda, klik tombol berwarna kuning bertuliskan <strong>Verifikasi Identitas</strong> (dengan ikon kartu identitas).</li>
        <li>Jendela popup (modal) <strong>Verifikasi Identitas</strong> akan terbuka di layar.</li>
        <li>Pilih tab dokumen yang ingin Anda ajukan:
          <ul>
            <li>Klik tab <strong>KTP</strong> jika ingin mengunggah kartu identitas kependudukan.</li>
            <li>Klik tab <strong>NPWP</strong> jika ingin mengunggah kartu pajak usaha.</li>
          </ul>
        </li>
        <li>Ketik nomor identitas resmi Anda (Nomor NIK KTP atau Nomor NPWP) pada kolom input yang tersedia.</li>
        <li>Unggah berkas foto/scan dokumen Anda pada area upload:
          <ul>
            <li>Format file yang didukung: <strong>JPG, JPEG, atau PNG</strong>.</li>
            <li>Ukuran file maksimal: <strong>10 Megabytes (MB)</strong>.</li>
            <li>Anda dapat menyeret berkas ke kotak upload (<em>Drag &amp; Drop</em>) atau klik <em>Cari Berkas disini</em> untuk memilih file dari komputer/smartphone Anda.</li>
          </ul>
        </li>
        <li>Setelah berkas terpilih, klik tombol <strong>Upload KTP</strong> atau <strong>Upload NPWP</strong> untuk mengirim dokumen.</li>
      </ol>

      <h2 id="arti-status-verifikasi">4. Arti Status: Menunggu Verifikasi, Terverifikasi &amp; Ditolak</h2>
      <p>Setelah mengunggah dokumen, Anda dapat memantau status pengajuannya di halaman <strong>Profil</strong> pada bagian <strong>Dokumen Identitas</strong>:</p>
      <ul>
        <li><strong>Menunggu Verifikasi (Badge Kuning):</strong> Berkas Anda telah berhasil masuk ke server dan sedang dalam antrean pemeriksaan oleh tim kurasi verifikasi Poolapack (proses umumnya membutuhkan 1–24 jam kerja).</li>
        <li><strong>Terverifikasi (Badge Hijau):</strong> Berkas identitas Anda valid dan disetujui. Akun Anda resmi terverifikasi dan promo diskon 1% otomatis aktif untuk seluruh transaksi berikutnya.</li>
        <li><strong>Ditolak (Badge Merah):</strong> Berkas ditolak karena data tidak sesuai atau foto kurang jelas. Saat Anda mengklik kembali tombol <em>Verifikasi Identitas</em>, sistem akan memunculkan pesan peringatan merah: <em>"Verifikasi Ditolak: Data KTP/NPWP Anda tidak sesuai, mohon upload data ulang!"</em>. Anda cukup memperbaiki nomor atau mengunggah ulang foto dokumen yang lebih tajam.</li>
      </ul>

      <h2 id="tips-agar-disetujui">5. Tips Upload Dokumen Agar Cepat Disetujui</h2>
      <div class="callout callout-warning">
        <strong>Agar pengajuan verifikasi identitas Anda langsung disetujui:</strong>
        <ul>
          <li><strong>Gunakan Dokumen Fisik Asli:</strong> Foto dokumen fisik asli Anda secara langsung, bukan hasil fotokopi hitam putih atau hasil scan yang pecah.</li>
          <li><strong>Pencahayaan Jelas:</strong> Hindari pantulan kilatan cahaya lampu (*flash*) yang dapat menutupi deretan angka NIK/NPWP atau nama Anda.</li>
          <li><strong>Sudut Dokumen Utuh:</strong> Pastikan seluruh kartu (keempat sudutnya) masuk ke dalam frame foto dan tidak ada bagian teks yang terpotong.</li>
          <li><strong>Kesesuaian Nama Akun:</strong> Pastikan nama yang terdaftar di menu <em>Ubah Profil</em> sesuai dengan nama sah yang tercantum pada kartu KTP/NPWP Anda.</li>
        </ul>
      </div>
    `
  },
  {
    id: '22',
    slug: 'apa-itu-poolpoint',
    title: 'Apa Itu PoolPoint dan Cara Menggunakannya?',
    excerpt: 'Pelajari cara mendapatkan PoolPoint dari setiap transaksi selesai dan cara menggunakannya sebagai diskon di produk Pre Order maupun Ready Stock bagi Pooler (pembeli).',
    category: 'promo',
    categoryTitle: 'Promo & Reward',
    subCategoryId: '5-2',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'poolpoint', 'pool point', 'poin', 'reward', 'diskon poin', 'cara dapat poin',
      'tukar poin', 'gunakan poin', 'poin transaksi', 'loyalitas', 'bonus poin', 'pooler'
    ],
    toc: [
      { id: 'apa-poolpoint', text: 'Apa Itu PoolPoint?' },
      { id: 'cara-dapat-poolpoint', text: 'Cara Mendapatkan PoolPoint' },
      { id: 'cara-pakai-poolpoint', text: 'Cara Menggunakan PoolPoint' },
      { id: 'syarat-poolpoint', text: 'Syarat & Ketentuan PoolPoint' }
    ],
    content: `
      <h2 id="apa-poolpoint">Apa Itu PoolPoint?</h2>
      <p>PoolPoint adalah program reward eksklusif dari Poolapack yang memberikan poin kepada <strong>Pooler (pembeli)</strong> setiap kali menyelesaikan transaksi. Poin yang terkumpul dapat ditukarkan sebagai potongan harga saat berbelanja produk tertentu.</p>
      <div class="callout callout-info">
        <strong>Info:</strong> PoolPoint hanya dapat digunakan untuk produk dengan kategori <strong>Pre Order (PO)</strong> dan <strong>Ready Stock</strong>. Produk Flash Sale <strong>tidak</strong> mendukung penggunaan PoolPoint.
      </div>

      <h2 id="cara-dapat-poolpoint">Cara Mendapatkan PoolPoint</h2>
      <p>PoolPoint akan otomatis ditambahkan ke akun Pooler setelah pesanan selesai dan Anda menuntaskan tahap <strong>Ulasan</strong> pada log transaksi. Berikut alurnya:</p>
      <ol>
        <li>Lakukan transaksi pembelian produk di Poolapack (PO atau Ready Stock).</li>
        <li>Tunggu hingga pesanan berstatus <strong>Selesai</strong> — artinya produk sudah sampai di tangan Pooler.</li>
        <li>Buka detail pesanan dan berikan <strong>Ulasan</strong> sebagai tahap akhir log transaksi.</li>
        <li>Setelah ulasan berhasil dikirim, PoolPoint otomatis masuk ke saldo poin akun Anda tanpa perlu klaim manual.</li>
        <li>Cek jumlah PoolPoint Anda di menu <strong>Profil → Reward & Poin</strong>.</li>
      </ol>

      <h2 id="cara-pakai-poolpoint">Cara Menggunakan PoolPoint</h2>
      <ol>
        <li>Tambahkan produk Pre Order atau Ready Stock ke keranjang, lalu lanjut ke halaman checkout.</li>
        <li>Di halaman checkout, temukan opsi <strong>Gunakan PoolPoint</strong>.</li>
        <li>Pilih jumlah poin yang ingin digunakan: <strong>50 PoolPoint</strong> atau <strong>100 PoolPoint</strong>.</li>
        <li>Potongan harga akan langsung diterapkan ke total pembayaran Anda.</li>
        <li>Selesaikan pembayaran seperti biasa.</li>
      </ol>

      <h2 id="syarat-poolpoint">Syarat & Ketentuan PoolPoint</h2>
      <ul>
        <li>PoolPoint hanya berlaku di produk <strong>Pre Order</strong> dan <strong>Ready Stock</strong>.</li>
        <li>Tidak dapat digunakan di produk <strong>Flash Sale</strong>.</li>
        <li>Opsi penggunaan: 50 poin atau 100 poin per transaksi.</li>
        <li>PoolPoint tidak dapat dicairkan menjadi uang tunai.</li>
        <li>PoolPoint hanya diperoleh setelah pesanan mencapai status Selesai dan tahap Ulasan berhasil diselesaikan.</li>
        <li>Pesanan yang dibatalkan tidak menghasilkan PoolPoint.</li>
      </ul>
      <div class="callout callout-info">
        <strong>Ingin Tambahan Diskon 1%?</strong> Selain menukarkan PoolPoint, Anda juga bisa mendapatkan <strong>diskon ekstra 1%</strong> di setiap transaksi dengan melakukan <a href="/article/cara-verifikasi-identitas" class="text-amber-700 underline font-bold">Verifikasi Identitas (KTP atau NPWP)</a> pada menu Profil akun Pooler Anda!
      </div>
    `
  },
  {
    id: '23',
    slug: 'apa-itu-poolpay',
    title: 'Apa Itu PoolPay dan Cara Menggunakan Saldo PoolPay?',
    excerpt: 'Pahami PoolPay — saldo digital otomatis yang didapat Pooler (pembeli) saat transaksi dibatalkan admin — serta cara menggunakannya untuk belanja atau mencairkan ke rekening.',
    category: 'promo',
    categoryTitle: 'Promo & Reward',
    subCategoryId: '5-3',
    readTime: 4,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'poolpay', 'pool pay', 'saldo poolpay', 'refund poolpay', 'saldo digital',
      'pembatalan saldo', 'cairkan poolpay', 'bayar dengan poolpay', 'saldo otomatis', 'dompet', 'pooler'
    ],
    toc: [
      { id: 'apa-poolpay', text: 'Apa Itu PoolPay?' },
      { id: 'cara-dapat-saldo', text: 'Bagaimana Saldo PoolPay Masuk?' },
      { id: 'cara-pakai-poolpay', text: 'Cara Berbelanja dengan PoolPay' },
      { id: 'cara-cairkan', text: 'Cara Mencairkan Saldo PoolPay' }
    ],
    content: `
      <h2 id="apa-poolpay">Apa Itu PoolPay?</h2>
      <p>PoolPay adalah dompet saldo digital bawaan akun <strong>Pooler (pembeli)</strong> di Poolapack. Saldo PoolPay berfungsi sebagai tempat penampungan pengembalian dana (refund) yang terjadi akibat pembatalan transaksi oleh admin. Saldo ini dapat digunakan langsung untuk berbelanja produk berikutnya atau dicairkan ke rekening bank Anda.</p>

      <h2 id="cara-dapat-saldo">Bagaimana Saldo PoolPay Masuk?</h2>
      <p>Saldo PoolPay akan otomatis masuk jika terjadi kondisi berikut:</p>
      <ul>
        <li>Transaksi <strong>dibatalkan oleh admin</strong> Poolapack (misalnya karena stok habis mendadak, kendala produksi, atau situasi lain di luar kendali).</li>
        <li>Anda sudah melakukan pembayaran sebelum pembatalan terjadi.</li>
      </ul>
      <div class="callout callout-info">
        <strong>Catatan:</strong> Dana yang dikembalikan ke PoolPay setara dengan nominal yang telah dibayarkan oleh Pooler. Proses masuk ke PoolPay bersifat otomatis tanpa perlu pengajuan manual dari Anda.
      </div>

      <h2 id="cara-pakai-poolpay">Cara Berbelanja dengan PoolPay</h2>
      <ol>
        <li>Pilih produk yang ingin dibeli dan lanjutkan ke halaman checkout.</li>
        <li>Pada bagian metode pembayaran, pilih opsi <strong>PoolPay</strong>.</li>
        <li>Jika saldo PoolPay mencukupi, seluruh transaksi akan terlunasi langsung dari saldo.</li>
        <li>Jika saldo PoolPay tidak mencukupi, Anda dapat menggunakan fitur <strong>+ Tambah Split Pembayaran</strong> untuk mengombinasikannya dengan channel pembayaran lain (seperti BCA Transfer, BCA Espay, atau Virtual Account Bank).</li>
      </ol>

      <h2 id="cara-cairkan">Cara Mencairkan Saldo PoolPay</h2>
      <p>Jika Anda tidak ingin menggunakan saldo PoolPay untuk belanja, Anda dapat mencairkannya ke rekening bank:</p>
      <ol>
        <li>Buka menu <strong>Profil → Saldo & PoolPay</strong>.</li>
        <li>Klik tombol <strong>Cairkan Saldo</strong>.</li>
        <li>Masukkan nominal yang ingin dicairkan.</li>
        <li>Pilih rekening bank tujuan yang sudah terdaftar.</li>
        <li>Konfirmasi dengan kode OTP yang dikirim ke WhatsApp Anda.</li>
        <li>Dana akan masuk ke rekening bank dalam <strong>1–2 hari kerja</strong>.</li>
      </ol>
      <div class="callout callout-warning">
        Minimal pencairan saldo PoolPay adalah <strong>Rp 10.000</strong>. Pastikan rekening bank Anda sudah terdaftar dan terverifikasi sebelum melakukan pencairan.
      </div>
    `
  },

  // ── Artikel Kategori Produk (Flash Sale, Pre Order, Ready Stock) ──────────
  {
    id: '24',
    slug: 'flash-sale-poolapack',
    title: 'Apa Itu Flash Sale di Poolapack?',
    excerpt: 'Panduan lengkap produk Flash Sale di Poolapack — sistem beli seluruh stok pabrik/Packer, cara berpartisipasi, dan ketentuan bagi Pooler (pembeli).',
    category: 'kategori-produk',
    categoryTitle: 'Kategori Produk',
    subCategoryId: '6-1',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'flash sale', 'flashsale', 'beli stok penuh', 'stok pabrik', 'label flash sale',
      'produk flash sale', 'cara beli flash sale', 'diskon flash sale', 'clearance', 'pooler', 'packer'
    ],
    toc: [
      { id: 'konsep-flash-sale', text: 'Konsep Flash Sale di Poolapack' },
      { id: 'cara-beli-flash-sale', text: 'Cara Membeli Produk Flash Sale' },
      { id: 'hal-penting-flash-sale', text: 'Hal Penting yang Perlu Diketahui' }
    ],
    content: `
      <h2 id="konsep-flash-sale">Konsep Flash Sale di Poolapack</h2>
      <p>Flash Sale adalah kategori produk di Poolapack di mana <strong>seluruh stok produk yang disediakan oleh Packer (penjual) harus dibeli sekaligus</strong> oleh satu Pooler (pembeli). Berbeda dengan Ready Stock yang memiliki MOQ minimum, Flash Sale mengharuskan Anda membeli semua stok yang ada.</p>
      <p>Contoh: Jika stok pabrik/Packer untuk produk Flash Sale adalah <strong>700 yard</strong>, maka Pooler harus membeli semua 700 yard tersebut — tidak bisa membeli sebagian saja.</p>
      <div class="callout callout-info">
        <strong>Kenali label Flash Sale:</strong> Produk Flash Sale dapat dikenali dari <strong>badge khusus</strong> yang tertera di sudut gambar produk seperti di bawah ini:<br><br>
        <img src="/icons/fs.png" alt="Label Flash Sale" class="inline-block w-24 sm:w-28 h-auto my-2 rounded-md shadow-xs border border-neutral-200/50" />
      </div>

      <h2 id="cara-beli-flash-sale">Cara Membeli Produk Flash Sale</h2>
      <ol>
        <li>Temukan produk berlabel <strong>Flash Sale</strong> di halaman pencarian atau kategori.</li>
        <li>Buka halaman detail produk — Anda akan melihat total stok yang tersedia (misal: 700 yard).</li>
        <li>Klik tombol <strong>Beli Sekarang</strong> — sistem otomatis memasukkan seluruh stok sebagai jumlah pembelian.</li>
        <li>Lanjutkan ke checkout dan selesaikan pembayaran.</li>
      </ol>

      <h2 id="hal-penting-flash-sale">Hal Penting yang Perlu Diketahui</h2>
      <ul>
        <li><strong>Tidak ada pembelian sebagian:</strong> Stok harus diambil seluruhnya oleh Pooler, tidak bisa dikurangi.</li>
        <li><strong>Tidak ada toleransi kuantitas</strong> seperti di produk Pre Order.</li>
        <li><strong>PoolPoint tidak dapat digunakan</strong> di produk Flash Sale.</li>
        <li>Stok Flash Sale bersifat terbatas dan bisa habis kapan saja — segera lakukan pembelian jika tertarik.</li>
        <li>Harga Flash Sale umumnya lebih murah dari harga normal karena merupakan sisa stok langsung dari pabrik Packer.</li>
      </ul>
    `
  },
  {
    id: '25',
    slug: 'pre-order-poolapack',
    title: 'Panduan Pre Order (PO): Cara Pesan, Bayar Bertahap, dan Sistem Toleransi',
    excerpt: 'Penjelasan lengkap sistem Pre Order di Poolapack — skema pembayaran DP + pelunasan, hingga sistem toleransi kuantitas produk dari Packer.',
    category: 'kategori-produk',
    categoryTitle: 'Kategori Produk',
    subCategoryId: '6-2',
    readTime: 5,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'pre order', 'po', 'pesan dulu', 'bayar bertahap', 'dp', 'down payment', 'pelunasan',
      'toleransi', 'sistem po', 'produk po', 'label po', 'pre-order', 'indent', 'pooler', 'packer'
    ],
    toc: [
      { id: 'konsep-po', text: 'Apa Itu Pre Order?' },
      { id: 'cara-pesan-po', text: 'Cara Memesan Produk PO' },
      { id: 'pembayaran-bertahap', text: 'Sistem Pembayaran Bertahap (DP + Pelunasan)' },
      { id: 'toleransi-po', text: 'Sistem Toleransi Kuantitas PO' },
      { id: 'poolpoint-po', text: 'Penggunaan PoolPoint di Produk PO' }
    ],
    content: `
      <h2 id="konsep-po">Apa Itu Pre Order?</h2>
      <p>Pre Order (PO) adalah sistem pemesanan produk yang <strong>belum tersedia secara fisik</strong> saat pemesanan dilakukan. Produk PO dibuat khusus oleh Packer sesuai pesanan — prosesnya mulai dari produksi di pabrik, hingga pengiriman ke tangan Pooler membutuhkan waktu lebih lama dibandingkan Ready Stock.</p>
      <div class="callout callout-info">
        <strong>Kenali label Pre Order:</strong> Produk PO ditandai dengan <strong>badge PO</strong> pada gambar produk seperti di bawah ini:<br><br>
        <img src="/icons/po.png" alt="Label Pre Order" class="inline-block w-24 sm:w-28 h-auto my-2 rounded-md shadow-xs border border-neutral-200/50" />
      </div>

      <h2 id="cara-pesan-po">Cara Memesan Produk PO</h2>
      <ol>
        <li>Pilih produk dengan label <strong>Pre Order</strong> dan buka halaman detailnya.</li>
        <li>Tentukan jumlah yang ingin dipesan (sesuai ketentuan minimum yang tertera di produk).</li>
        <li>Klik <strong>Pesan Sekarang</strong> dan lanjutkan ke halaman checkout.</li>
        <li>Lakukan pembayaran Down Payment (DP) sesuai nominal yang ditetapkan.</li>
        <li>Tunggu konfirmasi dari admin bahwa pesanan PO Anda sudah diterima dan masuk antrean produksi Packer.</li>
      </ol>

      <h2 id="pembayaran-bertahap">Sistem Pembayaran Bertahap (DP + Pelunasan)</h2>
      <p>Produk PO di Poolapack menggunakan sistem pembayaran 2 tahap:</p>
      <ul>
        <li><strong>Tahap 1 — Down Payment (DP):</strong> Pembayaran awal untuk mengkonfirmasi pesanan Anda dan masuk ke antrean produksi pabrik Packer.</li>
        <li><strong>Tahap 2 — Pelunasan:</strong> Sisa pembayaran dilakukan sebelum produk dikirimkan, biasanya setelah produksi selesai dan produk siap kirim.</li>
      </ul>
      <p>Admin Poolapack akan menghubungi Anda melalui WhatsApp untuk menginformasikan jadwal pelunasan dan estimasi pengiriman.</p>

      <h2 id="toleransi-po">Sistem Toleransi Kuantitas PO</h2>
      <p>Pada produk Pre Order — terutama produk kain dan tekstil — terdapat <strong>sistem toleransi kuantitas</strong>. Ini berarti jumlah produk yang diterima Pooler bisa sedikit berbeda dari jumlah yang dipesan, baik lebih sedikit maupun lebih banyak.</p>
      <div class="callout callout-warning">
        <strong>Mengapa ada toleransi?</strong> Proses pemotongan produk menggunakan mesin industri tidak selalu menghasilkan angka yang persis. Mesin pemotong kain, misalnya, bisa menghasilkan hasil akhir yang sedikit kurang atau lebih dari target. Ini adalah hal yang wajar dalam industri tekstil.
      </div>
      <p>Besarnya toleransi <strong>bervariasi tergantung jenis produk dan kebijakan Packer (penjual)</strong> yang mengelola produk tersebut. Detail persentase atau batas toleransi akan dicantumkan langsung di <strong>halaman detail produk PO</strong> masing-masing — selalu baca keterangan produk sebelum memesan.</p>

      <h2 id="poolpoint-po">Penggunaan PoolPoint di Produk PO</h2>
      <p>PoolPoint <strong>dapat digunakan</strong> saat Pooler melakukan pemesanan produk Pre Order. Pada halaman checkout, pilih opsi "Gunakan PoolPoint" dan tentukan jumlah poin yang ingin dipakai (50 atau 100 poin) untuk mendapatkan potongan harga.</p>
    `
  },
  {
    id: '26',
    slug: 'ready-stock-poolapack',
    title: 'Panduan Ready Stock: MOQ, Stok Tersedia, dan Cara Membeli',
    excerpt: 'Pelajari cara berbelanja produk Ready Stock di Poolapack — dari memahami MOQ minimum dari Packer, batas maksimum stok, hingga penggunaan PoolPoint.',
    category: 'kategori-produk',
    categoryTitle: 'Kategori Produk',
    subCategoryId: '6-3',
    readTime: 3,
    lastUpdated: '08 September 2026',
    audience: 'pembeli',
    tags: [
      'ready stock', 'readystock', 'stok tersedia', 'moq', 'minimum order', 'beli langsung',
      'stok gudang', 'label ready stock', 'cara beli ready stock', 'produk tersedia', 'pooler', 'packer'
    ],
    toc: [
      { id: 'konsep-ready-stock', text: 'Apa Itu Ready Stock?' },
      { id: 'memahami-moq', text: 'Memahami MOQ (Minimum Order Quantity)' },
      { id: 'cara-beli-ready-stock', text: 'Cara Membeli Produk Ready Stock' },
      { id: 'poolpoint-ready-stock', text: 'Penggunaan PoolPoint di Ready Stock' }
    ],
    content: `
      <h2 id="konsep-ready-stock">Apa Itu Ready Stock?</h2>
      <p>Ready Stock adalah kategori produk yang <strong>sudah tersedia secara fisik di gudang</strong> dan siap dikirimkan segera setelah pembayaran terkonfirmasi. Pooler tidak perlu menunggu proses produksi seperti pada Pre Order.</p>
      <div class="callout callout-info">
        <strong>Kenali label Ready Stock:</strong> Produk Ready Stock ditandai dengan <strong>badge Ready Stock</strong> pada gambar produk seperti di bawah ini:<br><br>
        <img src="/icons/rs.png" alt="Label Ready Stock" class="inline-block w-24 sm:w-28 h-auto my-2 rounded-md shadow-xs border border-neutral-200/50" />
      </div>

      <h2 id="memahami-moq">Memahami MOQ (Minimum Order Quantity)</h2>
      <p>Setiap produk Ready Stock memiliki <strong>MOQ (Minimum Order Quantity)</strong> — yaitu jumlah minimum yang harus dibeli oleh Pooler dalam satu transaksi. MOQ ini ditetapkan oleh <strong>Packer (penjual)</strong> dan tertera jelas di halaman detail produk.</p>
      <p><strong>Contoh:</strong> Jika MOQ sebuah produk adalah <strong>255 yard</strong> dan stok tersedia <strong>1.000 yard</strong>, maka:</p>
      <ul>
        <li>Pooler <strong>minimum</strong> harus membeli <strong>255 yard</strong>.</li>
        <li>Pooler <strong>maksimum</strong> dapat membeli hingga <strong>1.000 yard</strong> (seluruh stok yang ada).</li>
        <li>Pooler bebas memilih kuantitas antara 255 hingga 1.000 yard sesuai kebutuhan usaha.</li>
      </ul>

      <h2 id="cara-beli-ready-stock">Cara Membeli Produk Ready Stock</h2>
      <ol>
        <li>Temukan produk berlabel <strong>Ready Stock</strong> dan buka halaman detailnya.</li>
        <li>Perhatikan MOQ dan stok tersedia yang ditentukan Packer di halaman produk.</li>
        <li>Masukkan jumlah yang ingin dibeli (tidak boleh kurang dari MOQ).</li>
        <li>Klik <strong>+ Keranjang</strong> atau <strong>Beli Sekarang</strong>.</li>
        <li>Lanjutkan checkout dan selesaikan pembayaran — produk akan langsung diproses pengirimannya.</li>
      </ol>
      <div class="callout callout-info">
        Produk Ready Stock umumnya dikirim pada hari yang sama atau hari kerja berikutnya setelah pembayaran terkonfirmasi, sesuai jadwal operasional Packer dan gudang.
      </div>

      <h2 id="poolpoint-ready-stock">Penggunaan PoolPoint di Ready Stock</h2>
      <p>PoolPoint <strong>dapat digunakan</strong> saat Pooler membeli produk Ready Stock. Aktifkan opsi "Gunakan PoolPoint" di halaman checkout dan pilih jumlah poin yang ingin dipakai (50 atau 100 poin) untuk mendapatkan potongan harga langsung.</p>
    `
  }
]

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(article => article.category === categorySlug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, limit = 3): Article[] {
  return articles
    .filter(article => article.category === categorySlug && article.slug !== currentSlug)
    .slice(0, limit)
}

// Synonym Map for Indonesian & English Terms
const SYNONYM_MAP: Record<string, string[]> = {
  daftar: ['daftar', 'mendaftar', 'pendaftaran', 'registrasi', 'register', 'signup', 'sign up', 'bikin akun', 'buat akun', 'packer', 'pooler', 'seller'],
  login: ['login', 'masuk', 'signin', 'sign in', 'log in', 'autentikasi'],
  pesan: ['pesan', 'pemesanan', 'memesan', 'beli', 'membeli', 'pembelian', 'order', 'checkout', 'belanja', 'transaksi'],
  beli: ['beli', 'membeli', 'belanja', 'berbelanja', 'pesan', 'pemesanan', 'order', 'checkout', 'pooler', 'pembeli'],
  pooler: ['pooler', 'pembeli', 'buyer', 'pelanggan', 'customer', 'belanja', 'user', 'pembelian'],
  packer: ['packer', 'penjual', 'seller', 'merchant', 'pabrik', 'produsen', 'supplier', 'toko', 'mitra'],
  penjual: ['penjual', 'packer', 'seller', 'merchant', 'pabrik', 'produsen', 'supplier', 'toko', 'buka toko'],
  pembeli: ['pembeli', 'pooler', 'buyer', 'pelanggan', 'customer', 'konsumen'],
  bayar: ['bayar', 'pembayaran', 'membayar', 'payment', 'transfer', 'va', 'virtual account', 'bca', 'bca transfer', 'bca espay', 'espay', 'mandiri', 'mandiri va', 'briva', 'bri', 'bni', 'cimb', 'permata', 'danamon', 'fee', 'biaya pembayaran', 'split pembayaran'],
  va: ['va', 'virtual account', 'mandiri va', 'briva', 'bri va', 'bni va', 'cimb va', 'permata va', 'danamon va', 'kode va', 'nomor va'],
  bca: ['bca', 'bca transfer', 'bca espay', 'espay', 'transfer bca', 'rekening bca', 'klikbca', 'mbca', 'm-bca', 'bayar bca'],
  fee: ['fee', 'biaya pembayaran', 'biaya', 'biaya admin', 'admin fee', 'biaya transaksi', 'biaya gateway', 'tarif bayar', 'potongan'],
  kirim: ['kirim', 'pengiriman', 'kurir', 'ekspedisi', 'ongkir', 'ongkos kirim', 'resi', 'lacak', 'kargo', 'cargo', 'jne', 'sicepat', 'jnt'],
  ongkir: ['ongkir', 'ongkos kirim', 'biaya kirim', 'tarif', 'pengiriman', 'kurir', 'gratis ongkir'],
  batal: ['batal', 'pembatalan', 'membatalkan', 'cancel', 'batal pesanan', 'batalkan'],
  refund: ['refund', 'pengembalian dana', 'kembali dana', 'retur', 'komplain', 'klaim', 'saldo', 'ganti rugi', 'poolpay'],
  password: ['password', 'kata sandi', 'sandi', 'pin', 'lupa password', 'reset password', 'ganti password', 'ubah password'],
  keamanan: ['keamanan', 'aman', 'otp', 'verifikasi', 'proteksi', 'privasi', 'email', 'nomor hp', 'whatsapp', 'wa', 'ktp', 'npwp', 'identitas'],
  identitas: ['identitas', 'ktp', 'npwp', 'verifikasi identitas', 'upload ktp', 'upload npwp', 'dokumen identitas', 'diskon 1%', 'bebas biaya administrasi', 'gratis biaya administrasi'],
  ktp: ['ktp', 'kartu tanda penduduk', 'nik', 'verifikasi ktp', 'upload ktp', 'identitas', 'dokumen identitas', 'diskon 1%'],
  npwp: ['npwp', 'pajak', 'nomor npwp', 'kartu npwp', 'upload npwp', 'verifikasi npwp', 'dokumen identitas', 'diskon 1%'],
  voucher: ['voucher', 'promo', 'promosi', 'kupon', 'diskon', 'potongan harga', 'hemat', 'poolpoint', 'pool point', 'diskon 1%', 'diskon identitas'],
  point: ['poolpoint', 'pool point', 'poin', 'point', 'reward', 'diskon', 'potongan', 'voucher'],
  saldo: ['poolpay', 'pool pay', 'saldo', 'refund', 'cairkan', 'tarik dana', 'dompet', 'withdraw'],
  alamat: ['alamat', 'tambah alamat', 'atur lokasi', 'lokasi', 'alamat baru', 'ubah alamat', 'ganti alamat', 'alamat tujuan', 'titik lokasi', 'pinpoint', 'profil alamat'],
  lokasi: ['lokasi', 'alamat', 'atur lokasi', 'tambah alamat', 'gudang', 'peta', 'pinpoint', 'tujuan'],
  split: ['split', 'split pembayaran', 'pisah bayar', 'tambah split', 'kombinasi bayar', 'bagi bayar', 'poolpay va'],
  kain: ['kain', 'tekstil', 'yard', 'roll', 'jetblack', 'oxford', 'greige', 'cotton', 'katun', 'bahan', 'gsm'],
  produk: ['produk', 'kategori', 'flash sale', 'pre order', 'ready stock', 'po', 'moq', 'toleransi'],
  grosir: ['grosir', 'borongan', 'pabrik', 'moq', 'kemasan', 'packaging', 'dus', 'kardus', 'packer'],
  cs: ['cs', 'customer service', 'customer care', 'kontak', 'bantuan', 'hubungi', 'whatsapp', 'wa', 'pengaduan'],
  rfq: ['rfq', 'request for quotation', 'minta penawaran', 'penawaran', 'tender', 'kain kustom', 'custom fabric', 'prioritaskan', 'prioritas rfq', 'spesifikasi kain', 'sourcing'],
  prioritaskan: ['prioritaskan', 'fitur prioritaskan', 'prioritas', 'urgent', 'tender prioritas', '1000000', '1 juta', 'rfq prioritas']
}

// Basic Indonesian Stemmer
function stemIndonesian(word: string): string {
  let w = word.toLowerCase().trim()
  if (w.length <= 3) return w

  // Suffixes
  w = w.replace(/(lah|kah|pun|tah)$/, '')
  w = w.replace(/(ku|mu|nya)$/, '')
  w = w.replace(/(kan|an|i)$/, '')

  // Prefixes
  w = w.replace(/^(meng|men|mem|me|peng|pen|pem|pe|di|ter|ke|ber|bel|be)/, '')

  return w
}

// Levenshtein distance for fuzzy typo tolerance
function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const d: number[][] = []
  for (let i = 0; i <= b.length; i++) d[i] = [i]
  for (let j = 0; j <= a.length; j++) d[0][j] = j

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        d[i][j] = d[i - 1][j - 1]
      } else {
        d[i][j] = Math.min(
          d[i - 1][j - 1] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j] + 1
        )
      }
    }
  }
  return d[b.length][a.length]
}

/**
 * Intelligent, fuzzy, tokenized search matching closest articles inspired by Tokopedia Care
 */
export function searchArticles(query: string): Article[] {
  if (!query || !query.trim()) return []

  const rawQuery = query.toLowerCase().trim()
  // Clean punctuation and tokenize query into distinct search terms
  const tokens = rawQuery
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 0)

  if (tokens.length === 0) return []

  // Expand tokens with synonyms and stemmed forms
  const expandedTerms = new Set<string>()
  for (const token of tokens) {
    expandedTerms.add(token)
    const stemmed = stemIndonesian(token)
    if (stemmed.length >= 3) {
      expandedTerms.add(stemmed)
    }

    // Check synonym map
    for (const [key, synList] of Object.entries(SYNONYM_MAP)) {
      if (key === token || key === stemmed || synList.includes(token) || synList.includes(stemmed)) {
        expandedTerms.add(key)
        synList.forEach(s => expandedTerms.add(s))
      }
    }
  }

  const termList = Array.from(expandedTerms)

  // Calculate match scores for all articles
  const scoredArticles = articles.map(article => {
    let score = 0
    const titleLower = article.title.toLowerCase()
    const excerptLower = article.excerpt.toLowerCase()
    const slugLower = article.slug.toLowerCase().replace(/-/g, ' ')
    const catLower = (article.categoryTitle || '').toLowerCase()
    const tagsLower = (article.tags || []).map(t => t.toLowerCase())
    // Include platform-specific content so Mobile/Desktop instructions are searchable too.
    const platformContent = (article.platforms || [])
      .map(platform => platform.content)
      .join(' ')
    const contentLower = `${article.content} ${platformContent}`.toLowerCase()

    // 1. Exact Full Query Matches (Highest Priority)
    if (titleLower.includes(rawQuery)) {
      score += 120
      if (titleLower.startsWith(rawQuery)) score += 30
    }
    if (slugLower.includes(rawQuery)) {
      score += 80
    }
    if (excerptLower.includes(rawQuery)) {
      score += 50
    }
    if (tagsLower.some(t => t.includes(rawQuery))) {
      score += 70
    }

    // 2. Token Matching & Multi-Word Scoring
    let matchedTokenCount = 0
    for (const token of tokens) {
      let tokenMatched = false

      if (titleLower.includes(token)) {
        score += 35
        tokenMatched = true
      }
      if (slugLower.includes(token)) {
        score += 25
        tokenMatched = true
      }
      if (tagsLower.some(t => t.includes(token))) {
        score += 30
        tokenMatched = true
      }
      if (catLower.includes(token)) {
        score += 20
        tokenMatched = true
      }
      if (excerptLower.includes(token)) {
        score += 15
        tokenMatched = true
      }
      if (contentLower.includes(token)) {
        score += 5
        tokenMatched = true
      }

      // Fuzzy matching for typo tolerance (e.g., "daftr" -> "daftar")
      if (!tokenMatched && token.length >= 4) {
        // Check title words
        const titleWords = titleLower.split(/\s+/)
        for (const tw of titleWords) {
          if (Math.abs(tw.length - token.length) <= 1 && levenshteinDistance(tw, token) <= 1) {
            score += 25
            tokenMatched = true
            break
          }
        }
        // Check tags
        if (!tokenMatched) {
          for (const tag of tagsLower) {
            if (Math.abs(tag.length - token.length) <= 1 && levenshteinDistance(tag, token) <= 1) {
              score += 20
              tokenMatched = true
              break
            }
          }
        }
      }

      if (tokenMatched) {
        matchedTokenCount++
      }
    }

    // Bonus for matching multiple query tokens
    if (tokens.length > 1 && matchedTokenCount === tokens.length) {
      score += 40
    }

    // 3. Synonym & Stemmed Matches
    for (const term of termList) {
      if (!tokens.includes(term)) {
        if (titleLower.includes(term)) score += 18
        if (tagsLower.some(t => t.includes(term))) score += 15
        if (slugLower.includes(term)) score += 12
        if (catLower.includes(term)) score += 10
        if (excerptLower.includes(term)) score += 8
      }
    }

    return { article, score }
  })

  // Filter only matching articles with positive score and sort by score descending
  return scoredArticles
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.article)
}
