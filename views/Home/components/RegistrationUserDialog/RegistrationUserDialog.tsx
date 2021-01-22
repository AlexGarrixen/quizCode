import * as React from 'react';
import { Dialog, Button, Input } from '@ui-components';
import { FC } from '@types';
import { useFormVisibility } from '../../hooks';
import { useFormInput } from './hook';
import styles from './RegistrationUserDialog.module.css';

const RegistrationUserDialog: FC = () => {
  const { visibleDialog, setVisibilityDialog } = useFormVisibility();
  const { value, error, handleOnChange, handleOnSubmit } = useFormInput();

  return (
    <Dialog
      isOpen={visibleDialog}
      size='sm'
      onRequestClose={setVisibilityDialog}
    >
      <form className={styles.root} onSubmit={handleOnSubmit}>
        <label className={styles.label}>Ingresa tu nombre o un alias</label>
        <Input fullWidth onChange={handleOnChange} value={value} />
        {error && (
          <span className={styles.helperErrorText}>
            Es necesario ingresar un nombre o alias
          </span>
        )}
        <div className={styles.actionsBox}>
          <Button text='Cancelar' onClick={setVisibilityDialog} />
          <Button
            text='Siguiente'
            type='submit'
            color='primary'
            disabled={error ? true : false}
          />
        </div>
      </form>
    </Dialog>
  );
};

export default RegistrationUserDialog;
