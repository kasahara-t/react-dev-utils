import { FC } from 'react';
import { useIdState } from '../logic/useIdState';
import { GeneratedIdCard } from './GeneratedIdCard';

export const IdHistoryList: FC = () => {
  const { ids } = useIdState();
  return (
    <div className="tw-mt-3 tw-rounded-xl tw-border tw-p-4">
      <ul className="tw-flex tw-flex-col tw-gap-y-3">
        {ids.map((_, i, a) => {
          const index = a.length - i - 1;
          return <GeneratedIdCard key={index} id={a[index]} />;
        })}
      </ul>
    </div>
  );
};
