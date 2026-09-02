<template>
  <div>
    <h1 style="margin-bottom: 1rem; font-size: 2.5rem;">Pusat Panduan Pengguna Poolapack</h1>
    <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 2rem;">
      Temukan cara terbaik untuk mulai bertransaksi di Factory Direct Marketplace kami.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
      <!-- Pooler Card -->
      <div style="padding: 2rem; border: 1px solid var(--border-color); border-radius: 8px; background-color: #fafafa;">
        <div style="background-color: var(--primary-color); width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          🛒
        </div>
        <h2 style="margin-bottom: 1rem;">Sebagai Pooler (Pembeli)</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          Panduan lengkap cara mencari bahan, transaksi, hingga manajemen akun.
        </p>
        <NuxtLink to="/pooler/register" style="color: var(--primary-hover); font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
          Mulai Panduan →
        </NuxtLink>
      </div>

      <!-- Packer Card -->
      <div style="padding: 2rem; border: 1px solid var(--border-color); border-radius: 8px; background-color: #fafafa;">
        <div style="background-color: #e5e5e5; width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          🏪
        </div>
        <h2 style="margin-bottom: 1rem;">Sebagai Packer (Penjual)</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          Panduan lengkap cara daftar toko, kelola produk, hingga proses pengiriman.
        </p>
        <NuxtLink to="/packer/setup" style="color: var(--primary-hover); font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
          Mulai Panduan →
        </NuxtLink>
      </div>
    </div>
    
    <h3>Mulai Cepat</h3>
    <div style="margin-top: 1rem; height: 300px; background-color: #333; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; position: relative;">
      <div style="background-color: var(--primary-color); width: 64px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        ▶
      </div>
      <div style="position: absolute; bottom: 1rem; left: 1rem; font-weight: bold;">
        Quick Start Video 2 menit
      </div>
    </div>
  </div>
</template>
