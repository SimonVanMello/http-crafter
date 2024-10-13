import ColorMode from '@app/types/ColorMode.type';
import { atomWithAsyncStorage } from '@app/utils/jotai.utils';

const colorModeAtom = atomWithAsyncStorage<ColorMode>('colorMode', 'light');

export default colorModeAtom;
