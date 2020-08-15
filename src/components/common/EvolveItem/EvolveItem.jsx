import React from 'react';
import Loader from '../Loader';
import {
  PokemonEvolve,
  PokemonImage,
  Pokemon,
  PokemonName,
} from './EvolveItem.styled';
import { connect } from 'react-redux';

const Evolves = ({
  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png',
  name = '*****',
  loading,
}) => {
  return (
    <PokemonEvolve>
      <PokemonImage>
        {loading ? <Loader /> : <Pokemon src={image} />}
      </PokemonImage>
      <PokemonName>{loading ? <Loader /> : name}</PokemonName>
    </PokemonEvolve>
  );
};

const mapState = ({ pokemons }) => ({
  loading: pokemons.fetching,
});

export default connect(mapState)(Evolves);
