// Source of truth for design tokens

type StringValue = { value: string };
type NumberValue = { value: number; unit?: 'rem' | 'px' }; // unitless when omitted
type FluidNumberValue = NumberValue & { min?: number }; // shrinks to min on small viewports

type BaseToken<T extends string, V extends StringValue | NumberValue> = {
  name?: string;
  type: T;
} & V;

export type ColorToken = BaseToken<'color', StringValue>;
export type FontFamilyToken = BaseToken<'font-family', StringValue>;
export type FontSizeToken = BaseToken<'font-size', FluidNumberValue>;
export type FontWeightToken = BaseToken<'font-weight', NumberValue>;
export type SpacingToken = BaseToken<'spacing', FluidNumberValue>;
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
    '--ves-global-color-asteroid-light-4': {
      type: 'color',
      name: 'Asteroid Light 4',
      value: 'oklch(0.854 0.006 235)',
    },
    '--ves-global-color-asteroid-light-3': {
      type: 'color',
      name: 'Asteroid Light 3',
      value: 'oklch(0.728 0.009 235)',
    },
    '--ves-global-color-asteroid-light-2': {
      type: 'color',
      name: 'Asteroid Light 2',
      value: 'oklch(0.602 0.013 235)',
    },
    '--ves-global-color-asteroid-light-1': {
      type: 'color',
      name: 'Asteroid Light 1',
      value: 'oklch(0.476 0.016 235)',
    },
    '--ves-global-color-asteroid': {
      type: 'color',
      name: 'Asteroid',
      value: 'oklch(0.35 0.02 235)',
    },
    '--ves-global-color-asteroid-dark-1': {
      type: 'color',
      name: 'Asteroid Dark 1',
      value: 'oklch(0.318 0.018 235)',
    },
    '--ves-global-color-asteroid-dark-2': {
      type: 'color',
      name: 'Asteroid Dark 2',
      value: 'oklch(0.285 0.016 235)',
    },
    '--ves-global-color-asteroid-dark-3': {
      type: 'color',
      name: 'Asteroid Dark 3',
      value: 'oklch(0.253 0.014 235)',
    },
    '--ves-global-color-asteroid-dark-4': {
      type: 'color',
      name: 'Asteroid Dark 4',
      value: 'oklch(0.22 0.012 235)',
    },
    '--ves-global-color-cydonia-light-4': {
      type: 'color',
      name: 'Cydonia Light 4',
      value: 'oklch(0.943 0.026 75.2)',
    },
    '--ves-global-color-cydonia-light-3': {
      type: 'color',
      name: 'Cydonia Light 3',
      value: 'oklch(0.906 0.043 75.2)',
    },
    '--ves-global-color-cydonia-light-2': {
      type: 'color',
      name: 'Cydonia Light 2',
      value: 'oklch(0.87 0.06 75.2)',
    },
    '--ves-global-color-cydonia-light-1': {
      type: 'color',
      name: 'Cydonia Light 1',
      value: 'oklch(0.833 0.077 75.2)',
    },
    '--ves-global-color-cydonia': {
      type: 'color',
      name: 'Cydonia',
      value: 'oklch(79.571% 0.09429 75.227)',
    },
    '--ves-global-color-cydonia-dark-1': {
      type: 'color',
      name: 'Cydonia Dark 1',
      value: 'oklch(0.652 0.085 75.2)',
    },
    '--ves-global-color-cydonia-dark-2': {
      type: 'color',
      name: 'Cydonia Dark 2',
      value: 'oklch(0.508 0.075 75.2)',
    },
    '--ves-global-color-cydonia-dark-3': {
      type: 'color',
      name: 'Cydonia Dark 3',
      value: 'oklch(0.364 0.066 75.2)',
    },
    '--ves-global-color-cydonia-dark-4': {
      type: 'color',
      name: 'Cydonia Dark 4',
      value: 'oklch(0.22 0.056 75.2)',
    },
    '--ves-global-color-aurora-light-4': {
      type: 'color',
      name: 'Aurora Light 4',
      value: 'oklch(0.944 0.034 190)',
    },
    '--ves-global-color-aurora-light-3': {
      type: 'color',
      name: 'Aurora Light 3',
      value: 'oklch(0.908 0.055 190)',
    },
    '--ves-global-color-aurora-light-2': {
      type: 'color',
      name: 'Aurora Light 2',
      value: 'oklch(0.872 0.077 190)',
    },
    '--ves-global-color-aurora-light-1': {
      type: 'color',
      name: 'Aurora Light 1',
      value: 'oklch(0.836 0.098 190)',
    },
    '--ves-global-color-aurora': {
      type: 'color',
      name: 'Aurora',
      value: 'oklch(0.8 0.12 190)',
    },
    '--ves-global-color-aurora-dark-1': {
      type: 'color',
      name: 'Aurora Dark 1',
      value: 'oklch(0.655 0.108 190)',
    },
    '--ves-global-color-aurora-dark-2': {
      type: 'color',
      name: 'Aurora Dark 2',
      value: 'oklch(0.51 0.096 190)',
    },
    '--ves-global-color-aurora-dark-3': {
      type: 'color',
      name: 'Aurora Dark 3',
      value: 'oklch(0.365 0.084 190)',
    },
    '--ves-global-color-aurora-dark-4': {
      type: 'color',
      name: 'Aurora Dark 4',
      value: 'oklch(0.22 0.072 190)',
    },
    '--ves-global-color-gliese-light-4': {
      type: 'color',
      name: 'Gliese Light 4',
      value: 'oklch(0.912 0.05 350)',
    },
    '--ves-global-color-gliese-light-3': {
      type: 'color',
      name: 'Gliese Light 3',
      value: 'oklch(0.844 0.083 350)',
    },
    '--ves-global-color-gliese-light-2': {
      type: 'color',
      name: 'Gliese Light 2',
      value: 'oklch(0.776 0.115 350)',
    },
    '--ves-global-color-gliese-light-1': {
      type: 'color',
      name: 'Gliese Light 1',
      value: 'oklch(0.708 0.148 350)',
    },
    '--ves-global-color-gliese': {
      type: 'color',
      name: 'Gliese',
      value: 'oklch(0.64 0.18 350)',
    },
    '--ves-global-color-gliese-dark-1': {
      type: 'color',
      name: 'Gliese Dark 1',
      value: 'oklch(0.535 0.162 350)',
    },
    '--ves-global-color-gliese-dark-2': {
      type: 'color',
      name: 'Gliese Dark 2',
      value: 'oklch(0.43 0.144 350)',
    },
    '--ves-global-color-gliese-dark-3': {
      type: 'color',
      name: 'Gliese Dark 3',
      value: 'oklch(0.325 0.126 350)',
    },
    '--ves-global-color-gliese-dark-4': {
      type: 'color',
      name: 'Gliese Dark 4',
      value: 'oklch(0.22 0.108 350)',
    },
    '--ves-global-color-mars-light-4': {
      type: 'color',
      name: 'Mars Light 4',
      value: 'oklch(0.914 0.056 27)',
    },
    '--ves-global-color-mars-light-3': {
      type: 'color',
      name: 'Mars Light 3',
      value: 'oklch(0.848 0.092 27)',
    },
    '--ves-global-color-mars-light-2': {
      type: 'color',
      name: 'Mars Light 2',
      value: 'oklch(0.782 0.128 27)',
    },
    '--ves-global-color-mars-light-1': {
      type: 'color',
      name: 'Mars Light 1',
      value: 'oklch(0.716 0.164 27)',
    },
    '--ves-global-color-mars': {
      type: 'color',
      name: 'Mars',
      value: 'oklch(0.65 0.2 27)',
    },
    '--ves-global-color-mars-dark-1': {
      type: 'color',
      name: 'Mars Dark 1',
      value: 'oklch(0.542 0.18 27)',
    },
    '--ves-global-color-mars-dark-2': {
      type: 'color',
      name: 'Mars Dark 2',
      value: 'oklch(0.435 0.16 27)',
    },
    '--ves-global-color-mars-dark-3': {
      type: 'color',
      name: 'Mars Dark 3',
      value: 'oklch(0.328 0.14 27)',
    },
    '--ves-global-color-mars-dark-4': {
      type: 'color',
      name: 'Mars Dark 4',
      value: 'oklch(0.22 0.12 27)',
    },
    '--ves-global-color-titan-light-4': {
      type: 'color',
      name: 'Titan Light 4',
      value: 'oklch(0.936 0.045 55)',
    },
    '--ves-global-color-titan-light-3': {
      type: 'color',
      name: 'Titan Light 3',
      value: 'oklch(0.892 0.074 55)',
    },
    '--ves-global-color-titan-light-2': {
      type: 'color',
      name: 'Titan Light 2',
      value: 'oklch(0.848 0.102 55)',
    },
    '--ves-global-color-titan-light-1': {
      type: 'color',
      name: 'Titan Light 1',
      value: 'oklch(0.804 0.131 55)',
    },
    '--ves-global-color-titan': {
      type: 'color',
      name: 'Titan',
      value: 'oklch(0.76 0.16 55)',
    },
    '--ves-global-color-titan-dark-1': {
      type: 'color',
      name: 'Titan Dark 1',
      value: 'oklch(0.663 0.123 58.66)',
    },
    '--ves-global-color-titan-dark-2': {
      type: 'color',
      name: 'Titan Dark 2',
      value: 'oklch(0.567 0.087 58.66)',
    },
    '--ves-global-color-titan-dark-3': {
      type: 'color',
      name: 'Titan Dark 3',
      value: 'oklch(0.47 0.05 58.66)',
    },
    '--ves-global-color-titan-dark-4': {
      type: 'color',
      name: 'Titan Dark 4',
      value: 'oklch(0.373 0.035 58.66)',
    },
    '--ves-global-color-vespene-light-4': {
      type: 'color',
      name: 'Vespene Light 4',
      value: 'oklch(0.94 0.048 145)',
    },
    '--ves-global-color-vespene-light-3': {
      type: 'color',
      name: 'Vespene Light 3',
      value: 'oklch(0.9 0.078 145)',
    },
    '--ves-global-color-vespene-light-2': {
      type: 'color',
      name: 'Vespene Light 2',
      value: 'oklch(0.86 0.109 145)',
    },
    '--ves-global-color-vespene-light-1': {
      type: 'color',
      name: 'Vespene Light 1',
      value: 'oklch(0.82 0.139 145)',
    },
    '--ves-global-color-vespene': {
      type: 'color',
      name: 'Vespene',
      value: 'oklch(0.78 0.17 145)',
    },
    '--ves-global-color-vespene-dark-1': {
      type: 'color',
      name: 'Vespene Dark 1',
      value: 'oklch(0.64 0.153 145)',
    },
    '--ves-global-color-vespene-dark-2': {
      type: 'color',
      name: 'Vespene Dark 2',
      value: 'oklch(0.5 0.136 145)',
    },
    '--ves-global-color-vespene-dark-3': {
      type: 'color',
      name: 'Vespene Dark 3',
      value: 'oklch(0.36 0.119 145)',
    },
    '--ves-global-color-vespene-dark-4': {
      type: 'color',
      name: 'Vespene Dark 4',
      value: 'oklch(0.22 0.102 145)',
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
    '--ves-font-family-mono': {
      type: 'font-family',
      name: 'mono',
      value: "'Space Mono', 'SFMono-Regular', Menlo, Consolas, monospace",
    },
  },

  // Scale of 1.125, shrinking to a scale of ~1.1 at minViewport
  'font-sizes': {
    '--ves-font-size-4xl': { type: 'font-size', name: '4xl', value: 3.4286, min: 2.2857, unit: 'rem' },
    '--ves-font-size-3xl': { type: 'font-size', name: '3xl', value: 2.027, min: 1.6429, unit: 'rem' },
    '--ves-font-size-2xl': { type: 'font-size', name: '2xl', value: 1.602, min: 1.3929, unit: 'rem' },
    '--ves-font-size-xl': { type: 'font-size', name: 'xl', value: 1.424, min: 1.25, unit: 'rem' },
    '--ves-font-size-lg': { type: 'font-size', name: 'lg', value: 1.266, min: 1.1429, unit: 'rem' },
    '--ves-font-size-md': { type: 'font-size', name: 'md', value: 1.125, min: 1.0357, unit: 'rem' },
    '--ves-font-size-sm': { type: 'font-size', name: 'sm', value: 1, min: 0.9286, unit: 'rem' },
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
    '--ves-spacing-6': { type: 'spacing', name: '6', value: 1.7143, min: 1.1429, unit: 'rem' },
    '--ves-spacing-7': { type: 'spacing', name: '7', value: 2.2857, min: 1.7143, unit: 'rem' },
    '--ves-spacing-8': { type: 'spacing', name: '8', value: 2.5714, min: 2, unit: 'rem' },
    '--ves-spacing-9': { type: 'spacing', name: '9', value: 3.4286, min: 2.2857, unit: 'rem' },
    '--ves-spacing-10': { type: 'spacing', name: '10', value: 4.5714, min: 2.8571, unit: 'rem' },
  },
} as const satisfies Record<string, Record<string, Token>>;

export default tokens;
