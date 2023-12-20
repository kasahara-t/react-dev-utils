import { FC, MouseEvent } from 'react';
import { ID } from '../models/ID';

interface IDHistoryProps {
  id: ID;
}

export const IDHistory: FC<IDHistoryProps> = ({ id }) => {
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
    <li className="tw-flex tw-items-center tw-justify-between tw-rounded-md hover:tw-bg-blue-900/10 tw-p-3">
      <span>{id}</span>
      <button onClick={handleCopy(id)}>copy</button>
    </li>
  );
};
