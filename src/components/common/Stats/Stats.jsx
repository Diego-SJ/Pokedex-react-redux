import React from 'react';
import StatItem from '../StatItem';
import Loader from '../Loader';
import { Container } from './Stats.styled';
import { connect } from 'react-redux';

const Stats = ({ stats, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        stats &&
        stats.map((item) => (
          <StatItem
            key={item.stat.name}
            title={item.stat.name}
            value={item.base_stat}
          />
        ))
      )}
    </Container>
  );
};

const mapState = ({ pokemons }) => ({
  stats: pokemons.current.stats,
  loading: pokemons.fetching,
});

export default connect(mapState)(Stats);
