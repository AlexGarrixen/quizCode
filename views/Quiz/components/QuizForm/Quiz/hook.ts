import * as React from 'react';
import { Question } from '@interfaces';
import { useTimer } from '@hooks';

export const useQuiz = (questions: Question[]) => {
  const { initializeTimer, stopTimer, getTimeElapsed } = useTimer();
  const [index, setIndex] = React.useState(0);
  const [isFinished, setFinished] = React.useState(false);
  const [resolvedQuestions, setResolvedQuestions] = React.useState<
    Record<string, string>
  >({});

  const currentQuestion = questions[index];
  const questionsLength = questions.length;
  const selectedAnswer = resolvedQuestions[currentQuestion._id];

  const next = React.useCallback(() => {
    if (index < questionsLength - 1) setIndex(index + 1);
    else {
      stopTimer();
      setFinished(true);
    }
  }, [index]);

  const setOption = (optionValue: string) => {
    setResolvedQuestions({
      ...resolvedQuestions,
      [currentQuestion._id]: optionValue,
    });
  };

  const getTotalCorrectAnswers = () => {
    let count = 0;

    Object.values(questions).forEach(({ _id, response }) => {
      const userAnswer = resolvedQuestions[_id];
      const isCorrect = userAnswer === response;

      isCorrect && count++;
    });

    return count;
  };

  React.useEffect(() => {
    initializeTimer();
  }, []);

  return {
    index,
    question: currentQuestion,
    questionsLength,
    selectedAnswer,
    isFinished,
    next,
    setOption,
    getTotalCorrectAnswers,
    getTimeElapsed,
  };
};
