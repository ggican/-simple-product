import React from "react";
import { IoIosHeart, IoMdArrowBack } from "react-icons/io";

const HeaderLeft = ({
    withHeaderLeft = false,
    hasLoveButton = false,
    hasBackButton = false,
    onPressBackButton = () => {},
}) => {
    if (!withHeaderLeft) {
        return false;
    }
    return (
        <div className="header__left">
            {hasLoveButton && (
                <button type="button" className="header__icon">
                    <IoIosHeart size={25} color="#d64c4c"></IoIosHeart>
                </button>
            )}
            {hasBackButton && (
                <button
                    type="button"
                    onClick={onPressBackButton}
                    className="header__icon"
                >
                    <IoMdArrowBack size={25} color="#909090"></IoMdArrowBack>
                </button>
            )}
        </div>
    );
};

export default HeaderLeft;
