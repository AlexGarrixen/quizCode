import * as React from 'react';
import { useRouter } from 'next/router';
import { Button, Loading } from '@ui-components';
import { FC } from '@types';
import { useResults } from './hook';
import styles from './Results.module.css';

interface ResultsProps {
  totalCorrectAnswers: number;
  totalQuestions: number;
  totalTimeElapsed: string;
}

const Results: FC<ResultsProps> = ({
  totalQuestions,
  totalCorrectAnswers,
  totalTimeElapsed,
}) => {
  const percentage = totalQuestions / totalCorrectAnswers;
  const totalScore = Math.floor(100 / percentage);
  const router = useRouter();

  const {
    requestingSave,
    error,
    requestSavePlayerScores,
    playerId,
  } = useResults(totalScore, router.query.id as string);

  const handleOnClickViewResults = () => {
    router.replace(`/scores?playerId=${playerId.current}`);
  };

  React.useEffect(() => {
    requestSavePlayerScores();
  }, []);

  if (error) return <p>Algo salio mal, intentalo mas tarde</p>;

  return requestingSave ? (
    <div className={styles.loadingBox}>
      <Loading color='primary' />
      <p>Guardando partida</p>
    </div>
  ) : (
    <div className={styles.root}>
      <h3 className={styles.title}>Has Puntuado:</h3>
      <div className={styles.scoreBox}>
        <h4 className={styles.totalScore}>{totalScore}</h4>
        <p>
          {totalCorrectAnswers} of {totalQuestions}
        </p>
      </div>
      <h4 className={styles.timeElapsed}>
        Con un tiempo de: {totalTimeElapsed}
      </h4>
      <div className={styles.btnBox}>
        <Button
          text='Ver clasificacion'
          color='primary'
          onClick={handleOnClickViewResults}
        />
      </div>
    </div>
  );
};

export default Results;
