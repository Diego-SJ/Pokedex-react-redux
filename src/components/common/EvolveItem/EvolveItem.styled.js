import styled from 'styled-components';

export const PokemonEvolve = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const PokemonImage = styled.div`
  width: auto;
  height: 110px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  color: #000000;
  border-radius: 10px;
  display: grid;
  place-content: center;
  box-shadow: inset 0 0 10px #000000;
`;

export const Pokemon = styled.img`
  width: 100%;
  height: auto;
`;

export const PokemonName = styled.span`
  width: auto;
  height: 30px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 5px #000000;
  color: #000000;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  display: grid;
  place-content: center;
  margin-top: 5px;
`;
