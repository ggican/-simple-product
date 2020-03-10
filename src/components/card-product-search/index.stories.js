import React from "react";
import CardProductSearch from "./index";

export default {
    title: "Components|Card Product Search",
    component: CardProductSearch,
};

export const CardProductDefault = () => {
    return <CardProductSearch></CardProductSearch>;
};
export const CardProductWithTitlePrice = () => {
    return (
        <CardProductSearch
            price={2000000}
            title="Nitendo Wii"
        ></CardProductSearch>
    );
};
export const CardProductLoading = () => {
    return <CardProductSearch.Loading></CardProductSearch.Loading>;
};
