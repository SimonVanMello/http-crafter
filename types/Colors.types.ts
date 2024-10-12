import colors from '@app/constants/colors.constants';

export type Colors = typeof colors;
export type ColorNamespace = keyof typeof colors.light;
export type ColorScaleKey = keyof typeof colors.light.primary;
