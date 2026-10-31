import type { Meta, StoryObj } from '@storybook/react-vite';

import type { EntryModel } from '@core/models/EntryModel';
import EntryListItem from '@components/EntryListItem';
import { entryArgTypes } from './arg-types/entry';
import { entryRecord } from './fixtures/entries';

type EntryListItemArgs = EntryModel & { disabled?: boolean };

const meta = {
  title: 'Components/EntryListItem',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...entryArgTypes,
    disabled: {
      control: 'boolean',
      description: 'Whether the entry link is disabled',
    },
  },
  args: {
    id: 'entry',
  },
  render: ({ disabled, ...entry }) => {
    return <EntryListItem entry={entry} disabled={disabled} />;
  },
} satisfies Meta<EntryListItemArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...entryRecord.sonnetIII,
    disabled: false,
  },
  decorators: (Story) => {
    return (
      <ul>
        <Story />
      </ul>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...entryRecord.sonnetIII,
    disabled: true,
  },
  decorators: (Story) => {
    return (
      <ul>
        <Story />
      </ul>
    );
  },
};

export const Truncated: Story = {
  args: {
    ...entryRecord.sonnetIII,
    disabled: false,
  },
  decorators: (Story) => {
    return (
      <ul style={{ maxWidth: 500 }}>
        <Story />
      </ul>
    );
  },
};
