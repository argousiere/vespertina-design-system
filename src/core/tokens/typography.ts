import tokens from './tokens';

const typography = {
  family: {
    primary: tokens['font-families']['--ves-font-family-primary'].value,
    mono: tokens['font-families']['--ves-font-family-mono'].value,
  },
  weight: Object.fromEntries(
    Object.values(tokens['font-weights']).map(({ name, value }) => [name, value])
  ),
  // rem, scale: 1.125, fluid down to min
  size: Object.entries(tokens['font-sizes']).map(([variable, token]) => ({
    name: token.name,
    value: token.value,
    min: 'min' in token ? token.min : undefined,
    variable,
  })),
};

export default typography;
