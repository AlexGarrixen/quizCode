import * as React from 'react';
import clsx from 'clsx';
import { FC } from '@types';
import { TabsProps } from './types';
import styles from './Tabs.module.css';

const Tabs: FC<TabsProps> = ({
  children: childrenProp,
  onChangeTab,
  value,
  className,
  ...other
}) => {
  let childIndex = 0;

  const children = React.Children.map(childrenProp, (child) => {
    const valueProp = child.props.value || childIndex;
    const isSelected = valueProp === value;

    childIndex++;

    return React.cloneElement(child, {
      onChangeTab,
      value: valueProp,
      isSelected,
    });
  });

  return (
    <ul {...other} className={clsx(styles.root, className)}>
      {children}
    </ul>
  );
};

export default Tabs;
