export interface MarkdownHtmlProcessor<T = void> {
  process(html: string, options: T): string;
}
