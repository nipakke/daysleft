<template>
  <div class="
        py-8 px-4 rounded-lg
        text-center
        text-shadow-zinc-500 text-shadow-md
        text-white
        text-4xl font-mono
        bg-gradient-to-br
        " :class="[
          props.background
            ? `${props.background}`
            : `from-pink-500 via-purple-500 to-indigo-500`
        ]" :hydrate-after="2000">

    <ClientOnly>
      {{ formatCountdownNumber(props.value) }}
      <template #fallback>
        00
      </template>
    </ClientOnly>
    {{ label }}
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  label: string;
  value: number;
  background?: string;
}>()


function formatCountdownNumber(n: number) {
  return n.toString().padStart(2, "0")
}

</script>

<style scoped></style>