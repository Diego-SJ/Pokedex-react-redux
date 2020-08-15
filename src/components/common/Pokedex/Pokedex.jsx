import React from 'react';
import {
  PokedexContainer,
  SubContainer,
  MiddleDisplay,
} from './Pokedex.styled';
import PokemonMainData from '../PokemonMainData';
import PokemonInfo from '../PokemonInfo';
import { connect } from 'react-redux';

const Pokedex = ({ pokemon }) => {
  return (
    <PokedexContainer>
      <SubContainer>
        <PokemonMainData pokemon={pokemon} />
      </SubContainer>
      <MiddleDisplay />
      <SubContainer>
        <PokemonInfo pokemon={pokemon} />
      </SubContainer>
    </PokedexContainer>
  );
};

const mapState = ({ pokemons }) => ({
  pokemon: pokemons.current,
});

export default connect(mapState)(Pokedex);
