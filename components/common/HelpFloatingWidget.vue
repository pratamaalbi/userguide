<template>
  <div class="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 font-sans" v-click-outside="closeWidget">

    <!-- Help Dialog / Slide-up Popover Card -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="fixed inset-x-4 bottom-20 sm:inset-auto sm:absolute sm:bottom-16 sm:right-0 w-auto sm:w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.14)] border border-gray-200/90 overflow-hidden z-50"
      >
        <!-- Modal Header (Clean & Branded) -->
        <div class="bg-gradient-to-r from-amber-50 via-[#FFFDF5] to-white px-5 py-4.5 sm:p-5 border-b border-amber-100 flex items-center justify-between relative">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-md bg-[#F8C031] flex items-center justify-center text-neutral-900 shadow-sm shrink-0">
              <Icon icon="ph:headset-bold" class="w-5 h-5" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-extrabold text-sm sm:text-base text-neutral-900 leading-tight">Customer Care</h3>
                <span class="text-[10px] font-bold px-1.5 py-0.2 bg-amber-200/70 text-amber-900 rounded-md">Official</span>
              </div>
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span class="text-[11px] font-medium text-emerald-700">Online • Siap Membantu</span>
              </div>
            </div>
          </div>

          <button
            @click="isOpen = false"
            class="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-800 transition-colors duration-100 focus:outline-none"
            aria-label="Tutup"
          >
            <Icon icon="ph:x-bold" class="w-3.5 h-3.5" />
          </button>
        </div>

        <!-- Modal Body & 3 Interactive Access Channels -->
        <div class="p-4 sm:p-5 space-y-2.5 max-h-[calc(80vh-120px)] overflow-y-auto">
          <p class="text-xs text-neutral-500 font-medium mb-1">
            Pilih saluran bantuan resmi untuk konsultasi atau kendala:
          </p>

          <!-- 1. WhatsApp Channel -->
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-lg border border-gray-200/80 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors duration-150 group bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
          >
            <div class="w-10 h-10 rounded-lg bg-emerald-100/80 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0">
              <Icon icon="ph:whatsapp-logo-bold" class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors truncate">
                Chat via WhatsApp
              </h4>
              <p class="text-[11px] text-neutral-500 truncate">Respon cepat dalam hitungan menit</p>
            </div>
            <Icon icon="ph:caret-right-bold" class="w-4 h-4 text-neutral-300 group-hover:text-emerald-500 transition-colors shrink-0" />
          </a>

          <!-- 2. Email Support -->
          <a
            href="mailto:info@poolapack.com"
            class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-lg border border-gray-200/80 hover:border-amber-300 hover:bg-amber-50/50 transition-colors duration-150 group bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
          >
            <div class="w-10 h-10 rounded-lg bg-amber-100/80 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
              <Icon icon="ph:envelope-simple-bold" class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-amber-800 transition-colors truncate">
                Email Pengaduan
              </h4>
              <p class="text-[11px] text-neutral-500 truncate">info@poolapack.com</p>
            </div>
            <Icon icon="ph:caret-right-bold" class="w-4 h-4 text-neutral-300 group-hover:text-amber-600 transition-colors shrink-0" />
          </a>

          <!-- 3. Marketplace Link -->
          <a
            href="https://liva.poolapack.id/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-lg border border-gray-200/80 hover:border-amber-200 hover:bg-amber-50/30 transition-colors duration-150 group bg-white shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
          >
            <div class="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200/60 flex items-center justify-center text-neutral-700 shrink-0">
              <Icon icon="ph:storefront-bold" class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-amber-800 transition-colors truncate">
                Marketplace Liva Poolapack
              </h4>
              <p class="text-[11px] text-neutral-500 truncate">liva.poolapack.id</p>
            </div>
            <Icon icon="ph:caret-right-bold" class="w-4 h-4 text-neutral-300 group-hover:text-amber-600 transition-colors shrink-0" />
          </a>

          <!-- Footer Hours -->
          <div class="pt-3 mt-1 border-t border-gray-100 text-center">
            <p class="text-[11px] text-neutral-400">
              Jam Operasional: <strong class="text-neutral-600">Senin – Jumat (08:00 – 17:00 WIB)</strong>
            </p>
          </div>
        </div>
      </div>
    </transition>

    <!-- Main Floating Action Button (FAB) (Poolapack style: rounded-lg) -->
    <button
      @click="isOpen = !isOpen"
      class="group flex items-center gap-2.5 px-4.5 py-3 sm:px-5 sm:py-3.5 bg-[#F8C031] hover:bg-[#F5B400] text-neutral-900 font-extrabold rounded-lg shadow-[0_4px_16px_rgba(248,192,49,0.25)] hover:shadow-[0_6px_20px_rgba(248,192,49,0.35)] transition-colors duration-100 focus:outline-none border border-amber-300/80 cursor-pointer select-none"
      aria-label="Bantuan Customer Care"
    >
      <div class="w-6 h-6 rounded-md bg-white/90 flex items-center justify-center shadow-sm text-sm shrink-0">
        <Icon icon="ph:chat-circle-dots-bold" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" />
      </div>
      <span class="text-xs sm:text-sm tracking-tight hidden sm:inline">Butuh Bantuan?</span>
      <span class="text-xs sm:text-sm tracking-tight sm:hidden">Bantuan</span>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const whatsappUrl = 'https://api.whatsapp.com/send/?phone=628112380989&text=Halo+Poolapack%2C+saya+ingin+bertanya+mengenai+&type=phone_number&app_absent=0'

const closeWidget = () => {
  isOpen.value = false
}

// Custom click outside directive
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>
