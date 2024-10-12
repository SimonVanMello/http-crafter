import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import ColorMode from '@app/types/ColorMode.type';

const storage = createJSONStorage<ColorMode>(() => AsyncStorage);

const colorModeAtom = atomWithStorage<ColorMode>('colorMode', 'light', storage);

export default colorModeAtom;
