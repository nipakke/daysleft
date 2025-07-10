import { sampleSize } from "es-toolkit";
import { EVENTS, type Ev } from "~~/data/events";

type Entry = [string, Ev]

export function getRandomEvents(size: number = 4, filterOut?: Array<string>): Record<string, Ev> {
  const filtered = Object.entries(EVENTS)
    .filter(([id, x]) => !filterOut?.includes(id))

  if (size > filtered.length) {
    return {}
  }

  return Object.fromEntries(
    sampleSize(
      filtered,
      size
    )
  )
}


export function orderEventById(a: Entry, b: Entry): number {
  const [aId] = a
  const [bId] = b

  return aId.localeCompare(bId)
}