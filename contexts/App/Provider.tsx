import * as React from 'react';
import AppContext from './Context';
import { FC } from '@types';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [categories, setCategories] = React.useState({});
  const player = React.useRef<string>('');

  const contextValue = React.useMemo(
    () => ({
      categories,
      setCategories,
      player,
    }),
    [categories, player]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
