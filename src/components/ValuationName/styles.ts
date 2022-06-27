import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const Trend = styled.div<{url?: string}>`
background: url(${props => props.url});
background-position: 50% 50%;
background-size: cover;
max-width: 300px;
width: 100%;
height: 60px;
`;