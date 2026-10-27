import type { TagModel } from '@core/models/TagModel';

export const tagRecord = {
  art: {
    slug: 'art',
    label: 'Art',
    description:
      "Here you'll mostly find digital art depicting space stuff, a few travel sketches, and the occasional botanical illustration.",
  },
  digitalArt: { slug: 'digital-art', label: 'Digital Art' },
  expat: { slug: 'expat' },
  france: { slug: 'france' },
  travel: { slug: 'travel' },
  culture: { slug: 'culture' },
  technology: { slug: 'technology' },
  design: { slug: 'design' },
  musings: { slug: 'musings', url: '#' },
  poetry: { slug: 'poetry' },
  sonnet: { slug: 'sonnet' },
  razorback: {
    slug: 'razorback',
    description:
      "You can't take the Razorback! She is gone and gone and gone!",
  },
  long: {
    slug: 'a-very-long-tag-name-that-keeps-going-well-past-the-maximum-width',
    description: 'Truncated tags show their full label in a tooltip.',
  },
} satisfies Record<TagModel['slug'], TagModel>;

export const tags = Object.values(tagRecord);
