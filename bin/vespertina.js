#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';

const CONFIG_FILE = 'vespertina.config.json';

const fail = (message) => {
  console.error(`vespertina: ${message}`);
  process.exit(1);
};

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const readContentDir = (root) => {
  const file = path.join(root, CONFIG_FILE);
  if (!existsSync(file)) fail(`${CONFIG_FILE} not found in ${root}.`);
  const { contentDir } = JSON.parse(readFileSync(file, 'utf8'));
  if (typeof contentDir !== 'string' || !contentDir) {
    fail(`${CONFIG_FILE} needs a "contentDir" string.`);
  }
  return path.join(root, contentDir.replace(/^\.?\/+|\/+$/g, ''));
};

const addContent = (args) => {
  const { values } = parseArgs({
    args,
    options: { title: { type: 'string' } },
  });

  if (!values.title) {
    fail('add-content needs --title "Content title".');
  }

  const slug = slugify(values.title);
  if (!slug) {
    fail('the title should not be empty and must contain letters or numbers.');
  }

  const dir = readContentDir(process.cwd());
  const file = path.join(dir, `${slug}.md`);
  if (existsSync(file)) {
    fail(`${path.relative(process.cwd(), file)} already exists.`);
  }

  const date = new Date().toISOString().slice(0, 10);
  const body = [
    '---',
    `title: ${JSON.stringify(values.title)}`,
    `date: ${date}`,
    'tags: []',
    'excerpt: ""',
    '---',
    '',
    'This is my content',
    '',
  ].join('\n');

  mkdirSync(dir, { recursive: true });
  writeFileSync(file, body);
  console.log(`Created ${path.relative(process.cwd(), file)}`);
};

const [command, ...args] = process.argv.slice(2);

if (command === 'add-content') {
  addContent(args);
} else {
  fail('usage: vespertina add-content --title "Your title"');
}
