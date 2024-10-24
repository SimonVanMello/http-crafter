import { useColorScheme } from 'nativewind';

import ColorMode from '@app/types/ColorMode.type';

const defaultColorMode = 'dark';

const useColorMode = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const isDarkMode = colorScheme === 'dark';
  const invertedColorMode: ColorMode = isDarkMode ? 'light' : 'dark';

  const toggleColorMode = () => {
    setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return {
    colorMode: colorScheme || defaultColorMode,
    invertedColorMode,
    isDarkMode,
    setColorMode: setColorScheme,
    toggleColorMode,
  };
};

export default useColorMode;
