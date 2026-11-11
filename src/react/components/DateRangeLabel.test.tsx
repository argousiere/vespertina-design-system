import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DateRangeLabel from './DateRangeLabel';

describe('DateRangeLabel', () => {
  it('should display the start and end dates with a separator', () => {
    const { container } = render(
      <DateRangeLabel startDate="2021-03-01" endDate="2023-08-15" />
    );

    expect(container).toHaveTextContent('Mar 2021 – to Aug 2023');
  });

  it('should display Present when the end date is ongoing', () => {
    const { container } = render(
      <DateRangeLabel startDate="2021-03-01" endDate="ongoing" />
    );

    expect(container).toHaveTextContent('Mar 2021 – to Present');
  });

  it('should display only the start date when there is no end date', () => {
    const { container } = render(<DateRangeLabel startDate="2021-03-01" />);

    expect(container).toHaveTextContent(/^Mar 2021$/);
  });

  it('should display only the end date when there is no start date', () => {
    const { container } = render(<DateRangeLabel endDate="2023-08-15" />);

    expect(container).toHaveTextContent(/^Aug 2023$/);
  });

  it('should format the dates with the given date format', () => {
    const { container } = render(
      <DateRangeLabel
        startDate="2021-03-01"
        endDate="2023-08-15"
        dateFormat="yyyy"
      />
    );

    expect(container).toHaveTextContent('2021 – to 2023');
  });

  it('should hide the dash from screen readers', () => {
    const { container } = render(
      <DateRangeLabel startDate="2021-03-01" endDate="2023-08-15" />
    );

    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent(
      '–'
    );
  });

  it('should announce the separator as "to" to screen readers', () => {
    render(<DateRangeLabel startDate="2021-03-01" endDate="2023-08-15" />);

    expect(screen.getByText('to')).toHaveClass('sr-only');
  });
});
