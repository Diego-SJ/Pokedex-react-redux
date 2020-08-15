import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 90px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 5px #000000;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const Head = styled.span`
  width: 100% !important;
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  font-size: 15px;
  font-weight: bold;
  background: #3eaffa;
  box-shadow: inset 0 0 5px #000000;
  padding: 5px;
  color: #fff;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr 1fr;
`;

const setColor = (type) => {
  let color = '';
  switch (type) {
    case 'normal':
      color = 'gray';
      break;
    case 'fighting':
      color = '#1db7ff';
      break;
    case 'flying':
      color = '#1d7fff';
      break;
    case 'poison':
      color = '#6e02c7';
      break;
    case 'ground':
      color = '#5d3302';
      break;
    case 'rock':
      color = '#383838';
      break;
    case 'bug':
      color = '#805555';
      break;
    case 'ghost':
      color = '#652670';
      break;
    case 'steel':
      color = '#265970';
      break;
    case 'water':
      color = '#00aeff';
      break;
    case 'grass':
      color = '#00b919';
      break;
    case 'electric':
      color = '#ffbb00';
      break;
    case 'psychic':
      color = '#e100ff';
      break;
    case 'ice':
      color = '#74d3ff';
      break;
    case 'dragon':
      color = '#3b151b';
      break;
    case 'dark':
      color = '#000000';
      break;
    case 'fairy':
      color = '#03695c';
      break;
    case 'unknown':
      color = '#363636';
      break;
    case 'shadow':
      color = '#263146';
      break;
    default:
      color = 'gray';
      break;
  }
  return color;
};

export const Slot = styled.span`
  width: auto;
  margin: 5px 10px;
  font-size: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  color: #fff;
  display: grid;
  place-content: center;
  box-shadow: inset 0 0 5px #000000;
  background: ${({ type }) => setColor(type)};
`;
