export interface TypeScaleElement {
  name: string;
  value: number;
}

export interface TypeConfig {
  baseSize: number;
  fontWeight: number;
  fontFamily: string;
  sampleText: string;
}

const typeScaleHeaders = ['Name', 'Size (rem)', 'Size (px)', 'Example'];

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
        const fontSize = scale.value * config.baseSize;
        const fontSizePx = `${fontSize}px`;
        return (
          <tr key={scaleIndex}>
            <td>
              <code>{scale.name}</code>
            </td>
            <td>{scale.value}rem</td>
            <td>{fontSizePx}</td>
            <td
              style={{
                fontSize: fontSizePx,
                fontWeight: config.fontWeight,
                fontFamily: config.fontFamily,
                height: fontSize * 1.5,
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
