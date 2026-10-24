import clsx from 'clsx';
import { ProgressiveBlurDirection } from '../constants';



export interface ProgressiveBlurProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  direction?: ProgressiveBlurDirection;
  fillSize?: number;
}

const LAYER_COUNT = 6;
const LAYER_STEP = 100 / LAYER_COUNT;

const layerStep = (offset: number, index: number) => `${(index + offset) * LAYER_STEP}%`;

const toLayerStyle = (index: number): React.CSSProperties => {

  return {
    maskImage: `linear-gradient(
      var(--ves-progressive-blur-direction), 
      transparent ${layerStep(0, index)},
      #000 ${layerStep(1, index)}, 
      #000 ${layerStep(2, index)}, 
      transparent ${layerStep(3, index)})`,
    backdropFilter: `blur(calc(var(--ves-progressive-blur-min) * ${2 ** index}))`,
  };
};

const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  direction = ProgressiveBlurDirection.BOTTOM_TO_TOP,
  fillSize,
  className,
  style,
  ...props
}) => (
  <div
    className={clsx(
      'ves-progressive-blur',
      `ves-progressive-blur--${direction}`,
      className
    )}
    style={
      {
        ...(fillSize !== undefined && {
          '--ves-progressive-blur-fill-size': `${fillSize}%`,
        }),
        ...style,
      } as React.CSSProperties
    }
    aria-hidden="true"
    {...props}
  >
    {Array.from({ length: LAYER_COUNT }, (_, index) => (
      <span
        key={index}
        className="ves-progressive-blur__layer"
        style={toLayerStyle(index)}
      />
    ))}
  </div>
);

export default ProgressiveBlur;
