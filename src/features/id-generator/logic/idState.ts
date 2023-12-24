import { atom, useRecoilState } from 'recoil';
import { RecoilKeys } from '@lib/recoil/recoilKeys';
import { ID } from '../models/ID';

const idState = atom<ID[]>({
  key: RecoilKeys.ID,
  default: [],
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
