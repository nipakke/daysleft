<template>
  <NuxtLink :to="`/countdown/${eventId}`">
    <div class="
        px-6 py-8
        rounded-lg
        bg-gradient-to-br
        transition
        hover:scale-105
        space-y-2
        " :class="[
          event.background?.value
            ? `${event.background.value}`
            : `from-pink-500 via-purple-500 to-indigo-500`
        ]">
      <div class="text-4xl text-center">
        {{ event.emoji }}
      </div>
      <div class="text-xl font-bold text-center text-white text-shadow-zinc-500 text-shadow-md">
        {{ event.name }}
      </div>

      <div class="text-center text-white text-shadow-zinc-500 text-shadow-md">
        {{ daysLeft }} days
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Ev } from '~~/data/events';


const { event } = defineProps<{
  eventId: string | number;
  event: Ev
}>()

let eventDate = event.date

if (event.date.isBefore(dayjs())) {
  eventDate = eventDate.add(1, "y")
}

const diff = eventDate.diff(dayjs())
const daysLeft = Math.floor(dayjs.duration(diff).asDays())





</script>

<style scoped></style>