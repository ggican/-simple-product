import styled from "styled-components";

const StylesHeader = styled.div`
    background-color: ${props => props.theme.header.default.background};
    border-bottom: 1px solid ${props => props.theme.header.default.borderColor};
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1024;
    ${({ headerTransparent }) =>
        headerTransparent &&
        `
            background-color:transparent;
            border-bottom:0;
        `}
    .header {
        display: flex;
        width: 100%;
        background-color: #fff;
        align-items: center;
        justify-content: center;
        ${({ headerTransparent }) =>
            headerTransparent &&
            `
            background-color:transparent;
        `}
        &__container {
            width: 450px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__left {
            margin-right: 10px;
            display: inline-block;
        }
        &__right {
            display: inline-block;
            width: 100%;
            ${({ noSearch }) =>
                noSearch &&
                `
                width:auto;
            `}
        }
        &__icon {
            border: 0;
            padding: 0;
            background-color: transparent;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            outline: none;
            cursor: pointer;
        }
    }
`;

export default StylesHeader;
