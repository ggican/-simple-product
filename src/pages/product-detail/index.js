import React from "react";
import { IoIosHeart } from "react-icons/io";
import StyleProductDetail from "./index.style";

import { Text, HeadingText } from "../../components/typography";
import Container from "../../components/container";
import Button from "../../components/button";
import { formatMoney } from "../../utils/formatMoney";
import dummyImage from "../../static/image/dummy-square.jpg";

import service from "./index.service";
import { useStore } from "../../reducers";

const ProductDetail = props => {
    const { dispatch } = useStore();

    const eventOnClickBuyProduct = e => {
        e.preventDefault();
        const { match } = props;
        service.addProductToPurchase({ dispatch, id: match?.params?.id });
    };
    return (
        <StyleProductDetail>
            <div className="product--detail">
                <div className="product--detail__content">
                    <figure>
                        <Container fluid>
                            <picture>
                                <img src={dummyImage} alt="" />
                                <div className="product--detail__love">
                                    <Button
                                        onClick={e => {}}
                                        color="transparent"
                                        iconOnly
                                    >
                                        <IoIosHeart
                                            color="#d64c4c"
                                            size={30}
                                        ></IoIosHeart>
                                    </Button>
                                </div>
                            </picture>
                        </Container>
                        <Container>
                            <figcaption>
                                <div className="product--detail__title">
                                    <HeadingText.Six fontWeight="bold" as="h1">
                                        Nama Barang
                                    </HeadingText.Six>
                                </div>
                                <Text.BodyTwo>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum, molestiae nam? Veniam
                                    odit eos repellat fugiat voluptatibus? Hic
                                    accusantium praesentium inventore ut
                                    officiis vel optio! Cumque minus asperiores
                                    cum ratione!
                                </Text.BodyTwo>
                                <Text.BodyTwo>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum, molestiae nam? Veniam
                                    odit eos repellat fugiat voluptatibus? Hic
                                    accusantium praesentium inventore ut
                                    officiis vel optio! Cumque minus asperiores
                                    cum ratione!
                                </Text.BodyTwo>
                                <Text.BodyTwo>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum, molestiae nam? Veniam
                                    odit eos repellat fugiat voluptatibus? Hic
                                    accusantium praesentium inventore ut
                                    officiis vel optio! Cumque minus asperiores
                                    cum ratione!
                                </Text.BodyTwo>
                                <Text.BodyTwo>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum, molestiae nam? Veniam
                                    odit eos repellat fugiat voluptatibus? Hic
                                    accusantium praesentium inventore ut
                                    officiis vel optio! Cumque minus asperiores
                                    cum ratione!
                                </Text.BodyTwo>
                                <Text.BodyTwo>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum, molestiae nam? Veniam
                                    odit eos repellat fugiat voluptatibus? Hic
                                    accusantium praesentium inventore ut
                                    officiis vel optio! Cumque minus asperiores
                                    cum ratione!
                                </Text.BodyTwo>
                            </figcaption>
                        </Container>
                    </figure>
                </div>
                <div className="product--detail__footer">
                    <Container>
                        <div className="product--detail__footer-content">
                            <Text.BodyOne>{formatMoney(200000)}</Text.BodyOne>
                            <Button
                                onClick={eventOnClickBuyProduct}
                                color="secondary"
                                type="button"
                            >
                                Buy Product
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </StyleProductDetail>
    );
};

export default ProductDetail;
