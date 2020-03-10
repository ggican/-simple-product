import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    display: block;
    padding: 70px 0;
    ${({ noPadding }) =>
        noPadding &&
        `
            padding:0;
    `}
`;

export default Content;
