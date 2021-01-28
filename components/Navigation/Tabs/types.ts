import * as React from 'react';

export interface TabsProps extends React.HTMLAttributes<HTMLUListElement> {
  onChangeTab: (e, newValue: unknown) => void;
  children?: JSX.Element[] | JSX.Element;
  value?: unknown;
}

export interface TabProps extends React.HTMLAttributes<HTMLLIElement> {
  value: unknown;
  isSelected?: boolean;
  children?: React.ReactNode;
  onChangeTab?: (e, newValue: unknown) => void;
}
