<template>
  <UPage class="">
    <UContainer class="mx-auto space-y-4 pt-12">

      <h1 class="text-5xl font-bold">
        {{ event.emoji }} How many days until {{ event.name }}?
      </h1>


      <h2 class="text-3xl">
        Countdown to {{ event.name }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <CountdownCard v-for="[key, x] in Object.entries(countdown)" :label="key" :value="x"
          :background="event.background?.value" />
      </div>

      <div class="mt-6 text-sm text-center">
        {{ eventDate.format("dddd, MMMM D, YYYY") }}

        ({{ dayjs.tz.guess() }})
      </div>

      <div class="mt-60">
        <ClientOnly>
          <UCard variant="soft" v-if="Object.keys(randomEvents).length">
            <div class="space-y-6">
              <div class="text-2xl font-bold text-center">
                Other events:
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <NuxtLink v-for="(x, id) in randomEvents" :to="`/countdown/${id}`">
                  <UCard class="rounded-xl p-4 transition block text-center h-full
                  dark:hover:bg-neutral-800
                  hover:bg-neutral-200
                  hover:scale-103
                  ">
                    <div class="text-4xl mb-2">{{ x.emoji }}</div>
                    <div class="text-lg font-semibold">{{ x.name }}</div>
                  </UCard>
                </NuxtLink>
              </div>
            </div>
          </UCard>

          <template #fallback>
            <USkeleton class="w-full h-50" />
          </template>
        </ClientOnly>
      </div>

    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
import { computedWithControl, useIntervalFn } from "@vueuse/core"
import { getEvent } from '~/composables/events'
import { dayjs } from "~/utils/dayjs"

const route = useRoute()
const evId = computed(() => route.params.event as string)

const event = getEvent(evId)

const now = ref(dayjs())


let eventDate = event.date

//következő év, ha már elmúlt a dátum
if (dayjs(eventDate).isBefore(now.value) && event.skipToNextYear !== false) {
  eventDate = eventDate.add(1, "year")
}


const countdown = computedWithControl(() => now.value.toString(), () => {
  const diff = eventDate.diff(now.value)
  const duration = dayjs.duration(diff)

  if (import.meta.server) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  return {
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds()
  }
})

useIntervalFn(() => now.value = dayjs(), 1000)

const randomEvents = getRandomEvents(4, [evId.value])

useHead({
  title: `${event.name ? event.name + ' Countdown' : 'Event Countdown'}`,
  meta: [
    {
      name: 'description',
      content: event.description ?? `How many days until ${event.name || 'event'}. | Countdown timer for ${event.name || 'event'}.`
    },
  ]
})
</script>

<style scoped></style>