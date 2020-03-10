// begin reducer
import { servicesAction } from "../../reducers";
// end reducer

const service = {
    addProductToPurchase: ({ dispatch, id }) => {
        servicesAction(dispatch).reduxProductPurchase({
            id: id,
            type: "ADD_TO_PURCHASE",
            reducer: "service",
            key: "purchase",
            group: "product",
        });
    },
};

export default service;
