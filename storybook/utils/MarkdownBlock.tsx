export interface MarkdownBlockProps extends Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children' | 'dangerouslySetInnerHTML'
> {
  html: string;
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({ html, ...props }) => {
  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownBlock;
