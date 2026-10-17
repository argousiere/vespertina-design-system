import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import fm from 'front-matter';
import { marked } from 'marked';
import type { Plugin } from 'vite';
import type { EntryMetadataModel, EntryModel } from '@core/models/EntryModel';

const WORDS_PER_MINUTE = 275;
const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;
const CONFIG_FILE = 'vespertina.config.json';
const VIRTUAL_ID = 'virtual:vespertina-entries';
const RESOLVED_VIRTUAL_ID = `\0${VIRTUAL_ID}`;

export interface VespertinaConfig {
  /** Folder of markdown files, relative to the app root. */
  contentDir: string;
}

const readConfig = (root: string): VespertinaConfig => {
  const file = path.join(root, CONFIG_FILE);
  if (!existsSync(file)) {
    throw new Error(
      `vespertina: ${CONFIG_FILE} not found in ${root}.`
    );
  }
  const { contentDir } = JSON.parse(readFileSync(file, 'utf8'));
  if (typeof contentDir !== 'string' || !contentDir) {
    throw new Error(`vespertina: ${CONFIG_FILE} needs a "contentDir" string.`);
  }
  return { contentDir };
};

/**
 * Converts `*.md` imports into `EntryModel` objects.
 * Dev mode: Reload on file changes.
 * Prod mode: Inline converted HTML into bundle.
 */
export function markdownEntries(): Plugin {
  let contentDir = '';

  return {
    name: 'ves-markdown-entries',
    enforce: 'pre',
    configResolved(config) {
      contentDir = readConfig(config.root).contentDir.replace(
        /^\.?\/+|\/+$/g,
        ''
      );
    },
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_VIRTUAL_ID : null;
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_ID) {
        return [
          `const modules = import.meta.glob('/${contentDir}/**/*.md', { eager: true });`,
          'export default Object.fromEntries(',
          `  Object.entries(modules).map(([key, value]) => [key.slice(${contentDir.length + 2}), value])`,
          ');',
        ].join('\n');
      }

      const filename = id.split('?')[0];
      if (!filename.endsWith('.md')) {
        return null;
      }

      this.addWatchFile(filename);

      const { attributes: metadata, body } = fm<EntryMetadataModel>(
        readFileSync(filename, 'utf8')
      );
      
      const words = body.trim().split(/\s+/).length;

      const entry = {
        slug: path.basename(filename, '.md').replace(DATE_PREFIX, ''),
        metadata: {
          ...metadata,
          filename,
        },
        html: marked.parse(body, { async: false }),
        readingTimeWPM: Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)),
      } satisfies EntryModel;

      return `export default ${JSON.stringify(entry)};`;
    },
  };
}
