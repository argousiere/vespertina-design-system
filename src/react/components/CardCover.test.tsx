import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AspectRatio } from '@core/models/ImageModel';
import CardCover from './CardCover';

describe('CardCover', () => {
  it('should use a widescreen aspect ratio by default', () => {
    const { container } = render(
      <CardCover image={{ src: 'cover.jpg', alt: '' }} />
    );

    expect(container.querySelector('.ves-card__cover')).toHaveStyle({
      '--ves-image-aspect-ratio': AspectRatio.WIDESCREEN,
    });
  });

  it('should use the given aspect ratio', () => {
    const { container } = render(
      <CardCover
        image={{ src: 'cover.jpg', alt: '' }}
        aspectRatio={AspectRatio.SQUARE}
      />
    );

    expect(container.querySelector('.ves-card__cover')).toHaveStyle({
      '--ves-image-aspect-ratio': AspectRatio.SQUARE,
    });
  });
});
