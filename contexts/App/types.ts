import { Category, Question } from '@interfaces';

export type Categories = Record<string, Category>;

interface Score {
  _id: string;
  player: string;
  score: number;
  category: string;
}

export interface ContextValue {
  categories: Categories;
  setCategories: (data: Categories) => void;
  player: { current: string };
  questions: Record<string, Question[]>;
  setQuestions: (data: Record<string, Question[]>) => void;
  scores: Score[];
  setScores: (data: Score[]) => void;
}
