import * as React from 'react';
import clsx from 'clsx';
import { FC } from '@types';
import styles from './Loading.module.css';

interface LoadingProps {
  color?: 'default' | 'primary';
}

const Loading: FC<LoadingProps> = ({ color = 'default' }) => (
  <div className={clsx(styles.root, { [styles[color]]: color !== 'default' })}>
    <div className={styles.bounceOne}></div>
    <div className={styles.bounceTwo}></div>
    <div />
  </div>
);

export default Loading;
