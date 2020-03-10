import styled, { css } from "styled-components";

const StyleForm = styled.div`
    display: block;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    .form {
        display: block;
        width: 100%;
        &__submit {
            display: block;
            margin: 15px 0;
            width: 100%;
        }

        &__input {
            border: ${props => (props.border ? `1px solid #ddd` : "unset")};
            padding: 20px 16px 6px;
            height: 56px;
            outline: none;
            background-color: #f2f2f2;
            display: block;
            position: relative;
            border-radius: 6px;
            font-size: 16px;
            border: 1px solid transparent;
            &__focus {
                &:focus ~ label,
                &:valid ~ label {
                    top: 3px;
                    font-size: 12.2px;
                }
            }

            &[type="password"] {
                padding-right: 30px;
            }
            &__icon {
                position: absolute;
                right: 0;
                top: 0;
                border: none;
                display: flex;
                align-items: center;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
                background: transparent;
                justify-content: center;
                padding: 10px;
                height: 56px;
                outline: none;
                cursor: pointer;
            }
        }
        &__label {
            font-family: "Rubik", sans-serif;
            font-size: 16.3px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.48;
            letter-spacing: 0.15px;
            color: rgba(0, 0, 0, 0.6);
            position: absolute;
            pointer-events: none;
            left: 5px;
            top: 14px;
            transition: 0.2s ease all;
            left: 16px;
        }
        &__error {
            display: none;
            padding: 4px 16px;
            color: #b00020;
            font-family: "Rubik", sans-serif;
            font-size: 12.2px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: 0.4px;
        }
        &__checkbox {
            .checkbox {
                display: flex;
                align-items: center;
                position: relative;
                padding-left: 28px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                &--label {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    span {
                        font-family: "Rubik", sans-serif;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: normal;
                        letter-spacing: normal;
                        color: rgba(0, 0, 0, 0.87);
                        &:last-of-type {
                            color: rgba(0, 0, 0, 0.87);
                        }
                    }
                }
            }

            /* Hide the browser's default checkbox */
            .checkbox input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            /* Create a custom checkbox */
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 18px;
                width: 18px;
                background-color: #fff;
                border: 2px solid rgba(0, 0, 0, 0.54);
                border-radius: 3px;
            }

            /* On mouse-over, add a grey background color */
            .checkbox:hover input ~ .checkmark {
                background-color: #00cec8;
            }

            /* When the checkbox is checked, add a blue background */
            .checkbox input:checked ~ .checkmark {
                background-color: #00cec8;
                border: 2px solid #00cec8;
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }

            /* Show the checkmark when checked */
            .checkbox input:checked ~ .checkmark:after {
                display: block;
            }

            /* Style the checkmark/indicator */
            .checkbox .checkmark:after {
                left: 4px;
                top: 0px;
                width: 6px;
                height: 11px;
                border: solid white;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }

    ${({ error }) =>
        error &&
        css`
            .form {
                &__input {
                    border: 1px solid #b00020;
                    &__icon {
                    }
                }
                &__label {
                    color: #b00020;
                }
                &__error {
                    display: block;
                }
            }
        `}
`;

export default StyleForm;
