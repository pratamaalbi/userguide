<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; Pengajuan RFQ &amp; Manufaktur
      </div>

      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Panduan RFQ &amp; Manufaktur</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Pelajari cara mengaktifkan produk non-aktif, merequest kain baru, serta memesan produksi <strong>pakaian/produk kustom (Manufaktur)</strong> dengan simulasi 3D.
      </p>

      <!-- Apa itu RFQ & Manufaktur Card -->
      <div :style="{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#f0f7ff', marginBottom: '2rem' }">
        <h3 :style="{ margin: '0 0 1rem 0', color: 'var(--primary-color)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }">
          💡 Layanan Permintaan Khusus di Poolapack
        </h3>
        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }">
          <div>
            <h4 :style="{ margin: '0 0 0.5rem 0', color: '#1e40af' }">1. RFQ Produk (Bahan Kain)</h4>
            <p :style="{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#334155' }">
              Digunakan untuk meminta admin <strong>mengaktifkan kembali stok kain non-aktif</strong> atau <strong>mencarikan jenis kain spesifik</strong> yang belum ada di katalog Poolapack.
            </p>
          </div>
          <div>
            <h4 :style="{ margin: '0 0 0.5rem 0', color: '#1e40af' }">2. RFQ Manufaktur (Produksi Custom)</h4>
            <p :style="{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: '#334155' }">
              Digunakan untuk <strong>memesan produksi pakaian/produk jadi</strong> (seperti Hoodie, Celana, Dress, Hijab, Jaket) menggunakan bahan kain tertentu, lengkap dengan <strong>pratinjau 3D dan custom logo/artwork</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Tab Switcher -->
      <div :style="{ display: 'flex', gap: '1rem', borderBottom: '2px solid var(--border-color)', marginBottom: '2rem' }">
        <button
          @click="activeTab = 'produk'"
          :style="{
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderBottom: activeTab === 'produk' ? '3px solid var(--primary-color)' : '3px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'produk' ? 'var(--primary-color)' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }"
        >
          1. RFQ Produk (Kain)
        </button>
        <button
          @click="activeTab = 'manufaktur'"
          :style="{
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderBottom: activeTab === 'manufaktur' ? '3px solid var(--primary-color)' : '3px solid transparent',
            backgroundColor: 'transparent',
            color: activeTab === 'manufaktur' ? 'var(--primary-color)' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }"
        >
          2. RFQ Manufaktur (Produk Jadi)
        </button>
      </div>

      <!-- Tab 1: RFQ Produk -->
      <div v-if="activeTab === 'produk'">
        <QAAlert type="info" title="Fitur RFQ Prioritas &amp; Biaya Komitmen">
          <p :style="{ margin: '0 0 0.5rem 0' }">
            <strong>Mengapa ada RFQ Prioritas (Biaya Komitmen Rp1.000.000)?</strong>
          </p>
          <p :style="{ margin: 0 }">
            Pada pengajuan reguler (non-prioritas), kerap terjadi kasus di mana pembeli mengajukan RFQ, lalu admin bekerja mencarikan/mengaktifkan produk, namun saat produk sudah aktif pembeli batal membeli karena alasan lain.<br />
            Dengan memilih <strong>RFQ Prioritas</strong> dan membayar biaya komitmen sebesar Rp1.000.000, permintaan Anda akan menjadi <strong>prioritas utama tim admin (pencarian cepat max 2x24 jam)</strong> sekaligus menjadi jaminan keseriusan pemesanan.
          </p>
        </QAAlert>

        <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah Pengajuan RFQ Produk</h3>

        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }">

            <li>
              <div class="step-item-layout">
                <div>
                  Pada halaman beranda Poolapack, klik menu icon <strong>RFQ</strong> yang terletak di bawah banner pencarian utama.
                </div>
                <ImageGuide :src="rfq1" caption="Menu icon RFQ pada beranda Poolapack" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Popup modal <strong>"Request for Quotation"</strong> akan terbuka. Pastikan Anda berada pada tab <strong>Produk</strong>.
                </div>
                <ImageGuide :src="rfq2" caption="Modal pengajuan Request for Quotation (Tab Produk)" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Isi form rincian permintaan Anda:
                  <ul :style="{ marginTop: '0.5rem', paddingLeft: '1.5rem' }">
                    <li :style="{ marginBottom: '0.25rem' }"><strong>Nama Produk:</strong> Pilih produk non-aktif dari list atau ketik nama kain baru.</li>
                    <li :style="{ marginBottom: '0.25rem' }"><strong>Jumlah &amp; Satuan:</strong> Tentukan estimasi kebutuhan (contoh: 1 Yard).</li>
                    <li :style="{ marginBottom: '0.25rem' }"><strong>Foto Produk (Opsional):</strong> Unggah sampel/referensi foto kain.</li>
                    <li><strong>Catatan Permintaan:</strong> Berikan instruksi tambahan untuk tim admin.</li>
                  </ul>
                </div>
                <ImageGuide :src="rfq3" caption="Mengisi detail nama produk, kuantitas, dan catatan" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Opsional — RFQ Prioritas:</strong><br />
                  Jika Anda membutuhkan produk diproses dengan cepat (maksimal 2x24 jam), centang opsi <strong>"RFQ Prioritas (Biaya Komitmen Rp1.000.000)"</strong>. Pilih <strong>Metode Pembayaran</strong> (contoh: Mandiri Virtual Account), lalu klik <strong>Ajukan Permintaan</strong>.
                </div>
                <ImageGuide :src="rfq4" caption="Memilih opsi RFQ Prioritas &amp; metode pembayaran" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Setelah pengajuan terikirim, akan muncul modal konfirmasi <strong>"RFQ Produk Terkirim"</strong>. Tim admin akan segera memproses permintaan Anda.
                </div>
                <ImageGuide :src="rfq5" caption="Konfirmasi pengajuan RFQ berhasil terkirim" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Jika Anda memilih <strong>RFQ Prioritas</strong>, Anda akan diarahkan ke halaman pembayaran Virtual Account. Lakukan pembayaran sebesar Rp1.000.000 sebelum batas waktu berakhir agar permintaan langsung diproses prioritas.
                </div>
                <ImageGuide :src="rfq6" caption="Halaman Pembayaran Virtual Account untuk RFQ Prioritas" />
              </div>
            </li>

          </ol>
        </div>
      </div>

      <!-- Tab 2: RFQ Manufaktur -->
      <div v-if="activeTab === 'manufaktur'">
        <QAAlert type="info" title="Simulasi Produk 3D &amp; Custom Brand">
          Fitur Manufaktur memungkinkan Anda mendesain pakaian (Hoodie, Celana, Jaket, Dress, Hijab) menggunakan kain yang ada di Poolapack, mengunggah logo brand Anda, lalu mempratinjau posisinya secara <strong>3D interaktif</strong> sebelum mengajukan pesanan ke pabrik/konveksi.
        </QAAlert>

        <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah Pengajuan RFQ Manufaktur</h3>

        <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
          <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }">

            <li>
              <div class="step-item-layout">
                <div>
                  Buka halaman produk kain yang ingin Anda gunakan sebagai bahan dasar produksi dari katalog Poolapack.
                </div>
                <ImageGuide :src="m1" caption="Pilih kain di halaman beranda atau katalog" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Pada halaman detail kain, klik tombol <strong>Manufaktur</strong> yang berada tepat di bawah tombol <em>Beli Sekarang</em>.
                </div>
                <ImageGuide :src="m2" caption="Klik tombol Manufaktur di halaman detail produk" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Langkah 1: Pilih Produk Jadi</strong><br />
                  Pilih jenis pakaian yang ingin diproduksi (contoh: <em>Hoodie, Celana Panjang, Celana Pendek, Dress, Hijab, Jaket</em>). Model 3D pakaian akan ditampilkan secara real-time di panel sebelah kiri. Klik <strong>Selanjutnya</strong>.
                </div>
                <ImageGuide :src="m3" caption="Langkah 1: Memilih jenis produk jadi &amp; simulasi 3D" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Langkah 2: Upload Artwork / Logo (OPSIONAL)</strong><br />
                  Unggah berkas desain atau logo brand Anda (format JPG, PNG, GIF maks 3MB) untuk dicetak pada pakaian.
                </div>
                <ImageGuide :src="m4" caption="Langkah 2: Mengunggah file artwork atau logo brand" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Atur Posisi Logo pada Model 3D:</strong><br />
                  Setelah logo ter-upload, Anda dapat menggeser, memutar, dan mengubah ukuran logo secara langsung di atas mockup 3D.
                </div>
                <ImageGuide :src="m5" caption="Mengatur letak dan ukuran logo di mockup 3D" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Jika ingin mengganti logo yang sudah diunggah, klik opsi <strong>Ganti Artwork</strong> untuk mengunggah file baru.
                </div>
                <ImageGuide :src="m6" caption="Opsi untuk mengganti gambar artwork" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Langkah 3: Pilih Variant</strong><br />
                  Pilih varian warna atau spesifikasi kain yang akan digunakan untuk pesanan produksi ini. Klik <strong>Selanjutnya</strong>.
                </div>
                <ImageGuide :src="m7" caption="Langkah 3: Memilih varian warna/bahan kain" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  <strong>Langkah 4: Ukuran &amp; Kuantitas</strong><br />
                  Tentukan rincian jumlah pesanan berdasarkan ukuran (S, M, L, XL, XXL) dan tambahkan <strong>Catatan Permintaan</strong> jika ada instruksi khusus. Klik <strong>Ajukan Permintaan</strong>.
                </div>
                <ImageGuide :src="m8" caption="Langkah 4: Menentukan jumlah per ukuran &amp; instruksi khusus" />
              </div>
            </li>

            <li>
              <div class="step-item-layout">
                <div>
                  Pengajuan RFQ Manufaktur Anda berhasil terkirim! Akan muncul modal <strong>"RFQ Manufaktur Terkirim"</strong> dan tim pabrik/admin akan segera menghubungi Anda untuk kalkulasi penawaran.
                </div>
                <ImageGuide :src="m9" caption="Konfirmasi pengajuan RFQ Manufaktur berhasil" />
              </div>
            </li>

          </ol>
        </div>
      </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('produk')
import rfq1 from '~/assets/imgpooler/rfq/1.png'
import rfq2 from '~/assets/imgpooler/rfq/2.png'
import rfq3 from '~/assets/imgpooler/rfq/3.png'
import rfq4 from '~/assets/imgpooler/rfq/4.png'
import rfq5 from '~/assets/imgpooler/rfq/5.png'
import rfq6 from '~/assets/imgpooler/rfq/6.png'
import m1 from '~/assets/imgpooler/manufaktur/1.png'
import m2 from '~/assets/imgpooler/manufaktur/2.png'
import m3 from '~/assets/imgpooler/manufaktur/3.png'
import m4 from '~/assets/imgpooler/manufaktur/4.png'
import m5 from '~/assets/imgpooler/manufaktur/5.png'
import m6 from '~/assets/imgpooler/manufaktur/6.png'
import m7 from '~/assets/imgpooler/manufaktur/7.png'
import m8 from '~/assets/imgpooler/manufaktur/8.png'
import m9 from '~/assets/imgpooler/manufaktur/9.png'
</script>
