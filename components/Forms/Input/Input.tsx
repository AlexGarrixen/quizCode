import * as React from 'react';
import clsx from 'clsx';
import { FC } from '@types';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({
  fullWidth,
  type = 'text',
  value,
  className,
  ...other
}) => (
  <input
    className={clsx(
      styles.root,
      {
        [styles.fullWidth]: fullWidth,
      },
      className
    )}
    type={type}
    {...other}
  />
);

export default Input;
