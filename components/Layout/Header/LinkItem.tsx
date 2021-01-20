import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useInActiveLink } from '@hooks';
import styles from './Header.module.css';

interface LinkItemProps {
  path: string;
  text: string;
}

export const LinkItem: (props: LinkItemProps) => JSX.Element = ({
  path,
  text,
}) => {
  const isActive = useInActiveLink(path);

  return (
    <Link href={path}>
      <a className={clsx(styles.link, { [styles.activeLink]: isActive })}>
        {text}
      </a>
    </Link>
  );
};
