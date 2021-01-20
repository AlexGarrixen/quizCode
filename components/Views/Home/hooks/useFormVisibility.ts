import * as React from 'react';
import { HomeContext, HomeContextValue } from '../Context';

const useFormVisibility = () => {
  const { visibleDialog, setVisibilityDialog: setState } = React.useContext(
    HomeContext
  ) as HomeContextValue;

  const setVisibilityDialog = () => {
    setState(!visibleDialog);
  };

  return {
    visibleDialog,
    setVisibilityDialog,
  };
};

export default useFormVisibility;
