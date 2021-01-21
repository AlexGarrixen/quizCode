import * as React from 'react';
import AppContext from '../Context';
import { apiUrl } from '@constants';
import { ContextValue } from '../types';

const useCategory = (categoryId: string) => {
  const { categories } = React.useContext(AppContext) as ContextValue;
  const [category, setCategory] = React.useState(categories[categoryId]);
  const [error, setError] = React.useState<null | boolean>(null);

  const requestCategory = async () => {
    try {
      const response = await fetch(`${apiUrl}/categories/${categoryId}`);
      const data = await response.json();

      setCategory(data.categorie);
    } catch (e) {
      setError(true);
    }
  };

  React.useEffect(() => {
    if (category === undefined && categoryId) requestCategory();
  }, [categoryId]);

  return { category, error };
};

export default useCategory;
