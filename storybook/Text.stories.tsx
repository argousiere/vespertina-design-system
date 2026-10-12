import type { Meta, StoryObj } from '@storybook/react-vite';

import EntryBody from '@components/EntryBody';

const meta = {
  title: 'Base/Text',
  component: EntryBody,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: false },
  },
} satisfies Meta<typeof EntryBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings = {
  args: {
    src: 'headings.md',
  },
} satisfies Story;

export const Paragraph = {
  args: {
    src: 'paragraphs.md',
  },
} satisfies Story;

export const Link = {
  args: {
    src: 'links.md',
  },
} satisfies Story;
