import type { ComponentProps, ReactNode } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Omit<ComponentProps<'h1'>, 'children'> {
  level?: HeadingLevel;
  label: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, label, ...props }) => {
  const HeadingTag = level ?? 'h2';

  return <HeadingTag {...props}>{label}</HeadingTag>;
};

export default Heading;
