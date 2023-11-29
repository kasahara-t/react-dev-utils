import { Listbox } from '@headlessui/react';
import { FC, useState } from 'react';
import { classNames } from '../../utils/utils';

export interface ListBoxItem {
  label: string;
  value: string;
}

interface ListBoxProps {
  items: ListBoxItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const ListBox: FC<ListBoxProps> = ({ items, defaultValue, onChange }) => {
  const [selectedItem, setSelectedItem] = useState<ListBoxItem>(
    items.find((item) => item.value === defaultValue) ?? items[0],
  );

  const handleChange = (selectedValue: ListBoxItem) => {
    setSelectedItem(selectedValue);
    onChange?.(selectedValue.value);
  };

  return (
    <Listbox value={selectedItem} onChange={handleChange}>
      <Listbox.Button
        className={classNames(
          'tw-block tw-w-full tw-rounded-lg tw-border tw-text-left',
          'tw-border-gray-300 tw-bg-gray-50 tw-p-2.5 tw-text-sm tw-text-gray-900',
          'focus:tw-border-blue-500 focus:tw-ring-blue-500',
          // 'dark:tw-border-gray-600 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-400',
          // 'dark:focus:tw-border-blue-500 dark:focus:tw-ring-blue-500',
        )}
      >
        <span className="tw-block tw-truncate">{selectedItem.label}</span>
      </Listbox.Button>
      <Listbox.Options
        className={classNames(
          'tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md',
          'tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black/5',
          'focus:tw-outline-none sm:tw-text-sm',
        )}
      >
        {items.map((item) => (
          <Listbox.Option
            key={item.value}
            value={item}
            className={({ active }) =>
              classNames(
                'tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-10 tw-pr-4',
                active ? 'tw-bg-blue-50 tw-text-blue-900' : 'tw-text-gray-900',
              )
            }
          >
            <span
              className={classNames(
                'tw-block tw-truncate',
                item.value === selectedItem.value ? 'tw-font-semibold' : 'tw-font-normal',
              )}
            >
              {item.label}
            </span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
