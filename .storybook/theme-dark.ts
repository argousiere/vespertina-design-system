import { create } from 'storybook/theming';
import vespertinaLogo from '../src/assets/images/vespertina-logo.svg';

export default create({
  base: 'dark',
  brandTitle: 'Vespertina Design System',
  brandImage: vespertinaLogo,
  brandTarget: '_self',
});
