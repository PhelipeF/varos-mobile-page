import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  h2{
    width: 100%;
    text-align: center;
    margin: 20px 0;
    line-height: 129.5%;
    letter-spacing: 0.035em;
    margin-bottom: 40px;
    display: inline-block;
    font-size: 1.8em;
    span {
      color: ${props => props.theme.accent};
    }

  }

`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  p{
    align-items: center;
    display: block;
  }
`;

export const itensOptions = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Red Hat Display';
  font-size: 12px;
  width: 100%;
  font-weight: 400;
  text-align: center;
  width: 113px;
  line-height: 15.88px;
  gap: 20px;

`;