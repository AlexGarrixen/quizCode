import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Header } from '@ui-components';
import { Provider } from '@contexts/App';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Head>
      <title>QuizCode</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
