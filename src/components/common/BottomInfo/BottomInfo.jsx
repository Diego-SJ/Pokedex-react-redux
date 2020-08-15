import React from 'react';
import Loader from '../Loader';
import { Container, CircleDisgn, BoxId } from './BottomInfo.styled';
import { connect } from 'react-redux';

const BottomInfo = ({ pokemon, loading }) => {
  return (
    <Container>
      <CircleDisgn color={loading} />
      <BoxId>{loading ? <Loader /> : `No. ${pokemon?.id}`}</BoxId>
      <CircleDisgn color={loading} />
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  pokemon: pokemons.current,
  loading: pokemons.fetching,
});

export default connect(mapState)(BottomInfo);
