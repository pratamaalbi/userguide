<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; Pengaturan Akun
      </div>
      
      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Pengaturan Akun &amp; Verifikasi Identitas</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Pelajari cara melengkapi profil Anda dan memverifikasi identitas untuk mendapatkan keuntungan tambahan di platform Poolapack.
      </p>

      <!-- Info Keuntungan Verifikasi -->
      <QAAlert type="info" title="Keuntungan Verifikasi Identitas (KTP/NPWP)">
        <p :style="{ margin: '0 0 0.5rem 0' }">
          Melakukan verifikasi identitas di Poolapack menggunakan <strong>KTP</strong> atau <strong>NPWP</strong> bukan hanya untuk keamanan akun, tetapi juga memberikan <strong>keuntungan langsung</strong> bagi pembeli (Pooler).
        </p>
        <p :style="{ margin: 0, fontWeight: 'bold' }">
          💡 Setiap pengguna yang akunnya telah berstatus "Terverifikasi" akan mendapatkan DISKON sebesar 1% untuk setiap transaksi/pembelian yang dilakukan!
        </p>
      </QAAlert>

      <h3 :style="{ marginTop: '2.5rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah-Langkah Verifikasi Identitas</h3>
      
      <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
        <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }">

          <li>
            <div class="step-item-layout">
              <div>
                Masuk ke platform Poolapack. Klik <strong>ikon profil</strong> Anda yang berada di pojok kanan atas layar (<em>header</em>) untuk membuka menu dropdown, kemudian pilih menu Profil.
              </div>
              <ImageGuide :src="verif1" caption="Klik ikon profil di menu header navigasi" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Pada halaman <strong>Profil</strong>, di bawah bagian avatar akun, temukan dan klik tombol <strong>Verifikasi Identitas</strong>. 
                <br /><br />
                <em>Perhatikan bahwa sebelum diverifikasi, akun Anda akan memiliki peringatan "Akun Belum Terverifikasi".</em>
              </div>
              <ImageGuide :src="verif2" caption="Tombol Verifikasi Identitas di halaman profil pengguna" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Sebuah pop-up/modal verifikasi akan muncul. Anda dapat memilih menggunakan <strong>KTP</strong> atau <strong>NPWP</strong>. <br />
                Isi form berikut:
                <ul :style="{ marginTop: '0.5rem', paddingLeft: '1.5rem' }">
                  <li :style="{ marginBottom: '0.25rem' }"><strong>Nama KTP/NPWP:</strong> Masukkan nama lengkap sesuai dokumen.</li>
                  <li :style="{ marginBottom: '0.25rem' }"><strong>Nomor Identitas:</strong> Masukkan nomor KTP (NIK) atau NPWP dengan benar.</li>
                  <li><strong>Upload Dokumen:</strong> Unggah foto dokumen fisik Anda (maksimal ukuran file 2MB dengan format JPG, JPEG, atau PNG). Setelah gambar terunggah dan muncul preview, klik tombol <strong>Upload KTP/NPWP</strong>.</li>
                </ul>
              </div>
              <ImageGuide :src="verif3" caption="Mengisi form nama, nomor identitas, dan upload dokumen" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Setelah dokumen berhasil diunggah, status pada bagian <strong>Dokumen Identitas</strong> di profil Anda akan berubah menjadi label kuning bertuliskan <strong>Menunggu Verifikasi</strong>. Tim admin Poolapack akan melakukan proses pengecekan (review) keabsahan dokumen Anda.
              </div>
              <ImageGuide :src="verif4" caption="Status pengajuan identitas yang sedang ditinjau oleh admin" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>
                Apabila dokumen Anda disetujui, label status akan berubah menjadi hijau bertuliskan <strong>Terverifikasi</strong>. Selamat! Anda sekarang berhak mendapatkan keuntungan <strong>diskon 1% setiap transaksi pembelian</strong> di platform Poolapack.
              </div>
              <ImageGuide :src="verif5" caption="Status identitas berhasil Terverifikasi" />
            </div>
          </li>

        </ol>
      </div>

    </div>
</template>

<script setup>
import verif1 from '~/assets/imgpooler/verif/1.png'
import verif2 from '~/assets/imgpooler/verif/2.png'
import verif3 from '~/assets/imgpooler/verif/3.png'
import verif4 from '~/assets/imgpooler/verif/4.png'
import verif5 from '~/assets/imgpooler/verif/5.png'
</script>
