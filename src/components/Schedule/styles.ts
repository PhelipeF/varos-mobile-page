import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
`;

export const PanelControl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    max-width: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
      }

      ::selection {
        outline: none;
      }
    }
  }
`;

export const Class = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  min-height: 480px;
  padding: 8% 8% 6% 8%;
  border: 1px solid ${props => props.theme.lighterText};
  border-radius: 25px;
  margin-bottom: 20px;
  color: ${props => props.theme.lightText};
  background-color: #101010;
  font-weight: 400;
  font-size: 16px;
  h2 {
    color: ${props => props.theme.text};
  }
  
  section {
    margin-bottom: 24px;
    p {
      margin-top: 15px;
    }

  }

  ul {
    list-style: none;
    
    li {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      .class-ul-li-id {
        color: ${props => props.theme.accent};
        width: 10%;
        font-weight: 800;
      }  
      .class-ul-li-title {
        width: 70%;
      }
      .class-ul-li-time {
        width: 20%;
      }  
  
    }
  
  }
`;

export const ClassID = styled.div`
  background: ${props => props.theme.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 24px;
  max-width: 34px;
  color: #000;
  font-weight: 800;
`;

export const ClassTiming = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  img {
    padding: 0 15px;
  }

  p {
   color: ${props => props.theme.accent};
   font-size: 16px;
   font-weight: 700;

   span {
    color: ${props => props.theme.lightText};
    font-weight: 500;

   }
  }
`;
