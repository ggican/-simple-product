import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { IoIosSearch } from "react-icons/io";

import SearchBoxLoading from "./index.loading";
import StyleSearchBox from "./index.style";

import debounce from "../../utils/debounce";

const SearchBox = props => {
    const { onSearch, time, searchValue } = props;
    const inputEl = useRef(null);

    const eventOnChangeSarchInput = debounce(value => {
        onSearch(value);
    }, time);

    useEffect(() => {
        inputEl.current.value = searchValue;
    }, [searchValue]);

    return (
        <StyleSearchBox>
            <div className="search">
                <div className="search__box">
                    <input
                        className="search__input"
                        type="search"
                        name="search"
                        ref={inputEl}
                        onChange={({ target: { value } }) =>
                            eventOnChangeSarchInput(value)
                        }
                        defaultValue={searchValue}
                    />
                    <button type="button" className="search__icon">
                        <IoIosSearch size={25} color="#909090" />
                    </button>
                </div>
            </div>
        </StyleSearchBox>
    );
};

SearchBox.Loading = SearchBoxLoading;
SearchBox.defaultProps = {
    onSearch: () => {},
    time: 750,
    searchValue: "",
};
SearchBox.propTypes = {
    /**
      Use onSearch for `SearchBox` get value search
      */
    onSearch: PropTypes.func.isRequired,
    /**
      use time for `SearchBox` when timing after type text delay
      */
    time: PropTypes.number.isRequired,
    /**
      Use searchValue for `SearchBox` components when use default value by default empty string
      */
    searchValue: PropTypes.string.isRequired,
};

export default SearchBox;
