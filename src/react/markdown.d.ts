declare module '*.md' {
  import type { EntryDoc } from './models/EntryDoc';

  const entry: EntryDoc;
  export default entry;
}
