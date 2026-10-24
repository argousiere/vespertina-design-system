import type { ComponentProps } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends ComponentProps<'h1'> {
  level?: HeadingLevel;
}

const Heading: React.FC<HeadingProps> = ({
  level: HeadingTag = 'h2',
  ...props
}) => <HeadingTag {...props} />;

export default Heading;
