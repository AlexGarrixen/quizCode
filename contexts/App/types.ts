import { Category, Question, Score } from '@interfaces';

export type Categories = Record<string, Category>;

export interface ContextValue {
  categories: Categories;
  setCategories: (data: Categories) => void;
  player: { current: string };
  questions: Record<string, Question[]>;
  setQuestions: (data: Record<string, Question[]>) => void;
  scores: Score[];
  setScores: (data: Score[]) => void;
}
