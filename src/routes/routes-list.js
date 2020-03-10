import { lazy } from "react";

const routeList = [
    {
        path: "/login",
        component: lazy(() => import("../pages/login")),
        style: {
            header: {
                withHeader: false,
            },
        },
        role: ["GUEST"],
    },
    {
        path: "/",
        component: lazy(() => import("../pages/home")),
        style: {
            header: {
                withHeader: true,
                left: {
                    withHeaderLeft: true,
                    hasLoveButton: true,
                },
                right: {
                    hasSearch: true,
                },
            },
            navbar: {
                isNavbar: true,
                active: "home",
            },
        },
        role: ["USER"],
    },
    {
        path: "/search",
        component: lazy(() => import("../pages/search")),

        style: {
            header: {
                withHeader: true,
                left: {
                    withHeaderLeft: true,
                    hasBackButton: true,
                },
                right: {
                    hasSearch: true,
                },
            },
        },
        role: ["USER"],
    },
    {
        path: "/product/:id",
        component: lazy(() => import("../pages/product-detail")),
        style: {
            header: {
                withHeader: true,
                headerTransparent: true,
                left: {
                    withHeaderLeft: true,
                    hasBackButton: true,
                },
                right: {
                    hasSearch: false,
                    hasShareButton: true,
                },
            },
            content: {
                noPadding: true,
            },
        },
        role: ["USER"],
    },
    {
        path: "/purchase-history",
        component: lazy(() => import("../pages/purchase-history")),
        style: {
            header: {
                withHeader: true,
                left: {
                    withHeaderLeft: true,
                    hasBackButton: true,
                },
                right: {
                    title: "Purchase History",
                },
            },
        },
        role: ["USER"],
    },
    {
        path: "/404",
        component: lazy(() => import("../pages/error-pages/page-not-found")),
        style: {
            header: {
                withHeader: false,
            },
        },
        role: ["USER", "GUEST", "USER_BISNIS"],
    },
];

export default routeList;
