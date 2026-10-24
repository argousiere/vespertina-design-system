import type { NavItemModel } from '@core/models/NavItemModel';

export const navItemRecord = {
  home: { label: 'Home', url: '#' },
  art: { label: 'Art', url: '#art' },
  poetry: { label: 'Poetry', url: '#poetry' },
  about: { label: 'About', url: '#about' },
} satisfies Record<string, NavItemModel>;

export const navItemUrlRecord = Object.entries(navItemRecord)
  .reduce((acc, [slug, navItem]) => {
    acc[slug] = navItem.url;
    return acc;
  }, {} as Record<string, NavItemModel['url']>);

export const navItems = Object.values(navItemRecord);
