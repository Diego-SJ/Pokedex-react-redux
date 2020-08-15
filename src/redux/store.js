import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer, {
  getPokemonOneByOneAction,
  restoreCurrentPokemonAction,
} from './pokemonDuck';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhacers(applyMiddleware(thunk)),
  );
  restoreCurrentPokemonAction()(store.dispatch, store.getState);
  getPokemonOneByOneAction()(store.dispatch, store.getState);

  return store;
};

export default generateStore;
