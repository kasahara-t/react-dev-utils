import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@features/shared/ui/button/Button';
import { useIdState } from '../logic/useIdState';
import { generateULID } from '../logic/ulidLogic';

export const ULIDGeneratorForm: FC = () => {
  const { addId } = useIdState();
  const { t } = useTranslation();

  const handleClick = () => {
    const ulid = generateULID();
    addId(ulid);
  };

  return (
    <div>
      <Button label={t('idGenerator.generateId')} type="button" onClick={handleClick} />
    </div>
  );
};
