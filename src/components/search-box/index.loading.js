import React from "react";
import StyleSearchBox from "./index.style";
import Skeleton from "../skeleton";

const SearchBoxLoading = () => {
    return (
        <StyleSearchBox>
            <Skeleton></Skeleton>
        </StyleSearchBox>
    );
};

export default SearchBoxLoading;
