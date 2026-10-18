import { vol } from 'memfs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  listDocPaths,
  readDoc,
  readDocSources,
  readFrontmatter,
  toPosixPath,
} from './read-doc';

vi.mock('node:fs', async () => {
  const { fs } = await import('memfs');
  return { default: fs, ...fs };
});

const DOCS_DIR = '/docs';

beforeEach(() => {
  vol.reset();
});

describe('toPosixPath', () => {
  it('should join path segments with forward slashes', () => {
    expect(toPosixPath('nested\\deep\\doc.md', '\\')).toBe(
      'nested/deep/doc.md'
    );
    expect(toPosixPath('nested/doc.md', '/')).toBe('nested/doc.md');
  });
});

describe('readFrontmatter', () => {
  it('should return the frontmatter attributes', () => {
    const content = [
      '---',
      'title: My doc',
      'tags: [a, b]',
      '---',
      'Body',
    ].join('\n');

    expect(readFrontmatter(content)).toEqual({
      title: 'My doc',
      tags: ['a', 'b'],
    });
  });

  it('should turn empty values into null and keep nested objects', () => {
    const content = ['---', 'summary:', 'custom:', '  title: T', '---'].join(
      '\n'
    );

    expect(readFrontmatter(content)).toEqual({
      summary: null,
      seo: { title: 'T' },
    });
  });

  it('should return an empty object when there is no frontmatter', () => {
    expect(readFrontmatter('malformed frontmatter')).toEqual({});
  });

  it('should return null when the frontmatter cannot be parsed', () => {
    const content = ['---', 'title: [invalid', '---'].join('\n');

    expect(readFrontmatter(content)).toBeNull();
  });
});

describe('listDocPaths', () => {
  it('should list markdown filenames relative to docsDir', () => {
    vol.fromJSON({
      [`${DOCS_DIR}/a.md`]: '',
      [`${DOCS_DIR}/nested/b.md`]: '',
      [`${DOCS_DIR}/notes.txt`]: 'not a doc',
    });

    expect(listDocPaths(DOCS_DIR).sort()).toEqual(['a.md', 'nested/b.md']);
  });
});

describe('readDoc', () => {
  it('should return the filename relative to docsDir with its frontmatter', () => {
    vol.fromJSON({
      [`${DOCS_DIR}/nested/my-doc.md`]:
        '---\ntitle: My doc\ndate: 2020-01-02\n---\nBody',
    });

    expect(readDoc('nested/my-doc.md', DOCS_DIR)).toEqual({
      filename: 'nested/my-doc.md',
      frontmatter: { title: 'My doc', date: new Date('2020-01-02T00:00:00Z') },
    });
  });

  it('should return null frontmatter when it cannot be parsed', () => {
    vol.fromJSON({
      [`${DOCS_DIR}/broken.md`]: '---\ntitle: [malformed\n---\n',
    });

    expect(readDoc('broken.md', DOCS_DIR)).toEqual({
      filename: 'broken.md',
      frontmatter: null,
    });
  });
});

describe('readDocSources', () => {
  it('should read every markdown doc under docsDir', () => {
    vol.fromJSON({
      [`${DOCS_DIR}/a.md`]: '---\ntitle: A\n---\n',
      [`${DOCS_DIR}/nested/b.md`]: 'no frontmatter',
      [`${DOCS_DIR}/notes.txt`]: 'not a doc',
    });
    const config = {
      baseUrl: 'https://example.com',
      docsDir: DOCS_DIR,
      recordsDir: '/records',
    };

    expect(
      readDocSources(config).sort((a, b) =>
        a.filename.localeCompare(b.filename)
      )
    ).toEqual([
      { filename: 'a.md', frontmatter: { title: 'A' } },
      { filename: 'nested/b.md', frontmatter: {} },
    ]);
  });
});
