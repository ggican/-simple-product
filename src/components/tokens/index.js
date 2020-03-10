import button from "./button";
import color from "./color";

const tokens = {
    main: "mediumseagreen",
    header: {
        default: {
            background: "#fff",
            borderColor: "#ddd",
        },
    },
    ...button,
    color: color,
};

export default tokens;
