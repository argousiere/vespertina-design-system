import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from '@react/components/Label';
import DateRangeLabel from '@react/components/DateRangeLabel';
import Button from '@components/Button';
import Card from '@components/Card';
import CardBody from '@components/CardBody';
import CardCover from '@components/CardCover';
import CardFooter from '@components/CardFooter';
import CardHeader from '@components/CardHeader';
import { headingLevelArgType } from './arg-types/heading-level';
import { imageRecord } from './fixtures/images';

const meta = {
  title: 'Components/Card',
  component: CardHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    headingLevel: headingLevelArgType,
    titleMeta: { control: false, table: { type: { detail: 'React.Node' } } },
    subtitleMeta: { control: false, table: { type: { detail: 'React.Node' } } },
  },
  args: {
    title: 'Ticket to Destination',
    headingLevel: 'h1',
    titleMeta: <Label startIcon="star" text="Gate 7" />,
  },
  decorators: (Story) => {
    return (
      <div style={{ width: 650 }}>
        <Story />
      </div>
    );
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardCover image={imageRecord.local} />
        <CardBody>
          <p>Vespertina Space Wayfarers, Inc.</p>
        </CardBody>
        <CardFooter>
          <p>
            Keep this with you at all times for the entire duration of the trip
            and until passing border control.
          </p>
        </CardFooter>
      </Card>
    );
  },
} satisfies Story;

export const Basic = {
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardBody>
          <p>Vespertina Space Wayfarers, Inc.</p>
        </CardBody>
      </Card>
    );
  },
} satisfies Story;

export const WithCover = {
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardCover image={imageRecord.local} />
      </Card>
    );
  },
} satisfies Story;

export const WithSubtitleMeta = {
  args: {
    subtitle: 'Vespertina Space Wayfarers, Inc.',
    subtitleMeta: (
      <DateRangeLabel startDate="3402-10-12" endDate="3403-04-02" />
    ),
  },
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardBody>
          <p>Boarding closes 30 minutes before departure.</p>
        </CardBody>
      </Card>
    );
  },
} satisfies Story;

export const SparseHeader = {
  args: {
    titleMeta: undefined,
    subtitleMeta: (
      <DateRangeLabel startDate="3402-10-12" endDate="3403-04-02" />
    ),
  },
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardBody>
          <p>Boarding closes 30 minutes before departure.</p>
        </CardBody>
      </Card>
    );
  },
} satisfies Story;

export const NarrowWidth = {
  args: {
    subtitle: 'Vespertina Space Wayfarers, Inc.',
    subtitleMeta: (
      <DateRangeLabel startDate="3402-10-12" endDate="3403-04-02" />
    ),
  },
  decorators: (Story) => {
    return (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    );
  },
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardBody>
          <p>Boarding closes 30 minutes before departure.</p>
        </CardBody>
      </Card>
    );
  },
} satisfies Story;

export const BodyOnly = {
  render: () => {
    return (
      <Card>
        <CardBody>
          <p>Vespertina Space Wayfarers, Inc.</p>
        </CardBody>
      </Card>
    );
  },
} satisfies Story;

export const CustomElements = {
  args: {
    subtitle: 'Vespertina Space Wayfarers, Inc.',
  },
  render: (args) => {
    return (
      <Card>
        <CardHeader {...args} />
        <CardBody>
          <ul>
            <li>Departure: Earth Orbital Station</li>
            <li>Arrival: Kepler-452b</li>
          </ul>
        </CardBody>
        <CardFooter>
          <Button type="button" text="Check in" />
        </CardFooter>
      </Card>
    );
  },
} satisfies Story;

export const Empty = {
  render: () => {
    return <Card></Card>;
  },
} satisfies Story;
