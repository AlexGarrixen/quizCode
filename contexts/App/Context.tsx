import * as React from 'react';
import { ContextValue } from './types';

const AppContext = React.createContext<{} | ContextValue>({});

export default AppContext;
