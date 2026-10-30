export interface TypeScaleElement {
  name: string;
  variable: string;
  value: number; // in rem
  min?: number; // in rem
}

export interface TypeConfig {
  fontWeight: number;
  fontFamily: string;
  sampleText: string;
}

const typeScaleHeaders = [
  'Name',
  'Token',
  'Size (rem)',
  'Mobile (rem)',
  'Example',
];

const TypeScale = ({
  config,
  scales,
}: {
  config: TypeConfig;
  scales: TypeScaleElement[];
}) => {
  return (
    <table>
      <thead>
        <tr>
          {typeScaleHeaders.map((header) => {
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {scales.map((scale) => {
          const fontSize = `var(${scale.variable})`;
          return (
            <tr key={scale.variable}>
              <td>
                <code>{scale.name}</code>
              </td>
              <td>
                <code>{scale.variable}</code>
              </td>
              <td>{scale.value}rem</td>
              <td>{scale.min ? `${scale.min}rem` : '—'}</td>
              <td
                style={{
                  fontSize,
                  fontWeight: config.fontWeight,
                  fontFamily: config.fontFamily,
                  height: `calc(${fontSize} * 1.5)`,
                  lineHeight: 1.5,
                }}
              >
                {config.sampleText}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TypeScale;
