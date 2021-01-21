import * as React from 'react';
import { useRouter } from 'next/router';
import { FC } from '@types';
import { generateBgGradient } from '@utils';
import { useCategory } from '@contexts/App';
import { Loading } from '@ui-components';
import styles from './Category.module.css';

const Category: FC = () => {
  const router = useRouter();
  const categoryId = router.query.id as string;

  const { category, error } = useCategory(categoryId);

  const loading = category === undefined;

  if (error)
    return (
      <div className={styles.root}>
        <p>Algo salio mal, intentalo mas tarde</p>
      </div>
    );

  return loading ? (
    <div className={styles.root}>
      <Loading />
    </div>
  ) : (
    <div
      className={styles.root}
      style={{
        backgroundImage: generateBgGradient(
          category.bgGradient.from,
          category.bgGradient.to
        ),
      }}
    >
      <div>
        <span className={styles.overlineText}>Category:</span>
        <h2 className={styles.categoryTitle}>{category.name}</h2>
      </div>
    </div>
  );
};

export default Category;
