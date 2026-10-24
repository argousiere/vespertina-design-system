import type { Meta, StoryObj } from '@storybook/react-vite';

import Frame from '@components/Frame';
import { headingLevelArgType } from './arg-types/heading-level';
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
    headingLevel: headingLevelArgType,
  },
  args: {
     heading: 'My Frame'
  }
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: (args) => (
    <Frame {...args}>
      <p>My content</p>
    </Frame>
  ),
} satisfies Story;

export const ScrollableContent = {
  parameters: {
    layout: 'padded',
  },
  args: {
    style: { maxHeight: 320, maxWidth: 500 },
  },
  render: (args) => (
    <Frame {...args}>
      <MarkdownBlock
        className="ves-entry__body"
        html={renderMarkdown('entry.md')}
      />
    </Frame>
  ),
} satisfies Story;
