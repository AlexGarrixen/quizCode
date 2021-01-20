import * as React from 'react';
import { HomeContext, HomeContextValue } from '../Context';
import useFormVisibility from './useFormVisibility';

const useSelectedCategory = () => {
  const { categoryId, setCategoryId: setState } = React.useContext(
    HomeContext
  ) as HomeContextValue;

  const { visibleDialog, setVisibilityDialog } = useFormVisibility();

  const setCategoryId = React.useCallback(
    (id: string) => () => {
      setState(id);
      setVisibilityDialog();
    },
    [categoryId, visibleDialog]
  );

  return {
    categoryId,
    setCategoryId,
  };
};

export default useSelectedCategory;
