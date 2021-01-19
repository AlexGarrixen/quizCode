import * as React from 'react';
import { PlayerItem } from './PlayerItem';
import { Container } from '@ui-components';
import styles from './PlayersTable.module.css';

const PlayersTable = () => (
  <section className={styles.root}>
    <Container>
      <h2 className={styles.title}>Lista de jugadores</h2>
      <ul className={styles.contentBox}>
        <li>
          <PlayerItem />
        </li>
        <li>
          <PlayerItem />
        </li>
        <li>
          <PlayerItem />
        </li>
      </ul>
    </Container>
  </section>
);

export default PlayersTable;
