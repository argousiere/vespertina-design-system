import { describe, expect, it } from 'vitest';
import { wrapImagesInThumbnails } from './thumbnail-images';

describe('wrapImagesInThumbnails', () => {
  it('should render an image paragraph as a thumbnail image', () => {
    document.body.innerHTML = wrapImagesInThumbnails(
      '<p><img src="a.jpg" alt="A"></p>'
    );

    expect(
      document.querySelector(
        'figure.ves-thumbnail > picture.ves-thumbnail__picture > img'
      )?.outerHTML
    ).toBe('<img class="ves-thumbnail__img" src="a.jpg" alt="A">');
  });

  it('should not render a caption when the image has no title', () => {
    document.body.innerHTML = wrapImagesInThumbnails(
      '<p><img src="a.jpg" alt="A"></p>'
    );

    expect(document.querySelector('figcaption')).toBeNull();
  });

  it('should render the image title as the caption', () => {
    document.body.innerHTML = wrapImagesInThumbnails(
      '<p><img src="a.jpg" alt="A" title="Caption"></p>'
    );

    expect(
      document.querySelector('figure.ves-thumbnail > figcaption')?.outerHTML
    ).toBe('<figcaption class="ves-thumbnail__caption">Caption</figcaption>');
  });

  it('should remove the title from a captioned image', () => {
    document.body.innerHTML = wrapImagesInThumbnails(
      '<p><img src="a.jpg" alt="A" title="Caption"></p>'
    );

    expect(document.querySelector('img')?.outerHTML).toBe(
      '<img class="ves-thumbnail__img" src="a.jpg" alt="A">'
    );
  });

  it('should leave images inside text untouched', () => {
    document.body.innerHTML = wrapImagesInThumbnails(
      '<p>Look <img src="a.jpg" alt="A"> here</p>'
    );

    expect(document.body.innerHTML).toBe(
      '<p>Look <img src="a.jpg" alt="A"> here</p>'
    );
  });
});
