import * as React from 'react';
import { FC } from '@types';
import styles from './LayoutBox.module.css';

interface LayoutBoxProps {
  formComponent?: React.ReactNode;
  categoryComponent?: React.ReactNode;
}

const LayoutBOx: FC<LayoutBoxProps> = ({
  formComponent,
  categoryComponent,
}) => (
  <section className={styles.root}>
    {categoryComponent}
    {formComponent}
  </section>
);

export default LayoutBOx;
