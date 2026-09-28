<template>
  <div class="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 font-sans" v-click-outside="closeWidget">

    <!-- Help Dialog Popover Card -->
    <div
      v-if="isOpen"
      class="fixed inset-x-4 bottom-20 sm:inset-auto sm:absolute sm:bottom-16 sm:right-0 w-auto sm:w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-50"
    >
      <!-- Modal Header (Clean & Branded) -->
      <div class="bg-amber-50/70 px-5 py-4.5 sm:p-5 border-b border-amber-100 flex items-center justify-between relative">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-md bg-[#F8C031] flex items-center justify-center text-neutral-900 shadow-sm shrink-0">
            <Icon icon="ph:headset-bold" class="w-5 h-5" />
          </div>
          <div>
            <h3 class="font-extrabold text-sm sm:text-base text-neutral-900 leading-tight">Customer Care</h3>
            <p class="text-[11px] font-medium text-neutral-500 mt-0.5">
              Siap Membantu
            </p>
          </div>
        </div>

        <button
          @click="isOpen = false"
          class="w-7 h-7 rounded-md bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-800 focus:outline-none"
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
          class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 cursor-pointer"
        >
          <div class="w-10 h-10 rounded-lg bg-emerald-100/80 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0">
            <Icon icon="ph:whatsapp-logo-bold" class="w-5 h-5" />
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-xs sm:text-sm font-bold text-neutral-900 truncate">
              Chat via WhatsApp
            </h4>
            <p class="text-[11px] text-neutral-500 truncate">Respon cepat dalam hitungan menit</p>
          </div>
          <Icon icon="ph:caret-right-bold" class="w-4 h-4 text-neutral-400 shrink-0" />
        </a>

        <!-- 2. Email Support -->
        <a
          href="mailto:support@poolapack.com"
          class="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 cursor-pointer"
        >
          <div class="w-10 h-10 rounded-lg bg-amber-100/80 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0">
            <Icon icon="ph:envelope-simple-bold" class="w-5 h-5" />
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-xs sm:text-sm font-bold text-neutral-900 truncate">
              Email Pengaduan
            </h4>
            <p class="text-[11px] text-neutral-500 truncate">support@poolapack.com</p>
          </div>
          <Icon icon="ph:caret-right-bold" class="w-4 h-4 text-neutral-400 shrink-0" />
        </a>


        <!-- Footer Hours -->
        <div class="pt-3 mt-1 border-t border-gray-100 text-center">
          <p class="text-[11px] text-neutral-400">
            Jam Operasional: <strong class="text-neutral-600">Senin – Jumat (08:00 – 17:00 WIB)</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- Main Floating Action Button (FAB) -->
    <button
      @click="isOpen = !isOpen"
      class="group flex items-center gap-2.5 px-4.5 py-3 sm:px-5 sm:py-3.5 bg-[#F8C031] hover:bg-[#F5B400] text-neutral-900 font-extrabold rounded-xl shadow-md hover:shadow-lg focus:outline-none border border-amber-300 cursor-pointer select-none transition-all"
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
