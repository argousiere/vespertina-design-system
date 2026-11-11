import type { Meta, StoryObj } from '@storybook/react-vite';

import Link from '@components/Link';
import { iconArgType } from './arg-types/icon';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startIcon: iconArgType,
    className: { control: false },
  },
  args: {
    href: '/about',
    text: 'About',
    showExternalIcon: true,
    external: true,
  },
  decorators: (Story) => {
    return (
      <p style={{ maxWidth: 320 }}>
        Before the link, some surrounding text <Story /> and more text after it
        to check how the link wraps inline.
      </p>
    );
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const External = {
  args: {
    href: 'https://open-ui.org/',
    text: 'Open UI',
  },
} satisfies Story;

export const WithStartIcon = {
  args: {
    href: 'https://github.com/',
    text: 'GitHub',
    startIcon: 'github',
  },
} satisfies Story;

export const HiddenExternalIcon = {
  args: {
    href: 'https://open-ui.org/',
    text: 'Open UI',
    showExternalIcon: false,
  },
} satisfies Story;

export const WithChildren = {
  args: {
    text: undefined,
  },
  render: (args) => {
    return <Link {...args}>about page</Link>;
  },
} satisfies Story;
