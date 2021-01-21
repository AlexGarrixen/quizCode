import * as React from 'react';

export const useTimer = () => {
  const secondsElapsed = React.useRef<number>(0);
  let intervalId = React.useRef<null | number>(null);

  const initializeTimer = (): void => {
    intervalId.current = window.setInterval(
      () => (secondsElapsed.current += 1),
      1000
    );
  };

  const stopTimer = (): void => {
    clearInterval(intervalId.current);
  };

  const getTimeElapsed = (): string => {
    const minutes = secondsElapsed.current / 60;
    const seconds = secondsElapsed.current % 60;

    return `${minutes.toFixed()}m ${seconds}s`;
  };

  return {
    initializeTimer,
    stopTimer,
    getTimeElapsed,
  };
};
