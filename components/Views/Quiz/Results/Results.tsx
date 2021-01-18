import * as React from 'react';
import { Button } from '@ui-components';
import { FC } from '@types';
import styles from './Results.module.css';

const Results: FC = () => (
  <div className={styles.root}>
    <h3 className={styles.title}>Has Puntuado:</h3>
    <div className={styles.scoreBox}>
      <h4 className={styles.totalScore}>100</h4>
      <p>10 of 10</p>
    </div>
    <div className={styles.btnBox}>
      <Button text='Ver clasificaciones' color='primary' />
    </div>
  </div>
);

export default Results;
