import * as React from 'react';
import { FC } from '@types';
import { Container } from '../Container';
import { LinkItem } from './LinkItem';
import styles from './Header.module.css';

const Header: FC = () => (
  <header>
    <Container>
      <div className={styles.contentBox}>
        <img src='/images/logo.png' alt='logo' className={styles.image} />
        <nav>
          <ul className={styles.linksBox}>
            <li>
              <LinkItem path='/' text='Inicio' />
            </li>
            <li>
              <LinkItem path='/clasifications' text='Clasificaciones' />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
