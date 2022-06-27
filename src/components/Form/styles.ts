import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 658px;
  width: 100%;
  min-height: 420px;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 100;
  filter: blur(20px);
`;

export const Placeholder = styled.form`
  position: absolute;
  max-width: 658px;
  width: 100%;
  border-radius: 20px;
  padding: 8%;
  background: rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 15px 0 10px 0;
    font-weight: 500;
  }

  input {
    margin: 10px 0;
    width: 100%;
    padding: 12px 10px;
    background-color: ${props => props.theme.lighterText};
    border: 0;
    border-radius: 6px;
    z-index: 9999;

    :placeholder {
      color: ${props => props.theme.lightText};
      font-size: 16px;
    }

  }

  button {
    background: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid ${props => props.theme.accent};
    border-radius: 6px;
    width: 100%;
    padding: 12px 0;
    margin-top: 15px;
    cursor:pointer;
  }

`;