import { IdGeneratorPresenter } from '../presenters/IdGeneratorPresenter';
import { ulid } from 'ulid';
import { v4 as uuidv4 } from 'uuid';
import { ULID } from '../models/ULID';
import { ID } from '../models/ID';
import { UUID } from '../models/UUID';
import { useState } from 'react';

export const IdGeneratorContainer = () => {
  const [ids, setIds] = useState<ID[]>([]);

  const handleGenerateUuid = (): void => {
    setIds([...[uuidv4() as UUID, ...ids]]);
  };

  const handleGenerateUlid = (): void => {
    setIds([...[ulid() as ULID], ...ids]);
  };

  return (
    <IdGeneratorPresenter
      handleGenerateUlid={handleGenerateUlid}
      handleGenerateUuid={handleGenerateUuid}
      ids={ids}
    />
  );
};
