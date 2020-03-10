import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CardProductSearchLoading from "./index.loading";
import StyleCardProducSearch from "./index.style";

import imageDummy from "../../static/image/dummy-square.jpg";
import { formatMoney } from "../../utils/formatMoney";

const CardProductSearch = ({
    title = "",
    imageUrl = imageDummy,
    price = 0,
    url = "/",
}) => {
    return (
        <StyleCardProducSearch>
            <div className="card-product-search">
                <figure className="card-product-search__figure">
                    <Link to={url} className="card-product-search__link">
                        <picture className="card-product-search__picture">
                            <img src={imageUrl} alt={title} />
                        </picture>
                    </Link>
                    <figcaption className="card-product-search__caption">
                        <Link to={url}>
                            <h4>{title}</h4>
                        </Link>
                        <p>{formatMoney(price)}</p>
                    </figcaption>
                </figure>
            </div>
        </StyleCardProducSearch>
    );
};

CardProductSearch.Loading = CardProductSearchLoading;

CardProductSearch.defaultProps = {
    title: "",
    url: "/",
    imageUrl: imageDummy,
    price: 0,
};
CardProductSearch.propTypes = {
    /**
      Use `title` for setup name in components
      */
    title: PropTypes.string,
    /**
      Use `imageUrl` for setup image in components
      */
    imageUrl: PropTypes.string,
    /**
      Use `price` for setup price product
      */
    price: PropTypes.number,
    /**
      Use `url` for setup link
      */
    url: PropTypes.string.isRequired,
};

export default CardProductSearch;
