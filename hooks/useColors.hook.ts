import resolveConfig from 'tailwindcss/resolveConfig';

import colors from '@app/constants/colors.constants';
import colorUtils from '@app/utils/color.utils';

import tailwindConfig from '../tailwind.config';
import useColorMode from './useColorMode.hook';

// ugly ass hook thanks to tailwind's lack of typescript support for extended theming
const useColors = () => {
  const { colorMode } = useColorMode();
  const fullConfig = resolveConfig(tailwindConfig);

  const getThemeColor = (
    namespace: keyof typeof colors.light,
    key: string | number,
  ) => {
    // @ts-ignore
    const color = colors[colorMode][namespace][key] as string;

    return colorUtils.rgbStringToHex(color);
  };

  return {
    colors: fullConfig.theme.colors,
    getThemeColor,
  };
};

export default useColors;
