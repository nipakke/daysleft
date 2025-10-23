<template>
  <UPage>
    <!-- <UPageHero title="🎯 Choose a countdown" /> -->

    <UPageSection title="Holidays">

      <template #features>
        <EventFeatureCard v-for="(ev, id) in holidays" :event="ev" :event-id="id" />
      </template>
    </UPageSection>

    <UPageSection title="Seasons">
      <template #features>
        <EventFeatureCard v-for="(ev, id) in seasons" :event="ev" :event-id="id" />
      </template>
    </UPageSection>

  </UPage>
</template>

<script setup lang="ts">
import { EVENTS } from "~~/data/events"


const eventsEntries = Object.entries(EVENTS)



const holidays = Object.fromEntries(
  eventsEntries
    .filter(([_, x]) => x.type === "holiday")
    .sort(orderEventById)
)

const seasons = Object.fromEntries(
  eventsEntries
    .filter(([_, x]) => x.type === "season")
    .sort(orderEventById)
)


useHead({
  title: "Home",
  meta: [
    {
      name: 'description',
      content: 'Countdown to upcoming holidays and seasons. Stay updated with the days left until your favorite events with this simple and beautiful tracker.',
    },
  ]
})


</script>

<style scoped></style>