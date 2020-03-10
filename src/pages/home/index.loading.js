import React, { Fragment } from "react";

//begin global import
import Container from "../../components/container";
import HorizontalScroll from "../../components/horizontal-scroll";
import CardCategory from "../../components/card-category";
import CardProduct from "../../components/card-product";
import Grid from "../../components/grid";
import Skeleton from "../../components/skeleton";
//end global import
const HomePageLoading = () => {
    return (
        <Fragment>
            <Container fluid>
                <Grid>
                    <Grid.Col md={12} xs={12} sm={12} lg={12}>
                        <Skeleton width="40%" height="12px" />
                    </Grid.Col>
                </Grid>
                <HorizontalScroll>
                    <CardCategory.Loading></CardCategory.Loading>
                    <CardCategory.Loading></CardCategory.Loading>
                    <CardCategory.Loading></CardCategory.Loading>
                    <CardCategory.Loading></CardCategory.Loading>
                    <CardCategory.Loading></CardCategory.Loading>
                </HorizontalScroll>
            </Container>
            <Container>
                <Grid>
                    <Grid.Col md={12} xs={12} sm={12} lg={12}>
                        <Skeleton width="40%" height="12px" />
                    </Grid.Col>
                </Grid>
                <CardProduct.Loading></CardProduct.Loading>
                <CardProduct.Loading></CardProduct.Loading>
                <CardProduct.Loading></CardProduct.Loading>
            </Container>
        </Fragment>
    );
};

export default HomePageLoading;
