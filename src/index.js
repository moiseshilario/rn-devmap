import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';

import { View } from 'react-native';

// import { Container } from './styles';

import store from '~/store';

import Map from './pages/Map';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
