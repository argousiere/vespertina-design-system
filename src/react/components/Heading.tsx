import type { ComponentProps } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Omit<ComponentProps<'h1'>, 'children'> {
  level?: HeadingLevel;
  label: string;
}

const Heading: React.FC<HeadingProps> = ({
  level: HeadingTag = 'h2',
  label,
  ...props
}) => <HeadingTag {...props}>{label}</HeadingTag>;

export default Heading;
