import styled from "styled-components";

const Button = styled.div`
    display: ${props => (props.block ? "block" : "inline-block")};
    width: ${props => (props.block ? "100%" : "auto")};
    outline: none;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border-radius: 0.25rem;
    transition: opacity 0.15s ease-in-out, color 0.15s ease-in-out,
        background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    padding: ${props => props.theme.button.size[props.size].padding};
    font-size: ${props => props.theme.button.size[props.size].fontSize};
    line-height: ${props => props.theme.button.size[props.size].lineHeight};
    background-color: ${props =>
        props.theme.button.color[
            `${props.color}${props.invert ? "-invert" : ""}`
        ].background.default};
    border: 1px solid
        ${props =>
            props.theme.button.color[
                `${props.color}${props.invert ? "-invert" : ""}`
            ].border.default};
    color: ${props =>
        props.theme.button.color[
            `${props.color}${props.invert ? "-invert" : ""}`
        ].text.default};

    &:hover {
        cursor: pointer;
        transition: opacity 0.15s ease-in-out, color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        background-color: ${props =>
            props.theme.button.color[
                `${props.color}${props.invert ? "-invert" : ""}`
            ].background.hover};
        border: 1px solid
            ${props =>
                props.theme.button.color[
                    `${props.color}${props.invert ? "-invert" : ""}`
                ].border.hover};
        color: ${props =>
            props.theme.button.color[
                `${props.color}${props.invert ? "-invert" : ""}`
            ].text.hover};
    }
    &:active {
        transition: opacity 0.15s ease-in-out, color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        background-color: ${props =>
            props.theme.button.color[
                `${props.color}${props.invert ? "-invert" : ""}`
            ].background.active};
        border: 1px solid
            ${props =>
                props.theme.button.color[
                    `${props.color}${props.invert ? "-invert" : ""}`
                ].border.active};
        color: ${props =>
            props.theme.button.color[
                `${props.color}${props.invert ? "-invert" : ""}`
            ].text.active};
    }
    &:disabled {
        transition: opacity 0.15s ease-in-out, color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        cursor: not-allowed;
        opacity: 0.65;
    }

    &.icon-only {
        border: 1px solid transparent;
        line-height: 0;
        padding: 0;
        border: 0;
        &:hover {
            opacity: 0.8;
        }
    }

    ${({ rounded }) =>
        rounded &&
        `
    border-radius: 100px;
  `}
    ${({ circle }) =>
        circle &&
        `
    border-radius: 50%;
  `}
    ${({ noPadding }) =>
        noPadding &&
        `
    padding-left: 0;
    padding-right: 0;
  `}
`;

export default Button;
