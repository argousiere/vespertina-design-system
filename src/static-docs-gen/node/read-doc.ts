import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import fm from 'front-matter';
import type { StaticDocsGenConfig } from '../types/config.type';
import type { DocSource } from '../parsers/parse-doc';

export const toPosixPath = (filename: string, separator = path.sep): string =>
  filename.split(separator).join('/');

export const readFrontmatter = <T = unknown>(
  content: string
): Record<string, T> | null => {
  try {
    return fm<Record<string, T>>(content).attributes;
  } catch {
    return null;
  }
};

export function listDocPaths(docsDir: string): string[] {
  return readdirSync(docsDir, { recursive: true, encoding: 'utf-8' })
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => toPosixPath(filename));
}

export function readDoc(filename: string, docsDir: string): DocSource {
  const filepath = path.join(docsDir, filename);
  const fileBuffer = readFileSync(filepath, 'utf8');

  return {
    filename,
    frontmatter: readFrontmatter(fileBuffer),
  };
}

export function readDocSources(config: StaticDocsGenConfig): DocSource[] {
  return listDocPaths(config.docsDir).map((filename) =>
    readDoc(filename, config.docsDir)
  );
}
