import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonName = styled.span`
  width: 100%;
  height: 40px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 10px #000000;
  color: #000000;
  border-radius: 10px;
  font-weight: 700;
  font-size: 25px;
  display: grid;
  place-content: center;
`;

export const PokemonDisplay = styled.div`
  width: 100%;
  height: 300px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 10px #000000;
  color: #000000;
  border-radius: 10px;
  display: grid;
  place-content: center;
`;

export const Pokemon = styled.img`
  width: 250px;
  height: 250px;
`;

export const PokemonActions = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background: #7b0000;
  border: 3px solid #7b0000;
  border-radius: 100px;
  display: grid;
  place-content: center;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &:disabled {
    transform: scale(1);
    border: 3px solid #9b3838;
    background: #9b3838;
    cursor: not-allowed;
  }

  & > svg {
    stroke: #eee;
    font-size: 10px;
  }
`;

export const PokemonDescription = styled.div`
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 10px #000000;
  color: #000000;
  border-radius: 10px;
  display: grid;
  place-content: center;
  padding: 5px;
  text-align: center;
`;
