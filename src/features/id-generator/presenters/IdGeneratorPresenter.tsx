import React, { FC } from 'react';
import { ID } from '../types/ID';

interface IdGeneratorPresenterProps {
  ids: ID[];
  handleGenerateUuid: () => void;
  handleGenerateUlid: () => void;
}

export const IdGeneratorPresenter: FC<IdGeneratorPresenterProps> = (props) => {
  return (
    <div>
      <button onClick={props.handleGenerateUuid}>UUID</button>
      <button onClick={props.handleGenerateUlid}>ULID</button>
      <ul>
        {props.ids.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};
