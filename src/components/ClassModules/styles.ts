import styled from 'styled-components';

export const ModuleTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 0 15px 0;
  align-items: center;
  button {
    width: 24px;
    height: 24px;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    margin: 0 10px 0 0;
    font-size: 1.8em;
    transition: all 300ms ease-in-out;
    @media (max-width: 340px) {
      font-size: 1.3em;
    }
   
  }
  `;