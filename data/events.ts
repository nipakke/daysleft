import dayjs, { Dayjs } from "dayjs";

export type Ev = {
  name: string;
  emoji: string;
  date: Dayjs;
  description?: string;
  type: "holiday" | "season";
  season?: any;
  skipToNextYear?: false;
  background?: {
    type: "color",
    value: string
  }
}

export type Events = Record<string, Ev>

export const EVENTS = {
  christmas: {
    name: 'Christmas',
    emoji: '🎄',
    date: dayjs().month(11).date(25), // December is month 11
    description: 'How many days until Christmas day. Countdown to Christmas Day with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-green-700 to-red-600'
    }
  },
  'new-year': {
    name: 'New Year',
    emoji: '🎉',
    date: dayjs().month(0).date(1),
    description: 'How many days until New Year\'s day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-yellow-400 to-red-600'
    }
  },
  'independence-day': {
    name: 'Independence Day',
    emoji: '🇺🇸',
    date: dayjs().month(6).date(4),
    description: 'How many days until Indepence day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-700 to-red-600'
    }
  },
  'thanksgiving': {
    name: 'Thanksgiving',
    emoji: '🦃',
    date: dayjs().month(10).date(28),
    description: 'How many days until Thanksgiving. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-orange-500 to-yellow-400'
    }
  },
  'valentines-day': {
    name: 'Valentine\'s Day',
    emoji: '❤️',
    date: dayjs().month(1).date(14),
    description: 'How many days until Valentine\'s Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-pink-500 to-red-600'
    }
  },
  'easter': {
    name: 'Easter',
    emoji: '🐣',
    date: dayjs().month(3).date(21),
    description: 'How many days until Easter. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-yellow-300 to-green-400'
    }
  },
  'halloween': {
    name: 'Halloween',
    emoji: '🎃',
    date: dayjs().month(9).date(31),
    description: 'How many days until Halloween. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-orange-600 to-grey-800'
    }
  },
  'labor-day': {
    name: 'Labor Day',
    emoji: '🛠️',
    date: dayjs().month(8).date(2),
    description: 'How many days until Labor Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-red-600 to-yellow-500'
    }
  },
  'mother-day': {
    name: 'Mother\'s Day',
    emoji: '🌷',
    date: dayjs().month(4).date(11),
    description: 'How many days until Mother\'s Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-pink-300 to-purple-500'
    }
  },
  'father-day': {
    name: 'Father\'s Day',
    emoji: '👔',
    date: dayjs().month(5).date(15),
    description: 'How many days until Father\'s Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-400 to-gray-700'
    }
  },
  'groundhog-day': {
    name: 'Groundhog Day',
    emoji: '🐾',
    date: dayjs().month(1).date(2),
    description: 'How many days until Groundhog Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-gray-500 to-green-600'
    }
  },
  'cinco-de-mayo': {
    name: 'Cinco de Mayo',
    emoji: '🎉',
    date: dayjs().month(4).date(5),
    description: 'How many days until Cinco de Mayo. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-green-600 to-red-500'
    }
  },
  'earth-day': {
    name: 'Earth Day',
    emoji: '🌍',
    date: dayjs().month(3).date(22),
    description: 'How many days until Earth Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-green-400 to-blue-600'
    }
  },
  'veterans-day': {
    name: 'Veterans Day',
    emoji: '🎖️',
    date: dayjs().month(10).date(11),
    description: 'How many days until Veterans Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-900 to-gray-700'
    }
  },
  'columbus-day': {
    name: 'Columbus Day',
    emoji: '🚢',
    date: dayjs().month(9).date(14),
    description: 'How many days until Columbus Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-600 to-red-600'
    }
  },
  'presidents-day': {
    name: 'Presidents\' Day',
    emoji: '🇺🇸',
    date: dayjs().month(1).date(17),
    description: 'How many days until Presidents\' Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-700 to-gray-600'
    }
  },
  'st-patricks-day': {
    name: 'St. Patrick\'s Day',
    emoji: '🍀',
    date: dayjs().month(2).date(17),
    description: 'How many days until St. Patrick\'s Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-green-700 to-yellow-400'
    }
  },
  'martin-luther-king-day': {
    name: 'Martin Luther King Jr. Day',
    emoji: '✊🏿',
    date: dayjs().month(0).date(20),
    description: 'How many days until Martin Luther King Jr. Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-purple-700 to-blue-900'
    }
  },
  'césar-chávez-day': {
    name: 'César Chávez Day',
    emoji: '🌹',
    date: dayjs().month(2).date(31),
    description: 'How many days until César Chávez Day. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-red-700 to-green-600'
    }
  },
  'black-friday': {
    name: 'Black Friday',
    emoji: '🛍️',
    date: dayjs().month(10).startOf('month').add(4, 'week').day(5), // 4th Friday of November
    description: 'How many days until Black Friday. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-black to-gray-700'
    }
  },
  'hanukkah': {
    name: 'Hanukkah',
    emoji: '🕎',
    date: dayjs().month(11).date(25),
    description: 'How many days until Hanukkah. Countdown showing with days, hours, minutes and seconds.',
    type: 'holiday',
    background: {
      type: 'color',
      value: 'from-blue-500 to-indigo-700'
    }
  },
  spring: {
    name: 'Spring',
    emoji: '🌸',
    date: dayjs().month(2).date(20),
    type: "season",
    description: 'How many days until Spring begins. Countdown with days, hours, minutes and seconds.',
    season: 'spring',
    background: {
      type: 'color',
      value: 'from-green-300 to-pink-200'
    }
  },
  summer: {
    name: 'Summer',
    emoji: '☀️',
    date: dayjs().month(5).date(21),
    type: "season",
    description: 'How many days until Summer begins. Countdown with days, hours, minutes and seconds.',
    season: 'summer',
    background: {
      type: 'color',
      value: 'from-yellow-400 to-orange-300'
    }
  },
  autumn: {
    name: 'Autumn',
    emoji: '🍂',
    date: dayjs().month(8).date(23),
    type: "season",
    description: 'How many days until Autumn begins. Countdown with days, hours, minutes and seconds.',
    season: 'autumn',
    background: {
      type: 'color',
      value: 'from-orange-400 to-red-300'
    }
  },
  winter: {
    name: 'Winter',
    emoji: '❄️',
    type: "season",
    date: dayjs().month(11).date(21),
    description: 'How many days until Winter begins. Countdown with days, hours, minutes and seconds.',
    season: 'winter',
    background: {
      type: 'color',
      value: 'from-blue-300 to-white'
    }
  }
} as const satisfies Events

export const EVENTS_MAP = new Map(Object.entries(EVENTS))
