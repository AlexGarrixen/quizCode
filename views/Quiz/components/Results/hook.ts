import * as React from 'react';
import { usePlayer } from '@contexts/App';
import { apiUrl } from '@constants';

export const useResults = (totalScore: number, categoryId: string) => {
  const [requestingSave, setRequesting] = React.useState(true);
  const [error, setError] = React.useState<null | boolean>(null);
  const { player } = usePlayer();
  const playerId = React.useRef('');

  const requestSavePlayerScores = async () => {
    try {
      const response = await fetch(`${apiUrl}/scores`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player: player.current,
          score: totalScore,
          categoryId,
        }),
      });
      const data = await response.json();

      playerId.current = data.createdId;
      setRequesting(false);
    } catch (e) {
      setError(true);
    }
  };

  return {
    requestingSave,
    error,
    playerId,
    requestSavePlayerScores,
  };
};
