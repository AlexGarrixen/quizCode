import * as React from 'react';
import { Categories, FormUserInput, Provider } from '@view-components/Home';

const Home = () => (
  <Provider>
    <div>
      <Categories />
      <FormUserInput />
    </div>
  </Provider>
);

export default Home;
