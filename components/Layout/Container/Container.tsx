import * as React from 'react';
import styles from './Container.module.css';

const Container: React.FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default Container;
