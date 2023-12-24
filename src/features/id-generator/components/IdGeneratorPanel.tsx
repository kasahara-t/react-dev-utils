import { FC } from 'react';
import { IdHistoryList } from './IdHistoryList';
import { IdTypeSelector } from './IdTypeSelector';

export const IdGeneratorPanel: FC = () => {
  return (
    <div>
      <IdTypeSelector />
      <IdHistoryList />
    </div>
  );
};
