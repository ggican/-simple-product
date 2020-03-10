import React from "react";
import StyleCardProduct from "./index.style";
import Skeleton from "../skeleton";

const CardProductLoading = () => {
    return (
        <StyleCardProduct>
            <div className="card-product">
                <figure className="card-product__figure">
                    <picture className="card-product__picture">
                        <Skeleton
                            style={{
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                            }}
                            width="100%"
                            height="250px"
                        ></Skeleton>
                    </picture>
                    <figcaption className="card-product__caption">
                        <Skeleton
                            marginBottom="15px"
                            height="15px"
                            width="40%"
                        ></Skeleton>
                        <Skeleton height="10px" width="90%"></Skeleton>
                        <Skeleton height="10px" width="60%"></Skeleton>
                        <Skeleton height="10px" width="40%"></Skeleton>
                    </figcaption>
                </figure>
            </div>
        </StyleCardProduct>
    );
};

export default CardProductLoading;
