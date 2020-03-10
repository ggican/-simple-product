import styled from "styled-components";
// import PropTypes from 'prop-types';
import color from "../tokens/color";

const HeadingText = {
    One: styled.h1`
        font-family: "Rubik", sans-serif;
        font-size: 60px;
        font-weight: ${props => props.fontWeight || "bold"};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${props => color[props.color]};
    `,
    Two: styled.h2`
        font-family: "Rubik", sans-serif;
        font-size: 45px;
        font-weight: ${props => props.fontWeight || 500};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Three: styled.h3`
        font-family: "Rubik", sans-serif;
        font-size: 48.8px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Four: styled.h4`
        font-family: "Rubik", sans-serif;
        font-size: 34.5px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.25px;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Five: styled.h5`
        font-family: "Muli", sans-serif;
        font-size: 24.4px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Six: styled.h6`
        font-family: "Muli", sans-serif;
        font-size: 20.3px;
        font-weight: ${props => props.fontWeight || 500};
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.25px;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
};

const Text = {
    BodyOne: styled.p`
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.72;
        letter-spacing: 0.5px;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    BodyTwo: styled.p`
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.41;
        letter-spacing: 0.25px;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    SubtitleOne: styled.span`
        font-family: "Muli", sans-serif;
        font-size: 16.3px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.48;
        letter-spacing: 0.15px;
        display: ${props => (props.block ? "block" : "inline-block")};
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    SubtitleTwo: styled.span`
        font-family: "Muli", sans-serif;
        font-size: 14.2px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.69;
        letter-spacing: 0.2px;
        display: ${props => (props.block ? "block" : "inline-block")};
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Overline: styled.h5`
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: 2px;
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
    Caption: styled.span`
        font-family: "Muli", sans-serif;
        font-size: 12.2px;
        font-weight: ${props => props.fontWeight || "normal"};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: 0.4px;
        display: ${props => (props.block ? "block" : "inline-block")};
        text-align: ${props => props.align || "left"};
        color: ${props => color[props.color]};
    `,
};

export { Text, HeadingText };
