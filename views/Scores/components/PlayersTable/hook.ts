import * as React from 'react';
import { Score } from '@interfaces';

type Filters = 'All' | 'Html' | 'Css' | 'Javascript';

export const useFilter = (initialFilter: Filters, data: Score[]) => {
  const [value, setValue] = React.useState(initialFilter);

  let filteredData = React.useMemo(() => {
    switch (value) {
      case 'Html':
        return data.filter(({ category }) => category === value);
      case 'Css':
        return data.filter(({ category }) => category === value);
      case 'Javascript':
        return data.filter(({ category }) => category === value);
      default:
        return data;
    }
  }, [value, data]);

  const handleChangeTab = React.useCallback(
    (e, newValue) => {
      setValue(newValue);
    },
    [value]
  );

  return {
    handleChangeTab,
    filteredData,
    value,
  };
};
