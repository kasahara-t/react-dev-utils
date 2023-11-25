import { FC } from 'react';
import { Button } from '../../../../common/ui/button/Button';

interface UUIDPanelProps {
  handleGenerateUUID: () => void;
}

export const UUIDPanel: FC<UUIDPanelProps> = ({ handleGenerateUUID }) => {
  return (
    <div>
      <Button label="Generate" onClick={handleGenerateUUID} />
    </div>
  );
};
