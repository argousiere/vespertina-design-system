import type { Preview } from '@storybook/react-vite';
import { DOCS_RENDERED } from 'storybook/internal/core-events';
import { addons, useEffect } from 'storybook/preview-api';
import '@/core/styles/index.css';

const themeClasses = ['vespertina-theme', 'vespertina-theme--dark'];

const setBodyTheme = (enabled: boolean) =>
  themeClasses.forEach((className) =>
    document.body.classList.toggle(className, enabled)
  );

addons.getChannel().on(DOCS_RENDERED, () => setBodyTheme(false));

const preview: Preview = {
  decorators: [
    (Story, { viewMode }) => {
      useEffect(() => {
        const isDocs = viewMode === 'docs';
        setBodyTheme(!isDocs);
        if (isDocs) {
          document
            .querySelectorAll('.docs-story')
            .forEach((el) => el.classList.add(...themeClasses));
        }
      }, [viewMode]);

      return <Story />;
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      grid: {
        cellSize: 48,
        offsetX: 0,
        offsetY: 0,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
