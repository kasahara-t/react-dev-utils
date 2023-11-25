import React, { FC, MouseEvent } from 'react';
import { ID } from '../types/ID';
import { Button } from '../../../common/ui/button/Button';

interface IdGeneratorPresenterProps {
  ids: ID[];
  handleGenerateUuid: () => void;
  handleGenerateUlid: () => void;
}

export const IdGeneratorPresenter: FC<IdGeneratorPresenterProps> = (props) => {
  let timeoutId: NodeJS.Timeout;
  const handleCopy = (id: ID) => (e: MouseEvent) => {
    clearTimeout(timeoutId);
    navigator.clipboard.writeText(id);
    const buttonElement = e.target as HTMLButtonElement;
    buttonElement.innerText = 'copied!';
    timeoutId = setTimeout(() => {
      buttonElement.innerText = 'copy';
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-center gap-x-3">
        <Button onClick={props.handleGenerateUuid} label="UUID" />
        <Button onClick={props.handleGenerateUlid} label="ULID" />
      </div>
      <div className="mt-3 rounded-lg border p-4">
        <ul className="flex flex-col gap-y-3">
          {props.ids.map((id) => (
            <li
              className="flex items-center justify-between rounded bg-stone-200 px-5 py-3"
              key={id}
            >
              <span>{id}</span>
              <button onClick={handleCopy(id)}>copy</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
