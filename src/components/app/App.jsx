import React from 'react';
import { AppContainer } from './App.styled';
import Pokedex from '../common/Pokedex';
import { Provider } from 'react-redux';
import generateStore from '../../redux/store';

const store = generateStore();

function App() {
  return (
    <Provider store={store}>
      <AppContainer className="App">
        <Pokedex>sadas</Pokedex>
      </AppContainer>
    </Provider>
  );
}

export default App;
