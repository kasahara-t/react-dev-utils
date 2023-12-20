import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeToggleButton } from '../button/ThemeToggleButton';
import { classNames } from '@common/utils/utils';

export const FloatLayout = () => {
  const [isNaviOpen, setIsNaviOpen] = useState<boolean>(false);

  const handleNaviOpen = () => {
    setIsNaviOpen(!isNaviOpen);
  };

  return (
    <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0">
      <div className="tw-w-full tw-h-full tw-flex tw-flex-col">
        <header className="tw-h-12 tw-flex">
          <div className={classNames('tw-h-full', isNaviOpen ? 'tw-w-48' : 'tw-w-16')}>
            <button
              className="tw-w-full tw-h-full tw-flex tw-justify-end tw-items-center"
              onClick={handleNaviOpen}
            >
              <span
                className={classNames(
                  'tw-w-5 tw-h-5 tw-pr-16 tw-text-gray-700',
                  isNaviOpen
                    ? 'tw-i-material-symbols-arrow-back-rounded'
                    : 'tw-i-material-symbols-arrow-forward-rounded',
                )}
              />
            </button>
          </div>
          <div className="tw-flex tw-items-center tw-h-full tw-ml-auto tw-mr-2">
            <ThemeToggleButton className="tw-h-full tw-px-2 tw-mr-2 tw-flex tw-content-center tw-items-center" />
          </div>
        </header>
        <div className="tw-flex-1 tw-flex">
          <div className={classNames('tw-flex tw-flex-col', isNaviOpen ? 'tw-w-48' : 'tw-w-16')}>
            <div className="tw-flex-1">
              <div></div>
            </div>
            <div className="tw-mb-2 tw-flex tw-justify-center tw-items-center">
              <a
                href="https://github.com/kasahara-t/react-dev-utils"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tw-i-mdi-github tw-w-10 tw-h-10 tw-text-gray-700" />
              </a>
            </div>
          </div>
          <div className="tw-flex-1">
            <div className="tw-h-full tw-pb-2 tw-pr-2">
              <main className="tw-w-full tw-h-full tw-border tw-rounded-md tw-relative">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
