import * as React from 'react';
import { useRouter } from 'next/router';
import { Quiz } from './Quiz';
import { FC } from '@types';
import { useQuestions } from '@contexts/App';
import { Loading } from '@ui-components';
import styles from './QuizForm.module.css';

const QuizForm: FC = () => {
  const router = useRouter();
  const categoryId = router.query.id as string;
  const { questions, requesting, error, requestQuestions } = useQuestions(
    categoryId
  );

  React.useEffect(() => {
    requestQuestions();
  }, [router.query]);

  if (error) return <p>Algo salio mal, intentalo mas tarde</p>;

  return requesting ? (
    <div className={styles.loadingBox}>
      <Loading color='primary' />
    </div>
  ) : (
    <Quiz questions={questions} />
  );
};

export default QuizForm;
