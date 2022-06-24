import styled from "styled-components";

export const Container = styled.div<{ backgroundImage?: string }>`
  background: url(${props => props.backgroundImage});
  background-position: 50% 0;
  background-size: cover;
  background-color: #101010;
  min-height: 100vh;
`;