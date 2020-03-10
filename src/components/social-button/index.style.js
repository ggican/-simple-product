import styled from "styled-components";

const StyleSocialButton = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 16px;
    button {
        width: 100%;
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
        font-family: "Rubik", sans-serif;
        font-size: 14.2px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.12;
        letter-spacing: 1.25px;
        padding: 7px;
        background-color: ${props =>
            props.social === "google" ? "#db4437" : "#3b5998"};
        cursor: pointer;
        outline: none;
        > span {
            margin-left: 10px;
        }
    }
`;

export default StyleSocialButton;
