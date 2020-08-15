import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const BoxId = styled.div`
  width: 120px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  display: grid;
  place-content: center;
  color: #000000;
  border-radius: 10px;
  background-image: linear-gradient(to right, #e2f3ff 50%, #9dd8ff);
  box-shadow: inset 0 0 10px #000000;
`;

export const CircleDisgn = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #3eaffa;
  border-radius: 50px;
  background-image: ${({ color }) =>
    !color
      ? 'linear-gradient(to right, #71e045 50%, #30a103)'
      : 'linear-gradient(to right, #fff1b5 50%, #ffd000)'};
  box-shadow: 0 0 10px #000000;
`;
