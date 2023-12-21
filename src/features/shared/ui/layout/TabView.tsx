import { FC, ReactNode } from 'react';
import { Tab } from '@headlessui/react';
import { classNames } from '@common/utils/utils';

export interface TabItem {
  label: string;
  panel: ReactNode;
}

export interface TabViewProps {
  tabs: TabItem[];
}

export const TabView: FC<TabViewProps> = ({ tabs }) => {
  return (
    <Tab.Group>
      <Tab.List className={classNames('tw-flex tw-w-full tw-border-b')}>
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            className={({ selected }) =>
              classNames('tw-h-12 tw-flex-1', selected ? 'tw-text-primary-900 tw-font-bold' : '')
            }
          >
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.label} className={classNames()}>
            {tab.panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
