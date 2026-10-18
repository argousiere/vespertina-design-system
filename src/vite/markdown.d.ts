declare module '*.md' {
  import type { EntryModel } from '@core/models/EntryModel';

  const entry: EntryModel;
  export default entry;
}

declare module 'virtual:vespertina-entries' {
  const entries: Record<string, unknown>;
  export default entries;
}
