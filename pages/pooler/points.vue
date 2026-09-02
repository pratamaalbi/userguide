<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; PoolPoint, PoolPay &amp; PoolCoin
      </div>
      
      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Panduan PoolPoint, PoolPay &amp; PoolCoin</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Pahami sistem reward, pengembalian dana (refund), dan dompet digital terintegrasi di platform Poolapack.
      </p>

      <!-- Rangkuman 3 Fitur Utama -->
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }">
        
        <div :style="{ padding: '1.5rem', border: '1px solid #fde68a', borderRadius: '12px', backgroundColor: '#fffbeb' }">
          <h3 :style="{ margin: '0 0 0.5rem 0', color: '#b45309', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }">
            🪙 PoolPoint
          </h3>
          <p :style="{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#78350f' }">
            Poin reward belanja untuk mendapatkan <strong>diskon skala besar</strong>. Digunakan <strong>minimal 50 point</strong> dan <strong>maksimal 100 point</strong> per 1 produk.
          </p>
        </div>

        <div :style="{ padding: '1.5rem', border: '1px solid #bfdbfe', borderRadius: '12px', backgroundColor: '#eff6ff' }">
          <h3 :style="{ margin: '0 0 0.5rem 0', color: '#1d4ed8', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }">
            💳 PoolPay
          </h3>
          <p :style="{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#1e3a8a' }">
            Saldo refund otomatis untuk <strong>transaksi yang dibatalkan oleh admin</strong>. Saldo bisa dicarikan ke rekening bank atau dipakai kembali belanja.
          </p>
        </div>

        <div :style="{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#f8fafc' }">
          <h3 :style="{ margin: '0 0 0.5rem 0', color: '#475569', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }">
            🪙 PoolCoin <span :style="{ fontSize: '0.75rem', backgroundColor: '#e2e8f0', color: '#475569', padding: '0.2rem 0.5rem', borderRadius: '6px' }">Tahap Pengembangan</span>
          </h3>
          <p :style="{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#475569' }">
            Fitur koin dalam proses pembangunan. Mengusung konsep seperti koin marketplace (<strong>1 PoolCoin = Rp1 Perak</strong>).
          </p>
        </div>

      </div>

      <!-- Tab Switcher -->
      <div :style="{ display: 'flex', gap: '1rem', borderBottom: '2px solid var(--border-color)', marginBottom: '2rem', flexWrap: 'wrap' }">
        <button
          @click="activeTab = 'poolpoint'"
          :style="{
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderBottom: activeTab === 'poolpoint' ? '3px solid #b45309' : '3px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'poolpoint' ? '#b45309' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }"
        >
          1. PoolPoint (Diskon Belanja)
        </button>
        <button
          @click="activeTab = 'poolpay'"
          :style="{
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderBottom: activeTab === 'poolpay' ? '3px solid #1d4ed8' : '3px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'poolpay' ? '#1d4ed8' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }"
        >
          2. PoolPay (Refund &amp; Pencairan)
        </button>
        <button
          @click="activeTab = 'poolcoin'"
          :style="{
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderBottom: activeTab === 'poolcoin' ? '3px solid #475569' : '3px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'poolcoin' ? '#475569' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }"
        >
          3. PoolCoin (Info Fitur)
        </button>
      </div>

      <!-- TAB 1: POOLPOINT -->
      <div v-if="activeTab === 'poolpoint'">
        <QAAlert type="info" title="Aturan Penggunaan &amp; Perolehan PoolPoint">
          <ul :style="{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.6' }">
            <li>
              <strong>Batas Penggunaan Poin:</strong> PoolPoint dapat digunakan untuk potongan harga/diskon skala besar pada produk tertentu. Penukaran poin dibatasi <strong>minimal 50 PoolPoint</strong> dan <strong>maksimal 100 PoolPoint per 1 produk</strong>.
            </li>
            <li>
              <strong>Cara Mendapatkan Poin:</strong> Pembeli (Pooler) harus berbelanja produk di Poolapack dan mengikuti alur transaksi sampai <strong>benar-benar selesai</strong> (pengiriman barang, pendataan, dan pembayaran selesai 100%). Setelah status pesanan berubah menjadi <strong>Selesai</strong>, PoolPoint akan otomatis ditambahkan ke saldo akun pengguna.
            </li>
          </ul>
        </QAAlert>

        <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah Cek &amp; Menggunakan PoolPoint</h3>

        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }">

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Cek Saldo PoolPoint:</strong><br />
                  Saldo PoolPoint Anda ditampilkan di bagian kanan atas header aplikasi Poolapack.
                </div>
                <ImageGuide :src="pool1" caption="Pemeriksaan total saldo PoolPoint di header aplikasi" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Halaman Riwayat PoolPoint:</strong><br />
                  Klik menu <strong>PoolPoint</strong> pada navigasi profil untuk melihat saldo aktif, poin yang akan kedaluwarsa, serta rincian riwayat poin masuk dan poin terpakai.
                </div>
                <ImageGuide :src="pool2" caption="Dashboard riwayat transaksi dan status masa aktif PoolPoint" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Menggunakan PoolPoint untuk Diskon Produk:</strong><br />
                  Saat berada di halaman detail produk, klik tombol <strong>Gunakan Point</strong> untuk memotong harga belanja Anda secara langsung (sesuai batas min 50 - max 100 point per produk).
                </div>
                <ImageGuide :src="pool3" caption="Opsi tombol 'Gunakan Point' di halaman detail produk" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Mendapatkan Point Otomatis:</strong><br />
                  Pastikan transaksi pesanan Anda sudah selesai hingga langkah pengiriman dan verifikasi penerimaan barang berstatus <strong>Selesai</strong> agar poin reward otomatis bertambah.
                </div>
                <ImageGuide :src="poolSelesai" caption="Status pesanan Selesai memicu penerimaan PoolPoint otomatis" />
              </div>
            </li>

          </ol>
        </div>
      </div>

      <!-- TAB 2: POOLPAY -->
      <div v-if="activeTab === 'poolpay'">
        <QAAlert type="warning" title="Mekanisme Saldo Refund &amp; Pengembalian Dana (PoolPay)">
          <p :style="{ margin: '0 0 0.5rem 0' }">
            <strong>Kapan Saldo PoolPay Terisi?</strong>
          </p>
          <p :style="{ margin: 0 }">
            Jika terjadi pembatalan transaksi oleh admin Poolapack (misalnya pembatalan pesanan atau transaksi gagal), dana pembayaran yang sudah disetor pengguna <strong>akan otomatis dikembalikan 100% ke saldo PoolPay</strong>.
          </p>
          <hr :style="{ border: 'none', borderTop: '1px solid #fcd34d', margin: '1rem 0' }" />
          <p :style="{ margin: 0 }">
            <strong>Contoh Kasus:</strong><br />
            Pengguna membeli kain Oxford seharga <strong>Rp9.000.000</strong> dan telah berhasil membayar. Namun karena kendala operasional, transaksi dibatalkan oleh admin. Uang sebesar <strong>Rp9.000.000</strong> tersebut akan dikembalikan utuh ke saldo PoolPay akun pengguna dan dapat dicarikan ke rekening bank atau digunakan kembali untuk produk lain.
          </p>
        </QAAlert>

        <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah Mengakses &amp; Pencairan Saldo PoolPay</h3>

        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }">

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Akses Menu PoolPay:</strong><br />
                  Masuk ke menu akun profil pengguna, lalu pilih menu <strong>PoolPay</strong> pada bilah navigasi sebelah kiri.
                </div>
                <ImageGuide :src="pay1" caption="Membuka menu PoolPay melalui sidebar profil pengguna" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Cek Saldo Refund &amp; Klik Cairkan Saldo:</strong><br />
                  Pada dasboard PoolPay, Anda dapat melihat jumlah saldo refund yang tersedia, rincian pengembalian dana, serta tombol <strong>Cairkan Saldo</strong> untuk menarik dana ke rekening bank.
                </div>
                <ImageGuide :src="pay2" caption="Halaman saldo PoolPay dan riwayat refund dari transaksi yang dibatalkan" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Formulir Pencairan Saldo:</strong><br />
                  Masukkan nominal uang yang ingin ditarik, pilih rekening tujuan bank terdaftar, lalu klik tombol <strong>Cairkan</strong>.
                </div>
                <ImageGuide :src="pay3" caption="Modal pengisian jumlah penarikan saldo dan rekening bank tujuan" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Status Penarikan Uang:</strong><br />
                  Histori aktivitas PoolPay akan memperbarui status penarikan Anda menjadi <em>"Pencairan ke Bank - Menunggu Diproses"</em>.
                </div>
                <ImageGuide :src="pay4" caption="Riwayat penarikan dana yang sedang diproses oleh admin" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Pengaturan Rekening Bank Tujuan:</strong><br />
                  Untuk mempermudah proses penarikan saldo, Anda dapat menambahkan atau memperbarui rekening bank melalui tab <strong>Rekening Bank</strong> pada menu Profil.
                </div>
                <ImageGuide :src="rek2" caption="Daftar rekening bank terdaftar untuk pencairan dana PoolPay" />
              </div>
            </li>

          </ol>
        </div>
      </div>

      <!-- TAB 3: POOLCOIN -->
      <div v-if="activeTab === 'poolcoin'">
        <QAAlert type="info" title="Informasi Fitur PoolCoin (Dalam Pengembangan)">
          <p :style="{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }">
            🚧 Fitur PoolCoin saat ini masih dalam tahap pengembangan aktif oleh tim pengembang Poolapack.
          </p>
          <p :style="{ margin: 0, lineHeight: '1.6' }">
            <strong>Konsep Fitur:</strong><br />
            Fitur PoolCoin akan berfungsi mirip dengan sistem koin marketplace pada umumnya (seperti Shopee Coins), di mana nilai tukar <strong>1 PoolCoin setara dengan Rp1 Perak</strong>.<br />
            Fitur ini akan diintegrasikan lebih lanjut untuk memberikan promo harian dan cashback bagi pengguna setia Poolapack.
          </p>
        </QAAlert>
      </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('poolpoint')
import pool1 from '~/assets/imgpooler/pool/1.png'
import pool2 from '~/assets/imgpooler/pool/2.png'
import pool3 from '~/assets/imgpooler/pool/4.png'
import poolSelesai from '~/assets/imgpooler/pool/Pselesai.png'
import pay1 from '~/assets/imgpooler/pool/1pay.png'
import pay2 from '~/assets/imgpooler/pool/2pay.png'
import pay3 from '~/assets/imgpooler/pool/3pay.png'
import pay4 from '~/assets/imgpooler/pool/4pay.png'
import rek1 from '~/assets/imgpooler/pool/1rek.png'
import rek2 from '~/assets/imgpooler/pool/2rek.png'
</script>
