import { Button } from '@features/shared/ui/button/Button';
import { FC } from 'react';

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
