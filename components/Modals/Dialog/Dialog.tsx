import * as React from 'react';
import clsx from 'clsx';
import Modal from 'react-modal';
import { FC } from '@types';
import styles from './Dialog.module.css';

Modal.setAppElement('#__next');

interface DialogProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onRequestClose?: () => void;
  size?: 'md' | 'sm';
}

const Dialog: FC<DialogProps> = ({
  children,
  size = 'md',
  isOpen,
  onRequestClose,
}) => (
  <Modal
    isOpen={isOpen}
    className={clsx(styles.root, { [styles[size]]: size !== 'md' })}
    overlayClassName={styles.overlay}
    onRequestClose={onRequestClose}
  >
    {children}
  </Modal>
);

export default Dialog;
