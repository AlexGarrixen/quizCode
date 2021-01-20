import * as React from 'react';
import { HomeContextValue } from './types';

const HomeContext = React.createContext<{} | HomeContextValue>({});

export default HomeContext;
