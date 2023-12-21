import { FC, ReactNode } from 'react';
import { Tab } from '@headlessui/react';
import { classNames } from '@common/utils/utils';
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
      <Tab.Group>
        <Tab.List className="tw-flex tw-gap-x-1 tw-rounded-lg tw-bg-blue-900/20 tw-p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              className={({ selected }) =>
                classNames(
                  'tw-w-full tw-rounded-lg tw-py-2.5 tw-text-sm tw-font-medium tw-leading-5',
                  'tw-ring-white/60 tw-ring-offset-2 tw-ring-offset-blue-400 tw-focus:outline-none tw-focus:ring-2',
                  selected
                    ? 'tw-bg-white tw-text-gray-700 tw-shadow'
                    : 'tw-text-gray-800/40 tw-hover:bg-white/[0.12] tw-hover:text-white',
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={'tw-mt-3'}>
          {tabs.map((tab) => (
            <Tab.Panel
              key={tab.label}
              className={classNames(
                'tw-rounded-xl tw-border tw-p-3',
                'tw-ring-white/60 tw-ring-offset-2 tw-ring-offset-blue-400 tw-focus:outline-none tw-focus:ring-2',
              )}
            >
              {tab.panel}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <IDHistoryPanel ids={props.ids} />
    </article>
  );
};
