import * as React from 'react';
import {
  Categories,
  RegistrationUserDialog,
  Provider,
} from '@view-components/Home';

const Home = () => (
  <Provider>
    <Categories />
    <RegistrationUserDialog />
  </Provider>
);

export default Home;
