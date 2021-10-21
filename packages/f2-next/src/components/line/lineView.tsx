import { jsx } from '../../jsx';
import { isArray } from '@antv/util';

export default (props: any) => {
  const { mappedArray } = props;

  return (
    <group>
      {
        mappedArray.map(item => {
          const { color, points, size, lineWidth, lineDash, smooth } = item;
          return (
            <group>
              <polyline
                attrs={{
                  points: points,
                  stroke: color,
                  lineWidth: lineWidth ?? size,
                  lineDash,
                  smooth,
                }}
              />
            </group>
          );
        })
      }
    </group>
  );
}
