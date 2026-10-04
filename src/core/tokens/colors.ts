import tokens from './tokens';

interface Color {
  name: string;
  value: string;
  variable: string;
}

const colors: Color[] = Object.entries(tokens.colors).map(
  ([variable, { name, value }]) => ({ name, value, variable })
);

export default colors;
