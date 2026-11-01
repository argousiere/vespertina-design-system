import type { Meta, StoryObj } from '@storybook/react-vite';

import DateRangeLabel from '@components/DateRangeLabel';

const meta = {
  title: 'Components/DateRangeLabel',
  component: DateRangeLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startDate: {
      control: 'text',
      description: 'Date string in yyyy-MM-dd format',
    },
    endDate: {
      control: 'text',
      description: "Date string in yyyy-MM-dd format, or 'ongoing'",
    },
    dateFormat: {
      control: 'text',
      description: 'date-fns format',
      table: { defaultValue: { summary: 'MMM yyyy' } },
    },
    className: { control: false },
  },
} satisfies Meta<typeof DateRangeLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    startDate: '2021-03-01',
    endDate: '2023-08-15',
  },
} satisfies Story;

export const Ongoing = {
  args: {
    startDate: '2021-03-01',
    endDate: 'ongoing',
  },
} satisfies Story;

export const StartDateOnly = {
  args: {
    startDate: '2021-03-01',
  },
} satisfies Story;

export const CustomFormat = {
  args: {
    startDate: '2021-03-01',
    endDate: '2023-08-15',
    dateFormat: 'yyyy',
  },
} satisfies Story;
