import * as React from 'react';
import clsx from 'clsx';
import { FC } from '@types';
import { TabProps } from './types';
import styles from './Tabs.module.css';

const Tab: FC<TabProps> = ({
  children,
  value,
  isSelected,
  className,
  onChangeTab,
  onClick,
  ...other
}) => {
  const handleChangeTab = (e: React.MouseEvent<HTMLLIElement>) => {
    onChangeTab && onChangeTab(e, value);
    onClick && onClick(e);
  };

  return (
    <li
      {...other}
      onClick={handleChangeTab}
      className={clsx(
        styles.tab,
        {
          [styles.activeTab]: isSelected,
        },
        className
      )}
    >
      {children}
    </li>
  );
};

export default Tab;
