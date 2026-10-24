import type { EntryModel } from '@core/models/EntryModel';
import { tagRecord } from './tags';

export const entryRecord = {
  analogClocksAndClockTowers: {
    id: 'analogClocksAndClockTowers',
    title: 'Analog Clocks and Clock Towers',
    date: '2016-09-03',
    url: '#',
    description: 'Musings on these wonderful pieces of machinery',
  },
  theBubblingBrookAtBerthelot: {
    id: 'theBubblingBrookAtBerthelot',
    title: 'The Bubbling Brook at Berthelot',
    date: '2016-08-11',
    url: '#',
    description: 'An ode to the little park beside my office',
  },
  myFirstWinter: {
    id: 'myFirstWinter',
    title: 'My First Winter',
    date: '2016-03-06',
    url: '#',
    description: 'Notes on stinging ears and icy fingers from a tropical girl.',
  },
  theTranscontinentalYear: {
    id: 'theTranscontinentalYear',
    title: 'The Transcontinental Year',
    date: '2015-12-19',
    url: '#',
    description:
      'Reminiscing on the administrative hoops I jumped through to get to France',
  },
  sonnetIII: {
    id: 'sonnetIII',
    title: 'Sonnet III: The Ghost of Whimsical Fascination',
    date: '2007-02-01',
    url: '#',
    description: 'A tribute to all the unknown writers in the past millennia',
    tags: [tagRecord.poetry, tagRecord.sonnet],
  },
  longTitle1: {
    id: 'long-title-1',
    title: 'In between the vast spaces have planets and moons explode into life only to disintegrate into nothingness.',
    date: '2015-12-03',
    url: '#',
    description: 'Reminiscing my leap into the expat life.',
  },
  longTitle2: {
    id: 'long-title-2',
    title: 'Only memories, remnants.. possibly even mere musings such as this, serve as proof of their existence.',
    date: '2015-12-03',
    url: '#',
    description: 'Reminiscing my leap into the expat life.',
  },
} satisfies Record<string, EntryModel>;

export const entries = Object.values(entryRecord);
