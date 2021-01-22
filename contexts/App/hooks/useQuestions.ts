import * as React from 'react';
import shuffle from 'lodash.shuffle';
import AppContext from '../Context';
import { ContextValue } from '../types';
import { apiUrl } from '@constants';
import { Question } from '@interfaces';

const useQuestions = (categoryId: string) => {
  const { questions, setQuestions: setState } = React.useContext(
    AppContext
  ) as ContextValue;
  const requested = Boolean(questions[categoryId]);
  const [requesting, setRequesting] = React.useState(!requested);
  const [error, setError] = React.useState<null | boolean>(null);

  const setQuestions = (data: Question[]) => {
    setState({
      ...questions,
      [categoryId]: data,
    });
  };

  const requestQuestions = async () => {
    try {
      if (!requested && categoryId) {
        const response = await fetch(`${apiUrl}/questions/${categoryId}`);
        const data = await response.json();

        setQuestions(data.questions);
        setRequesting(false);
      }
    } catch (e) {
      setError(true);
    }
  };

  return {
    questions: shuffle(questions[categoryId]) || [],
    requesting,
    error,
    requestQuestions,
  };
};

export default useQuestions;
