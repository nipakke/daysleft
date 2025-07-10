import { EVENTS, EVENTS_MAP, type Ev } from "~~/data/events";



const eventIds = Object.keys(EVENTS).map(f => f.toLowerCase())


export function getEvent(id: MaybeRefOrGetter<string>): Ev {
  const evId = toValue(id)
  const ev = EVENTS_MAP.get(evId)

  if (!ev) {
    throw createError("Event not found")
  }

  return ev
}