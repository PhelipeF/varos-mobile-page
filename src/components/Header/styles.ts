import styled from "styled-components";

export const Container = styled.div`
    padding: 8%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;

    button {
        background: transparent;
        border: 0;
        cursor:pointer;

    }

`;

export const Logo = styled.div<{logoIMG:string}>`
    background: url(${props => props.logoIMG});
    background-position: 50% 50%;
    background-size: cover;
    min-height: 18px;
    width: 101px;
    cursor: pointer;
`;