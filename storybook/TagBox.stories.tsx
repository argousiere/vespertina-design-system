import type { Meta, StoryObj } from '@storybook/react-vite';

import TagBox from '@components/TagBox';
import { tagsArgType } from './arg-types/tags';
import { tags } from './fixtures/tags';

const meta = {
  title: 'Components/TagBox',
  component: TagBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: tagsArgType,
  },
} satisfies Meta<typeof TagBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tagBoxTitle: 'Filed under',
    tags: tags,
  },
} satisfies Story;

export const SingleTag = {
  args: {
    tagBoxTitle: 'Filed under',
    tags: [tags[0]],
  },
} satisfies Story;

export const MultipleTags = {
  args: {
    tagBoxTitle: 'Filed under',
    tags: tags,
  },
} satisfies Story;

export const CustomTitle = {
  args: {
    tagBoxTitle: 'Topics',
    tags: tags,
  },
} satisfies Story;

const breakpoints = [
  { width: 960, label: '960px: long tag capped at 480px' },
  { width: 480, label: '480px: long tag takes a full row' },
  { width: 160, label: '160px: long tag shrinks to the row width' },
];

export const Responsive = {
  args: {
    tagBoxTitle: 'Filed under',
    tags: tags,
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 32 }}>
      {breakpoints.map(({ width, label }) => (
        <figure key={width} style={{ margin: 0, width }}>
          <figcaption style={{ marginBottom: 8, whiteSpace: 'nowrap' }}>
            <code>{label}</code>
          </figcaption>
          <TagBox {...args} />
        </figure>
      ))}
    </div>
  ),
} satisfies Story;
