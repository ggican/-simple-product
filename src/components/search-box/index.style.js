import styled from "styled-components";

const StyleSearchBox = styled.div`
    display: block;
    width: 100%;

    .search {
        &__box {
            width: 100%;
            display: block;
            position: relative;
        }
        &__input {
            font-size: 16px;
            display: block;
            width: 100%;
            border-radius: 8px;
            border: 1px solid #ddd;
            outline: none;
            padding: 7px 7px 7px 40px;
        }
        &__icon {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: transparent;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            border-left: 1px solid #ddd;
            border-right: 0;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            cursor: pointer;
        }
        &__value {
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            padding: 7px 7px 7px 40px;
        }
    }
`;

export default StyleSearchBox;
