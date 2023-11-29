import { FC, useState } from 'react';
import { Button } from '../../../../common/ui/button/Button';
import { UUIDGenerateHandler, UUIDType } from '../../models/UUID';
import { TextBox } from '../../../../common/ui/input/TextBox';
import { ListBox, ListBoxItem } from '../../../../common/ui/input/ListBox';

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

interface UUIDPanelProps {
  handleGenerateUUID: UUIDGenerateHandler;
}

export const UUIDPanel: FC<UUIDPanelProps> = ({ handleGenerateUUID }) => {
  const [formDate, setFormData] = useState<{
    type: UUIDType;
    name: string;
  }>({
    type: 'v4',
    name: '',
  });

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

  return (
    <div>
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
      <Button label="Generate" onClick={handleGenerateUUID(formDate.type, formDate.name)} />
    </div>
  );
};
