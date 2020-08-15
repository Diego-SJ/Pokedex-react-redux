import React from 'react';
import Stats from '../Stats';
import Types from '../Types';
import Evolves from '../Evolves';
import ExtraInfo from '../ExtraInfo';
import BottomInfo from '../BottomInfo';
import { Container, Row } from './PokemonInfo.styled';
import { connect } from 'react-redux';

const PokemonMainData = ({
  pokemon,
  specie: { flavor_text_entries = 'Nothing to show. :(' },
}) => {
  return (
    <Container>
      <Row>
        <Stats />
        <Types />
      </Row>
      <Evolves />
      <ExtraInfo />
      <BottomInfo />
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  specie: pokemons.specie,
});

export default connect(mapState)(PokemonMainData);
