import { describe, expect, it } from 'vitest';
import {
  renderThumbnailHtml,
  thumbnailHtmlProcessor,
} from './markdown-html-utils';

describe('thumbnailHtmlProcessor', () => {
  it('should render an image paragraph as a thumbnail image', () => {
    document.body.innerHTML = thumbnailHtmlProcessor.process(
      '<p><img src="a.jpg" alt="A"></p>'
    );

    expect(
      document.querySelector(
        'figure.ves-thumbnail > picture.ves-thumbnail__picture > img'
      )?.outerHTML
    ).toBe('<img class="ves-thumbnail__img" src="a.jpg" alt="A">');
  });

  it('should not render a caption when the image has no title', () => {
    document.body.innerHTML = thumbnailHtmlProcessor.process(
      '<p><img src="a.jpg" alt="A"></p>'
    );

    expect(document.querySelector('figcaption')).toBeNull();
  });

  it('should render the image title as the caption', () => {
    document.body.innerHTML = thumbnailHtmlProcessor.process(
      '<p><img src="a.jpg" alt="A" title="Caption"></p>'
    );

    expect(
      document.querySelector('figure.ves-thumbnail > figcaption')?.outerHTML
    ).toBe('<figcaption class="ves-thumbnail__caption">Caption</figcaption>');
  });

  it('should remove the title from a captioned image', () => {
    document.body.innerHTML = thumbnailHtmlProcessor.process(
      '<p><img src="a.jpg" alt="A" title="Caption"></p>'
    );

    expect(document.querySelector('img')?.outerHTML).toBe(
      '<img class="ves-thumbnail__img" src="a.jpg" alt="A">'
    );
  });

  it('should leave images inside text untouched', () => {
    document.body.innerHTML = thumbnailHtmlProcessor.process(
      '<p>Look <img src="a.jpg" alt="A"> here</p>'
    );

    expect(document.body.innerHTML).toBe(
      '<p>Look <img src="a.jpg" alt="A"> here</p>'
    );
  });
});

describe('renderThumbnailHtml', () => {
  it('should render an image model as a thumbnail image', () => {
    document.body.innerHTML = renderThumbnailHtml({
      src: 'a.jpg',
      alt: 'A',
      width: 10,
      height: 20,
    });

    expect(
      document.querySelector(
        'figure.ves-thumbnail > picture.ves-thumbnail__picture > img'
      )?.outerHTML
    ).toBe(
      '<img class="ves-thumbnail__img" src="a.jpg" alt="A" width="10" height="20">'
    );
  });

  it('should leave out attributes the image model does not define', () => {
    document.body.innerHTML = renderThumbnailHtml({ src: 'a.jpg' });

    expect(document.querySelector('img')?.outerHTML).toBe(
      '<img class="ves-thumbnail__img" src="a.jpg">'
    );
  });

  it('should keep quotes in the alt text', () => {
    document.body.innerHTML = renderThumbnailHtml({
      src: 'a.jpg',
      alt: 'The "Queen"',
    });

    expect(document.querySelector('img')?.getAttribute('alt')).toBe(
      'The "Queen"'
    );
  });

  it('should not render a caption when none is given', () => {
    document.body.innerHTML = renderThumbnailHtml({ src: 'a.jpg' });

    expect(document.querySelector('figcaption')).toBeNull();
  });

  it('should render the given caption', () => {
    document.body.innerHTML = renderThumbnailHtml({ src: 'a.jpg' }, 'Caption');

    expect(
      document.querySelector('figure.ves-thumbnail > figcaption')?.outerHTML
    ).toBe('<figcaption class="ves-thumbnail__caption">Caption</figcaption>');
  });
});
