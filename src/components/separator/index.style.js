import styled from 'styled-components';

const SeparatorStyle = styled.div`
    margin: 15px 0;
    padding: 15px 0;
    display: flex;
    justify-content: center;

    .separator-line {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1px;
        background: #ddd;
        &--text {
            z-index: 2;
            display: block;
            background: #fff;
            padding: 10px;
        }
    }
`;

export default SeparatorStyle;
