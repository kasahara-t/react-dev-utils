import { FC, MouseEvent } from 'react';
import { ID } from '../models/ID';
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
    <article>
      <div className="tw-flex tw-justify-center tw-gap-x-3">
        <Button onClick={props.handleGenerateUuid} label="UUID" />
        <Button onClick={props.handleGenerateUlid} label="ULID" />
      </div>
      <div className="tw-mt-3 tw-rounded-lg tw-border tw-p-4">
        <ul className="tw-flex tw-flex-col tw-gap-y-3">
          {props.ids.map((id) => (
            <li
              className="tw-flex tw-items-center tw-justify-between tw-rounded tw-bg-stone-200 tw-px-5 tw-py-3"
              key={id}
            >
              <span>{id}</span>
              <button onClick={handleCopy(id)}>copy</button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
