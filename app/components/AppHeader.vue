<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu :items="links" variant="link" color="neutral" content-orientation="vertical"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        viewport: 'mt-2'
      }">
      <!-- 
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
      -->
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from '#ui/types'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>
