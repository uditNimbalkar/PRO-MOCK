<script setup lang="ts">
interface SocialAuthButtonProps {
  label: string
  icon: string
  accent?: 'primary' | 'secondary' | 'neutral'
  highlight?: string
}

const props = withDefaults(defineProps<SocialAuthButtonProps>(), {
  accent: 'neutral',
  highlight: ''
})
</script>

<template>
  <button
    type="button"
    class="social-auth-button"
    :class="`social-auth-button--${props.accent}`"
  >
    <v-icon :icon="props.icon" size="18" />
    <span>{{ props.label }}</span>
    <span v-if="props.highlight" class="social-auth-button__tag">{{ props.highlight }}</span>
  </button>
</template>
