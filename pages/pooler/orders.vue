<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; Manajemen Pesanan
      </div>
      
      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Manajemen Pesanan</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Pantau progres, status pengiriman, dan riwayat lengkap transaksi Anda melalui halaman dasbor pesanan.
      </p>

      <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Cara Melihat Riwayat Transaksi</h3>
      
      <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
        <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }">

          <li>
            <div class="step-item-layout">
              <div>Klik ikon <strong>Profil</strong> Anda yang berada di pojok kanan atas halaman utama untuk masuk ke halaman dasbor akun Anda.</div>
              <ImageGuide :src="order1" caption="Klik ikon Profil di pojok kanan atas" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Pada halaman Profil, buka menu <strong>Transaksi</strong> di <em>sidebar</em> kiri. Pilih kategori transaksi yang sesuai dengan jenis produk yang Anda beli:
                <ul :style="{ marginTop: '0.5rem', paddingLeft: '1.5rem' }">
                  <li :style="{ marginBottom: '0.25rem' }">Klik <strong>Reguler</strong> untuk pesanan produk <em>ready stock</em> (termasuk produk Flash Sale).</li>
                  <li :style="{ marginBottom: '0.25rem' }">Klik <strong>Pre-Order</strong> untuk pesanan barang yang memerlukan waktu produksi.</li>
                  <li>Klik <strong>RFQ</strong> untuk pesanan dari hasil <em>Request for Quotation</em>.</li>
                </ul>
              </div>
              <ImageGuide :src="order2" caption="Sidebar Transaksi — pilih Reguler, Pre-Order, atau RFQ" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Anda akan melihat <strong>daftar seluruh pesanan</strong> beserta informasi detail, antara lain:
                <ul :style="{ marginTop: '0.5rem', paddingLeft: '1.5rem' }">
                  <li :style="{ marginBottom: '0.25rem' }">Nomor Invoice dan tanggal pemesanan.</li>
                  <li :style="{ marginBottom: '0.25rem' }">Status terkini (contoh: <em>"Menunggu Pembayaran"</em>).</li>
                  <li :style="{ marginBottom: '0.25rem' }">Tombol aksi cepat seperti <strong>Lanjut Pembayaran</strong> atau <strong>Lihat Invoice</strong>.</li>
                  <li>Informasi kuantitas (Yard/Roll/Sample) dan total tagihan pesanan.</li>
                </ul>
                Gunakan filter <strong>Status Pesanan</strong>, <strong>Tanggal Pesanan</strong>, atau kolom <strong>Cari Pesanan</strong> di bagian atas untuk menemukan transaksi tertentu.
              </div>
              <ImageGuide :src="order3" caption="Daftar pesanan Reguler — status, invoice, dan aksi cepat" />
            </div>
          </li>

        </ol>
      </div>

      <QAAlert type="info" title="Pencarian &amp; Filter">
        Gunakan menu <em>dropdown</em> Status Pesanan, Tanggal Pesanan, atau kolom Cari Pesanan yang ada di bagian atas daftar untuk memfilter riwayat transaksi Anda dengan mudah.
      </QAAlert>

    </div>
</template>

<script setup>
import order1 from '~/assets/imgpooler/manajemen belanja/1.png'
import order2 from '~/assets/imgpooler/manajemen belanja/2.png'
import order3 from '~/assets/imgpooler/manajemen belanja/3.png'
</script>
