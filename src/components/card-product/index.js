import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

import CardProductLoading from "./index.loading";
import StyleCardProduct from "./index.style";

import Button from "../button";
import imageDummy from "../../static/image/dummy-square.jpg";

const CardProduct = ({
    title = "",
    imageUrl = imageDummy,
    loved = 0,
    description = "",
    url = "/",
}) => {
    return (
        <StyleCardProduct>
            <div className="card-product">
                <figure className="card-product__figure">
                    <Link to={url}>
                        <picture className="card-product__picture">
                            <img src={imageUrl} alt={title} />
                            <div className="card-product__love">
                                <Button
                                    onClick={e => {}}
                                    color="transparent"
                                    iconOnly
                                >
                                    <IoIosHeart
                                        color={loved ? "#d64c4c" : "#9fa6b0"}
                                        size={30}
                                    ></IoIosHeart>
                                </Button>
                            </div>
                        </picture>
                    </Link>
                    <figcaption className="card-product__caption">
                        <Link to={url}>
                            <h4>{title}</h4>
                        </Link>
                        <p>{description}</p>
                    </figcaption>
                </figure>
            </div>
        </StyleCardProduct>
    );
};

CardProduct.Loading = CardProductLoading;

CardProduct.defaultProps = {
    title: "",
    imageUrl: imageDummy,
    loved: 0,
    description: "",
    url: "",
};
CardProduct.propTypes = {
    /**
      Use `title` for setup name in components
      */
    title: PropTypes.string,
    /**
      Use `imageUrl` for setup image in components
      */
    imageUrl: PropTypes.string,
    /**
      Use `loved` for setup love icon is love or not
      */
    loved: PropTypes.number,
    /**
      Use `description` for setup description component
      */
    description: PropTypes.string,
    /**
      Use `url` for setup open link
      */
    url: PropTypes.string,
};

export default CardProduct;
