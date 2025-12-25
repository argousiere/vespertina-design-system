interface Color {
  name: string;
  hex: string;
  variable: string;
}

const prefix = `ves-global-color`;

const colors: Color[] = [
  { name: 'Light', hex: '#edf8fe' },
  { name: 'Moonrock', hex: '#c1e1f3' },
  { name: 'Enceladus', hex: '#2ad8f0' },
  { name: 'Cerulean', hex: '#23c0ff' },
  { name: 'Celestial', hex: '#015881' },
  { name: 'Kyanite', hex: '#004460' },
  { name: 'Dusk', hex: '#011e30' },
  { name: 'Midnight', hex: '#011119' },
  { name: 'Asteroid', hex: '#394f58' },
  { name: 'Cydonia', hex: '#ffce84' },
  { name: 'Aurora', hex: '#44e1bb' },
  { name: 'Gliese', hex: '#e35490' },
].map((color) => {
  return {
    variable: `--${prefix}-${color.name.toLowerCase()}`,
    ...color,
  };
});

export default colors;
