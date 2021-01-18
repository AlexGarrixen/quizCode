import * as React from 'react';
import clsx from 'clsx';
import { Button } from '@ui-components';
import { FC } from '@types';
// import { Results } from '../Results';
import styles from './QuizForm.module.css';

const QuizForm: FC = () => (
  <div className={styles.root}>
    {/* <Results /> */}
    <span className={styles.questionIndex}>PREGUNTA 1 / 10</span>
    <h3 className={styles.question}>NAME OF QUESTION</h3>
    <ul>
      <li className={clsx(styles.option, styles.selectedOption)}>
        Option content
      </li>
      <li className={styles.option}>Option content</li>
      <li className={styles.option}>Option content</li>
      <li className={styles.option}>Option content</li>
      <li className={styles.option}>Option content</li>
    </ul>
    <div className={styles.actionsBox}>
      <Button text='Siguiente' color='primary' className={styles.nextButton} />
    </div>
  </div>
);

export default QuizForm;
