import React from 'react';
import EvolveItem from '../EvolveItem';
import { Container } from './Evolves.styled';
import { connect } from 'react-redux';

const Evolves = ({ evolves, fetching }) => {
  return (
    <Container>
      {evolves.map((item, i) => (
        <EvolveItem key={i} name={item?.name} image={item?.image} />
      ))}
    </Container>
  );
};

const mapState = ({ pokemons: { current, evolves, fetching } }) => ({
  evolves: evolves,
  fetching: fetching,
});

export default connect(mapState)(Evolves);
