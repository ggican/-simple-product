import React from "react";
import StylePurchaseHitory from "./index.style";

import Container from "../../components/container";
import { Text } from "../../components/typography";
import CardProductSearch from "../../components/card-product-search";

import { useStore } from "../../reducers";

const PurchaseHitory = props => {
    const { state } = useStore();
    const { purchase = [] } = state?.product;
    return (
        <StylePurchaseHitory>
            <Container>
                {purchase.length > 0 ? (
                    purchase.map((item, key) => {
                        return (
                            <CardProductSearch
                                url={`/product/${key}`}
                                key={key}
                                {...item}
                            ></CardProductSearch>
                        );
                    })
                ) : (
                    <Text.BodyOne block align="center">
                        No Data Purchase Hitory !!!
                    </Text.BodyOne>
                )}
            </Container>
        </StylePurchaseHitory>
    );
};

export default PurchaseHitory;
