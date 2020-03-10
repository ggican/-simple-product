import styled from "styled-components";

const StyleCardProduct = styled.div`
    position: relative;
    width: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 10px 5px; */
    /* background-color: rgb(255, 255, 255); */
    margin-bottom: 25px;
    height: 100%;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 233, 237);
    border-image: initial;
    transition: all 0.3s ease-in 0s;

    .card-product {
        figure,
        picture,
        img,
        figcaption {
            width: 100%;
            display: block;
        }
        &__picture {
            position: relative;
            height: 250px;
            img {
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                height: 100%;
                display: block;
                width: 100%;
                object-fit: cover;
            }
        }

        &__love {
            position: absolute;
            bottom: 0;
            left: 0;
        }
        &__caption {
            padding: 12px;
            border-top: 1px solid #ddd;
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
export default StyleCardProduct;
