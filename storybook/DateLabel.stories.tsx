import type { Meta, StoryObj } from '@storybook/react-vite';

import DateLabel from '@components/DateLabel';

const meta = {
  title: 'Components/DateLabel',
  component: DateLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dateTime: {
      control: 'text',
      description: 'Date string in yyyy-MM-dd format',
    },
    dateFormat: {
      control: 'text',
      description: 'date-fns format',
      table: { defaultValue: { summary: 'dd.MMM.yyyy' }}
    },
  },
  args: {
    dateFormat: 'dd.MMM.yyyy',
  }
} satisfies Meta<typeof DateLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    dateTime: '2017-09-12',
  },
} satisfies Story;

export const CustomFormat = {
  args: {
    dateTime: '2017-09-12',
    dateFormat: 'MMMM dd, yyyy',
  },
} satisfies Story;

export const Invalid = {
  args: {
    dateTime: '20170912',
  },
} satisfies Story;
