import styled from "styled-components";

const Container = styled.div`
    display: block;
    width: 450px;
    margin: 0 auto;

    @media (max-width: 450px) {
        padding: 0 10px;
        width: 100%;
        ${({ fluid }) =>
            fluid &&
            `
            padding:0;
        `}
    }
`;

export default Container;
