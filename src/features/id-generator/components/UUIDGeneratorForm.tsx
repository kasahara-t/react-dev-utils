import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@features/shared/ui/button/Button';
import { ListBox, ListBoxItem } from '@features/shared/ui/input/ListBox';
import { TextBox } from '@features/shared/ui/input/TextBox';
import { useIdState } from '../logic/useIdState';
import { generateUUID } from '../logic/uuidLogic';
import { UUIDType } from '../models/UUID';

const UUIDTypeList: ListBoxItem[] = [
  {
    label: 'Version 1',
    value: 'v1',
  },
  {
    label: 'Version 3',
    value: 'v3',
  },
  {
    label: 'Version 4',
    value: 'v4',
  },
  {
    label: 'Version 5',
    value: 'v5',
  },
];

interface UUIDGeneratorFormData {
  type: UUIDType;
  name: string;
}

const defaultFormData: UUIDGeneratorFormData = {
  type: 'v4',
  name: '',
};

export const UUIDGeneratorForm: FC = () => {
  const [formDate, setFormData] = useState<UUIDGeneratorFormData>(defaultFormData);
  const { addId } = useIdState();
  const { t } = useTranslation();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formDate,
      [event.target.name]: event.target.value,
    });
  };

  const handleUuidTypeChange = (value: string) => {
    setFormData({
      ...formDate,
      type: value as UUIDType,
    });
  };

  const handleClick = () => {
    const uuid = generateUUID(formDate.type, { name: formDate.name });
    addId(uuid);
  };

  return (
    <form>
      <ListBox
        items={UUIDTypeList}
        label="Type"
        defaultValue="v4"
        onChange={handleUuidTypeChange}
      />
      {(formDate.type === 'v3' || formDate.type === 'v5') && (
        <div>
          <TextBox name="name" label="Name" value={formDate.name} onChange={handleTextChange} />
        </div>
      )}
      <Button label={t('idGenerator.generate')} type="button" onClick={handleClick} />
    </form>
  );
};
