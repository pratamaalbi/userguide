<template>
  <div :class="['qa-alert', type]">
    <div class="qa-alert-icon">
      <AlertTriangleIcon v-if="type === 'bug'" color="var(--alert-error-border)" :size="20" />
      <WrenchIcon v-else-if="type === 'dev'" color="var(--alert-warning-border)" :size="20" />
      <InfoIcon v-else color="var(--alert-info-border)" :size="20" />
    </div>
    <div class="qa-alert-content">
      <h4>{{ titlePrefix }}</h4>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { AlertTriangle as AlertTriangleIcon, Info as InfoIcon, Wrench as WrenchIcon } from 'lucide-vue-next'

const props = defineProps({
  type: {
    type: String,
    default: 'bug'
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: ''
  }
})

const titlePrefix = computed(() => {
  if (props.id) return `[${props.id}] ${props.title}`
  return props.title
})
</script>
