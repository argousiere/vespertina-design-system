import type { Meta, StoryObj } from '@storybook/react-vite';

import TagBox from '@components/TagBox';

const meta = {
  title: 'Components/TagBox',
  component: TagBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: { control: { disable: true } },
  },
} satisfies Meta<typeof TagBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Filed under',
    tags: [
      {
        slug: 'expat',
      },
      {
        slug: 'france',
      },
    ],
  },
} satisfies Story;

export const SingleTag = {
  args: {
    title: 'Filed under',
    tags: [
      {
        slug: 'travel',
      },
    ],
  },
} satisfies Story;

export const MultipleTags = {
  args: {
    title: 'Filed under',
    tags: [
      {
        slug: 'expat',
      },
      {
        slug: 'france',
      },
      {
        slug: 'travel',
      },
      {
        slug: 'culture',
      },
    ],
  },
} satisfies Story;

export const CustomTitle = {
  args: {
    title: 'Topics',
    tags: [
      {
        slug: 'technology',
      },
      {
        slug: 'design',
      },
    ],
  },
} satisfies Story;

const breakpoints = [
  { width: 960, label: '960px: long tag capped at 480px' },
  { width: 480, label: '480px: long tag takes a full row' },
  { width: 160, label: '160px: long tag shrinks to the row width' },
];

export const Responsive = {
  args: {
    title: 'Filed under',
    tags: [
      {
        slug: 'expat',
      },
      {
        slug: 'a-very-long-tag-name-that-keeps-going-well-past-the-maximum-width',
      },
      {
        slug: 'france',
      },
      {
        slug: 'travel',
      },
    ],
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
