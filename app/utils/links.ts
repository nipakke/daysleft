import type { NavigationMenuItem } from '#ui/types'
import { EVENTS, EVENTS_MAP, type Ev } from '~~/data/events'




type Entry = [string, Ev]


function mapEventToLink(entry: Entry): NavigationMenuItem {
  const [id, ev] = entry
  return {
    label: `${ev.emoji} ${ev.name}`,
    to: `/countdown/${id}`
  }
}


export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Holidays',
    icon: 'i-lucide-folder',
    children: Object.entries(EVENTS)
      .filter(([_, x]) => x.type === "holiday")
      .sort(orderEventById)
      .map(mapEventToLink)
  },
  {
    label: 'Seasons',
    icon: 'i-lucide-folder',
    children: Object.entries(EVENTS)
      .filter(([_, x]) => x.type === "season")
      .map(mapEventToLink)
  },
  {
    label: "Birthday",
    icon: "i-lucide-cake",
    to: "/countdown/birthday"
  }
]