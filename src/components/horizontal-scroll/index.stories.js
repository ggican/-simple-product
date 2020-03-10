import React from "react";
import HorizontalScroll from "./index";

export default {
    title: "Components|Horizontal Scroll",
    component: HorizontalScroll,
};

export const HorizontalScrollDefault = () => {
    return (
        <div style={{ width: 250 }}>
            <HorizontalScroll>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
                <div style={{ display: "inline-block" }}>lorem |</div>
            </HorizontalScroll>
        </div>
    );
};
