<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/nipakke/daysleft"
        target="_blank" aria-label="GitHub" />
    </template>
  </UFooter>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from "#ui/types"

const items: NavigationMenuItem[] = []
</script>