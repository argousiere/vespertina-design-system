import tokens from './tokens';

export interface SpacingToken {
  name: string;
  variable: string;
  value: number; // in rem
  min?: number; // in rem
}

const scale: SpacingToken[] = Object.entries(tokens.spacing).map(
  ([variable, token]) => ({
    name: token.name,
    value: token.value,
    min: 'min' in token ? token.min : undefined,
    variable,
  })
);

// Vertical rhythm: component heights are multiples of the grid size
const grid = {
  variable: '--ves-grid-size',
  value: tokens.grid['--ves-grid-size'].value,
};

const spacing = {
  scale,
  grid,
};

export default spacing;
