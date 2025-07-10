<template>
  <UApp>
    <NuxtLayout>
      <UMain>
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>


<script lang="ts" setup>
import type { NavigationMenuItem } from '#ui/types'

const items = reactive<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      to: "/"
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/composables/define-shortcuts'
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/composables/use-overlay'
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/composables/use-toast'
        }
      ]
    }
  ],

])


useHead({
  titleTemplate(t) {
    return t ? `${t} | Days Left` : "Days left"
  }
})



defineOgImageComponent('Frame', {
  theme: '#882222',
  colorMode: 'dark',
})
</script>