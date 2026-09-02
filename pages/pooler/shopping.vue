<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; Cara Berbelanja
      </div>

      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Cara Berbelanja &amp; Checkout</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Panduan lengkap langkah demi langkah untuk menemukan produk, memasukkan ke keranjang, dan menyelesaikan proses pembayaran Anda di Poolapack.
      </p>

      <h3 :style="{ marginBottom: '1.5rem', fontSize: '1.5rem' }">Kenali Jenis Produk Berdasarkan Label</h3>
      <p :style="{ marginBottom: '1.5rem' }">
        Sebelum melakukan pembelian, perhatikan jenis produk yang ada di Poolapack. Anda dapat membedakan jenis produk ini dari <strong>warna label</strong> yang tertera pada gambar atau detail produk:
      </p>

      <div :style="{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }">
        <div :style="{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }">
          <div :style="{ backgroundColor: '#28a745', color: '#fff', borderRadius: '4px', padding: '0.25rem 0.75rem', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem', width: '90px', textAlign: 'center' }">Hijau</div>
          <div>
            <h4 :style="{ margin: '0 0 0.5rem 0' }">Ready Stock</h4>
            <p :style="{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }">Produk dengan kategori ini otomatis tertera harganya beserta MOQ (Minimum Order Quantity). Anda dapat memesan lebih dari MOQ asalkan tidak melebihi total stok yang tersedia.</p>
          </div>
        </div>

        <div :style="{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }">
          <div :style="{ backgroundColor: '#6f42c1', color: '#fff', borderRadius: '4px', padding: '0.25rem 0.75rem', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem', width: '90px', textAlign: 'center' }">Ungu</div>
          <div>
            <h4 :style="{ margin: '0 0 0.5rem 0' }">Pre Order (PO)</h4>
            <p :style="{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }">Memiliki MOQ namun <strong>tidak ada batasan maksimal pembelian</strong>. Sistem ini membutuhkan waktu tunggu produksi (PO). Pemesanan produk ini harus diawali dengan pembayaran DP (Down Payment). Estimasi pengerjaan bergantung pada tipe produk.</p>
          </div>
        </div>

        <div :style="{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }">
          <div :style="{ backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '4px', padding: '0.25rem 0.75rem', fontWeight: 'bold', flexShrink: 0, fontSize: '0.85rem', width: '90px', textAlign: 'center' }">Emas / Gold</div>
          <div>
            <h4 :style="{ margin: '0 0 0.5rem 0' }">Flash Sale</h4>
            <p :style="{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }">Produk promosi dengan kuantitas paket tertutup. Dijual sesuai dengan stok set yang ditampilkan (Anda tidak bisa menambahkan atau mengurangi jumlah stok yang sudah di-bundle).</p>
          </div>
        </div>
      </div>

      <h3 :style="{ marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah Checkout</h3>

      <div :style="{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '3rem' }">
        
        <!-- OPSI 1 -->
        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa' }">
          <h3 :style="{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '1.4rem' }">Opsi 1: Mengisi Alamat Lebih Dulu</h3>
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }">
            
            <li>
              <div class="step-item-layout">
                <div>Saat pertama kali masuk, Anda akan melihat peringatan <strong>"Yuk atur lokasi terlebih dahulu, Tambah Alamat"</strong> di pojok kanan atas halaman beranda. Klik peringatan tersebut untuk mulai menambahkan alamat.</div>
                <ImageGuide :src="b1_1E" caption="Peringatan 'Tambah Alamat' di beranda Poolapack" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Anda akan dialihkan ke halaman <strong>Profil &gt; Alamat</strong>. Karena belum ada alamat yang tersimpan, klik tombol <strong>"Tambah Alamat Baru"</strong>.</div>
                <ImageGuide :src="b1_2E" caption="Klik 'Tambah Alamat Baru' di halaman Profile Address" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Akan muncul form <strong>"Tambah Alamat Baru"</strong>. Isi semua data yang diperlukan: <strong>Penerima</strong>, <strong>Nomor HP</strong>, <strong>Provinsi</strong>, <strong>Kota</strong>, <strong>Kecamatan</strong>, <strong>Desa</strong>, <strong>Kode Pos</strong>, dan <strong>Alamat Lengkap</strong>. Klik <strong>Simpan</strong> setelah selesai.</div>
                <ImageGuide :src="b1_3" caption="Form pengisian alamat pengiriman baru" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Setelah alamat berhasil tersimpan, kembali ke halaman <strong>Beranda</strong>. Perhatikan peringatan "Tambah Alamat" sudah tidak muncul lagi. Sekarang Anda bisa mulai mencari dan memilih produk yang ingin dibeli.</div>
                <ImageGuide :src="b1_7" caption="Beranda setelah alamat berhasil disimpan" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Klik produk yang Anda inginkan untuk masuk ke halaman detail produk. Anda akan melihat informasi lengkap seperti varian, harga, dan stok. Klik <strong>Beli Sekarang</strong> untuk langsung <em>checkout</em>, atau <strong>Masukkan Keranjang</strong> jika ingin membayar nanti bersama produk lain.</div>
                <ImageGuide :src="b1_4" caption="Halaman detail produk — klik 'Beli Sekarang'" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Pada halaman <strong>Checkout</strong>, alamat yang sebelumnya sudah Anda simpan akan <strong>terisi otomatis</strong> di bagian Alamat Tujuan.<br/><br/>
                  Pilih <strong>Layanan Ekspedisi</strong>, <strong>atau</strong> pilih opsi <strong>"Diambil di Pabrik/Gudang"</strong>.<br/>
                  Tambahkan <strong>Catatan</strong> jika perlu (opsional).<br/><br/>
                  Pilih <strong>Metode Pembayaran</strong> (contoh: BCA Virtual Account), kemudian klik <strong>"Lanjutkan Pembayaran"</strong>.
                </div>
                <ImageGuide :src="b1_5" caption="Halaman Checkout — alamat, ekspedisi, dan metode pembayaran" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Anda akan masuk ke halaman <strong>Pembayaran</strong>. Di sini ditampilkan <strong>countdown timer</strong> batas waktu pembayaran, nomor <strong>Virtual Account</strong>, dan total yang harus ditransfer.<br/><br/>
                  Lakukan transfer sesuai nominal yang tertera. <em>Sistem otomatis mengubah status menjadi "Pembayaran Berhasil" setelah transaksi lunas.</em><br/><br/>
                  <span :style="{ color: 'var(--text-muted)', fontSize: '0.9rem' }">* Jika salah memilih, metode pembayaran dapat diubah melalui tombol "Ubah Metode Pembayaran".</span>
                </div>
                <ImageGuide :src="b1_6" caption="Halaman Pembayaran — menunggu transfer via Virtual Account" />
              </div>
            </li>

          </ol>
        </div>

        <!-- OPSI 2 -->
        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa' }">
          <h3 :style="{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '1.4rem' }">Opsi 2: Langsung Beli Produk</h3>
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }">
            
            <li>
              <div class="step-item-layout">
                <div>Cari dan <strong>klik produk</strong> yang Anda inginkan tanpa perlu menyiapkan alamat terlebih dahulu, lalu klik tombol <strong>Beli Sekarang</strong>.</div>
                <ImageGuide :src="b2_1" caption="Pilih produk yang diminati" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Di halaman checkout, karena belum ada alamat, Anda akan diminta untuk <strong>Menambah Alamat Tujuan</strong>. Isikan detail alamat pengiriman yang baru.</div>
                <ImageGuide :src="b2_2" caption="Form penambahan alamat saat checkout" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div><em>Alternatif:</em> Anda dapat langsung memilih opsi pengiriman <strong>Diambil di gudang/pabrik</strong> (opsi ini tidak mewajibkan pengisian alamat tujuan sama sekali).</div>
                <ImageGuide :src="b2_3" caption="Opsi diambil di gudang" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>Setelah rincian pengambilan/alamat terpilih, tekan <strong>Lanjutkan Pembayaran</strong>. Pilih metode bayar dan selesaikan transaksi seperti pada Opsi 1.</div>
                <ImageGuide :src="b2_4" caption="Lanjutkan pembayaran" />
              </div>
            </li>

          </ol>
        </div>

      </div>

    </div>
</template>

<script setup>
import b1_1E from '~/assets/imgpooler/belanja/1E.png'
import b1_2E from '~/assets/imgpooler/belanja/2E.png'
import b1_3 from '~/assets/imgpooler/belanja/3.png'
import b1_4 from '~/assets/imgpooler/belanja/4.png'
import b1_5 from '~/assets/imgpooler/belanja/5.png'
import b1_6 from '~/assets/imgpooler/belanja/6.png'
import b1_7 from '~/assets/imgpooler/belanja/7.png'
import b2_1 from '~/assets/imgpooler/belanja2/1.png'
import b2_2 from '~/assets/imgpooler/belanja2/2.png'
import b2_3 from '~/assets/imgpooler/belanja2/3.png'
import b2_4 from '~/assets/imgpooler/belanja2/4.png'
</script>
