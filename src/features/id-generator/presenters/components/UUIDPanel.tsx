import { FC, useState } from 'react';
import { Button } from '../../../../common/ui/button/Button';
import { UUIDGenerateHandler, UUIDType } from '../../models/UUID';
import { Select } from '../../../../common/ui/select/Select';
import { TextBox } from '../../../../common/ui/input/TextBox';
import { type } from 'os';

const UUIDTypeList: {
  [key in UUIDType]: {
    label: string;
  };
} = {
  v1: {
    label: 'Version 1',
  },
  v3: {
    label: 'Version 3',
  },
  v4: {
    label: 'Version 4',
  },
  v5: {
    label: 'Version 5',
  },
};

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
      [event.target.id]: event.target.value,
    });
  };

  const handleUuidTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formDate,
      type: event.target.value as UUIDType,
    });
  };

  return (
    <div>
      <label htmlFor="type">Type</label>
      <Select id="type" onChange={handleUuidTypeChange} value={formDate.type}>
        {Object.entries(UUIDTypeList).map(([key, value]) => (
          <option key={key} value={key}>
            {value.label}
          </option>
        ))}
      </Select>
      {(formDate.type === 'v3' || formDate.type === 'v5') && (
        <div>
          <label htmlFor="name">Name</label>
          <TextBox type="text" id="name" value={formDate.name} onChange={handleTextChange} />
        </div>
      )}
      <Button label="Generate" onClick={handleGenerateUUID(formDate.type, formDate.name)} />
    </div>
  );
};
