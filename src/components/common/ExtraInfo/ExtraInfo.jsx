import React from 'react';
import Loader from '../Loader';
import StatItem from '../StatItem';
import { Container } from './ExtraInfo.styled';
import { connect } from 'react-redux';

const ExtraInfo = ({ pokemon, specie, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <StatItem title="Height" value={pokemon.height} />
          <StatItem title="Weight" value={pokemon.weight} />
          <StatItem title="Base experience" value={pokemon.base_experience} />
          <StatItem title="Abilities" />
          <StatItem
            title="Habitat"
            value={specie.habitat && specie.habitat.name}
          />
          <StatItem title="Shape" value={specie.shape && specie.shape.name} />
          {pokemon.abilities &&
            pokemon.abilities.map(({ ability }) => (
              <StatItem key={ability.name} value={ability.name} />
            ))}
        </>
      )}
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  pokemon: pokemons.current,
  specie: pokemons.specie,
  loading: pokemons.fetching,
});

export default connect(mapState)(ExtraInfo);
