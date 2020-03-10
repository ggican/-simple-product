import React from "react";
import StyleCardCategory from "./index.style";

import Skeleton from "../skeleton";

const CardCategoryLoading = () => {
    return (
        <StyleCardCategory className="card__category">
            <figure>
                <picture>
                    <Skeleton circle width="65px" height="65px"></Skeleton>
                </picture>
                <figcaption>
                    <Skeleton width="100%" height="10px"></Skeleton>
                </figcaption>
            </figure>
        </StyleCardCategory>
    );
};

export default CardCategoryLoading;
