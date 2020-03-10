import React from "react";
import { StyleSpinner } from "./index.style";

const Spinner = ({ color = "aquamarine" }) => {
    return (
        <StyleSpinner color={color}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyleSpinner>
    );
};

export default Spinner;
