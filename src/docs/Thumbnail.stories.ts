import type { Meta, StoryObj } from '@storybook/react-vite';

import Thumbnail from '@components/Thumbnail';

const meta = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: { disable: true } },
    sources: { control: false },
    altText: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'number',
      description: 'Image width in pixels',
    },
    height: {
      control: 'number',
      description: 'Image height in pixels',
    },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: './images/vespertina-logo.svg',
    altText: 'Vespertina Logo',
    width: 100,
    height: 100,
  },
} satisfies Story;

export const WithCaption = {
  args: {
    src: './images/dizzy.jpg',
    altText: 'Dizzy',
    width: 200,
    height: 200,
    caption: 'Against the dizzying backdrop of space',
  },
} satisfies Story;
