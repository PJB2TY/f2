import {
  interpolateNumber,
  interpolateNumberArray,
  interpolateRgb,
  interpolateObject
} from 'd3-interpolate';

// const hasNaN = (obj) => {
//   return Object.keys(obj).find(key => isNaN(obj[key]))
// }

function interpolateObjectArray(a, b) {
  const nb = b ? b.length : 0;
  const na = a ? Math.min(nb, a.length) : 0;
  const x = new Array(na);
  const c = new Array(nb);
  let i;

  for (i = 0; i < na; ++i) x[i] = interpolateObject(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return (t) => {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

export default (a: any, b: any) => {
  if (typeof b === 'string') {
    return interpolateRgb(a, b);
  }
  if (Array.isArray(b)) {
    if (typeof b[0] !== 'number') {
      // if (hasNaN(a[0])) {
      //   return interpolateObjectArray(b, b);
      // }
      return interpolateObjectArray(a, b);
    }
    return interpolateNumberArray(a, b);
  }
  // if (isNaN(a)) {
  //   return interpolateNumber(b, b);
  // }
  return interpolateNumber(a, b);
};
