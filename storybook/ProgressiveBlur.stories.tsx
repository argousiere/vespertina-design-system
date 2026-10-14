import type { Meta, StoryObj } from '@storybook/react-vite';

import coverImage from '@images/dizzy.jpg';
import ProgressiveBlur, {
  type ProgressiveBlurProps,
} from '@components/ProgressiveBlur';

type ProgressiveBlurStoryProps = ProgressiveBlurProps & {
  color?: string;
};

const meta: Meta<ProgressiveBlurStoryProps> = {
  title: 'Components/ProgressiveBlur',
  component: ProgressiveBlur,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: [
        'bottom-to-top',
        'top-to-bottom',
        'left-to-right',
        'right-to-left',
      ],
      table: {
        type: {
          summary: 'ProgressiveBlurDirection',
        },
      },
    },
    fillSize: {
      control: { type: 'range', min: 0, max: 100, step: 10 },
      table: { type: { summary: 'number' } },
    },
    color: {
      control: 'color',
      table: { type: { summary: 'string' } },
    },
  },
  render: ({ color, style, ...args }) => (
    <div style={{ position: 'relative', width: 256 }}>
      <img src={coverImage} alt="" style={{ display: 'block', width: '100%' }} />
      <ProgressiveBlur
        {...args}
        style={
          {
            ...style,
            ...(color && { '--ves-progressive-blur-color': color }),
          } as React.CSSProperties
        }
      />
    </div>
  ),
};

export default meta;
type Story = StoryObj<ProgressiveBlurStoryProps>;

export const Default = {
  args: {
    direction: 'top-to-bottom',
    color: 'rgb(0 0 0 / 0.5)',
  },
} satisfies Story;
