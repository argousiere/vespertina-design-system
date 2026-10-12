declare module '*.md' {
  import type { EntryDoc } from './entry-doc';

  const entry: EntryDoc;
  export default entry;
}

declare module 'virtual:vespertina-entries' {
  const entries: Record<string, unknown>;
  export default entries;
}
