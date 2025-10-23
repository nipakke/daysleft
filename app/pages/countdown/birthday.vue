<template>
  <UPage>
    <UContainer class="mx-auto space-y-4 pt-12">


      <div class="text-4xl font-bold text-center">
        🎂 Countdown to birthday
      </div>

      <UCard variant="subtle" class="max-w-sm mx-auto">
        <div class="space-y-2">
          <div>
            Enter your birthday:
          </div>
          <div class="flex gap-1">
            <UFieldGroup class="w-full">
              <USelect :items="months" v-model="selectedMonth" label-key="name" value-key="value"
                class="min-w-30 w-full" placeholder="Month" />
              <UInputNumber class="max-w-32" :min="1" :max="maxDaysInSelectedMonth" placeholder="Day"
                v-model="selectedDay" />
            </UFieldGroup>
          </div>
        </div>
      </UCard>

      <ClientOnly>
        <div class="text-center">
          <div v-if="countdown" class="text-3xl font-mono">
            {{ countdown.days }} days
            {{ countdown.hours.toString().padStart(2, '0') }} hours
            {{ countdown.minutes.toString().padStart(2, '0') }} minutes
            {{ countdown.seconds.toString().padStart(2, '0') }} seconds
          </div>

          <div v-if="fullBirthday" class="mt-4">
            Next birthday: {{ fullBirthday.format("dddd, MMMM D, YYYY") }}
          </div>
        </div>
      </ClientOnly>

    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
import { computedWithControl, useIntervalFn } from '@vueuse/core'
import { dayjs } from "~/utils/dayjs"

const months = [
  { name: "January", days: 31, value: 1 },
  { name: "February", days: 29, value: 2 },
  { name: "March", days: 31, value: 3 },
  { name: "April", days: 30, value: 4 },
  { name: "May", days: 31, value: 5 },
  { name: "June", days: 30, value: 6 },
  { name: "July", days: 31, value: 7 },
  { name: "August", days: 31, value: 8 },
  { name: "September", days: 30, value: 9 },
  { name: "October", days: 31, value: 10 },
  { name: "November", days: 30, value: 11 },
  { name: "December", days: 31, value: 12 }
]

const selectedMonth = ref<number | undefined>(undefined)
const selectedDay = ref<number | undefined>(undefined)

const maxDaysInSelectedMonth = computed(() => months.at((selectedMonth.value ?? 1) - 1)?.days ?? 31)
watch(maxDaysInSelectedMonth, v => {
  if (selectedDay.value) {
    if (v < selectedDay.value) selectedDay.value = v;
  }
})

const now = ref(dayjs())

const fullBirthday = computed(() => {
  if (!selectedMonth.value || !selectedDay.value) return;

  const maxDays = maxDaysInSelectedMonth.value;
  if (selectedDay.value > maxDays) return;

  const currentYear = now.value.year();
  let birthday = dayjs().year(currentYear)
    .month(selectedMonth.value - 1)
    .date(selectedDay.value).startOf('day');

  if (birthday.isBefore(now.value)) {
    birthday = birthday.add(1, 'year');
  }

  return birthday;
})

watch(fullBirthday, () => countdown.trigger())


const countdown = computedWithControl(() => now.value.toString(), () => {
  if (!fullBirthday.value) return;
  const diff = fullBirthday.value.diff(now.value)
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




useHead({
  title: "Birthday",
  meta: [
    {
      name: 'description',
      content: 'Calculate the days, hours, and minutes left until your next birthday with this simple countdown tool.',
    },
  ]
})



</script>

<style scoped></style>