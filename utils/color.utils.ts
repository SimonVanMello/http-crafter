const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

const rgbStringToHex = (rgb: string) => {
  const [r, g, b] = rgb.split(' ').map((value) => parseInt(value, 10));
  return rgbToHex(r, g, b);
};

const colorUtils = {
  rgbToHex,
  rgbStringToHex,
};

export default colorUtils;
