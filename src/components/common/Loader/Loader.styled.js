import styled, { keyframes } from 'styled-components';

const animLoader = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  & > svg {
    width: 25px;
    height: 25px;
    stroke: #18b6ff;
    font-size: 10px;
    animation: ${animLoader} 1s infinite;
  }
`;
