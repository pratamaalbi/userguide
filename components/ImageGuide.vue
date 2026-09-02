<template>
  <div class="image-guide-container">
    <div 
      class="image-guide-wrapper"
      @click="isZoomed = true"
    >
      <img 
        :src="src" 
        :alt="alt || caption || 'Panduan'" 
        class="image-guide-img"
        loading="lazy"
      />
      <div class="image-guide-overlay">
        <ZoomInIcon :size="24" color="white" />
      </div>
    </div>
    <p v-if="caption" class="image-guide-caption">{{ caption }}</p>
  </div>

  <div v-if="isZoomed" class="image-guide-modal" @click="isZoomed = false">
    <button class="image-guide-close" @click="isZoomed = false">
      <XIcon :size="24" />
    </button>
    <img :src="src" :alt="alt || caption || 'Zoomed Panduan'" class="image-guide-zoomed" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { X as XIcon, ZoomIn as ZoomInIcon } from 'lucide-vue-next'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})

const isZoomed = ref(false)
</script>
