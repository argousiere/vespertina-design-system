import type { EntryDoc } from './entry-doc';

const entries = new Map<string, EntryDoc>();

/** 
 * Convert storybook src path to registry key 
 */
const toKey = (src: string) =>
  src
    .replace(/^(\.{1,2}\/)+/, '')
    .replace(/^\//, '');

/**
 * Load and parse all markdown content files and add them to the registry
 */
export const registerEntries = (modules: Record<string, unknown>): void => {
  for (const [path, module] of Object.entries(modules)) {
    const entry = (module as { default: EntryDoc }).default;
    entries.set(toKey(path), entry);
  }
};

/**
 * Retrieve markdown entry by src. Leading folders may be left out, e.g.
 * `content/foo.md` finds `storybook/content/foo.md`.
 */
export const getEntry = (src: string): EntryDoc | undefined => {
  const key = toKey(src);
  const entry = entries.get(key);

  if (entry) {
    return entry;
  }

  for (const [registeredKey, registeredEntry] of entries) {
    if (registeredKey.endsWith(`/${key}`)) {
      return registeredEntry;
    }
  }

  return undefined;
};
