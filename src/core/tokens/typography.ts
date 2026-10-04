import tokens from './tokens';

const typography = {
  family: {
    primary: tokens['font-families']['--ves-font-family-primary'].value,
  },
  weight: Object.fromEntries(
    Object.values(tokens['font-weights']).map(({ name, value }) => [name, value])
  ),
  // rem, scale: 1.125
  size: Object.entries(tokens['font-sizes']).map(([variable, { name, value }]) => ({
    name,
    value,
    variable,
  })),
};

export default typography;
