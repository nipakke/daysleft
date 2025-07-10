<template>
  <div>
    <UContainer class="pt-20">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter class="mt-4" />
    </UContainer>
  </div>
</template>


<script setup lang="ts">
</script>
