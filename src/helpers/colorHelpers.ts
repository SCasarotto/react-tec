export const componentToHex = (component: number) => {
  // @ts-ignore
  const x = component.toString(16);
  return x.length === 1 ? '0' + x : x;
};
export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
export const colorBetweenColors = (
  color1: string,
  color2: string,
  percBetween: number,
) => {
  const color1RGB = hexToRgb(color1);
  const color2RGB = hexToRgb(color2);

  if (!color1RGB || !color2RGB) {
    throw new Error('Invalid colors supplied');
  }
  const r = Math.ceil(
    color1RGB.r * percBetween + color2RGB.r * (1 - percBetween),
  );
  const g = Math.ceil(
    color1RGB.g * percBetween + color2RGB.g * (1 - percBetween),
  );
  const b = Math.ceil(
    color1RGB.b * percBetween + color2RGB.b * (1 - percBetween),
  );

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
