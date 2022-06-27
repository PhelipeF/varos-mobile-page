import styled from "styled-components";

export const Container = styled.div<{ backgroundImage?: string }>`
  background: url(${props => props.backgroundImage});
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #101010;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    background-size: contain;
  }
`;