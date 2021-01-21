import * as React from 'react';
import clsx from 'clsx';
import { Button } from '@ui-components';
import { FC } from '@types';
import { Question } from '@interfaces';
import { Results } from '../../Results';
import { useQuiz } from './hook';
import styles from './Quiz.module.css';

interface QuizProps {
  questions: Question[];
}

const Quiz: FC<QuizProps> = ({ questions }) => {
  const {
    index,
    question,
    questionsLength,
    isFinished,
    selectedAnswer,
    next,
    setOption,
    getTotalCorrectAnswers,
    getTimeElapsed,
  } = useQuiz(questions);

  return isFinished ? (
    <Results
      totalQuestions={questionsLength}
      totalCorrectAnswers={getTotalCorrectAnswers()}
      totalTimeElapsed={getTimeElapsed()}
    />
  ) : (
    <div className={styles.root}>
      <span className={styles.questionIndex}>
        PREGUNTA {index + 1} / {questions.length}
      </span>
      <h3 className={styles.question}>{question.name}</h3>
      <ul>
        {question.options.map(({ _id, content, option }) => (
          <li
            key={_id}
            className={clsx(styles.option, {
              [styles.selectedOption]: option === selectedAnswer,
            })}
            onClick={() => setOption(option)}
          >
            {content}
          </li>
        ))}
      </ul>
      <div className={styles.actionsBox}>
        <Button
          text='Siguiente'
          color='primary'
          className={styles.nextButton}
          disabled={!selectedAnswer}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default Quiz;
