import { create } from 'storybook/theming';
import vespertinaLogo from '../storybook/images/vespertina-design-system-storybook.png';

export default create({
  base: 'dark',
  brandTitle: 'Vespertina Design System',
  brandImage: vespertinaLogo,
  brandTarget: '_self',
});
