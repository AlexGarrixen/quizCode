import * as React from 'react';
import AppContext from './Context';
import { FC } from '@types';
import { Question } from '@interfaces';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [categories, setCategories] = React.useState({});
  const player = React.useRef<string>('');
  const [questions, setQuestions] = React.useState<Record<string, Question>>(
    {}
  );
  const [scores, setScores] = React.useState([]);

  const contextValue = React.useMemo(
    () => ({
      categories,
      setCategories,
      player,
      questions,
      setQuestions,
      scores,
      setScores,
    }),
    [categories, player, questions, scores]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
