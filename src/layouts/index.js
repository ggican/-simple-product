import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IoMdHome, IoMdOptions, IoMdBook, IoMdAppstore } from "react-icons/io";

import StyleLayouts from "./index.style";

import Header from "../components/header";
import Content from "../components/content";
import Navbar from "../components/navbar";

import queryStringToObject from "../utils/query-string-to-object";

const Layouts = ({ children, style }) => {
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();
    const { search } = useLocation();
    const limitSearchValue = 3;
    useEffect(() => {
        const queryParams = queryStringToObject(search);
        queryParams && queryParams.name && setSearchValue(queryParams.name);
    }, [search]);

    const eventOnChangeSearchInput = value => {
        if (value.length > limitSearchValue) {
            history.push(`/search?name=${value}`);
        }
    };

    const handleBackScreen = () => {
        history.goBack();
    };

    return (
        <StyleLayouts>
            <Header
                onPressBackButton={handleBackScreen}
                searchValue={searchValue}
                onSearch={eventOnChangeSearchInput}
                {...style.header}
            ></Header>
            <Content noPadding={style?.content?.noPadding}>{children}</Content>
            <Navbar
                navList={[
                    {
                        layout: "home",
                        title: "Home",
                        icon: (color, size = 25) => (
                            <IoMdHome size={size} color={color} />
                        ),
                        to: "/",
                    },
                    {
                        layout: "feed",
                        title: "Feed",
                        to: "/",
                        icon: (color, size = 25) => (
                            <IoMdBook size={size} color={color} />
                        ),
                    },
                    {
                        layout: "cart",
                        title: "Cart",
                        to: "/purchase-history",
                        icon: (color, size = 25) => (
                            <IoMdAppstore size={size} color={color} />
                        ),
                    },
                    {
                        layout: "profile",
                        title: "Profile",
                        to: "/",
                        icon: (color, size = 25) => (
                            <IoMdOptions size={size} color={color} />
                        ),
                    },
                ]}
                {...style.navbar}
            ></Navbar>
        </StyleLayouts>
    );
};

export default Layouts;
