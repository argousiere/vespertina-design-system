export interface MarkdownRendererProps extends Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'children' | 'dangerouslySetInnerHTML'
> {
  html: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  html,
  ...props
}) => <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;

export default MarkdownRenderer;
