import { FC } from 'react';
import { Button } from '@features/shared/ui/button/Button';

interface ULIDPanelProps {
  handleGenerateULID: () => void;
}

export const ULIDPanel: FC<ULIDPanelProps> = ({ handleGenerateULID }) => {
  return (
    <div>
      <Button label="Generate" onClick={handleGenerateULID} />
    </div>
  );
};
