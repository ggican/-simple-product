import React from "react";
import PropTypes from "prop-types";

import StyleCardCategory from "./index.style";
import CardCategoryLoading from "./index.loading";

import imageDummy from "../../static/image/dummy-square.jpg";

const CardCategory = ({ name = "", imageUrl = "" }) => {
    return (
        <StyleCardCategory className="card__category">
            <figure>
                <picture>
                    <img src={imageUrl} alt={name} />
                </picture>
                <figcaption>
                    <p>{name}</p>
                </figcaption>
            </figure>
        </StyleCardCategory>
    );
};

CardCategory.Loading = CardCategoryLoading;

CardCategory.defaultProps = {
    name: "",
    imageUrl: imageDummy,
};
CardCategory.propTypes = {
    /**
      Use `title` for setup name in components
      */
    name: PropTypes.string,
    /**
      Use `imageUrl` for setup image in components
      */
    imageUrl: PropTypes.string,
};

export default CardCategory;
