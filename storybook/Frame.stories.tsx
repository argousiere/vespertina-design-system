import type { Meta, StoryObj } from '@storybook/react-vite';

import Frame from '@components/Frame';
import MarkdownBlock from './utils/MarkdownBlock';
import { renderMarkdown } from './utils/render-markdown';

const meta = {
  title: 'Components/Frame',
  component: Frame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    className: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    heading: 'Frame',
    children: <p>My content</p>,
  },
} satisfies Story;

export const WideContent = {
  parameters: {
    layout: 'padded',
  },
  args: {
    heading: 'Frame',
    style: { maxHeight: 320, maxWidth: 500 },
    children: (
      <MarkdownBlock
        className="ves-entry__body"
        html={renderMarkdown('entry.md')}
      />
    ),
  },
} satisfies Story;
