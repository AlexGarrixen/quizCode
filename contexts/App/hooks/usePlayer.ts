import * as React from 'react';
import AppContext from '../Context';
import { ContextValue } from '../types';

export const usePlayer = () => {
  const { player } = React.useContext(AppContext) as ContextValue;

  const setPlayer = (name: string): void => {
    player.current = name;
  };

  return {
    player,
    setPlayer,
  };
};

export default usePlayer;
