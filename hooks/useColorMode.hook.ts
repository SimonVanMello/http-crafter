import { useAtom } from 'jotai';

import colorModeAtom from '@app/atoms/colorMode.atom';
import ColorMode from '@app/types/ColorMode.type';

const useColorMode = () => {
  const [colorMode, setColorMode] = useAtom(colorModeAtom);

  const isDarkMode = colorMode === 'dark';
  const invertedColorMode: ColorMode = isDarkMode ? 'light' : 'dark';

  const toggleColorMode = () => {
    setColorMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  };

  return {
    colorMode,
    invertedColorMode,
    isDarkMode,
    setColorMode,
    toggleColorMode,
  };
};

export default useColorMode;
