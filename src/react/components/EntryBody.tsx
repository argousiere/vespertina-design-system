import { clsx } from 'clsx';
import MarkdownRenderer from './MarkdownRenderer';

export interface EntryBodyProps extends Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'dangerouslySetInnerHTML'
> {
  src?: string;
}

const EntryBody: React.FC<EntryBodyProps> = ({
  src,
  className,
  children,
  ...props
}) => {
  const classes = clsx('ves-entry-body', className);

  if (src) {
    return <MarkdownRenderer {...props} className={classes} src={src} />;
  }

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default EntryBody;
