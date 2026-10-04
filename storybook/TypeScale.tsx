export interface TypeScaleElement {
  name: string;
  variable: string;
  value: number; // in rem
}

export interface TypeConfig {
  fontWeight: number;
  fontFamily: string;
  sampleText: string;
}

const typeScaleHeaders = ['Name', 'Token', 'Size (rem)', 'Example'];

const TypeScale = ({
  config,
  scales,
}: {
  config: TypeConfig;
  scales: TypeScaleElement[];
}) => (
  <table>
    <thead>
      <tr>
        {typeScaleHeaders.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {scales.map((scale, scaleIndex) => {
        const fontSize = `${scale.value}rem`;
        return (
          <tr key={scaleIndex}>
            <td>
              <code>{scale.name}</code>
            </td>
            <td>
              <code>{scale.variable}</code>
            </td>
            <td>{fontSize}</td>
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

export default TypeScale;
