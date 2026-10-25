import tokens from './tokens';

interface ColorGroup {
  name: string;
  variable: string;
  colors: Record<string, string>;
}

const scaleSuffix = /-(light|dark)-\d+$/;

const colors = Object.values(
  Object.entries(tokens.colors).reduce<Record<string, ColorGroup>>(
    (groups, [variable, { name, value }]) => {
      const base = variable.replace(scaleSuffix, '');
      
      const group = (groups[base] ??= { name, variable: base, colors: {} });

      if (variable === base) {
        group.name = name;
      }

      group.colors[
        variable === base ? 'base' : variable.slice(base.length + 1)
      ] = value;

      return groups;
    },
    {}
  )
);

export default colors;
