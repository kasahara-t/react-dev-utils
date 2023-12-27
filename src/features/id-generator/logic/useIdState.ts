import { atom, useRecoilState } from 'recoil';
import { RecoilKeys } from '@lib/recoil/RecoilKeys';
import { ID } from '../models/ID';
import { localStorageEffect } from '@lib/recoil/localStrageEffect';

const idStateKey = RecoilKeys.ID;
const idState = atom<ID[]>({
  key: idStateKey,
  default: [],
  effects: [localStorageEffect(idStateKey)],
});

export const useIdState = () => {
  const [ids, setIds] = useRecoilState(idState);

  const addId = (id: ID) => {
    setIds([...ids, id]);
  };

  const resetIds = () => {
    setIds([]);
  };

  return {
    ids,
    addId,
    resetIds,
  };
};
