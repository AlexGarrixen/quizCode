import * as React from 'react';
import AppContext from '../Context';
import { ContextValue } from '../types';
import { apiUrl } from '@constants';

const useScores = () => {
  const { scores, setScores } = React.useContext(AppContext) as ContextValue;
  const requested = scores.length > 0;
  const [requesting, setRequesting] = React.useState(!requested);
  const [error, setError] = React.useState<null | boolean>(null);

  const requestScores = async () => {
    try {
      if (!requested) {
        const response = await fetch(`${apiUrl}/scores`);
        const data = await response.json();

        setScores(data.scores);
        setRequesting(false);
      }
    } catch (e) {
      setError(true);
    }
  };

  return {
    scores,
    requesting,
    error,
    requestScores,
  };
};

export default useScores;
