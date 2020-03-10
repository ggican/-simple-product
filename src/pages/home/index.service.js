// begin reducer
import { servicesAction } from "../../reducers";
// end reducer

const service = {
    productList: ({ dispatch }) => {
        servicesAction(dispatch).reduxFetch({
            url: "/home",
            method: "GET",
            reducer: "service",
            key: "productList",
            group: "product",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
                403: {
                    mode: {
                        use: "alert",
                        type: "error",
                        timeOut: 3000,
                    },
                    text: "Missing Authentication Token",
                },
            },
        });
    },
    recipesList: ({ dispatch, params }) => {
        servicesAction(dispatch).reduxFetch({
            url: "/recipes",
            method: "GET",
            reducer: "service",
            key: "recipesList",
            group: "recipes",
            params: params,
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
                403: {
                    mode: {
                        use: "alert",
                        type: "error",
                        timeOut: 3000,
                    },
                    text: "Missing Authentication Token",
                },
            },
        });
    },
};

export default service;
