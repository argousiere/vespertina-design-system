export type Attributes = Record<string, string | number | undefined>;

const ATTRIBUTE = /([\w-]+)="([^"]*)"/g;

export const parseAttributes = (attributes: string): Record<string, string> => {
  return Object.fromEntries(
    [...attributes.matchAll(ATTRIBUTE)].map(([, name, value]) => {
      return [name, value];
    })
  );
};

export const convertAttributesToHtmlString = (
  attributes: Attributes
): string => {
  return Object.entries(attributes)
    .filter(([, value]) => {
      return value !== undefined;
    })
    .map(([name, value]) => {
      return `${name}="${String(value).replaceAll('"', '&quot;')}"`;
    })
    .join(' ');
};
