import React from 'react';
import Loader from '../Loader';
import { Container, Slot, Head, Body } from './Types.styled';
import { connect } from 'react-redux';

const Types = ({ types, loading }) => {
  return (
    <Container>
      <Head>Types</Head>
      <Body>
        {loading ? (
          <Loader />
        ) : (
          types &&
          types.map(({ type }) => (
            <Slot key={type.name} type={type.name}>
              {type.name}
            </Slot>
          ))
        )}
      </Body>
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  types: pokemons.current.types,
  loading: pokemons.fetching,
});

export default connect(mapState)(Types);
