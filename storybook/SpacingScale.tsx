export interface SpacingScaleElement {
  name: string;
  token: string;
  value: number;
}

export interface SpacingConfig {
  gridSize: number;
  direction: 'horizontal' | 'vertical';
}

const spacingScaleHeaders = [
  'Name',
  'Token',
  'Size (rem)',
  'Grid ratio',
  'Example',
];

const SpacingScale = ({
  config,
  scales,
}: {
  config: SpacingConfig;
  scales: SpacingScaleElement[];
}) => (
  <table>
    <thead>
      <tr>
        {spacingScaleHeaders.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {scales.map((scale, scaleIndex) => {
        const sizeRem = `${scale.value}rem`;
        const isHorizontal = config.direction === 'horizontal';
        return (
          <tr key={scaleIndex}>
            <td>
              <code>{scale.name}</code>
            </td>
            <td>
              <code>{scale.token}</code>
            </td>
            <td>{sizeRem}</td>
            <td>{+(scale.value / config.gridSize).toFixed(3)}×</td>
            <td>
              <div
                style={{
                  width: isHorizontal ? sizeRem : `${config.gridSize}rem`,
                  height: isHorizontal ? 16 : sizeRem,
                  background: 'var(--ves-global-color-cerulean)',
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SpacingScale;
