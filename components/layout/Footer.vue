<template>
  <footer class="w-full bg-[#F8F8F8] border-t border-neutral-200/80 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between">
        <!-- Left: Brand & Copyright -->
        <div class="space-y-4">
          <NuxtLink to="/" class="flex items-center group inline-flex" aria-label="Poolapack Care">
            <img
              src="/icons/logo-care.svg"
              alt="Poolapack Care"
              class="h-7 sm:h-8 w-auto object-contain"
            />
          </NuxtLink>
          <p class="text-xs sm:text-sm text-neutral-500 font-normal">
            &copy; PT Nan Darma Kanigara © 2026 | seluruh hak dilindungi
          </p>
        </div>

        <!-- Right: Layanan Pengaduan & Alamat -->
        <div class="space-y-2 md:text-right">
          <h4 class="text-sm sm:text-base font-bold text-neutral-900">
            Layanan Pengaduan
          </h4>
          <div class="space-y-1 text-xs sm:text-sm text-neutral-600">
            <p>
              Email:
              <a href="mailto:info@poolapack.com" class="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
                info@poolapack.com
              </a>
            </p>
            <p class="text-neutral-600 leading-relaxed md:ml-auto max-w-md">
              Alamat: Jl Batununggal Indah Raya No. 369, Batununggal, Kec. Batununggal, Kota Bandung, Jawa Barat, 40266
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer matching Poolapack Care layout
</script>


