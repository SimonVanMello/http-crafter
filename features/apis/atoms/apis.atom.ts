import { atom } from 'jotai';

import Api from '@app/database/entities/Api.entity';

const apisAtom = atom<Api[]>([]);

export default apisAtom;
