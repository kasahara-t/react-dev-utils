import { FC } from 'react';
import { useIdState } from '../logic/useIdState';
import { GeneratedIdCard } from './GeneratedIdCard';
import { Button } from '@features/shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

export const IdHistoryList: FC = () => {
  const { ids, resetIds } = useIdState();
  const { t } = useTranslation();

  return (
    <div className="tw-mt-3 tw-rounded-xl tw-border tw-p-4">
      <ul>
        <li>
          <Button label={t('idGenerator.clearHistory')} onClick={resetIds} />
        </li>
      </ul>
      <ul className="tw-flex tw-flex-col tw-gap-y-3">
        {ids.map((_, i, a) => {
          const index = a.length - i - 1;
          return <GeneratedIdCard key={index} id={a[index]} />;
        })}
      </ul>
    </div>
  );
};
