import { useState } from 'react';
import { classNames } from '../../utils/utils';

export const FloatLayout = () => {
  const [isNaviOpen, setIsNaviOpen] = useState<boolean>(false);

  const handleNaviOpen = () => {
    setIsNaviOpen(!isNaviOpen);
  };

  return (
    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0">
      <div className="tw-w-full tw-h-full tw-flex tw-flex-col">
        <header className="tw-flex tw-items-center tw-h-10">
          <div className={classNames(isNaviOpen ? 'tw-w-48' : 'tw-w-10')}>
            <button className="tw-w-full tw-h-full" onClick={handleNaviOpen}>
              {isNaviOpen ? '<-' : '->'}
            </button>
          </div>
          <div className="tw-ml-auto">header tool bar</div>
        </header>
        <div className="tw-flex-1 tw-flex">
          <div className={classNames('tw-flex tw-flex-col', isNaviOpen ? 'tw-w-48' : 'tw-w-10')}>
            <div className="tw-flex-1">main menu</div>
            <div>bottom menu</div>
          </div>
          <div className="tw-flex-1 tw-p-2">
            <div className="tw-w-full tw-h-full tw-border tw-rounded-lg tw-p-4">
              <main className="tw-relative">main</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
