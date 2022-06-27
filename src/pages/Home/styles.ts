import styled from "styled-components";

export const ContainerSignUp = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .showcase-texts {
    h2 {
      margin: 20px 0;
      font-weight: 800;
    }
    p {
      color: ${props => props.theme.lightText};
      margin-bottom: 20px;
      margin: 20px 0;
    }
  }
`;

export const ContainerStars = styled.div`
`;
