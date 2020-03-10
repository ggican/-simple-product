import styled from "styled-components";
import PropTypes from "prop-types";

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



    ${({ iconOnly }) =>
        iconOnly &&
        `
        display:flex;
        align-items:center;
        justify-content:space-between;
        border: 1px solid transparent;
        line-height: 0;
        padding: 5px;
        border: 0;
        &:hover {
            opacity: 0.8;
            border:0;
        }
  `}
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

Button.defaultProps = {
    rounded: false,
    noPadding: false,
    title: "",
    size: "default",
    type: "button",
    color: "default",
    iconOnly: false,
    block: false,
    children: false,
    circle: false,
    onClick: () => {},
    as: "button",
    invert: false,
    disabled: false,
};

Button.propTypes = {
    /**
      Use Type for type button
      */
    type: PropTypes.oneOf(["submit", "button"]),
    /**
      Use color for color button
      */
    color: PropTypes.oneOf([
        "default",
        "secondary",
        "blue",
        "white",
        "primary",
        "transparent",
        "danger",
        "primary-link",
        "danger-link",
    ]),
    /**
      Use color for no use padding on button
      */
    noPadding: PropTypes.bool,
    /**
      Use size for size padding button
      */
    size: PropTypes.oneOf(["large", "default", "small"]),
    /**
      Use title for title  button
      */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
      Use href for href button for link but not recomend
      */
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
      Use rounded for rounded button box
      */
    rounded: PropTypes.bool,
    /**
      Use icon only for button only use icon 
      */
    iconOnly: PropTypes.bool,
    /**
      Use block only for button full width same like parent
      */
    block: PropTypes.bool,
};

export default Button;
