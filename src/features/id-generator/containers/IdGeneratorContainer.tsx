import React from 'react';
import { IdGeneratorPresenter } from '../presenters/IdGeneratorPresenter';
import { ulid } from 'ulid';
import { v4 as uuidv4 } from 'uuid';
import { ULID } from '../types/ULID';
import { ID } from '../types/ID';
import { UUID } from '../types/UUID';

export const IdGeneratorContainer = () => {
  const [ids, setIds] = React.useState<ID[]>([]);

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
