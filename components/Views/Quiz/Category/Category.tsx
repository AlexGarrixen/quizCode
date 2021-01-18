import * as React from 'react';
import { FC } from '@types';
import styles from './Category.module.css';

const Category: FC = () => (
  <div className={styles.root}>
    <div>
      <span className={styles.overlineText}>Category:</span>
      <h2 className={styles.categoryTitle}>Name Category</h2>
    </div>
  </div>
);

export default Category;
