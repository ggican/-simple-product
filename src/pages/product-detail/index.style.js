import styled from "styled-components";
const StyleProductDetail = styled.div`
    display: block;
    width: 100%;
    padding-bottom: 90px;
    .product--detail {
        &__content {
            picture {
                height: 350px;
                margin-bottom: 20px;
                position: relative;
                img {
                    object-fit: cover;
                    height: 100%;
                    display: block;
                    height: 100%;
                }
            }
        }
        &__love {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
        }
        &__title {
            margin-bottom: 20px;
        }
        &__footer {
            position: fixed;
            border-top: 1px solid #ddd;
            bottom: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            width: 100%;
            padding: 10px 0;
            &-content {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                button {
                    margin-left: 10px;
                }
            }
        }
    }
`;
export default StyleProductDetail;
