import * as React from 'react';
import clsx from 'clsx';
import { Trophy } from '@icons';
import { FC } from '@types';
import { ParsedUrlQuery } from 'querystring';
import styles from './PlayerItem.module.css';

interface PlayerItemProps {
  _id: string;
  player: string;
  category: string;
  score: number;
  queryParams: ParsedUrlQuery;
}

const PlayerItem: FC<PlayerItemProps> = ({
  _id,
  category,
  player,
  score,
  queryParams,
}) => (
  <article
    className={clsx(styles.root, {
      [styles.highlight]: _id === queryParams.playerId,
    })}
  >
    <div>
      <h3 className={styles.player}>{player}</h3>
      <p className={styles.category}>{category}</p>
    </div>
    <p className={styles.score}>
      <Trophy className={styles.icon} />
      <span>{score}pts.</span>
    </p>
  </article>
);

export default PlayerItem;
