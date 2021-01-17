import * as React from 'react';
import { Button } from '@ui-components';
import { FC } from '@types';
import { Category as ICategory } from '@interfaces';
import { generateBgGradient } from '@utils';
import styles from './Category.module.css';

interface CategoryProps extends ICategory {}

const Category: FC<CategoryProps> = ({ id, name, topics, bgColor }) => (
  <article
    className={styles.root}
    style={{ backgroundImage: generateBgGradient(bgColor.from, bgColor.to) }}
  >
    <img className={styles.icon} src='/images/code.png' alt='code' />
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.overview}>Topics: {topics.join(', ')}</p>
    <Button text='Iniciar' />
  </article>
);

export default Category;
