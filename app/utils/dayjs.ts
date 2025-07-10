import dayjs from "dayjs"


/* Locales */
import 'dayjs/locale/hu'


import duration from "dayjs/plugin/duration"

import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(duration)
dayjs.extend(utc)
dayjs.extend(timezone)

// dayjs.locale('hu')
export {
  dayjs
}