import React from "react";

const RowCol = ({
    children,
    md = 12,
    xs = 12,
    sm = 12,
    lg = 12,
    style = {},
    className = "",
}) => {
    return (
        <div
            style={style}
            className={`${className} col-md-${md} col-sm-${sm} col-lg-${lg} col-xs-${xs}`}
        >
            {children}
        </div>
    );
};
export default RowCol;
