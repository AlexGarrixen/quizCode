import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Header } from '@ui-components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>QuizCode</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp;
