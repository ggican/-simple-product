import styled from "styled-components";

const StyleLogin = styled.div`
    display: flex;
    height: 100vh;
    .login {
        &__box {
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            &_title {
                margin-bottom: 20px;
                display: block;
                width: 100%;
            }
        }
    }
`;

export default StyleLogin;
