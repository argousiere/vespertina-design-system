import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
  it('should display the title as an h2 by default', () => {
    render(<CardHeader title="Frontend Engineer" />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Frontend Engineer'
    );
  });

  it('should display the title with the given heading level', () => {
    render(<CardHeader title="Frontend Engineer" headingLevel="h3" />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Frontend Engineer'
    );
  });

  it('should display the subtitle as a non-heading', () => {
    render(<CardHeader title="Frontend Engineer" subtitle="Acme" />);

    expect(screen.getByText('Acme').tagName).toBe('P');
  });

  it('should display the title meta when defined', () => {
    const { container } = render(
      <CardHeader title="Frontend Engineer" titleMeta="2021 – 2023" />
    );

    expect(container.querySelector('.ves-card__title-meta')).toHaveTextContent(
      '2021 – 2023'
    );
  });

  it('should display the subtitle meta when defined', () => {
    const { container } = render(
      <CardHeader
        title="Frontend Engineer"
        subtitle="Acme"
        subtitleMeta="Remote"
      />
    );

    expect(
      container.querySelector('.ves-card__subtitle-meta')
    ).toHaveTextContent('Remote');
  });

  it('should not display the meta container when there is no meta content', () => {
    const { container } = render(
      <CardHeader title="Frontend Engineer" subtitle="Acme" />
    );

    expect(container.querySelector('.ves-card__meta')).not.toBeInTheDocument();
  });
});
