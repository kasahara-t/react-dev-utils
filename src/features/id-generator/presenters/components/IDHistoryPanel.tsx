import { FC } from 'react';
import { ID } from '../../models/ID';
import { IDHistory } from './IDHistory';

interface IDHistoryPanelProps {
  ids: ID[];
}

export const IDHistoryPanel: FC<IDHistoryPanelProps> = ({ ids }) => {
  return (
    <div className="tw-mt-3 tw-rounded-xl tw-border tw-p-4">
      <ul className="tw-flex tw-flex-col tw-gap-y-3">
        {ids.map((_, i, a) => {
          const index = a.length - i - 1;
          return <IDHistory key={index} id={a[index]} />;
        })}
      </ul>
    </div>
  );
};
