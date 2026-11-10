import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';
import CardBody from './CardBody';

describe('Card', () => {
  describe('empty state', () => {
    it('should display the empty state when no sub-components are defined', () => {
      const { container } = render(<Card />);

      expect(container).toHaveTextContent('Card is empty');
    });

    it('should not display the empty state when sub-components are defined', () => {
      render(
        <Card>
          <CardBody>Boarding closes 30 minutes before departure.</CardBody>
        </Card>
      );

      expect(screen.queryByText('Card is empty')).not.toBeInTheDocument();
    });

    it('should display a custom empty message', () => {
      const { container } = render(<Card emptyMessage="No tickets yet" />);

      expect(container).toHaveTextContent('No tickets yet');
    });
  });

  describe('sub-components', () => {
    it('should display its sub-components when defined', () => {
      const { container } = render(
        <Card>
          <CardBody>Boarding closes 30 minutes before departure.</CardBody>
        </Card>
      );

      expect(container).toContainOneByText(
        'Boarding closes 30 minutes before departure.'
      );
    });
  });
});
