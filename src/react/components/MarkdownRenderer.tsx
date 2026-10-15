import { getEntry } from '@core/scripts/entries-registry';

export interface MarkdownRendererProps extends Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children' | 'dangerouslySetInnerHTML'
> {
  src: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  src,
  ...props
}) => {
  const entry = getEntry(src);

  if (!entry) {
    console.warn(`MarkdownRenderer: no registered markdown file for "${src}"`);
    return null;
  }

  return <div {...props} dangerouslySetInnerHTML={{ __html: entry.html }} />;
};

export default MarkdownRenderer;
