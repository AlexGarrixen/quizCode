import * as React from 'react';
import { Container } from '@ui-components';
import { FC } from '@types';
import { useCategories } from '@contexts/App';
import { useSelectedCategory } from '../../hooks';
import { Category } from './Category';
import styles from './Categories.module.css';

const Categories: FC = () => {
  const { categories, requesting, requestCategories } = useCategories();
  const { setCategoryId } = useSelectedCategory();

  React.useEffect(() => {
    requestCategories();
  }, []);

  return (
    <section className={styles.root}>
      <Container>
        <h2 className={styles.title}>SELECCIONA UNA CATEGORIA</h2>
        {requesting ? (
          <p>Cargando...</p>
        ) : (
          <ul className={styles.categoriesGrid}>
            {Object.values(categories).map((category) => (
              <li key={category._id}>
                <Category
                  {...category}
                  onSelect={setCategoryId(category._id)}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Categories;
