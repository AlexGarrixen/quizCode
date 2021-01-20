import * as React from 'react';
import { useRouter } from 'next/router';
import { usePlayer } from '@contexts/App';
import { useSelectedCategory } from '../../hooks';

export const useFormInput = () => {
  const { categoryId } = useSelectedCategory();
  const { setPlayer } = usePlayer();
  const router = useRouter();
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (error) setError(false);
      setValue(e.target.value);
    },
    [value]
  );

  const handleOnSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (value.length) {
        setPlayer(value);
        router.push(`/quiz/${categoryId}`);
      } else setError(true);
    },
    [value]
  );

  return {
    value,
    error,
    handleOnChange,
    handleOnSubmit,
  };
};
