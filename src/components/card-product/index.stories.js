import React from "react";
import CardProduct from "./index";

export default { title: "Components|Card Product", component: CardProduct };

export const CardProductDefault = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct></CardProduct>
        </div>
    );
};
export const CardProductDefaultWithLove = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct loved={1}></CardProduct>
        </div>
    );
};
export const CardProductWithTitle = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct title="Nitendo Switch"></CardProduct>
        </div>
    );
};
export const CardProductWithDesc = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct
                description="The Nintendo Switch was released on March 3, 2017 and is Nintendo's"
                title="Nitendo Switch"
            ></CardProduct>
        </div>
    );
};
export const CardProductWithDescLongText = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct
                description="The Nintendo Switch was released on March 3, 2017 and is Nintendo's The Nintendo Switch was released on March 3, 2017 and is Nintendo's"
                title="Nitendo Switch"
            ></CardProduct>
        </div>
    );
};
export const CardProductLoading = () => {
    return (
        <div style={{ width: 250 }}>
            <CardProduct.Loading></CardProduct.Loading>
        </div>
    );
};
