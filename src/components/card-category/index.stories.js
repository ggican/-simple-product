import React from "react";
import CardCategory from "./index";

export default { title: "Components|Card Category", component: CardCategory };

export const CardCategoryDefault = () => {
    return (
        <CardCategory imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png"></CardCategory>
    );
};
export const CardCategoryMore = () => {
    return (
        <div style={{ display: "flex" }}>
            <CardCategory
                imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png"
                name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi in quo dolorum doloribus voluptas provident dolore praesentium itaque debitis accusamus, et facilis tenetur nisi ipsam fugiat! Vel, itaque aliquid."
            ></CardCategory>
            <CardCategory
                imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png"
                name="baju"
            ></CardCategory>
            <CardCategory
                imageUrl="https://img.icons8.com/bubbles/2x/t-shirt.png"
                name="beruang"
            ></CardCategory>
        </div>
    );
};
export const CardCategoryLoading = () => {
    return (
        <div style={{ display: "flex" }}>
            <CardCategory.Loading></CardCategory.Loading>
        </div>
    );
};
