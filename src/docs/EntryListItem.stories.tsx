import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryListItem from '@components/EntryListItem';

const meta = {
  title: 'Components/EntryListItem',
  component: EntryListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: false,
      description: 'Unique ID of the entry',
    },
    title: {
      control: 'text',
      description: 'The title of the entry',
    },
    date: {
      control: 'date',
      description: 'Publication date of the entry',
    },
    url: {
      control: false,
      description: 'URL the entry links to',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entry link is disabled',
    },
  },
} satisfies Meta<typeof EntryListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    title: 'Sonnet III: The Ghost of Whimsical Fascination',
    date: new Date('2007-02-02'),
    url: '#',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    title: 'Sonnet III: The Ghost of Whimsical Fascination',
    date: new Date('2007-02-02'),
    url: '#',
    disabled: true,
  },
};

export const Truncated: Story = {
  args: {
    id: 'truncated',
    title: 'Sonnet III: The Ghost of Whimsical Fascination',
    date: new Date('2007-02-02'),
    url: '#',
    disabled: false,
  },
  decorators: (Story) => (
    <div style={{ maxWidth: 500 }}>
      <Story />
    </div>
  ),
};
