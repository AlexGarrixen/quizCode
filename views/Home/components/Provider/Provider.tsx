import * as React from 'react';
import { HomeContext } from '../Context';
import { FC } from '@types';

interface HomeProviderProps {
  children?: React.ReactNode;
}

const HomeProvider: FC<HomeProviderProps> = ({ children }) => {
  const [categoryId, setCategoryId] = React.useState<string>('');
  const [visibleDialog, setVisibilityDialog] = React.useState<boolean>(false);

  const contextValue = React.useMemo(
    () => ({ categoryId, setCategoryId, visibleDialog, setVisibilityDialog }),
    [categoryId, visibleDialog]
  );

  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
};

export default HomeProvider;
