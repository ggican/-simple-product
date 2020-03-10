import React from "react";
import PropTypes from "prop-types";
import { IoMdShare } from "react-icons/io";

import Button from "../button";
import { Text } from "../typography";

import HeaderLeft from "./index.header-left";
import StylesHeader from "./index.styles";

import SearchBox from "../search-box";

const Header = props => {
    const {
        withHeader,
        headerTransparent,
        left,
        right,
        searchValue,
        onSearch,
        onPressBackButton,
    } = props;
    if (!withHeader) {
        return false;
    }
    return (
        <StylesHeader
            id="header-components"
            noSearch={right?.hasShareButton}
            headerTransparent={headerTransparent}
        >
            <header className="header">
                <div className="header__container">
                    <HeaderLeft
                        onPressBackButton={onPressBackButton}
                        {...left}
                    ></HeaderLeft>
                    <div className="header__right">
                        {right?.hasSearch && (
                            <SearchBox
                                searchValue={searchValue}
                                onSearch={onSearch}
                            ></SearchBox>
                        )}
                        {right?.title && (
                            <Text.BodyOne>{right.title}</Text.BodyOne>
                        )}

                        {right?.hasShareButton && (
                            <Button iconOnly color="transparent" noPadding>
                                <IoMdShare
                                    size={25}
                                    color="#909090"
                                ></IoMdShare>
                            </Button>
                        )}
                    </div>
                </div>
            </header>
        </StylesHeader>
    );
};

Header.defaultProps = {
    withHeader: false,
    headerTransparent: false,
    searchValue: "",
    onSearch: () => {},
    onPressBackButton: () => {},
};
Header.propTypes = {
    /**
      Use withHeader if component without header
      */
    withHeader: PropTypes.bool,
    /**
      Use headerTransparent background header without background color
      */
    headerTransparent: PropTypes.bool,
    /**
      Use searchValue when set up search box value in header
      */
    searchValue: PropTypes.string,
    /**
      Use `onSearch` for function when search box in header
      */
    onSearch: PropTypes.func,
    /**
      Use `onPressBackButton` for function back button press in header
      */
    onPressBackButton: PropTypes.func,
};

export default Header;
