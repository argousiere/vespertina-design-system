import type { Meta, StoryObj } from '@storybook/react-vite';

import Heading from '@components/Heading';
import type { HeadingLevel } from '@components/Heading';

const levels: HeadingLevel[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const meta = {
  title: 'Base/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: levels,
      table: { type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6' } },
    },
    children: { control: 'text' },
    className: { control: false },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    level: 'h2',
    children: 'We are made of starstuff.',
  },
} satisfies Story;

export const AllLevels = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {levels.map((level) => (
        <Heading key={level} level={level}>
          {level}: We are made of starstuff.
        </Heading>
      ))}
    </div>
  ),
} satisfies Story;
