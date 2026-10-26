const IMAGE_PARAGRAPH = /<p>\s*(<img\b[^>]*>)\s*<\/p>/g;
const IMAGE_TITLE = /\s+title="([^"]*)"/;

export const wrapImagesInThumbnails = (html: string): string =>
  html.replace(IMAGE_PARAGRAPH, (_, img: string) => {
    const caption = img.match(IMAGE_TITLE)?.[1];

    const image = img
      .replace(IMAGE_TITLE, '')
      .replace('<img', '<img class="ves-thumbnail__img"');

    const figcaption = caption
      ? `<figcaption class="ves-thumbnail__caption">${caption}</figcaption>`
      : '';

    return `
    <figure class="ves-thumbnail">
      <picture class="ves-thumbnail__picture">${image}</picture>
      ${figcaption}
    </figure>`;
  });
