import * as React from 'react';
import { Dialog, Button, Input } from '@ui-components';
import { FC } from '@types';
import styles from './FormUserInput.module.css';

const FormUserInput: FC = () => (
  <Dialog isOpen={false} size='sm'>
    <form className={styles.root}>
      <label className={styles.label}>Ingresa tu nombre o un alias</label>
      <Input fullWidth />
      <div className={styles.actionsBox}>
        <Button text='Cancelar' />
        <Button text='Siguiente' type='submit' color='primary' />
      </div>
    </form>
  </Dialog>
);

export default FormUserInput;
