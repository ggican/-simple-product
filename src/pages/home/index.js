import React from "react";

//begin home page file import
import StylesHomePage from "./index.style";
import { defaultPropsType, interFace } from "./index.interface";
import service from "./index.service";
import HomePageLoading from "./index.loading";
import HomePageContent from "./index.content";
//end home page file import

//begin global import
import CommonFetchData from "../../common/fetch-data";
//end global import

const Home = () => {
    return (
        <StylesHomePage>
            <CommonFetchData
                service={{
                    serviceFunction: service.productList,
                    isReady: true,
                    key: "productList",
                    group: "product",
                }}
                renderLoading={() => <HomePageLoading />}
                renderSuccess={response => (
                    <HomePageContent response={response} />
                )}
                renderFailed={() => <div>something wrong</div>}
            ></CommonFetchData>
        </StylesHomePage>
    );
};

Home.defaultProps = defaultPropsType;
Home.propTypes = interFace;

export default Home;
