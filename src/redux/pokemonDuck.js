import axios from 'axios';

// constants
const initialState = {
  fetching: false,
  pokemons: [],
  current: {},
  specie: {},
  evolves: [],
  count: 1,
};

const apiUrlOnlyOne = 'https://pokeapi.co/api/v2/pokemon/';
const apiUrlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';

const GET_ONE_POKEMON = 'GET_ONE_POKEMON';
const GET_ONE_POKEMON_ERROR = 'GET_ONE_POKEMON_ERROR';
const GET_ONE_POKEMON_SUCCESS = 'GET_ONE_POKEMON_SUCCESS';

const GET_POKEMON_SPECIES = 'GET_POKEMON_SPECIES';
const GET_POKEMON_SPECIES_ERROR = 'GET_POKEMON_SPECIES_ERROR';
const GET_POKEMON_SPECIES_SUCCESS = 'GET_POKEMON_SPECIES_SUCCESS';

const GET_POKEMON_EVOLVE = 'GET_POKEMON_EVOLVE';
const GET_POKEMON_EVOLVE_ERROR = 'GET_POKEMON_EVOLVE_ERROR';
const GET_POKEMON_EVOLVE_SUCCESS = 'GET_POKEMON_EVOLVE_SUCCESS';

const NEXT_POKEMON = 'NEXT_POKEMON';
const BACK_POKEMON = 'BACK_POKEMON';

// reducer
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case NEXT_POKEMON:
      return { ...state, count: payload };
    case BACK_POKEMON:
      return { ...state, count: payload };

    case GET_ONE_POKEMON:
      return { ...state, fetching: true };
    case GET_ONE_POKEMON_SUCCESS:
      return { ...state, current: payload };
    case GET_ONE_POKEMON_ERROR:
      return { ...state, fetching: false, error: payload };

    case GET_POKEMON_SPECIES:
      return { ...state, fetching: true };
    case GET_POKEMON_SPECIES_SUCCESS:
      return { ...state, specie: payload };
    case GET_POKEMON_SPECIES_ERROR:
      return { ...state, fetching: false, error: payload };

    case GET_POKEMON_EVOLVE:
      return { ...state, fetching: true };
    case GET_POKEMON_EVOLVE_SUCCESS:
      return { ...state, fetching: false, evolves: payload };
    case GET_POKEMON_EVOLVE_ERROR:
      return { ...state, fetching: false, error: payload };

    default:
      return state;
  }
}

// aux
const savePokemonStorage = (pokemon) => {
  localStorage.pokemonId = JSON.stringify(pokemon);
};

// actions
export const nextPokemonAction = () => async (dispatch, getState) => {
  const { count } = getState().pokemons;
  await dispatch({
    type: NEXT_POKEMON,
    payload: count === 807 ? 1 : count + 1,
  });
  getPokemonOneByOneAction()(dispatch, getState);
  savePokemonStorage(count);
};

export const prevPokemonAction = () => async (dispatch, getState) => {
  const { count } = getState().pokemons;
  await dispatch({
    type: BACK_POKEMON,
    payload: count === 1 ? 807 : count - 1,
  });
  getPokemonOneByOneAction()(dispatch, getState);
  savePokemonStorage(count);
};

export const restoreCurrentPokemonAction = () => (dispatch, getState) => {
  let storage = localStorage.getItem('pokemonId');
  storage = JSON.parse(storage);
  if (storage) {
    dispatch({
      type: NEXT_POKEMON,
      payload: storage + 1,
    });
  }
};

export const getPokemonOneByOneAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_ONE_POKEMON,
  });

  const { count } = getState().pokemons;
  return axios
    .get(`${apiUrlOnlyOne}${count}/`)
    .then(async ({ data }) => {
      dispatch({
        type: GET_ONE_POKEMON_SUCCESS,
        payload: data,
      });
      await getPokemonSpicies()(dispatch, getState);
      await getPokemonEvolves()(dispatch, getState);
    })
    .catch((error) => {
      dispatch({
        type: GET_ONE_POKEMON_ERROR,
        payload: error.message,
      });
    });
};

export const getPokemonSpicies = () => (dispatch, getState) => {
  dispatch({
    type: GET_POKEMON_SPECIES,
  });

  const { count } = getState().pokemons;
  return axios
    .get(`${apiUrlSpecies}${count}/`)
    .then(({ data }) => {
      dispatch({
        type: GET_POKEMON_SPECIES_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_POKEMON_SPECIES_ERROR,
        payload: error.message,
      });
    });
};

export const searchEvolvesAction = (name) => (dispatch, getState) => {
  return axios
    .get(`${apiUrlOnlyOne}${name}`)
    .then(({ data: { name, sprites } }) => {
      return { name: name, image: sprites?.front_default };
    })
    .catch((error) => {
      dispatch({
        type: GET_POKEMON_EVOLVE_ERROR,
        payload: error.message,
      });
    });
};

export const getPokemonEvolves = () => async (dispatch, getState) => {
  dispatch({
    type: GET_POKEMON_EVOLVE,
  });

  try {
    const { evolution_chain } = getState().pokemons.specie;
    let evolves = [];
    const {
      data: {
        chain: { evolves_to, species },
      },
    } = await axios.get(`${evolution_chain.url}`);
    let evolvesTo = evolves_to[0];
    let name = species?.name;
    let evolution = await searchEvolvesAction(name)(dispatch, getState);
    evolves.push(evolution);
    while (evolvesTo?.species) {
      let evolution = await searchEvolvesAction(evolvesTo.species?.name)(
        dispatch,
        getState,
      );
      evolves.push(evolution);
      evolvesTo = evolvesTo.evolves_to[0];
    }
    console.warn(evolves);
    dispatch({
      type: GET_POKEMON_EVOLVE_SUCCESS,
      payload: evolves,
    });
  } catch (error) {
    dispatch({
      type: GET_POKEMON_EVOLVE_ERROR,
      payload: error.message,
    });
  }
};
