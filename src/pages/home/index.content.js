import React from "react";

//begin global import
import Container from "../../components/container";
import HorizontalScroll from "../../components/horizontal-scroll";
import CardCategory from "../../components/card-category";
import CardProduct from "../../components/card-product";
import { Text } from "../../components/typography";
import Grid from "../../components/grid";
//end global import

const HomePageContent = ({ response }) => {
    return response && response.length > 0
        ? response.map((item, key) => {
              return (
                  <div key={key}>
                      <Container>
                          <Grid>
                              <Grid.Col md={12} xs={12} sm={12} lg={12}>
                                  <Text.BodyOne fontWeight="bold">
                                      Category
                                  </Text.BodyOne>
                              </Grid.Col>
                          </Grid>
                      </Container>
                      <Container fluid>
                          <HorizontalScroll>
                              {item?.data?.category.map(
                                  (itemCategory, keyCategory) => {
                                      return (
                                          <CardCategory
                                              key={keyCategory}
                                              {...itemCategory}
                                          ></CardCategory>
                                      );
                                  },
                              )}
                          </HorizontalScroll>
                      </Container>
                      <Container>
                          <Grid>
                              <Grid.Col md={12} xs={12} sm={12} lg={12}>
                                  <Text.BodyOne fontWeight="bold">
                                      Promo Product
                                  </Text.BodyOne>
                              </Grid.Col>
                          </Grid>

                          {item?.data?.productPromo.map(
                              (itemProduct, keyProduct) => {
                                  return (
                                      <CardProduct
                                          url={`/product/${itemProduct.id}`}
                                          key={keyProduct}
                                          {...itemProduct}
                                      ></CardProduct>
                                  );
                              },
                          )}
                      </Container>
                  </div>
              );
          })
        : false;
};

export default HomePageContent;
