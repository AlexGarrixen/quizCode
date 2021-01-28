import * as React from 'react';
import { useRouter } from 'next/router';
import { PlayerItem } from './PlayerItem';
import { Container, Loading, Tabs, Tab } from '@ui-components';
import { useScores } from '@contexts/App';
import { useFilter } from './hook';
import styles from './PlayersTable.module.css';

const PlayersTable = () => {
  const { scores, requesting, error, requestScores } = useScores();
  const { query } = useRouter();
  const { value, filteredData, handleChangeTab } = useFilter('All', scores);

  React.useEffect(() => {
    requestScores();
  }, []);

  if (error) return <p>Algo salio mal, intentalo mas tarde</p>;

  return (
    <section className={styles.root}>
      <Container>
        <h2 className={styles.title}>Lista de jugadores</h2>
        {requesting ? (
          <Loading />
        ) : (
          <>
            <Tabs
              value={value}
              onChangeTab={handleChangeTab}
              className={styles.filterTabs}
            >
              <Tab value='All'>Todos</Tab>
              <Tab value='Html'>Html</Tab>
              <Tab value='Css'>Css</Tab>
              <Tab value='Javascript'>Js</Tab>
            </Tabs>
            <ul className={styles.contentBox}>
              {filteredData.map((player) => (
                <li key={player._id}>
                  <PlayerItem {...player} queryParams={query} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </section>
  );
};

export default PlayersTable;
