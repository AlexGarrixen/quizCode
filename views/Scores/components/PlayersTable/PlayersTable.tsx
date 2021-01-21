import * as React from 'react';
import { useRouter } from 'next/router';
import { PlayerItem } from './PlayerItem';
import { Container } from '@ui-components';
import { useScores } from '@contexts/App';
import styles from './PlayersTable.module.css';

const PlayersTable = () => {
  const { scores, requesting, error, requestScores } = useScores();
  const { query } = useRouter();

  React.useEffect(() => {
    requestScores();
  }, []);

  if (error) return <p>Algo salio mal, intentalo mas tarde</p>;

  return (
    <section className={styles.root}>
      <Container>
        <h2 className={styles.title}>Lista de jugadores</h2>
        {requesting ? (
          <p>...</p>
        ) : (
          <ul className={styles.contentBox}>
            {scores.map((player) => (
              <li key={player._id}>
                <PlayerItem {...player} queryParams={query} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default PlayersTable;
