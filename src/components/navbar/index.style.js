import styled from "styled-components";

const StyleNavbar = styled.div`
    width: 100%;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    transition: all 500ms ease;
    ${({ mouseDown }) =>
        mouseDown &&
        `
        transition: all 500ms ease;
        position: fixed;
        top: -100%;
        transform: translateY(100%);
        opacity: 0;
  `}
    ${({ mouseUp }) =>
        mouseUp &&
        `
        transition: all 500ms ease;
        transform: translateY(0);
  `}
  
    .navbar {
        &__row {
            display: flex;
            width: 100%;
            margin: 0;
            padding: 0;
        }
        &__column {
            display: inline-block;
            padding: 0;
            margin: 0;
            width: 25%;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 14px;
                width: 100%;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
                color: #8e8e8e;
                font-weight: bold;
                font-size: 14px;
                .icon {
                    display: block;
                    width: 100%;
                    margin-bottom: 3px;
                }
            }
            &.active {
                a {
                    color: #484848;
                }
            }
        }
    }
`;
export default StyleNavbar;
