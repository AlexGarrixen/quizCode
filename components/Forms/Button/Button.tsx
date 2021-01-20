import * as React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'primary' | 'default';
}

const Button: (props: ButtonProps) => JSX.Element = ({
  text,
  color = 'default',
  type = 'button',
  className,
  ...other
}) => (
  <button
    {...other}
    type={type}
    className={clsx(
      styles.root,
      { [styles[color]]: color !== 'default' },
      className
    )}
  >
    {text}
  </button>
);

export default Button;
