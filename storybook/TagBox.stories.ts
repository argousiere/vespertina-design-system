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
