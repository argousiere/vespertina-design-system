import type { Meta, StoryObj } from '@storybook/react-vite';

import previewImage from '@images/ves-icon-empty-cover.svg';
import EmbedViewer from '@components/EmbedViewer';

const meta = {
  title: 'Components/EmbedViewer',
  component: EmbedViewer,
  tags: ['autodocs'],
  argTypes: {
    src: { control: false },
    preview: { control: false },
  },
  args: {
    src: 'https://www.youtube.com/embed/gdlTFPebzAU',
    title: 'Placeholder video',
    aspectRatioWidth: 16,
    aspectRatioHeight: 9,
  },
} satisfies Meta<typeof EmbedViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutPreview = {} satisfies Story;

export const WithPreview = {
  args: {
    preview: {
      imgSrc: previewImage,
      imgAlt: 'Vespertina Design System banner with the logo',
    },
    aspectRatioWidth: 817,
    aspectRatioHeight: 384,
  },
} satisfies Story;
