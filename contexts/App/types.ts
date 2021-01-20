import * as React from 'react';
import { Category } from '@interfaces';

export type Categories = Record<string, Category>;

export interface ContextValue {
  categories: Categories;
  setCategories: (data: Categories) => void;
  player: { current: string };
}
