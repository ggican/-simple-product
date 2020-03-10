import React, { useState, useEffect } from "react";
import StyleSearch from "./index.style";
import Container from "../../components/container";
import CardProductSearch from "../../components/card-product-search";
import queryStringToObject from "../../utils/query-string-to-object";
import dataSearch from "./index.data";

const Search = props => {
    const { location } = props;
    const { search } = location;

    const [searchValue, setSearchValue] = useState("");
    const [resultSearch, setResultSearch] = useState([]);
    useEffect(() => {
        const queryParams = queryStringToObject(search);
        queryParams && queryParams.name && setSearchValue(queryParams.name);
    }, [search]);

    useEffect(() => {
        var searchData = new RegExp(searchValue, "i");
        let result = dataSearch.filter(item => searchData.test(item.title));
        setResultSearch(result);
    }, [searchValue]);

    return (
        <StyleSearch>
            <Container>
                {resultSearch.length > 0 &&
                    resultSearch.map((item, key) => {
                        return (
                            <CardProductSearch
                                url={`/product/${key}`}
                                key={key}
                                {...item}
                            ></CardProductSearch>
                        );
                    })}
            </Container>
        </StyleSearch>
    );
};

export default Search;
