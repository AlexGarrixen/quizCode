import * as React from 'react';
import { Button } from '@ui-components';
import { FC } from '@types';
import { Category as ICategory } from '@interfaces';
import { generateBgGradient } from '@utils';
import styles from './Category.module.css';

interface CategoryProps extends ICategory {
  onSelect: () => void;
}

const Category: FC<CategoryProps> = ({
  _id,
  name,
  topics,
  bgGradient,
  onSelect,
}) => (
  <article
    className={styles.root}
    style={{
      backgroundImage: generateBgGradient(bgGradient.from, bgGradient.to),
    }}
  >
    <img className={styles.icon} src='/images/code.png' alt='code' />
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.overview}>Topics: {topics.join(', ')}</p>
    <Button text='Iniciar' onClick={onSelect} />
  </article>
);

export default Category;
