import styled from "styled-components";

const StyleCardProducSearch = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 25px;
    height: 100%;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 233, 237);
    border-image: initial;
    transition: all 0.3s ease-in 0s;

    .card-product-search {
        &__picture {
            display: block;
            height: 100%;

            width: 100%;
            img {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                height: 100%;
                display: block;
                width: 100%;
                object-fit: cover;
            }
        }
        &__link {
            display: inline-block;
            width: 120px;
        }
        &__figure {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        &__caption {
            width: calc(100% - 130px);
            display: inline-flex;
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            h4 {
                font-size: 16px;
                font-weight: bold;
            }
            p {
                font-size: 14px;
                text-align: left;
                color: rgba(0, 0, 0, 0.7);
                bottom: 0px;
                width: 100%;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                white-space: initial;
                left: 0;
                position: relative;
                word-break: break-word;
                margin: 12px 0px 0px;
                overflow: hidden;
            }
        }
    }
`;
export default StyleCardProducSearch;
