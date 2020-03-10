import styled from "styled-components";

const StyleCardCategory = styled.div`
    width: 100px;
    display: inline-block;
    min-height: 120px;
    display: inline-block;
    text-align: center;
    position: relative;
    vertical-align: top;
    flex: 1 1 0%;
    padding: 5px 0px 0px;
    text-decoration: none;
    margin-right: 12px;
    border: 1px solid #ddd;
    padding-left: 20px;
    padding-right: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #fff;
    &.card__category {
        margin-left: 0;
        + .card__category {
            margin-right: 12px;
        }
    }
    @media (max-width: 450px) {
        &.card__category {
            margin-left: 10px;
            + .card__category {
                margin-left: 0;
                margin-right: 12px;
            }
        }
    }
    figure,
    picture,
    img,
    figcaption {
        width: 100%;
        display: block;
    }
    figcaption {
        text-align: center;
        display: block;
        p {
            font-size: 14px;
            text-align: center;
            color: rgba(0, 0, 0, 0.7);
            bottom: 0px;
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: initial;
            left: -2px;
            position: relative;
            word-break: break-word;
            margin: 2px 0px 0px;
            overflow: hidden;
            font-weight: bold;
        }
    }
`;
export default StyleCardCategory;
