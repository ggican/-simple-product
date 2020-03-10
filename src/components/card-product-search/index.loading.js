import React from "react";
import StyleCardProducSearch from "./index.style";
import Skeleton from "../skeleton";

const CardProductSearchLoading = () => {
    return (
        <StyleCardProducSearch>
            <div className="card-product-search">
                <figure className="card-product-search__figure">
                    <picture className="card-product-search__picture">
                        <Skeleton
                            style={{
                                borderBottomLeftRadius: 0,
                                borderTopLeftRadius: 0,
                            }}
                            width="120px"
                            height="120px"
                        ></Skeleton>
                    </picture>
                    <figcaption className="card-product-search__caption">
                        <Skeleton
                            marginBottom="15px"
                            height="15px"
                            width="60%"
                        ></Skeleton>
                        <Skeleton height="10px" width="40%"></Skeleton>
                    </figcaption>
                </figure>
            </div>
        </StyleCardProducSearch>
    );
};

export default CardProductSearchLoading;
