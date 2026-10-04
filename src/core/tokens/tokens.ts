// Source of truth for design tokens

type StringValue = { value: string };
type NumberValue = { value: number; unit?: 'rem' | 'px' }; // unitless when omitted

type BaseToken<T extends string, V extends StringValue | NumberValue> = {
  name?: string;
  type: T;
} & V;

export type ColorToken = BaseToken<'color', StringValue>;
export type FontFamilyToken = BaseToken<'font-family', StringValue>;
export type FontSizeToken = BaseToken<'font-size', NumberValue>;
export type FontWeightToken = BaseToken<'font-weight', NumberValue>;
export type SpacingToken = BaseToken<'spacing', NumberValue>;
export type GridSizeToken = BaseToken<'grid-size', NumberValue>;

export type Token =
  | ColorToken
  | FontFamilyToken
  | FontSizeToken
  | FontWeightToken
  | SpacingToken
  | GridSizeToken;

const tokens = {
  colors: {
    '--ves-global-color-light': {
      type: 'color',
      name: 'Light',
      value: 'oklch(0.97 0.015 225)',
    },
    '--ves-global-color-moonrock': {
      type: 'color',
      name: 'Moonrock',
      value: 'oklch(0.88 0.04 225)',
    },
    '--ves-global-color-ice': {
      type: 'color',
      name: 'Ice',
      value: 'oklch(0.73 0.06 225)',
    },
    '--ves-global-color-enceladus': {
      type: 'color',
      name: 'Enceladus',
      value: 'oklch(0.82 0.11 210)',
    },
    '--ves-global-color-cerulean': {
      type: 'color',
      name: 'Cerulean',
      value: 'oklch(0.74 0.13 225)',
    },
    '--ves-global-color-celestial': {
      type: 'color',
      name: 'Celestial',
      value: 'oklch(0.38 0.08 230)',
    },
    '--ves-global-color-kyanite': {
      type: 'color',
      name: 'Kyanite',
      value: 'oklch(0.36 0.08 234.03)',
    },
    '--ves-global-color-dusk': {
      type: 'color',
      name: 'Dusk',
      value: 'oklch(20.476% 0.04819 250.073)',
    },
    '--ves-global-color-midnight': {
      type: 'color',
      name: 'Midnight',
      value: 'oklch(0.18 0.03 229.2)',
    },
    '--ves-global-color-asteroid': {
      type: 'color',
      name: 'Asteroid',
      value: 'oklch(0.35 0.02 235)',
    },
    '--ves-global-color-cydonia': {
      type: 'color',
      name: 'Cydonia',
      value: 'oklch(79.571% 0.09429 75.227)',
    },
    '--ves-global-color-aurora': {
      type: 'color',
      name: 'Aurora',
      value: 'oklch(0.82 0.12 170)',
    },
    '--ves-global-color-gliese': {
      type: 'color',
      name: 'Gliese',
      value: 'oklch(0.64 0.18 350)',
    },
  },

  grid: {
    '--ves-grid-size': { type: 'grid-size', name: 'grid', value: 3.4286, unit: 'rem' },
  },

  'font-families': {
    '--ves-font-family-primary': {
      type: 'font-family',
      name: 'primary',
      value: "'Eurostile', Helvetica, Arial, sans-serif",
    },
    '--ves-font-family-secondary': {
      type: 'font-family',
      name: 'secondary',
      value: 'Helvetica, Arial, sans-serif',
    },
  },

  // Scale of 1.125
  'font-sizes': {
    '--ves-font-size-3xl': { type: 'font-size', name: '3xl', value: 2.027, unit: 'rem' },
    '--ves-font-size-2xl': { type: 'font-size', name: '2xl', value: 1.602, unit: 'rem' },
    '--ves-font-size-xl': { type: 'font-size', name: 'xl', value: 1.424, unit: 'rem' },
    '--ves-font-size-lg': { type: 'font-size', name: 'lg', value: 1.266, unit: 'rem' },
    '--ves-font-size-md': { type: 'font-size', name: 'md', value: 1.125, unit: 'rem' },
    '--ves-font-size-sm': { type: 'font-size', name: 'sm', value: 1, unit: 'rem' },
    '--ves-font-size-xs': { type: 'font-size', name: 'xs', value: 0.889, unit: 'rem' },
    '--ves-font-size-2xs': { type: 'font-size', name: '2xs', value: 0.79, unit: 'rem' },
  },

  'font-weights': {
    '--ves-font-weight-light': {
      type: 'font-weight',
      name: 'light',
      value: 200,
    },
    '--ves-font-weight-regular': {
      type: 'font-weight',
      name: 'regular',
      value: 400,
    },
    '--ves-font-weight-semibold': {
      type: 'font-weight',
      name: 'semibold',
      value: 600,
    },
    '--ves-font-weight-bold': { type: 'font-weight', name: 'bold', value: 800 },
  },

  spacing: {
    '--ves-spacing-1': { type: 'spacing', name: '1', value: 0.1429, unit: 'rem' },
    '--ves-spacing-2': { type: 'spacing', name: '2', value: 0.2857, unit: 'rem' },
    '--ves-spacing-3': { type: 'spacing', name: '3', value: 0.5714, unit: 'rem' },
    '--ves-spacing-4': { type: 'spacing', name: '4', value: 0.8571, unit: 'rem' },
    '--ves-spacing-5': { type: 'spacing', name: '5', value: 1.1429, unit: 'rem' },
    '--ves-spacing-6': { type: 'spacing', name: '6', value: 1.7143, unit: 'rem' },
    '--ves-spacing-7': { type: 'spacing', name: '7', value: 2.2857, unit: 'rem' },
    '--ves-spacing-8': { type: 'spacing', name: '8', value: 2.5714, unit: 'rem' },
    '--ves-spacing-9': { type: 'spacing', name: '9', value: 3.4286, unit: 'rem' },
    '--ves-spacing-10': { type: 'spacing', name: '10', value: 4.5714, unit: 'rem' },
  },
} as const satisfies Record<string, Record<string, Token>>;

export default tokens;
