import clsx from 'clsx';
import type { ComponentProps } from 'react';
import type { HeadingLevel } from './Heading';
import Heading from './Heading';

export interface FrameProps extends ComponentProps<'section'> {
  heading: string;
  headingLevel?: HeadingLevel;
}

const Frame: React.FC<FrameProps> = ({
  heading,
  headingLevel: HeadingLevel = 'h2',
  className,
  children,
  ...props
}) => (
  <section className={clsx('ves-frame', className)} {...props}>
    <Heading level={HeadingLevel} className="ves-frame__title">{heading}</Heading>
    
    <div className="ves-frame__content">
      <div className="ves-frame__scroll">{children}</div>
    </div>
  </section>
);

export default Frame;
