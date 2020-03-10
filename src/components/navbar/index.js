import React from "react";
import { Link } from "react-router-dom";
import Container from "../container";
import StyleNavbar from "./index.style";

import useDetectMouseUpDown from "../../utils/customHooks/useDetectMouseUpDown";

const Navbar = ({ isNavbar = false, active = "", navList = [] }) => {
    const isMouseUp = useDetectMouseUpDown();
    if (!isNavbar) {
        return false;
    }

    return (
        <StyleNavbar mouseDown={!isMouseUp} mouseUp={isMouseUp}>
            <div className="navbar">
                <Container fluid>
                    <ul className="navbar__row">
                        {navList.length > 0 &&
                            navList.map(item => {
                                return (
                                    <li
                                        key={item.layout}
                                        className={`navbar__column ${
                                            item.layout === active
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <Link to={item.to}>
                                            <span className="icon">
                                                {item.icon(
                                                    item.layout === active
                                                        ? "#484848"
                                                        : "#8e8e8e",
                                                    25,
                                                )}
                                            </span>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </Container>
            </div>
        </StyleNavbar>
    );
};

export default Navbar;
