import type { Meta, StoryObj } from '@storybook/react-vite';

import Image from '@components/Image';
import { aspectRatioArgType, imageArgType } from './arg-types/image';
import { imageRecord } from './fixtures/images';

const meta = {
  title: 'Base/Images',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    image: imageArgType,
    aspectRatio: aspectRatioArgType,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Local = {
  args: {
    image: imageRecord.local,
  },
} satisfies Story;

export const Remote = {
  args: {
    image: imageRecord.remote,
  },
} satisfies Story;
