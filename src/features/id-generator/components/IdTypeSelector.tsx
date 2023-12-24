import { FC } from 'react';
import { TabItem, TabView } from '@features/shared/ui/layout/TabView';
import { ULIDGeneratorForm } from './ULIDGenerateForm';
import { UUIDGeneratorForm } from './UUIDGeneratorForm';

const tabs: TabItem[] = [
  {
    label: 'UUID',
    panel: <UUIDGeneratorForm />,
  },
  {
    label: 'ULID',
    panel: <ULIDGeneratorForm />,
  },
];

export const IdTypeSelector: FC = () => {
  return <TabView tabs={tabs} />;
};
