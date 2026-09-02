<template>
<div>
      <div :style="{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }">
        <NuxtLink to="/">Beranda</NuxtLink> {'>'} <NuxtLink to="/packer/setup">Packer Guide</NuxtLink> {'>'} Manajemen Produk
      </div>
      
      <h1 :style="{ marginBottom: '1rem', fontSize: '2.5rem' }">Manajemen Produk</h1>
      <p :style="{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }">
        Panduan lengkap untuk mengelola produk Anda sebagai Packer di Poolapack, mulai dari menambahkan produk baru hingga mengatur status ketersediaan.
      </p>

      <h3 :style="{ marginTop: '2rem', marginBottom: '1rem' }">Menambah Produk Baru</h3>
      <p :style="{ marginBottom: '1.5rem' }">
        Untuk mulai berjualan, Anda perlu menambahkan produk ke etalase Anda. Pastikan informasi yang diberikan akurat dan menarik.
      </p>

      <ul :style="{ paddingLeft: '1.5rem', marginBottom: '2rem' }">
        <li :style="{ marginBottom: '0.5rem' }"><strong>Informasi Dasar:</strong> Isi nama produk dan deskripsi lengkap. Gunakan kata kunci yang relevan.</li>
        <li :style="{ marginBottom: '0.5rem' }"><strong>Media Produk (Foto & 3D):</strong> Unggah foto kualitas tinggi. Kami merekomendasikan minimal 800x800px. Jika ada, bisa unggah model 3D (Max 5MB).</li>
        <li :style="{ marginBottom: '0.5rem' }"><strong>Varian & Harga:</strong> Atur harga, stok, dan SKU untuk masing-masing varian ukuran/warna.</li>
      </ul>

      <h3 :style="{ marginTop: '2rem', marginBottom: '1rem' }">Mengatur Status Produk</h3>
      <p :style="{ marginBottom: '1rem' }">
        Gunakan <em>toggle status</em> untuk mengatur apakah produk terlihat oleh Pooler (Aktif) atau disembunyikan sementara (Nonaktif).
      </p>

      <div :style="{ padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }">
        <div>
          <h4 :style="{ margin: 0 }">Status Produk: Aktif</h4>
          <p :style="{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }">Produk terlihat di etalase dan dapat dibeli.</p>
        </div>
        <div :style="{ width: '48px', height: '24px', backgroundColor: '#e5e5e5', borderRadius: '12px', position: 'relative' }">
          <div :style="{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px' }"></div>
        </div>
      </div>

      {/* QA Integration from Testing Report */}
      <QAAlert type="bug" id="BUG-008" title="Gagal Mengubah Status Produk (Error 401)">
        Jika Anda mencoba mengaktifkan/menonaktifkan produk namun muncul notifikasi <strong>'Terjadi kesalahan'</strong> (Error 401 Unauthorized), ini disebabkan karena *session login* Anda telah kadaluarsa di sistem. Silakan <strong>logout dan login kembali</strong> ke akun Packer Anda.
      </QAAlert>

      <QAAlert type="dev" id="DEV-005" title="Fitur Mengubah Status Aktif dalam Pengembangan">
        Saat ini beberapa fungsi terkait pengelolaan daftar produk di *Dashboard* masih dalam tahap stabilisasi dan pengembangan, sehingga mungkin mengalami penundaan respons.
      </QAAlert>

    </div>
</template>

<script setup>
</script>
