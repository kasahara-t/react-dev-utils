import { FC, ReactNode } from 'react';
import { TabView } from '@features/shared/ui/layout/TabView';
import { ID } from '../models/ID';
import { UUIDGenerateHandler } from '../models/UUID';
import { IDHistoryPanel } from './IDHistoryPanel';
import { ULIDPanel } from './ULIDPanel';
import { UUIDPanel } from './UUIDPanel';

interface IdGeneratorPresenterProps {
  ids: ID[];
  handleGenerateUuid: UUIDGenerateHandler;
  handleGenerateUlid: () => void;
}

interface TabInfo {
  label: string;
  panel: ReactNode;
}

export const IdGeneratorPresenter: FC<IdGeneratorPresenterProps> = (props) => {
  const tabs: TabInfo[] = [
    {
      label: 'UUID',
      panel: <UUIDPanel handleGenerateUUID={props.handleGenerateUuid} />,
    },
    {
      label: 'ULID',
      panel: <ULIDPanel handleGenerateULID={props.handleGenerateUlid} />,
    },
  ];

  return (
    <article>
      <TabView tabs={tabs} />
      <IDHistoryPanel ids={props.ids} />
    </article>
  );
};
