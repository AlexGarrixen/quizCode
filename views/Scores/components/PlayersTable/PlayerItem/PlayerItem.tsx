import * as React from 'react';
import { Trophy } from '@icons';
import styles from './PlayerItem.module.css';

const PlayerItem = () => (
  <article className={styles.root}>
    <div>
      <h3 className={styles.player}>Username</h3>
      <p className={styles.category}>Category</p>
    </div>
    <p className={styles.score}>
      <Trophy className={styles.icon} />
      <span>100pts.</span>
    </p>
  </article>
);

export default PlayerItem;
