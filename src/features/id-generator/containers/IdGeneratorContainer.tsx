import { IdGeneratorPresenter } from '../presenters/IdGeneratorPresenter';
import { ulid } from 'ulid';
import { v4 as uuidv4, v1 as uuidv1, v3 as uuidv3, v5 as uuidv5 } from 'uuid';
import { ULID } from '../models/ULID';
import { ID } from '../models/ID';
import { UUID, UUIDType } from '../models/UUID';
import { useState } from 'react';

export const IdGeneratorContainer = () => {
  const [ids, setIds] = useState<ID[]>([]);

  const handleGenerateUuid = (type: UUIDType, name?: string) => (): void => {
    let id: UUID;
    switch (type) {
      case 'v1':
        id = uuidv1();
        break;
      case 'v3':
        id = uuidv3(name ? name : 'defaultValue', uuidv3.DNS);
        break;
      case 'v4':
        id = uuidv4();
        break;
      case 'v5':
        id = uuidv5(name ? name : 'defaultValue', uuidv5.DNS);
        break;
      default:
        id = uuidv4();
        break;
    }
    setIds([...ids, id]);
  };

  const handleGenerateUlid = (): void => {
    setIds([...ids, ulid() as ULID]);
  };

  return (
    <IdGeneratorPresenter
      handleGenerateUlid={handleGenerateUlid}
      handleGenerateUuid={handleGenerateUuid}
      ids={ids}
    />
  );
};
