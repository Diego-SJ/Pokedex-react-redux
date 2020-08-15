import React from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';
import Loader from '../Loader';
import {
  Container,
  PokemonName,
  PokemonDisplay,
  Pokemon,
  PokemonDescription,
  PokemonActions,
  Button,
} from './PokemonMainData.styled';
import {
  nextPokemonAction,
  prevPokemonAction,
} from '../../../redux/pokemonDuck';
import { connect } from 'react-redux';

const PokemonMainData = ({
  pokemon,
  specie: { flavor_text_entries = 'Nothing to show. :(' },
  nextPokemonAction,
  prevPokemonAction,
  loading,
}) => {
  const next = () => {
    nextPokemonAction();
  };

  const prev = () => {
    prevPokemonAction();
  };

  return (
    <Container>
      <PokemonName>{loading ? <Loader /> : pokemon.name}</PokemonName>
      <PokemonDisplay>
        {loading ? (
          <Loader />
        ) : (
          <Pokemon src={pokemon.sprites?.front_default} />
        )}
      </PokemonDisplay>
      <PokemonActions>
        <Button onClick={prev} disabled={loading}>
          <ChevronLeft />
        </Button>
        <Button onClick={next} disabled={loading}>
          <ChevronRight />
        </Button>
      </PokemonActions>
      <PokemonDescription>
        {loading ? (
          <Loader />
        ) : (
          flavor_text_entries && flavor_text_entries[0].flavor_text
        )}
      </PokemonDescription>
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  specie: pokemons.specie,
  loading: pokemons.fetching,
});

export default connect(mapState, { nextPokemonAction, prevPokemonAction })(
  PokemonMainData,
);
