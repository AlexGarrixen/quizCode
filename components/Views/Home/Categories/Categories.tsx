import * as React from 'react';
import { Container } from '@ui-components';
import { FC } from '@types';
import { categories } from '@mocks';
import { Category } from './Category';
import styles from './Categories.module.css';

const Wrapper: FC = () => (
  <section className={styles.root}>
    <Container>
      <h2 className={styles.title}>SELECCIONA UNA CATEGORIA</h2>
      <ul className={styles.categoriesGrid}>
        {categories.map((category) => (
          <li key={category.id}>
            <Category {...category} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Wrapper;
