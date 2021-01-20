import * as React from 'react';
import { Category } from '@interfaces';
import { apiUrl } from '@constants';
import AppContext from '../Context';
import { Categories, ContextValue } from '../types';

const useCategories = () => {
  const { categories, setCategories: setState } = React.useContext(
    AppContext
  ) as ContextValue;
  const requested = Boolean(Object.values(categories).length);
  const [requesting, setRequesting] = React.useState(!requested);
  const [error, setError] = React.useState<null | boolean>(null);

  const setCategories = (data: Category[]): void => {
    let categoriesMap: Categories = {};

    for (let category of data) {
      categoriesMap = { ...categoriesMap, [category._id]: category };
    }

    setState(categoriesMap);
  };

  const requestCategories = async () => {
    try {
      if (!requested) {
        const response = await fetch(`${apiUrl}/categories`);
        const data = await response.json();

        setCategories(data.categories);
        setRequesting(false);
      }
    } catch (e) {
      setError(true);
    }
  };

  return {
    categories,
    error,
    requesting,
    requestCategories,
  };
};

export default useCategories;
