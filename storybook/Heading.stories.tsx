import type { Meta, StoryObj } from '@storybook/react-vite';

import Heading from '@components/Heading';
import { headingLevelArgType, headingLevels } from './arg-types/heading-level';

const meta = {
  title: 'Base/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: headingLevelArgType,
    label: { control: 'text' },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    level: 'h2',
    label: 'We are made of starstuff.',
  },
} satisfies Story;

export const AllLevels = {
  args: {
    label: 'We are made of starstuff.',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      {headingLevels.map((level) => (
        <Heading
          key={level}
          level={level}
          label={`${level}: ${args.label}`}
        />
      ))}
    </div>
  ),
} satisfies Story;
