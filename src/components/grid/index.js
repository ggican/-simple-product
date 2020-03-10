import React from "react";
import GridCol from "./index.col";
import GridStyle from "./index.style";

const Grid = ({
    children,
    align = "normal",
    justify = "flex-start",
    className = "",
    withPaddingBottom = false,
    marginBottom = false,
}) => {
    return (
        <GridStyle
            withPaddingBottom={withPaddingBottom}
            marginBottom={marginBottom}
            className={className}
            align={align}
            justify={justify}
        >
            {children}
        </GridStyle>
    );
};

Grid.Col = GridCol;

export default Grid;
