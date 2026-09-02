<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> &gt; <NuxtLink to="/pooler/register">Pooler Guide</NuxtLink> &gt; Registrasi &amp; Login
      </div>
      
      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Panduan Lengkap Pooler</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Selamat datang di portal panduan resmi untuk pembeli (Pooler) di ekosistem Poolapack. Ikuti langkah-langkah di bawah ini untuk memulai perjalanan logistik B2B Anda dengan efisien.
      </p>

      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }">
        <div :style="{ backgroundColor: 'var(--bg-active)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-hover)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </div>
        <h2 :style="{ margin: 0 }">Registrasi &amp; Login</h2>
      </div>

      <h3 :style="{ marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.5rem' }">Langkah-Langkah Registrasi</h3>
      
      <div :style="{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '12px', backgroundColor: '#fafafa', marginBottom: '2.5rem' }">
        <ol :style="{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }">

          <li>
            <div class="step-item-layout">
              <div>Buka halaman utama Poolapack, lalu klik tombol <strong>"Masuk/Daftar"</strong> yang berada di pojok kanan atas halaman.</div>
              <ImageGuide :src="reg1" caption="Klik tombol 'Masuk/Daftar' di pojok kanan atas" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>Akan muncul popup <strong>"Masuk/Daftar Sekarang!"</strong>. Masukkan <strong>Email</strong> atau <strong>Nomor WhatsApp</strong> yang belum pernah terdaftar, lalu klik <strong>Selanjutnya</strong>.<br/><br/><span :style="{ color: 'var(--text-muted)', fontSize: '0.9rem' }">Anda juga dapat mendaftar menggunakan akun <strong>Google</strong> sebagai alternatif.</span></div>
              <ImageGuide :src="reg2" caption="Popup Masuk/Daftar — input Email atau WhatsApp" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>Jika email belum terdaftar, akan muncul konfirmasi <strong>"Email Belum Terdaftar — Lanjut mendaftar menggunakan [email Anda]?"</strong>. Klik <strong>Lanjutkan</strong> untuk melanjutkan pendaftaran, atau <strong>Kembali</strong> jika ingin menggunakan email lain.</div>
              <ImageGuide :src="reg3" caption="Konfirmasi email belum terdaftar — Lanjutkan atau Kembali" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>Periksa <em>inbox</em> atau folder <em>spam</em> email Anda untuk mendapatkan <strong>Kode OTP</strong> (6 digit). Masukkan kode tersebut ke dalam form verifikasi yang muncul.<br/><br/><span :style="{ color: 'var(--text-muted)', fontSize: '0.9rem' }">* Jika email salah, klik link <strong>"Alamat Email Salah?"</strong> untuk kembali ke halaman pengisian email.</span></div>
              <ImageGuide :src="reg4" caption="Masukkan Kode OTP yang dikirim ke email Anda" />
            </div>
          </li>

          <li>
            <div class="step-item-layout">
              <div>Lengkapi <strong>Data Diri</strong> Anda pada form <strong>"Lengkapi Data Anda Sekarang"</strong>:<br/>
                • <strong>Nama Lengkap</strong><br/>
                • <strong>Nomor WhatsApp</strong> (opsional)<br/>
                • <strong>Password</strong> (minimal 8 karakter, huruf kapital &amp; kecil, mengandung angka)<br/><br/>
                Centang persetujuan <strong>Syarat dan Ketentuan</strong> serta <strong>Kebijakan Privasi</strong>, lalu klik <strong>Lanjutkan</strong>.
              </div>
              <ImageGuide :src="reg5" caption="Form pengisian data diri dan password" />
            </div>
          </li>

          <li>
            <div>
              <strong>Selesai!</strong> Anda akan otomatis <em>login</em> masuk ke dalam sistem jika pendaftaran berhasil (ditandai dengan munculnya profil Anda di pojok kanan atas halaman).
            </div>
          </li>

        </ol>
      </div>

      <QAAlert type="info" title="Catatan Penting">
        Proses verifikasi manual oleh tim admin membutuhkan waktu maksimal 1x24 jam kerja sebelum Anda dapat membuat pesanan pertama.
      </QAAlert>

      <QAAlert type="bug" id="BUG-005" title="Login Google Error (staging only)">
        Jika Anda mengakses <em>environment</em> <code>liva.poolapack.id</code> dan mengalami kendala <strong>Access blocked: Authorization Error</strong> saat menggunakan Google Oauth, harap gunakan metode login Email &amp; Password standar sementara waktu.
      </QAAlert>

      <QAAlert type="bug" id="BUG-002" title="Kendala Bahasa Tetap Indonesia">
        Saat ini pengaturan default bahasa sistem terkunci di Bahasa Indonesia untuk seluruh Pooler regional. Opsi penggantian ke bahasa Inggris (English) mungkin tidak merespons perubahan secara instan pada antarmuka.
      </QAAlert>

    </div>
</template>

<script setup>
import reg1 from '~/assets/imgpooler/registrasi/1regE.png'
import reg2 from '~/assets/imgpooler/registrasi/2.png'
import reg3 from '~/assets/imgpooler/registrasi/3.png'
import reg4 from '~/assets/imgpooler/registrasi/4.png'
import reg5 from '~/assets/imgpooler/registrasi/5.png'
</script>
